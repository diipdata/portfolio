/**
 * DIEGO // PORTFOLIO DESIGNER & MOTION - UI/UX PRO MAX
 * Engine de Interatividade, Audio Sintetizado, Spotlight Dinamico & 3D Tilt
 */

// Projetos do Portfolio
// orientation: formato real do material ("vertical" 9:16 ou "horizontal" 16:9)
// coverImage/previewVideo: versões otimizadas em assets/media (geradas a partir dos originais em data/)
const MEDIA = "assets/media";
const IMOB_BEHANCE = "data/Imobiliário/Capa%20behance";
const IPM_FRAMES = [
  ["Frames_1_Photo", "Frame 01 · Retrato e Expressão"],
  ["Frames_2_Photo", "Frame 02 · Cotidiano e Comunidade"],
  ["Frames_3_Photo", "Frame 03 · Conexão e Cuidado"],
  ["Frames_4_Photo", "Frame 04 · Esperança em Ação"],
  ["Frames_5_Photo", "Frame 05 · Protagonismo"],
  ["Frames_6_Photo", "Frame 06 · Afeto Coletivo"],
  ["Frames_7_Photo", "Frame 07 · Encerramento e Legado"]
];

const portfolioProjects = [
  {
    id: "imobiliario",
    featured: true,
    title: "Campanhas Imobiliárias Premium",
    client: "Lançamentos & Incorporadoras",
    category: "imobiliario",
    categoryLabel: "Imobiliário & Vídeo",
    orientation: "vertical",
    coverImage: `${MEDIA}/covers/imobiliario.jpg`,
    previewVideo: `${MEDIA}/previews/imobiliario.mp4`,
    shortDesc: "Série de filmes verticais para lançamentos imobiliários de alto padrão, com motion tracking, cartelas personalizadas e edição focada em conversão.",
    fullDesc: "Desenvolvimento audiovisual e identidade visual de campanhas para empreendimentos de destaque (MADAI, Top Mooca, Anne Metropolitan, Vilma Constantino e Zona Sul). O projeto abrange montagem rítmica, color grading sofisticado, motion tracking e pranchas completas estruturadas para o Behance.",
    tools: ["Premiere Pro", "After Effects", "CapCut Pro", "Photoshop"],
    tags: ["Imobiliário", "Motion Tracking", "Color Grading", "Edição Comercial", "Behance Case"],
    mediaItems: [
      { type: "video", title: "MADAI", src: "data/Imobiliário/MADAI%20Final.mp4", vertical: true },
      { type: "video", title: "Top Mooca", src: "data/Imobiliário/Top%20Mooca.mp4", vertical: true },
      { type: "video", title: "Anne Metropolitan", src: "data/Imobiliário/Anne_Metropolitan.mp4", vertical: true },
      { type: "video", title: "Vilma Constantino", src: "data/Imobiliário/Vilma%20-%20Constantino.mp4", vertical: true },
      { type: "video", title: "Zona Sul", src: "data/Imobiliário/ZS_Diego01.mp4", vertical: true },
      { type: "image", title: "Capa do case", src: `${IMOB_BEHANCE}/capa_fin.png`, thumb: `${MEDIA}/thumbs/capa_fin.jpg` },
      { type: "image", title: "Metropolitan", src: `${IMOB_BEHANCE}/1_metropolitan.png`, thumb: `${MEDIA}/thumbs/1_metropolitan.jpg` },
      { type: "image", title: "Top Mooca", src: `${IMOB_BEHANCE}/2_top_mooca.png`, thumb: `${MEDIA}/thumbs/2_top_mooca.jpg` },
      { type: "image", title: "Constantino", src: `${IMOB_BEHANCE}/3_constantino.png`, thumb: `${MEDIA}/thumbs/3_constantino.jpg` },
      { type: "image", title: "Top Mooca II", src: `${IMOB_BEHANCE}/4_top_mooca.png`, thumb: `${MEDIA}/thumbs/4_top_mooca.jpg` },
      { type: "image", title: "TEE Marajoara", src: `${IMOB_BEHANCE}/5_tee_marajoara.png`, thumb: `${MEDIA}/thumbs/5_tee_marajoara.jpg` },
      { type: "image", title: "Créditos", src: `${IMOB_BEHANCE}/Credito_Final.png`, thumb: `${MEDIA}/thumbs/Credito_Final.jpg` }
    ]
  },
  {
    id: "verissimo",
    title: "Veríssimo Freitas | Reels de Mandato",
    client: "Veríssimo Freitas · Vereador de Fortaleza",
    category: "motion",
    categoryLabel: "Motion & Reels",
    orientation: "vertical",
    coverImage: `${MEDIA}/covers/verissimo.jpg`,
    previewVideo: `${MEDIA}/previews/verissimo.mp4`,
    shortDesc: "Reels verticais de alto impacto para redes sociais, combinando tipografia cinética, ritmo acelerado e retenção máxima.",
    fullDesc: "Produção de motion graphics de alto impacto visual formatada exclusivamente para o ecossistema vertical. O projeto alia tipografia cinética arrojada, sincronização rítmica marcante e animação de assets que capturam a atenção nos primeiros segundos, elevando a percepção de valor da marca.",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    tags: ["Motion Design", "Reels 9:16", "Tipografia Cinética", "Social Ads"],
    mediaItems: [
      { type: "video", title: "Reel final", src: "data/Veríssimo/Verissiomo_1_Final.mp4", poster: `${MEDIA}/covers/verissimo.jpg`, vertical: true },
      { type: "image", title: "Capa do reel", src: `${MEDIA}/covers/verissimo.jpg`, thumb: `${MEDIA}/thumbs/verissimo-cover.jpg`, vertical: true }
    ]
  },
  {
    id: "emape",
    title: "Emape | Filmes Institucionais & Campanhas",
    client: "Emape Alimentos",
    category: "institucional",
    categoryLabel: "Branding & Institucional",
    orientation: "vertical",
    coverImage: `${MEDIA}/covers/emape.jpg`,
    previewVideo: `${MEDIA}/previews/emape.mp4`,
    shortDesc: "Trilogia de filmes verticais entre institucional e campanha sazonal, com narrativa sensível e montagem rítmica.",
    fullDesc: "Série audiovisual corporativa e comemorativa criada para a Emape: 1) Filme Institucional sobre os valores da organização; 2) Campanha de Dia dos Namorados focada em afeto e humanização; 3) Peça criativa 'Pão com Ovo' com dinâmica comercial e acolhedora.",
    tools: ["Premiere Pro", "After Effects", "Sound Design"],
    tags: ["Institucional", "Storytelling", "Campanha Sazonal", "Edição & Ritmo"],
    mediaItems: [
      { type: "video", title: "Filme Institucional", src: "data/Emape/Institucional1_v2.mp4", vertical: true },
      { type: "video", title: "Dia dos Namorados", src: "data/Emape/Namorados_v2.mp4", vertical: true },
      { type: "video", title: "Pão com Ovo", src: "data/Emape/P%C3%A3o%20com%20Ovo_v2.mp4", vertical: true }
    ]
  },
  {
    id: "alideranca",
    title: "Aliderança | Motion para Atacado & Varejo",
    client: "Aliderança Distribuidora",
    category: "motion",
    categoryLabel: "Motion & Identidade",
    orientation: "vertical",
    coverImage: `${MEDIA}/covers/alideranca.jpg`,
    previewVideo: `${MEDIA}/previews/alideranca.mp4`,
    shortDesc: "Vídeo de marca vertical com animação de logo, vitrine de produtos e tipografia cinética para redes sociais.",
    fullDesc: "Identidade visual em movimento desenvolvida para a Aliderança Distribuidora. Explora a desconstrução e reconstrução da marca com geometria limpa, vitrine animada de produtos e parceiros, curvas de velocidade suaves (easing) e timing sonoro calibrado.",
    tools: ["After Effects", "Illustrator"],
    tags: ["Logo Animation", "Motion Branding", "Vitrine de Produtos", "Identidade Visual"],
    mediaItems: [
      { type: "video", title: "Animação final", src: "data/Alidença/0Final.mp4", vertical: true }
    ]
  },
  {
    id: "ibyte",
    title: "Ibyte | Cartelado Promocional Tech",
    client: "Ibyte Tecnologia",
    category: "comercial",
    categoryLabel: "Comercial & Varejo",
    orientation: "horizontal",
    coverImage: `${MEDIA}/covers/ibyte.jpg`,
    previewVideo: `${MEDIA}/previews/ibyte.mp4`,
    shortDesc: "Animação promocional de alta energia para o varejo de tecnologia, sincronizando produtos, preços dinâmicos e sound design.",
    fullDesc: "Criação de cartelado dinâmico e vinhetas comerciais para a rede Ibyte. Com animações vetoriais ágeis, transições pontuais e tratamento de destaques para promoções sazonais, otimizado para telões de PDV e redes sociais.",
    tools: ["After Effects", "Premiere Pro", "Illustrator"],
    tags: ["Varejo Tech", "Cartelado Comercial", "Animação de Produtos", "Promo Ads"],
    mediaItems: [
      { type: "video", title: "Cartelado completo", src: "data/Ibyte/CARTELADO%20IBYTE%20FINAL.mp4", poster: `${MEDIA}/covers/ibyte.jpg` }
    ]
  },
  {
    id: "ipm-social",
    title: "IPM Social | Documentário & Direção Fotográfica",
    client: "IPM Impacto Social",
    category: "social",
    categoryLabel: "Impacto Social & Direção",
    orientation: "horizontal",
    coverImage: `${MEDIA}/covers/ipm-social.jpg`,
    previewVideo: `${MEDIA}/previews/ipm-social.mp4`,
    shortDesc: "Produção audiovisual documentando projetos sociais, acompanhada por uma série de stills com composição sensível.",
    fullDesc: "Projeto completo de registro audiovisual e direção fotográfica para o IPM Social. Documenta a força de projetos comunitários, conectando o público através de entrevistas autênticas, cortes emotivos e uma refinada seleção de retratos e stills em alta resolução.",
    tools: ["Premiere Pro", "Photoshop", "Lightroom"],
    tags: ["Documentário", "Impacto Social", "Direção de Fotografia", "Stills de Cena"],
    mediaItems: [
      { type: "video", title: "Documentário", src: "data/IPM%20social/projeto.mp4", poster: `${MEDIA}/covers/ipm-social.jpg` },
      ...IPM_FRAMES.map(([file, title]) => ({
        type: "image", title, src: `${MEDIA}/photos/${file}.jpg`, thumb: `${MEDIA}/thumbs/${file}.jpg`
      }))
    ]
  }
];

// Ícone de cada ferramenta (símbolos do sprite em index.html; CapCut usa máscara CSS)
const TOOL_ICONS = {
  "After Effects": "tool-ae",
  "Premiere Pro": "tool-pr",
  "Photoshop": "tool-ps",
  "Illustrator": "tool-ai",
  "Blender 3D": "tool-bl",
  "Cinema 4D": "tool-c4d",
  "DaVinci Resolve": "tool-dv",
  "Figma": "tool-fg",
  "CapCut Pro": "tool-cc"
};

function toolTagMarkup(tool) {
  const id = TOOL_ICONS[tool];
  let icon = "";
  if (id === "tool-cc") icon = `<span class="tool-icon tool-cc" aria-hidden="true"></span>`;
  else if (id) icon = `<svg class="tool-icon ${id}" aria-hidden="true"><use href="#${id}"/></svg>`;
  return `<span class="tool-tag">${icon}${tool}</span>`;
}

// Ids antigos continuam funcionando em links compartilhados
const PROJECT_ID_ALIASES = { alidenca: "alideranca" };

// Resumo de entregas calculado a partir das mídias (ex.: "5 filmes · 7 pranchas")
function getDeliverables(project) {
  const videos = project.mediaItems.filter(m => m.type === "video").length;
  const images = project.mediaItems.filter(m => m.type === "image").length;
  const imageLabel = project.category === "imobiliario" ? ["prancha", "pranchas"] : ["imagem", "imagens"];
  const parts = [];
  if (videos) parts.push(`${videos} ${videos === 1 ? "filme" : "filmes"}`);
  if (images) parts.push(`${images} ${images === 1 ? imageLabel[0] : imageLabel[1]}`);
  return parts.join(" · ");
}

function getFormatLabel(project) {
  return project.orientation === "vertical" ? "Vertical 9:16" : "Horizontal 16:9";
}

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

  filtered.forEach((project, index) => {
    // O projeto em destaque ocupa a largura toda apenas na visão "Todos"
    const isFeatured = Boolean(project.featured) && currentFilter === "all" && index === 0;

    const card = document.createElement("article");
    card.className = `project-card${isFeatured ? " is-featured" : ""}`;
    card.setAttribute("data-id", project.id);
    card.dataset.flipId = project.id;
    card.id = `project-card-${project.id}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Abrir projeto: ${project.title}`);

    const arrow = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
    const deliverables = getDeliverables(project);

    const detailsMarkup = isFeatured
      ? `
        <span class="featured-kicker">Case em destaque</span>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.fullDesc}</p>
        <dl class="featured-facts">
          <div><dt>Cliente</dt><dd>${project.client}</dd></div>
          <div><dt>Entregas</dt><dd>${deliverables}</dd></div>
          <div><dt>Formato</dt><dd>${getFormatLabel(project)}</dd></div>
          <div><dt>Ferramentas</dt><dd>${project.tools.join(", ")}</dd></div>
        </dl>
        <span class="btn btn-primary featured-cta" aria-hidden="true">Abrir case completo ${arrow}</span>`
      : `
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.shortDesc}</p>
        <div class="card-footer">
          <span class="card-meta">${deliverables}</span>
          <span class="card-link-text" aria-hidden="true">Explorar ${arrow}</span>
        </div>`;

    card.innerHTML = `
      <div class="card-media-wrapper is-${project.orientation}">
        <img class="card-media" src="${project.coverImage}" alt="" loading="lazy" decoding="async" />
        <div class="card-video-progress" aria-hidden="true"></div>
        <div class="card-badge-top">
          <span class="badge-tag">${project.categoryLabel}</span>
          <span class="badge-format">${project.orientation === "vertical" ? "9:16" : "16:9"}</span>
        </div>
        <div class="media-overlay" aria-hidden="true">
          <div class="play-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div class="card-content">${detailsMarkup}</div>
    `;

    // Destaque: prévia toca sozinha enquanto visível. Demais: prévia no hover (mouse)
    if (!prefersReducedMotion()) {
      if (isFeatured) setupFeaturedAutoplay(card, project);
      else if (canHover()) setupCardPreview(card, project);
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

// Cria (uma vez) o video de prévia leve sobreposto à capa
function getPreviewVideo(card, project) {
  let video = card.querySelector(".card-video-preview");
  if (video) return video;

  const wrapper = card.querySelector(".card-media-wrapper");
  const progressBar = card.querySelector(".card-video-progress");
  video = document.createElement("video");
  video.className = "card-media card-video-preview is-overlay";
  video.src = project.previewVideo;
  video.preload = "none";
  video.muted = true;
  video.playsInline = true;
  video.loop = true;
  video.setAttribute("aria-hidden", "true");
  video.addEventListener("timeupdate", () => {
    if (progressBar && video.duration) {
      progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
    }
  });
  wrapper.insertBefore(video, progressBar);
  return video;
}

// Destaque: toca a prévia em loop apenas enquanto o card está na tela
function setupFeaturedAutoplay(card, project) {
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(([entry]) => {
    const video = getPreviewVideo(card, project);
    if (entry.isIntersecting) {
      video.play().then(() => video.classList.add("is-playing")).catch(() => {});
    } else {
      video.pause();
    }
  }, { threshold: 0.35 });
  observer.observe(card);
}

// Prévia no hover com barra de progresso
function setupCardPreview(card, project) {
  const progressBar = card.querySelector(".card-video-progress");
  const getVideo = () => getPreviewVideo(card, project);

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
      // Ganchos para a camada de animação (motion.js) capturar o layout antes/depois
      document.dispatchEvent(new CustomEvent("portfolio:beforefilter"));
      renderProjects();
      document.dispatchEvent(new CustomEvent("portfolio:afterfilter"));
    });
  });
}

// Showreel do Hero: autoplay mudo (exceto com reduced-motion) + botão pausar/tocar
function setupHeroShowreel() {
  const reel = document.getElementById("heroReelVideo");
  const toggle = document.getElementById("heroReelToggle");
  if (!reel) return;

  const setState = (playing) => {
    toggle?.setAttribute("aria-pressed", String(!playing));
    toggle?.setAttribute("aria-label", playing ? "Pausar showreel" : "Reproduzir showreel");
    toggle?.classList.toggle("is-paused", !playing);
  };

  if (prefersReducedMotion()) {
    reel.pause();
    setState(false);
  } else {
    reel.play().then(() => setState(true)).catch(() => setState(false));
  }

  toggle?.addEventListener("click", () => {
    if (reel.paused) reel.play().then(() => setState(true)).catch(() => {});
    else { reel.pause(); setState(false); }
  });

  // Pausa quando sai da tela para economizar bateria
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) reel.pause();
      else if (toggle && !toggle.classList.contains("is-paused")) reel.play().catch(() => {});
    }).observe(reel);
  }

  document.getElementById("heroFeaturedBtn")?.addEventListener("click", () => {
    playUiSound(950, 0.04);
    openProjectModal("imobiliario");
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
  const id = PROJECT_ID_ALIASES[projectId] || projectId;
  const index = portfolioProjects.findIndex(p => p.id === id);
  if (index === -1) return;

  activeModalProjectIndex = index;
  activeMediaIndex = 0;
  updateModalContent();

  const backdrop = document.getElementById("projectModal");
  const wasOpen = backdrop.classList.contains("active");
  if (!wasOpen) {
    lastFocusedBeforeModal = document.activeElement;
    document.dispatchEvent(new CustomEvent("portfolio:modalopen"));
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
  document.dispatchEvent(new CustomEvent("portfolio:modalchange", { detail: { direction } }));
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
  const modalDeliverables = document.getElementById("modalDeliverables");
  const modalFormat = document.getElementById("modalFormat");

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalCategory) modalCategory.textContent = project.categoryLabel;
  if (modalClient) modalClient.textContent = project.client;
  if (modalFullDesc) modalFullDesc.textContent = project.fullDesc;
  if (modalDeliverables) modalDeliverables.textContent = getDeliverables(project);
  if (modalFormat) modalFormat.textContent = getFormatLabel(project);

  if (modalToolsList) {
    modalToolsList.innerHTML = project.tools.map(toolTagMarkup).join(" ");
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

  switcher.style.display = "";
  switcher.innerHTML = "";

  // Agrupa: filmes viram chips; imagens viram miniaturas
  const groups = [
    { type: "video", label: "Filmes" },
    { type: "image", label: project.category === "imobiliario" ? "Pranchas do case" : "Imagens" }
  ];

  groups.forEach(group => {
    const items = project.mediaItems
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => item.type === group.type);
    if (!items.length) return;

    const wrap = document.createElement("div");
    wrap.className = `media-group media-group-${group.type}`;
    const label = document.createElement("span");
    label.className = "media-group-label";
    label.textContent = `${group.label} (${items.length})`;
    const list = document.createElement("div");
    list.className = "media-group-list";

    items.forEach(({ item, index }) => {
      const btn = document.createElement("button");
      btn.type = "button";
      const isActive = index === activeMediaIndex;
      btn.className = `modal-switch-btn${group.type === "image" ? " is-thumb" : ""}${isActive ? " active" : ""}`;
      btn.setAttribute("aria-pressed", String(isActive));
      if (group.type === "image" && item.thumb) {
        btn.setAttribute("aria-label", item.title);
        btn.title = item.title;
        btn.innerHTML = `<img src="${item.thumb}" alt="" loading="lazy" decoding="async" />`;
      } else {
        btn.innerHTML = `${ICONS[item.type] || ""}<span></span>`;
        btn.querySelector("span").textContent = item.title;
      }
      btn.addEventListener("click", () => {
        playUiSound(720, 0.02);
        switcher.querySelectorAll(".modal-switch-btn").forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        loadModalMedia(index);
      });
      list.appendChild(btn);
    });

    wrap.append(label, list);
    switcher.appendChild(wrap);
  });
}

function loadModalMedia(index) {
  activeMediaIndex = index;
  const viewport = document.getElementById("modalPlayerViewport");
  const project = portfolioProjects[activeModalProjectIndex];
  if (!viewport || !project) return;

  const item = project.mediaItems[index];
  if (!item) return;

  // Mídia vertical usa o layout lado a lado (player alto + detalhes)
  document.querySelector("#projectModal .modal-body")?.classList.toggle("is-vertical", Boolean(item.vertical));

  if (item.type === "video") {
    const poster = item.poster || (item.vertical && index === 0 ? project.coverImage : "");
    viewport.innerHTML = `
      <video id="activeModalVideo" controls autoplay playsinline preload="metadata"${poster ? ` poster="${poster}"` : ""}>
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
