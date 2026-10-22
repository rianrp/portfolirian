/* Original local interaction layer; no third-party application or tracking scripts. */
(() => {
  const cards = document.querySelectorAll('.project-card');
  function measure() {
    for (const card of cards) {
      const image = card.querySelector('.project-image');
      const frame = card.querySelector('.project-image-wrapper');
      const distance = Math.max(0, image.getBoundingClientRect().height - frame.clientHeight);
      card.style.setProperty('--project-travel', `${-distance}px`);
    }
  }
  for (const card of cards) card.querySelector('img').addEventListener('load', measure);
  new ResizeObserver(measure).observe(document.documentElement);
  measure();
})();
