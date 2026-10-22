(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const root = document.documentElement;
  const phones = [...document.querySelectorAll('.showcase-image')];
  const showcase = document.querySelector('.showcase-images_wrapper');
  const progress = document.createElement('div');
  progress.className = 'rd-reading-progress';progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);
  const reveals = [...document.querySelectorAll('.lower-reveal')];
  document.querySelectorAll('.rd-case-grid, .rd-process-grid').forEach(group => {
    [...group.children].forEach((item, index) => item.style.setProperty('--rd-delay', `${index % (group.classList.contains('rd-case-grid') ? 2 : 3) * 75}ms`));
  });
  document.querySelectorAll('.rd-tech-list span').forEach((chip, index) => chip.style.setProperty('--chip-delay', `${index * 45}ms`));
  if ('IntersectionObserver' in window) {
    if (!reduced.matches) root.classList.add('lower-enhanced');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');observer.unobserve(entry.target);
    }
    }, { threshold: .06, rootMargin: '0px 0px -18px 0px' });
    reveals.forEach(element => observer.observe(element));
  }
  document.addEventListener('focusin', event => {
    const reveal = event.target.closest('.lower-reveal');
    if (reveal) reveal.classList.add('is-visible');
  });
  let scrollFrame = 0;
  function updateScroll() {
    scrollFrame = 0;
    const distance = root.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${distance > 0 ? scrollY / distance : 0})`;
    if (showcase && !reduced.matches) {
      const rect = showcase.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < innerHeight) {
        const amount = Math.max(-1, Math.min(1, (innerHeight / 2 - rect.top - rect.height / 2) / innerHeight));
        phones.forEach((phone, index) => phone.style.setProperty('--showcase-shift', `${amount * [16, -12, 22, -12, 16][index]}px`));
      }
    }
  }
  addEventListener('scroll', () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
  }, { passive: true });
  addEventListener('resize', updateScroll, { passive: true });
  updateScroll();

  const interactive = [...document.querySelectorAll('.rd-case-art, .rd-button')];
  interactive.forEach(element => {
    let rect;
    element.addEventListener('pointerenter', () => { rect = element.getBoundingClientRect(); });
    element.addEventListener('pointermove', event => {
      if (reduced.matches || !finePointer.matches || !rect) return;
      const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
      element.style.setProperty('--pointer-x', `${x * (element.classList.contains('rd-button') ? 3 : 7)}px`);
      element.style.setProperty('--pointer-y', `${y * (element.classList.contains('rd-button') ? 3 : 5)}px`);
      element.style.setProperty('--phone-rotate', `${-3 + x * 2}deg`);
    }, { passive: true });
    const reset = () => {
      rect = null;
      ['--pointer-x', '--pointer-y', '--phone-rotate'].forEach(property => element.style.removeProperty(property));
    };
    element.addEventListener('pointerleave', reset);
    element.addEventListener('pointercancel', reset);
  });
  reduced.addEventListener('change', () => {
    root.classList.toggle('lower-enhanced', !reduced.matches);
    if (reduced.matches) {
      phones.forEach(phone => phone.style.removeProperty('--showcase-shift'));
      interactive.forEach(element => ['--pointer-x', '--pointer-y', '--phone-rotate'].forEach(property => element.style.removeProperty(property)));
    }
  });
})();
