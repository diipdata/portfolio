/**
 * DIEGO // PORTFOLIO — Camada de animação (GSAP 3.13 + ScrollTrigger, SplitText, Flip)
 * Tudo aqui é opcional: sem GSAP ou com "reduzir movimento" ativo, o site
 * aparece no estado final, exatamente como sem este arquivo.
 */
(function () {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const release = () => root.classList.remove("motion-pending");

  if (reduceMotion || !window.gsap) {
    release();
    return;
  }

  gsap.registerPlugin(ScrollTrigger, SplitText, Flip);
  root.classList.add("motion-on");

  // Curvas e durações compartilhadas (mesma linguagem em todo o site)
  const EASE = "expo.out";
  const EASE_MOVE = "power3.inOut";

  document.addEventListener("DOMContentLoaded", () => {
    // Espera as fontes para dividir o texto em linhas certas, mas no máximo 1,2s
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const timeout = new Promise(resolve => setTimeout(resolve, 1200));
    Promise.race([fontsReady, timeout]).then(() => {
      heroIntro();
      sectionTitles();
      revealOnScroll();
      velocityMarquee();
    });
    filterFlip();
    modalMotion();
  });

  // Divide um título em linhas mascaradas; o próprio SplitText refaz no resize
  function splitLines(el, onSplit) {
    return SplitText.create(el, {
      type: "lines",
      mask: "lines",
      linesClass: "sline", // a máscara recebe a classe "sline-mask"
      autoSplit: true,
      onSplit
    });
  }

  // 1. Entrada do hero: linhas do título sobem da máscara, depois o resto em sequência
  function heroIntro() {
    const title = document.querySelector(".hero-title");
    const reelFrame = document.querySelector(".hero-reel-frame");
    const items = [
      ".hero-pill-wrapper",
      ".hero-subtitle",
      ".hero-actions",
      ".hero-reel-caption",
      ".hero-grid .metrics-strip"
    ].map(s => document.querySelector(s)).filter(Boolean);

    const tl = gsap.timeline({ defaults: { ease: EASE }, onComplete: () => split && split.revert() });
    let split = null;

    gsap.set(items, { autoAlpha: 0, y: 16 });
    if (reelFrame) gsap.set(reelFrame, { clipPath: "inset(100% 0% 0% 0%)" });
    release();

    tl.to(items[0], { autoAlpha: 1, y: 0, duration: 0.6 });

    if (title) {
      split = splitLines(title);
      tl.from(split.lines, { yPercent: 105, duration: 0.9, stagger: 0.08 }, "-=0.35");
    }

    tl.to(items.slice(1, 3), { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, "-=0.55");

    if (reelFrame) {
      tl.to(reelFrame, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "expo.inOut" }, 0.25);
    }

    tl.to(items.slice(3), { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.45");
  }

  // 3. Títulos de seção: mesmas linhas mascaradas, uma vez, ao entrar na tela
  function sectionTitles() {
    document.querySelectorAll(".section-title, .about-intro-title, .contact-title").forEach(el => {
      splitLines(el, self =>
        gsap.from(self.lines, {
          yPercent: 105,
          duration: 0.9,
          stagger: 0.08,
          ease: EASE,
          scrollTrigger: { trigger: el, start: "top 85%", once: true }
        })
      );
    });
  }

  // 4. Cards e etapas do processo surgem em lote, com deslocamento curto
  function revealOnScroll() {
    const batch = (selector) => {
      const els = gsap.utils.toArray(selector);
      if (!els.length) return;
      gsap.set(els, { autoAlpha: 0, y: 24 });
      ScrollTrigger.batch(els, {
        start: "top 88%",
        once: true,
        onEnter: group => gsap.to(group, {
          autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08, ease: EASE, overwrite: true,
          clearProps: "transform"
        })
      });
    };
    batch(".project-card");
    batch(".process-card");
  }

  // 2. Filtros: cards deslizam para a nova posição em vez de sumir e reaparecer
  function filterFlip() {
    let state = null;
    document.addEventListener("portfolio:beforefilter", () => {
      state = Flip.getState(".project-card");
    });
    document.addEventListener("portfolio:afterfilter", () => {
      if (!state) return;
      const cards = gsap.utils.toArray(".project-card");
      gsap.set(cards, { autoAlpha: 1, y: 0 });
      // Sem "absolute": os cards antigos já saíram do DOM, então a grade nova é o layout final
      // e o Flip só anima a transformação de onde cada card estava até onde está agora
      Flip.from(state, {
        targets: cards,
        duration: 0.6,
        ease: EASE_MOVE,
        stagger: 0.03,
        onEnter: els => gsap.fromTo(els, { autoAlpha: 0, scale: 0.96 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: EASE, delay: 0.15 })
      });
      state = null;
    });
  }

  // 5. Faixa de clientes: acelera com a velocidade da rolagem e volta ao ritmo normal
  function velocityMarquee() {
    const track = document.querySelector(".marquee-track-reverse");
    if (!track) return;
    track.classList.add("is-gsap");

    const loop = gsap.fromTo(track, { xPercent: -50 }, { xPercent: 0, duration: 40, ease: "none", repeat: -1 });
    const boost = gsap.quickTo(loop, "timeScale", { duration: 0.4, ease: "power2.out" });
    let settle;

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: self => {
        boost(1 + Math.min(Math.abs(self.getVelocity()) / 350, 5));
        clearTimeout(settle);
        settle = setTimeout(() => boost(1), 120);
      }
    });

    // Pausa a faixa quando não está visível
    ScrollTrigger.create({
      trigger: track,
      start: "top bottom",
      end: "bottom top",
      onToggle: self => (self.isActive ? loop.resume() : loop.pause())
    });
  }

  // 6. Modal: entrada curta do painel e troca de projeto com deslize lateral
  function modalMotion() {
    const container = document.querySelector("#projectModal .modal-container");
    if (!container) return;

    document.addEventListener("portfolio:modalopen", () => {
      const details = container.querySelectorAll(".modal-switcher, .modal-details-area > *");
      gsap.timeline({ defaults: { ease: EASE } })
        .fromTo(container, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55, clearProps: "transform" })
        .from(details, { y: 12, autoAlpha: 0, duration: 0.5, stagger: 0.06, clearProps: "all" }, "-=0.3");
    });

    document.addEventListener("portfolio:modalchange", e => {
      const dir = (e.detail && e.detail.direction) || 1;
      const body = container.querySelector(".modal-body");
      gsap.fromTo([container.querySelector(".modal-header-info"), body],
        { x: 24 * dir, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.45, ease: EASE, stagger: 0.04, clearProps: "transform" });
    });
  }
})();
