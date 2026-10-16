/**
 * DIEGO // PORTFOLIO DESIGNER & MOTION - UI/UX PRO MAX
 * Engine de Interatividade, Audio Sintetizado, Spotlight Dinamico & 3D Tilt
 */

// Projetos do Portfolio
const portfolioProjects = [
  {
    id: "verissimo",
    title: "Veríssimo | Campanha High-Impact",
    client: "Veríssimo",
    category: "motion",
    categoryLabel: "Motion & Reels",
    formatBadge: "9:16 Vertical",
    aspectRatioClass: "ratio-9-16",
    coverImage: "data/Veríssimo/Verissiomo_1_Final-Cover.jpg",
    primaryVideo: "data/Veríssimo/Verissiomo_1_Final.mp4",
    shortDesc: "Motion design de alto impacto desenvolvido para mídias sociais verticais (Reels/Stories), combinando tipografia cinética, ritmo acelerado e retenção máxima.",
    fullDesc: "Produção de motion graphics de alto impacto visual formatada exclusivamente para o ecossistema vertical. O projeto alia tipografia cinética arrojada, sincronização rítmica marcante e animação de assets que capturam a atenção nos primeiros segundos, elevando a percepção de valor da marca.",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    tags: ["Motion Design", "Reels 9:16", "Tipografia Cinética", "Social Ads"],
    mediaItems: [
      { type: "video", title: "Vídeo Final (Reel)", src: "data/Veríssimo/Verissiomo_1_Final.mp4", poster: "data/Veríssimo/Verissiomo_1_Final-Cover.jpg" },
      { type: "image", title: "Capa do Reel", src: "data/Veríssimo/Verissiomo_1_Final-Cover.jpg" }
    ]
  },
  {
    id: "imobiliario",
    title: "Campanhas Imobiliárias Premium",
    client: "Lançamentos & Incorporadoras",
    category: "imobiliario",
    categoryLabel: "Imobiliário & Vídeo",
    formatBadge: "16:9 + Case Behance",
    aspectRatioClass: "ratio-16-9",
    coverImage: "data/Imobiliário/Capa%20behance/capa_fin.png",
    primaryVideo: "data/Imobiliário/MADAI%20Final.mp4",
    shortDesc: "Série audiovisual e apresentação de lançamentos imobiliários de alto padrão, integrando motion tracking, cartelas personalizadas e edição focada em conversão.",
    fullDesc: "Desenvolvimento audiovisual e identidade visual de campanhas para empreendimentos de destaque (MADAI, Top Mooca, Anne Metropolitan, Vilma Constantino e Zona Sul). O projeto abrange montagem rítmica, color grading sofisticado, motion tracking e pranchas completas estruturadas para o Behance.",
    tools: ["Premiere Pro", "After Effects", "CapCut Pro", "Photoshop"],
    tags: ["Imobiliário", "Motion Tracking", "Color Grading", "Edição Comercial", "Behance Case"],
    mediaItems: [
      { type: "video", title: "Filme: MADAI", src: "data/Imobiliário/MADAI%20Final.mp4" },
      { type: "video", title: "Filme: Top Mooca", src: "data/Imobiliário/Top%20Mooca.mp4" },
      { type: "video", title: "Filme: Anne Metropolitan", src: "data/Imobiliário/Anne_Metropolitan.mp4" },
      { type: "video", title: "Filme: Constantino", src: "data/Imobiliário/Vilma%20-%20Constantino.mp4" },
      { type: "video", title: "Filme: Zona Sul", src: "data/Imobiliário/ZS_Diego01.mp4" },
      { type: "image", title: "Prancha Behance: Capa Principal", src: "data/Imobiliário/Capa%20behance/capa_fin.png" },
      { type: "image", title: "Prancha Behance: 1 Metropolitan", src: "data/Imobiliário/Capa%20behance/1_metropolitan.png" },
      { type: "image", title: "Prancha Behance: 2 Top Mooca", src: "data/Imobiliário/Capa%20behance/2_top_mooca.png" },
      { type: "image", title: "Prancha Behance: 3 Constantino", src: "data/Imobiliário/Capa%20behance/3_constantino.png" },
      { type: "image", title: "Prancha Behance: 4 Top Mooca", src: "data/Imobiliário/Capa%20behance/4_top_mooca.png" },
      { type: "image", title: "Prancha Behance: 5 TEE Marajoara", src: "data/Imobiliário/Capa%20behance/5_tee_marajoara.png" },
      { type: "image", title: "Créditos e Finalização", src: "data/Imobiliário/Capa%20behance/Credito_Final.png" }
    ]
  },
  {
    id: "ibyte",
    title: "Ibyte | Cartelado Promocional Tech",
    client: "Ibyte Tecnologia",
    category: "comercial",
    categoryLabel: "Comercial & Varejo",
    formatBadge: "16:9 Motion",
    aspectRatioClass: "ratio-16-9",
    coverImage: "data/Imobiliário/Capa%20behance/ESTRUTURA_BEHANCE.png",
    primaryVideo: "data/Ibyte/CARTELADO%20IBYTE%20FINAL.mp4",
    shortDesc: "Animação promocional de alta energia para o varejo de tecnologia, sincronizando apresentação de produtos, preços dinâmicos e sound design impactante.",
    fullDesc: "Criação de cartelado dinâmico e vinhetas comerciais para a rede Ibyte. Com animações vetoriais ágeis, transições pontuais e tratamento de destaques para promoções sazonais, otimizado para telões de PDV e redes sociais.",
    tools: ["After Effects", "Premiere Pro", "Illustrator"],
    tags: ["Varejo Tech", "Cartelado Comercial", "Animação de Produtos", "Promo Ads"],
    mediaItems: [
      { type: "video", title: "Cartelado Completo", src: "data/Ibyte/CARTELADO%20IBYTE%20FINAL.mp4" }
    ]
  },
  {
    id: "emape",
    title: "Emape | Filmes Institucionais & Campanhas",
    client: "Emape",
    category: "institucional",
    categoryLabel: "Branding & Institucional",
    formatBadge: "Trilogia de Filmes",
    aspectRatioClass: "ratio-16-9",
    coverImage: "data/IPM%20social/Frames/Frames_1%20-%20Photo.jpg",
    primaryVideo: "data/Emape/Institucional1_v2.mp4",
    shortDesc: "Trilogia audiovisual institucional e temática, unindo narrativa sensível, montagem rítmica e ambientação cinematográfica para fortalecer a marca.",
    fullDesc: "Série audiovisual corporativa e comemorativa criada para a Emape: 1) Filme Institucional sobre os valores da organização; 2) Campanha de Dia dos Namorados focada em afeto e humanização; 3) Peça criativa 'Pão com Ovo' com dinâmica comercial e acolhedora.",
    tools: ["Premiere Pro", "After Effects", "Sound Design"],
    tags: ["Institucional", "Storytelling", "Campanha Sazonal", "Edição & Ritmo"],
    mediaItems: [
      { type: "video", title: "Filme Institucional", src: "data/Emape/Institucional1_v2.mp4" },
      { type: "video", title: "Especial Dia dos Namorados", src: "data/Emape/Namorados_v2.mp4" },
      { type: "video", title: "Campanha: Pão com Ovo", src: "data/Emape/P%C3%A3o%20com%20Ovo_v2.mp4" }
    ]
  },
  {
    id: "ipm-social",
    title: "IPM Social | Documentário & Direção Fotográfica",
    client: "IPM Impacto Social",
    category: "social",
    categoryLabel: "Impacto Social & Direção",
    formatBadge: "Vídeo + Galeria Fotográfica",
    aspectRatioClass: "ratio-16-9",
    coverImage: "data/IPM%20social/Frames/Frames_3%20-%20Photo.jpg",
    primaryVideo: "data/IPM%20social/projeto.mp4",
    shortDesc: "Produção audiovisual de forte carga emocional documentando projetos sociais, acompanhada por uma série fotográfica com composição sensível e cores cinematográficas.",
    fullDesc: "Projeto completo de registro audiovisual e direção fotográfica para o IPM Social. Documenta a força de projetos comunitários, conectando o público através de entrevistas autênticas, cortes emotivos e uma refinada seleção de retratos e stills em alta resolução.",
    tools: ["Premiere Pro", "Photoshop", "Lightroom"],
    tags: ["Documentário", "Impacto Social", "Direção de Fotografia", "Stills de Cena"],
    mediaItems: [
      { type: "video", title: "Documentário Principal", src: "data/IPM%20social/projeto.mp4" },
      { type: "image", title: "Frame 01 - Retrato e Expressão", src: "data/IPM%20social/Frames/Frames_1%20-%20Photo.jpg" },
      { type: "image", title: "Frame 02 - Cotidiano e Comunidade", src: "data/IPM%20social/Frames/Frames_2%20-%20Photo.jpg" },
      { type: "image", title: "Frame 03 - Conexão e Cuidado", src: "data/IPM%20social/Frames/Frames_3%20-%20Photo.jpg" },
      { type: "image", title: "Frame 04 - Esperança em Ação", src: "data/IPM%20social/Frames/Frames_4%20-%20Photo.jpg" },
      { type: "image", title: "Frame 05 - Protagonismo", src: "data/IPM%20social/Frames/Frames_5%20-%20Photo.jpg" },
      { type: "image", title: "Frame 06 - Afeto Coletivo", src: "data/IPM%20social/Frames/Frames_6%20-%20Photo.jpg" },
      { type: "image", title: "Frame 07 - Encerramento e Legado", src: "data/IPM%20social/Frames/Frames_7%20-%20Photo.jpg" }
    ]
  },
  {
    id: "alidenca",
    title: "Alidença | Vinheta & Motion Branding",
    client: "Alidença",
    category: "motion",
    categoryLabel: "Motion & Identidade",
    formatBadge: "16:9 2D Motion",
    aspectRatioClass: "ratio-16-9",
    coverImage: "data/Imobiliário/Capa%20behance/modern-business-building-scenery-touching-sky.jpg",
    primaryVideo: "data/Alidença/0Final.mp4",
    shortDesc: "Animação de marca e vinheta com fluidez geométrica e precisão milimétrica de curvas de aceleração, destacando solidez e sofisticação.",
    fullDesc: "Identidade visual em movimento desenvolvida para a marca Alidença. Explora a desconstrução e reconstrução da marca com geometria limpa, animação suave de curvas de velocidade (easing) e timing sonoro calibrado.",
    tools: ["After Effects", "Illustrator"],
    tags: ["Logo Animation", "Motion Branding", "Vinheta 2D", "Identidade Visual"],
    mediaItems: [
      { type: "video", title: "Animação Final", src: "data/Alidença/0Final.mp4" }
    ]
  }
];

// Estado da Aplicacao
let currentFilter = "all";
let activeModalProjectIndex = 0;
let activeMediaIndex = 0;
let soundEnabled = false;
let audioCtx = null;
let lastFocusedBeforeModal = null;

// Preferencias do usuario / capacidades do dispositivo
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
const prefersReducedMotion = () => reducedMotionQuery.matches;
const canHover = () => finePointerQuery.matches;

const ICONS = {
  video: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 8l-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
  image: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/></svg>'
};

// Audio Sintetizado com Web Audio API
function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
}

function playUiSound(freq = 600, duration = 0.03, type = "sine") {
  if (!soundEnabled) return;
  initAudio();
  if (!audioCtx) return;

  try {
    if (audioCtx.state === "suspended") audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

// Inicializacao Principal
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupFilterTabs();
  setupModalEvents();
  setupProfileImageLoader();
  setupMobileNav();
  setupSmoothScroll();
  setupContactForm();
  setupMouseFollower();
  setupSpotlightTracker();
  setup3DTilt();
  setupNumberCounters();
  setupAudioToggle();
  setupToolPills();
  setupHeroShowreel();
  setupBackToTop();
  openProjectFromHash();
});

// Renderizacao dos Projetos com Spotlight e Scrub
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = currentFilter === "all" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === currentFilter);

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="projects-empty">Nenhum projeto nesta categoria ainda.</p>`;
    return;
  }

  filtered.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-id", project.id);
    card.id = `project-card-${project.id}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Abrir projeto: ${project.title}`);

    // Imagem de capa; o video de preview so e criado em dispositivos com hover
    const mediaMarkup = project.coverImage
      ? `<img class="card-media" src="${project.coverImage}" alt="" loading="lazy" decoding="async" />`
      : `<video class="card-media card-video-preview" src="${project.primaryVideo}" preload="metadata" muted playsinline loop aria-hidden="true"></video>`;

    const toolsMarkup = project.tools.map(t => `<span class="tool-tag">${t}</span>`).join("");

    card.innerHTML = `
      <div class="card-media-wrapper ${project.aspectRatioClass}">
        ${mediaMarkup}
        <div class="card-video-progress" aria-hidden="true"></div>
        <div class="card-badge-top">
          <span class="badge-tag">${project.categoryLabel}</span>
          <span class="badge-format">${project.formatBadge}</span>
        </div>
        <div class="media-overlay" aria-hidden="true">
          <div class="play-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.shortDesc}</p>
        <div class="card-footer">
          <div class="card-tools">
            ${toolsMarkup}
          </div>
          <span class="card-link-text" aria-hidden="true">
            Explorar
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    `;

    // Se a capa falhar, cai para o video
    const coverImg = card.querySelector("img.card-media");
    if (coverImg) {
      coverImg.addEventListener("error", () => {
        const fallback = document.createElement("video");
        fallback.className = "card-media card-video-preview";
        fallback.src = project.primaryVideo;
        fallback.preload = "metadata";
        fallback.muted = true;
        fallback.playsInline = true;
        fallback.loop = true;
        fallback.setAttribute("aria-hidden", "true");
        coverImg.replaceWith(fallback);
      }, { once: true });
    }

    // Preview de video no hover (apenas mouse e sem reduced-motion)
    if (canHover() && !prefersReducedMotion()) {
      setupCardPreview(card, project);
    }

    // Clique ou Enter/Espaco abre o modal
    const open = () => {
      playUiSound(950, 0.04);
      openProjectModal(project.id);
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });

    grid.appendChild(card);
  });
}

// Preview de video com barra de progresso, criado sob demanda no primeiro hover
function setupCardPreview(card, project) {
  const wrapper = card.querySelector(".card-media-wrapper");
  const progressBar = card.querySelector(".card-video-progress");

  const trackProgress = (video) => {
    if (video.dataset.tracked) return;
    video.dataset.tracked = "1";
    video.addEventListener("timeupdate", () => {
      if (progressBar && video.duration) {
        progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
      }
    });
  };

  // Usa o video existente (card sem capa) ou cria um sobreposto a capa
  const getVideo = () => {
    let video = card.querySelector(".card-video-preview");
    if (!video) {
      video = document.createElement("video");
      video.className = "card-media card-video-preview is-overlay";
      video.src = project.primaryVideo;
      video.preload = "none";
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.setAttribute("aria-hidden", "true");
      wrapper.insertBefore(video, progressBar);
    }
    trackProgress(video);
    return video;
  };

  card.addEventListener("mouseenter", () => {
    playUiSound(750, 0.02);
    const video = getVideo();
    video.currentTime = 0;
    video.play().then(() => video.classList.add("is-playing")).catch(() => {});
  });

  card.addEventListener("mouseleave", () => {
    const video = card.querySelector(".card-video-preview");
    if (!video) return;
    video.pause();
    video.classList.remove("is-playing");
    if (progressBar) progressBar.style.width = "0%";
  });
}

// Spotlight Mouse Tracker nos Cards (throttle por frame)
function setupSpotlightTracker() {
  if (!canHover()) return;
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  let frame = null;
  grid.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".project-card");
    if (!card || frame) return;
    frame = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
      frame = null;
    });
  });
}

// Mouse Follower Suave
function setupMouseFollower() {
  const follower = document.querySelector(".mouse-follower");
  if (!follower || !canHover() || prefersReducedMotion()) return;

  let frame = null;
  let x = 0;
  let y = 0;
  window.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      follower.style.transform = `translate(${x}px, ${y}px)`;
      frame = null;
    });
  }, { passive: true });
}

// 3D Tilt no Cartao da Foto de Perfil
function setup3DTilt() {
  const card = document.querySelector(".photo-card");
  if (!card || !canHover() || prefersReducedMotion()) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / (rect.height / 2)) * 8;
    const rotY = (x / (rect.width / 2)) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  });
}

// Contadores de Metricas Animados
function setupNumberCounters() {
  const strip = document.querySelector(".metrics-strip");
  if (!strip || prefersReducedMotion() || !("IntersectionObserver" in window)) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      const counters = document.querySelectorAll(".metric-number");
      counters.forEach(el => {
        const text = el.textContent.trim();
        const numMatch = text.match(/\d+/);
        if (numMatch) {
          const target = parseInt(numMatch[0]);
          const prefix = text.startsWith("+") ? "+" : "";
          const suffix = text.endsWith("%") ? "%" : text.endsWith("+") ? "+" : "";
          let current = 0;
          const step = Math.max(1, Math.floor(target / 30));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            el.textContent = `${prefix}${current}${suffix}`;
          }, 35);
        }
      });
    }
  }, { threshold: 0.3 });

  observer.observe(strip);
}

// Alternador de Som UI
function setupAudioToggle() {
  const btn = document.getElementById("audioToggleBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    btn.classList.toggle("sound-on", soundEnabled);
    btn.setAttribute("aria-pressed", String(soundEnabled));
    btn.title = soundEnabled ? "Som da interface: ativado" : "Som da interface: desativado";
    showToast(soundEnabled ? "Som da interface ativado." : "Som da interface silenciado.");
    if (soundEnabled) playUiSound(880, 0.05);
  });
}

// Filtros com Som
function setupFilterTabs() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      playUiSound(700, 0.02);
      filterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      currentFilter = btn.getAttribute("data-filter");
      renderProjects();
    });
  });
}

// Pilula de Showreel no Hero
function setupHeroShowreel() {
  const btn = document.getElementById("heroShowreelBtn");
  btn?.addEventListener("click", () => {
    playUiSound(950, 0.04);
    openProjectModal(btn.dataset.project);
  });
}

// Botao Voltar ao Topo
function setupBackToTop() {
  document.getElementById("backToTopBtn")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    document.getElementById("navLogo")?.focus({ preventScroll: true });
  });
}

// Link direto para um projeto (#projeto=<id>)
function getProjectShareUrl(project) {
  return `${window.location.origin}${window.location.pathname}#projeto=${project.id}`;
}

function openProjectFromHash() {
  const match = window.location.hash.match(/^#projeto=([\w-]+)$/);
  if (match) openProjectModal(match[1]);
}

// Modal Cinematografico Pro Max
function setupModalEvents() {
  const backdrop = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const prevBtn = document.getElementById("modalPrevProjectBtn");
  const nextBtn = document.getElementById("modalNextProjectBtn");
  const shareBtn = document.getElementById("modalShareBtn");

  if (!backdrop) return;

  closeBtn?.addEventListener("click", closeModal);
  prevBtn?.addEventListener("click", () => navigateProject(-1));
  nextBtn?.addEventListener("click", () => navigateProject(1));

  shareBtn?.addEventListener("click", async () => {
    playUiSound(800, 0.03);
    const project = portfolioProjects[activeModalProjectIndex];
    const url = getProjectShareUrl(project);
    try {
      if (navigator.share && !canHover()) {
        await navigator.share({ title: project.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      showToast(`Link de "${project.title}" copiado.`);
    } catch (e) {
      if (e && e.name === "AbortError") return;
      showToast("Não foi possível copiar o link automaticamente.");
    }
  });

  document.getElementById("modalContactCta")?.addEventListener("click", () => closeModal({ restoreFocus: false }));

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (!backdrop.classList.contains("active")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") trapModalFocus(e);

    // Setas so navegam entre projetos quando o foco nao esta no player de video
    const inMedia = e.target instanceof HTMLVideoElement;
    if (!inMedia && e.key === "ArrowLeft") navigateProject(-1);
    if (!inMedia && e.key === "ArrowRight") navigateProject(1);
  });
}

function trapModalFocus(e) {
  const container = document.querySelector("#projectModal .modal-container");
  const focusables = [...container.querySelectorAll('button, [href], video[controls], [tabindex]:not([tabindex="-1"])')]
    .filter(el => el.offsetParent !== null);
  if (focusables.length === 0) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function openProjectModal(projectId) {
  const index = portfolioProjects.findIndex(p => p.id === projectId);
  if (index === -1) return;

  activeModalProjectIndex = index;
  activeMediaIndex = 0;
  updateModalContent();

  const backdrop = document.getElementById("projectModal");
  if (!backdrop.classList.contains("active")) {
    lastFocusedBeforeModal = document.activeElement;
  }
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
  document.getElementById("modalCloseBtn")?.focus();
}

function navigateProject(direction) {
  playUiSound(800, 0.03);
  activeModalProjectIndex = (activeModalProjectIndex + direction + portfolioProjects.length) % portfolioProjects.length;
  activeMediaIndex = 0;
  updateModalContent();
}

function updateModalContent() {
  const project = portfolioProjects[activeModalProjectIndex];
  if (!project) return;

  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalClient = document.getElementById("modalClient");
  const modalFullDesc = document.getElementById("modalFullDesc");
  const modalToolsList = document.getElementById("modalToolsList");
  const modalTagsList = document.getElementById("modalTagsList");

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalCategory) modalCategory.textContent = project.categoryLabel;
  if (modalClient) modalClient.textContent = project.client;
  if (modalFullDesc) modalFullDesc.textContent = project.fullDesc;

  if (modalToolsList) {
    modalToolsList.innerHTML = project.tools.map(t => `<span class="tool-tag">${t}</span>`).join(" ");
  }

  if (modalTagsList) {
    modalTagsList.innerHTML = project.tags.map(tag => `<span class="badge-format">#${tag}</span>`).join(" ");
  }

  renderModalSwitcher(project);
  loadModalMedia(activeMediaIndex);
}

function renderModalSwitcher(project) {
  const switcher = document.getElementById("modalSwitcher");
  if (!switcher) return;

  if (project.mediaItems.length <= 1) {
    switcher.style.display = "none";
    return;
  }

  switcher.style.display = "flex";
  switcher.innerHTML = "";

  project.mediaItems.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    const isActive = index === activeMediaIndex;
    btn.className = `modal-switch-btn ${isActive ? "active" : ""}`;
    btn.setAttribute("aria-pressed", String(isActive));
    btn.innerHTML = `${ICONS[item.type] || ""}<span></span>`;
    btn.querySelector("span").textContent = item.title;
    btn.addEventListener("click", () => {
      playUiSound(720, 0.02);
      document.querySelectorAll(".modal-switch-btn").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      loadModalMedia(index);
    });
    switcher.appendChild(btn);
  });
}

function loadModalMedia(index) {
  activeMediaIndex = index;
  const viewport = document.getElementById("modalPlayerViewport");
  const project = portfolioProjects[activeModalProjectIndex];
  if (!viewport || !project) return;

  const item = project.mediaItems[index];
  if (!item) return;

  if (item.type === "video") {
    viewport.innerHTML = `
      <video id="activeModalVideo" controls autoplay playsinline preload="auto">
        <source src="${item.src}" type="video/mp4">
        Seu navegador não suporta este vídeo.
      </video>
    `;
    const v = document.getElementById("activeModalVideo");
    if (v) {
      v.volume = 0.8;
      v.play().catch(() => {});
    }
  } else {
    viewport.innerHTML = `
      <img src="${item.src}" alt="${project.title} — ${item.title}" decoding="async" />
    `;
  }
}

function closeModal({ restoreFocus = true } = {}) {
  playUiSound(500, 0.03);
  const backdrop = document.getElementById("projectModal");
  if (!backdrop || !backdrop.classList.contains("active")) return;

  const v = document.getElementById("activeModalVideo");
  if (v) {
    v.pause();
    v.src = "";
  }

  const viewport = document.getElementById("modalPlayerViewport");
  if (viewport) viewport.innerHTML = "";

  backdrop.classList.remove("active");
  document.body.style.overflow = "";

  if (window.location.hash.startsWith("#projeto=")) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  if (restoreFocus && lastFocusedBeforeModal && document.contains(lastFocusedBeforeModal)) {
    lastFocusedBeforeModal.focus();
  }
  lastFocusedBeforeModal = null;
}

// Carregador de Foto com Fallback
function setupProfileImageLoader() {
  const profileImg = document.getElementById("profilePhotoImg");
  if (!profileImg) return;

  const candidatePaths = [
    "assets/images/profile/perfil.jpg",
    "assets/images/profile/profile.jpg",
    "assets/images/profile/perfil.png",
    "assets/images/profile/profile.png"
  ];

  let candidateIndex = 0;

  function tryNext() {
    if (candidateIndex < candidatePaths.length) {
      const path = candidatePaths[candidateIndex++];
      const testImg = new Image();
      testImg.onload = () => { profileImg.src = path; };
      testImg.onerror = () => { tryNext(); };
      testImg.src = path;
    } else {
      profileImg.src = "assets/images/profile/placeholder-avatar.svg";
    }
  }

  tryNext();
}

// Pilulas de Softwares Interativas
function setupToolPills() {
  const toolDescriptions = {
    "After Effects": "After Effects: Motion graphics 2D avançado, expressões e tipografia cinética.",
    "Premiere Pro": "Premiere Pro: Montagem rítmica, sincronização de cortes e multicam.",
    "Photoshop": "Photoshop: Direção de arte, tratamento de stills e composição estética.",
    "Illustrator": "Illustrator: Criação de vetores, logotipos e ilustrações para animação.",
    "Blender 3D": "Blender 3D: Modelagem 3D, simulações, iluminação e animação para cenas de motion design.",
    "Cinema 4D": "Cinema 4D: Elementos tridimensionais, renders de produto e animações de alta fidelidade.",
    "CapCut Pro": "CapCut Pro: Agilidade para formatos verticais (Reels/TikTok) e legendas dinâmicas.",
    "DaVinci Resolve": "DaVinci Resolve: Color grading profissional e finalização cinematográfica.",
    "Figma": "Figma: Estruturação de UI, layouts de tela e prototipagem de interfaces."
  };

  const pills = document.querySelectorAll(".software-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const text = pill.textContent.trim();
      const desc = toolDescriptions[text] || `${text}: Ferramenta de alta performance no fluxo de trabalho.`;
      showToast(desc);
      playUiSound(720, 0.02);
    });
  });
}

// Menu Mobile
function setupMobileNav() {
  const btn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (!btn || !navLinks) return;

  const setOpen = (open) => {
    navLinks.classList.toggle("mobile-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };

  btn.addEventListener("click", () => {
    playUiSound(600, 0.02);
    setOpen(!navLinks.classList.contains("mobile-open"));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("mobile-open")) {
      setOpen(false);
      btn.focus();
    }
  });

  document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("mobile-open") && !e.target.closest(".nav-container")) {
      setOpen(false);
    }
  });
}

// Rolagem Suave & Links Ativos
function setupSmoothScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  let frame = null;

  const update = () => {
    frame = null;
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 130) {
        current = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      const isActive = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  window.addEventListener("scroll", () => {
    if (!frame) frame = requestAnimationFrame(update);
  }, { passive: true });
}

// Feedback Toast
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Formulario de Contato
function setupContactForm() {
  const form = document.getElementById("quickContactForm");
  if (!form) return;

  const fields = ["senderName", "senderContact", "senderMsg"].map(id => document.getElementById(id));

  const validateField = (field) => {
    const error = document.getElementById(`${field.id}Error`);
    const valid = field.value.trim().length > 0;
    field.setAttribute("aria-invalid", String(!valid));
    if (error) error.hidden = valid;
    return valid;
  };

  // Valida ao sair do campo e limpa o erro enquanto o usuario corrige
  fields.forEach(field => {
    field.addEventListener("blur", () => {
      if (field.hasAttribute("aria-invalid")) validateField(field);
    });
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") validateField(field);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const invalid = fields.filter(f => !validateField(f));
    if (invalid.length) {
      invalid[0].focus();
      return;
    }

    playUiSound(880, 0.05);

    const [name, contact, msg] = fields.map(f => f.value.trim());
    const phone = "5511961689536";
    const text = `Olá Diego! Meu nome é ${name} (${contact}). Gostaria de falar sobre um projeto: ${msg}`;
    const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;

    window.open(waUrl, "_blank", "noopener");
    showToast(`Obrigado, ${name}! Abrimos o WhatsApp com sua mensagem pronta para enviar.`);

    form.reset();
    fields.forEach(f => f.removeAttribute("aria-invalid"));
  });
}
