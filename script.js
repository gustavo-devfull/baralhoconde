class Component extends DCLogic {
  state = { cardOpen: false };
  componentDidMount() {
    this._esc = (e) => { if (e.key === 'Escape') this.setState({ cardOpen: false }); };
    window.addEventListener('keydown', this._esc);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const go = () => this.setupMotion();
    if (window.Motion) { go(); return; }
    let sc = document.querySelector('script[data-motion]');
    if (!sc) {
      sc = document.createElement('script');
      sc.src = (window.__resources && window.__resources.motionJs) || 'https://cdn.jsdelivr.net/npm/motion@11.11.17/dist/motion.min.js';
      sc.setAttribute('data-motion', '1');
      document.head.appendChild(sc);
    }
    sc.addEventListener('load', go);
  }

  setupMotion() {
    const M = window.Motion;
    if (!M || this._motionDone) return;
    this._motionDone = true;
    const { animate, inView } = M;

    const pool = Array.from(document.querySelectorAll(
      'section h1, section h2, section p, section img, section a[href], [data-reveal], footer nav, footer a'
    ));
    const targets = pool.filter(el => !pool.some(o => o !== el && o.contains(el)));

    const bySection = new Map();
    targets.forEach(el => {
      const key = el.closest('section, footer') || document.body;
      if (!bySection.has(key)) bySection.set(key, []);
      bySection.get(key).push(el);
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.willChange = 'opacity, transform';
    });

    const reveal = (el, delay) => animate(el,
      { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0px)'] },
      { duration: 0.75, delay, easing: [0.16, 1, 0.3, 1] }
    );

    const hero = document.querySelector('section');
    bySection.forEach((els, sec) => {
      els.forEach((el, i) => {
        const delay = Math.min(i * 0.09, 0.6);
        if (sec === hero) { reveal(el, 0.12 + delay); return; }
        inView(el, () => { reveal(el, delay * 0.5); }, { margin: '0px 0px -12% 0px' });
      });
    });

    document.querySelectorAll('[data-reveal]').forEach(tile => {
      tile.addEventListener('mouseenter', () => animate(tile, { scale: 1.025 }, { duration: 0.35 }));
      tile.addEventListener('mouseleave', () => animate(tile, { scale: 1 }, { duration: 0.35 }));
    });
    document.querySelectorAll('a[href^="#"]').forEach(b => {
      if (!/999px/.test(b.getAttribute('style') || '')) return;
      b.addEventListener('mouseenter', () => animate(b, { y: -2 }, { duration: 0.25 }));
      b.addEventListener('mouseleave', () => animate(b, { y: 0 }, { duration: 0.25 }));
    });
  }

  renderVals() {
    return {
      showRaviBar: this.props.showRaviBar ?? true,
      cardOpen: !!this.state.cardOpen,
      openCard: (e) => { if (e) e.preventDefault(); this.setState({ cardOpen: true }); },
      closeCard: (e) => { if (e) e.preventDefault(); this.setState({ cardOpen: false }); }
    };
  }
}