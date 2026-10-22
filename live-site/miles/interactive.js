import * as THREE from 'three';
import { GLTFLoader } from './vendor/loaders/GLTFLoader.js';

const stage = document.querySelector('.miles-interactive');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const pointer = new THREE.Vector2();
const look = new THREE.Vector2();
const clock = new THREE.Clock();
const shots = [];
const svgNS = 'http://www.w3.org/2000/svg';
let renderer, scene, camera, character, head, neck;
let arms = {}, rests = new Map(), shooting = null;
let frame = 0, visible = true, loaded = false;
let hoverReaction = null, focusReaction = null, activeReaction = null, reactionStarted = 0;
const reactions = { projects: 0, resume: 0, contact: 0 };

const web = document.createElementNS(svgNS, 'svg');
web.classList.add('miles-web-layer');
web.setAttribute('aria-hidden', 'true');
document.body.append(web);

function resize() {
  if (!renderer) return;
  const w = stage.clientWidth * 3, h = stage.clientHeight * 1.5;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  web.setAttribute('viewBox', `0 0 ${innerWidth} ${innerHeight}`);
}

function remember(bone) {
  if (bone && !rests.has(bone)) rests.set(bone, bone.quaternion.clone());
  return bone;
}

function orientWorld(bone, from, to) {
  if (from.lengthSq() < 1e-10 || to.lengthSq() < 1e-10) return;
  const delta = new THREE.Quaternion().setFromUnitVectors(from.normalize(), to.normalize());
  const parent = bone.parent.getWorldQuaternion(new THREE.Quaternion());
  const world = bone.getWorldQuaternion(new THREE.Quaternion());
  bone.quaternion.copy(parent.invert().multiply(delta).multiply(world));
  character.updateMatrixWorld(true);
}

// CCD works with the imported rig's own bone axes and proportions.
function aim(arm, target, strength, webGesture = true) {
  if (!arm?.hand || !arm.upper || !arm.fore) return;
  const desired = target.clone();
  const shoulder = arm.upper.getWorldPosition(new THREE.Vector3());
  const elbow = arm.fore.getWorldPosition(new THREE.Vector3());
  const wrist = arm.hand.getWorldPosition(new THREE.Vector3());
  const reach = shoulder.distanceTo(elbow) + elbow.distanceTo(wrist);
  desired.sub(shoulder).clampLength(reach * .55, reach * .96).add(shoulder);
  const originals = [arm.upper.quaternion.clone(), arm.fore.quaternion.clone()];
  for (let i = 0; i < 5; i++) {
    for (const bone of [arm.fore, arm.upper]) {
      const origin = bone.getWorldPosition(new THREE.Vector3());
      const current = arm.hand.getWorldPosition(new THREE.Vector3()).sub(origin);
      orientWorld(bone, current, desired.clone().sub(origin));
    }
  }
  [arm.upper, arm.fore].forEach((bone, i) => bone.quaternion.slerpQuaternions(originals[i], bone.quaternion.clone(), strength));
  // Middle and ring fingers fold inward into the web-shooting gesture.
  if (webGesture) for (const finger of arm.fingers) finger.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), 1.15 * strength));
  character.updateMatrixWorld(true);
}

function rotateWorld(bone, quaternion) {
  const parent = bone.parent.getWorldQuaternion(new THREE.Quaternion());
  const world = bone.getWorldQuaternion(new THREE.Quaternion());
  bone.quaternion.copy(parent.invert().multiply(quaternion).multiply(world));
  character.updateMatrixWorld(true);
}

function gestureHand(arm, kind, strength, time) {
  if (!arm?.hand || !arm.middle || !arm.index || !arm.pinky || !arm.thumb || !arm.thumbTip) return;
  const before = arm.hand.quaternion.clone();
  for (const finger of arm.fullFingers) {
    const joint = /(?:Index|Middle|Ring|Pinky)(\d)/.exec(finger.name)?.[1];
    const curl = kind === 'thumb' ? ({ 1: 1.45, 2: 1.65, 3: 1.05 }[joint] || 0) : .04;
    finger.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), curl * strength));
  }
  character.updateMatrixWorld(true);
  const position = bone => bone.getWorldPosition(new THREE.Vector3());
  const currentUp = kind === 'thumb'
    ? position(arm.thumbTip).sub(position(arm.thumb))
    : position(arm.middle).sub(position(arm.hand));
  const up = new THREE.Vector3(0, 1, 0);
  orientWorld(arm.hand, currentUp, up.clone());
  // Face the palm toward the visitor; then rock the wrist for a friendly wave.
  const wrist = position(arm.hand);
  const normal = position(arm.index).sub(wrist).cross(position(arm.pinky).sub(wrist)).normalize();
  normal.projectOnPlane(up).normalize();
  const facing = new THREE.Vector3(0, 0, arm.side === 'left' ? -1 : 1);
  const angle = Math.atan2(up.dot(normal.clone().cross(facing)), normal.dot(facing));
  rotateWorld(arm.hand, new THREE.Quaternion().setFromAxisAngle(up, angle));
  if (kind === 'wave') rotateWorld(arm.hand, new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), reduce.matches ? 0 : Math.sin(time * 7) * .3));
  arm.hand.quaternion.slerpQuaternions(before, arm.hand.quaternion.clone(), strength);
  character.updateMatrixWorld(true);
}

function updateReactions(now, dt) {
  const wanted = hoverReaction || focusReaction;
  if (wanted !== activeReaction) { activeReaction = wanted;reactionStarted = now; }
  for (const name of Object.keys(reactions)) {
    const target = !shooting && name === wanted ? 1 : 0;
    reactions[name] = THREE.MathUtils.damp(reactions[name], target, reduce.matches ? 30 : 8, dt);
  }
  stage.dataset.reaction = wanted || 'idle';
}

function applyReactions(now) {
  if (shooting) { character.rotation.z = 0;character.position.y = 0;return; }
  const time = (now - reactionStarted) / 1000;
  const nodPhase = time % 2.4;
  const nod = reduce.matches ? .1 : nodPhase < 1.15 ? Math.sin(nodPhase / 1.15 * Math.PI * 4) * .2 : 0;
  const happy = reactions.contact;
  head?.quaternion.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(nod * reactions.projects, 0, -.12 * happy, 'YXZ')));
  neck?.quaternion.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(nod * reactions.projects * .3, 0, -.035 * happy, 'YXZ')));
  character.rotation.z = happy * -.035;
  character.position.y = reduce.matches ? 0 : .004 * Math.sin(now / 650) + happy * .008 * Math.sin(time * 5);
  character.updateMatrixWorld(true);
  if (reactions.resume > .002) {
    aim(arms.left, new THREE.Vector3(.42, 1.45, .55), reactions.resume, false);
    gestureHand(arms.left, 'thumb', reactions.resume, time);
  }
  if (happy > .002) {
    aim(arms.left, new THREE.Vector3(.57 + (reduce.matches ? 0 : Math.sin(time * 3.5) * .035), 1.95, .35), happy, false);
    gestureHand(arms.left, 'wave', happy, time);
  }
}

function screenToWorld(x, y) {
  const box = renderer.domElement.getBoundingClientRect();
  const ndc = new THREE.Vector3((x - box.left) / box.width * 2 - 1, -(y - box.top) / box.height * 2 + 1, .5);
  ndc.unproject(camera);
  const direction = ndc.sub(camera.position).normalize();
  const distance = (.35 - camera.position.z) / direction.z;
  return camera.position.clone().addScaledVector(direction, distance);
}

function handOnScreen(arm) {
  const p = arm.hand.getWorldPosition(new THREE.Vector3()).project(camera);
  const box = renderer.domElement.getBoundingClientRect();
  return { x: box.left + (p.x + 1) / 2 * box.width, y: box.top + (1 - p.y) / 2 * box.height };
}

function shoot(x, y) {
  if (!loaded || !visible || document.hidden) return;
  const box = stage.getBoundingClientRect();
  const arm = x < box.left + box.width / 2 ? arms.right : arms.left;
  if (!arm?.hand) return;
  const target = screenToWorld(x, y);
  shooting = { start: performance.now(), arm, target };
  const group = document.createElementNS(svgNS, 'g');
  group.classList.add('miles-web-shot');
  for (let i = 0; i < 4; i++) group.append(document.createElementNS(svgNS, 'path'));
  const impact = document.createElementNS(svgNS, 'path');
  impact.classList.add('miles-web-impact');group.append(impact);
  web.append(group);
  shots.push({ start: performance.now(), end: { x, y }, arm, group, origin: null });
  if (shots.length > 6) shots.shift().group.remove();
  start();
}

function drawWeb(now) {
  for (let i = shots.length - 1; i >= 0; i--) {
    const shot = shots[i], age = now - shot.start;
    if (age > 1350) { shot.group.remove(); shots.splice(i, 1); continue; }
    // The thread emerges from the animated wrist, then remains attached to the click.
    if (age < 170 || !shot.origin) shot.origin = handOnScreen(shot.arm);
    const a = shot.origin, end = shot.end;
    const t = Math.min(1, age / (reduce.matches ? 40 : 190));
    const b = { x: a.x + (end.x - a.x) * t, y: a.y + (end.y - a.y) * t };
    const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len, ny = dx / len;
    const strands = Array.from(shot.group.children).slice(0, 4);
    strands.forEach((path, index) => {
      let d = `M ${a.x} ${a.y}`;
      for (let j = 1; j <= 16; j++) {
        const u = j / 16;
        const sway = Math.sin(u * Math.PI * (index + 3) + age / 85) * Math.sin(u * Math.PI) * (index + 1) * (1 - t * .65);
        d += ` L ${a.x + dx * u + nx * sway} ${a.y + dy * u + ny * sway}`;
      }
      path.setAttribute('d', d);
    });
    let impact = '';
    if (t === 1) {
      const radius = reduce.matches ? 18 : Math.min(26, (age - 190) / 5);
      for (let j = 0; j < 7; j++) {
        const angle = j / 7 * Math.PI * 2;
        impact += `M ${end.x} ${end.y} l ${Math.cos(angle) * radius} ${Math.sin(angle) * radius} `;
      }
      for (const scale of [.45, .8]) {
        for (let j = 0; j <= 7; j++) {
          const angle = j / 7 * Math.PI * 2;
          impact += `${j ? 'L' : 'M'} ${end.x + Math.cos(angle) * radius * scale} ${end.y + Math.sin(angle) * radius * scale} `;
        }
      }
    }
    shot.group.lastChild.setAttribute('d', impact);
    shot.group.style.opacity = String(Math.min(1, (1350 - age) / 350));
  }
}

function tick(now) {
  frame = 0;
  if (!loaded || !visible || document.hidden) return;
  const dt = Math.min(clock.getDelta(), .05);
  updateReactions(now, dt);
  look.lerp(pointer, reduce.matches ? 1 : 1 - Math.exp(-dt * 8));
  const follow = 1 - reactions.contact * .65 - reactions.resume * .35;
  character.rotation.y = look.x * .27 * follow;
  character.rotation.x = look.y * .035;
  for (const [bone, rest] of rests) bone.quaternion.copy(rest);
  head?.quaternion.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(look.y * .18 * follow, look.x * .3 * follow, 0, 'YXZ')));
  neck?.quaternion.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(look.y * .05, look.x * .08, 0, 'YXZ')));
  scene.updateMatrixWorld(true);
  applyReactions(now);
  if (shooting) {
    const age = now - shooting.start;
    const strength = Math.min(1, age / 110) * Math.max(0, Math.min(1, (850 - age) / 330));
    aim(shooting.arm, shooting.target, strength);
    if (age > 850) shooting = null;
  }
  renderer.render(scene, camera);
  drawWeb(now);
  frame = requestAnimationFrame(tick);
}

function start() {
  if (!frame && loaded && visible && !document.hidden) { clock.getDelta(); frame = requestAnimationFrame(tick); }
}

function clearWeb() {
  shots.forEach(shot => shot.group.remove()); shots.length = 0; shooting = null;
}

try {
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  stage.append(renderer.domElement);
  scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x687080, 3));
  const key = new THREE.DirectionalLight(0xffffff, 3);key.position.set(3, 4, 4);scene.add(key);
  const fill = new THREE.DirectionalLight(0xd8e2ff, 2);fill.position.set(-3, 2, 2);scene.add(fill);
  // Extra vertical room keeps raised hands in frame without changing the character's scale.
  const fov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(15)) * 1.5));
  camera = new THREE.PerspectiveCamera(fov, 1.6, .01, 100);
  camera.position.set(0, 1.4, 2.7);camera.lookAt(0, 1.4, 0);
  resize();new ResizeObserver(resize).observe(stage);
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (visible) start(); else { cancelAnimationFrame(frame);frame = 0;clearWeb(); }
  }).observe(stage);
  new GLTFLoader().load('/miles/miles.glb', gltf => {
    const model = gltf.scene, duplicates = [];
    model.traverse(o => { if (gltf.parser.associations.get(o)?.nodes === 3) duplicates.push(o); });
    duplicates.forEach(o => o.removeFromParent());
    const bounds = new THREE.Box3().setFromObject(model), size = bounds.getSize(new THREE.Vector3()), center = bounds.getCenter(new THREE.Vector3());
    model.scale.setScalar(2 / size.y);
    model.position.set(-center.x * model.scale.x, -bounds.min.y * model.scale.x, -center.z * model.scale.x);
    character = new THREE.Group();character.add(model);scene.add(character);
    const bones = [];
    model.traverse(o => { if (o.isBone) bones.push(o); });
    const bone = name => remember(bones.find(b => b.name.includes(name)));
    head = bone('Head_');neck = bone('Neck_');
    for (const [side, name] of [['left', 'Left'], ['right', 'Right']]) {
      arms[side] = {
        side,
        upper: bone(`${name}Arm_`), fore: bone(`${name}ForeArm_`), hand: bone(`${name}Hand_`),
        middle: bone(`${name}HandMiddle1_`), index: bone(`${name}HandIndex1_`), pinky: bone(`${name}HandPinky1_`),
        thumb: bone(`${name}HandThumb1_`), thumbTip: bone(`${name}HandThumb2_`),
        fingers: bones.filter(b => b.name.includes(`${name}HandMiddle`) || b.name.includes(`${name}HandRing`)).filter(b=>!b.name.includes('4_')).map(remember),
        fullFingers: bones.filter(b => ['Index', 'Middle', 'Ring', 'Pinky'].some(f => b.name.includes(`${name}Hand${f}`))).filter(b=>!b.name.includes('4_')).map(remember),
      };
    }
    loaded = true;stage.dataset.state = 'ready';stage.classList.add('miles-ready');start();
  }, undefined, () => { stage.dataset.state = 'fallback';renderer.dispose();renderer.domElement.remove(); });
  renderer.domElement.addEventListener('webglcontextlost', event => {
    event.preventDefault();loaded = false;cancelAnimationFrame(frame);frame = 0;clearWeb();stage.classList.remove('miles-ready');stage.dataset.state = 'fallback';
  });
} catch {
  stage.dataset.state = 'fallback';
}

addEventListener('pointermove', event => {
  const box = stage.getBoundingClientRect();
  pointer.set(THREE.MathUtils.clamp((event.clientX - box.left - box.width / 2) / (innerWidth * .4), -1, 1), THREE.MathUtils.clamp((event.clientY - box.top - box.height * .25) / (innerHeight * .55), -1, 1));
}, { passive: true });
addEventListener('pointerdown', event => {
  if (event.button !== 0) return;
  const control = event.target.closest('a,button,input,textarea,select,summary');
  if (control && control !== stage) return;
  shoot(event.clientX, event.clientY);
}, { passive: true });
stage.addEventListener('keydown', event => {
  if (event.key !== ' ' && event.key !== 'Enter') return;
  event.preventDefault();const box = stage.getBoundingClientRect();shoot(box.right + 100, box.top + 70);
});
stage.addEventListener('pointerdown', event => {
  if (event.pointerType === 'mouse') {
    // Keep a partially visible hero from jumping when its character receives focus.
    event.preventDefault();stage.focus({ preventScroll: true });
  }
});
document.documentElement.addEventListener('pointerleave', () => pointer.set(0, 0));
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { cancelAnimationFrame(frame);frame = 0;clearWeb(); } else start();
});
addEventListener('scroll', clearWeb, { passive: true });
addEventListener('resize', () => { clearWeb();resize(); }, { passive: true });

// Hover and keyboard focus share the same reactions, without intercepting navigation.
for (const [selector, reaction] of [
  ['.secion-hero a[href="#work"], .project-card', 'projects'],
  ['a[href$="curriculo-rian-rodrigues.pdf"], a[href$="rian-rodrigues-resume.pdf"]', 'resume'],
  ['a[href^="mailto:"]', 'contact'],
]) {
  document.querySelectorAll(selector).forEach(control => {
    control.addEventListener('pointerenter', () => { hoverReaction = reaction;start(); });
    control.addEventListener('pointerleave', () => { if (hoverReaction === reaction) hoverReaction = null; });
    control.addEventListener('focusin', () => { focusReaction = reaction;start(); });
    control.addEventListener('focusout', () => { if (focusReaction === reaction) focusReaction = null; });
  });
}
document.documentElement.addEventListener('pointerleave', () => { hoverReaction = null; });
