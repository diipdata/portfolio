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
});

// Renderizacao dos Projetos com Spotlight e Scrub
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = currentFilter === "all" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === currentFilter);

  grid.innerHTML = "";

  filtered.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-id", project.id);
    card.id = `project-card-${project.id}`;

    let mediaMarkup = "";
    if (project.coverImage) {
      mediaMarkup = `
        <img class="card-media" src="${project.coverImage}" alt="${project.title}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
        <video class="card-media card-video-preview" src="${project.primaryVideo}" preload="metadata" muted playsinline loop style="display:none;"></video>
      `;
    } else {
      mediaMarkup = `<video class="card-media card-video-preview" src="${project.primaryVideo}" preload="metadata" muted playsinline loop></video>`;
    }

    const toolsMarkup = project.tools.map(t => `<span class="tool-tag">${t}</span>`).join("");

    card.innerHTML = `
      <div class="card-media-wrapper ${project.aspectRatioClass}">
        ${mediaMarkup}
        <div class="card-video-progress"></div>
        <div class="card-badge-top">
          <span class="badge-tag">${project.categoryLabel}</span>
          <span class="badge-format">${project.formatBadge}</span>
        </div>
        <div class="media-overlay">
          <div class="play-circle" title="Assistir Projeto">
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
          <span class="card-link-text">
            Explorar
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    `;

    // Interacao de Hover com Video e Barra de Progresso
    const videoPreview = card.querySelector(".card-video-preview");
    const progressBar = card.querySelector(".card-video-progress");
    let progressInterval = null;

    if (videoPreview) {
      card.addEventListener("mouseenter", () => {
        playUiSound(750, 0.02);
        try {
          videoPreview.currentTime = 0;
          videoPreview.play().catch(() => {});
          if (progressBar) {
            progressInterval = setInterval(() => {
              if (videoPreview.duration) {
                const pct = (videoPreview.currentTime / videoPreview.duration) * 100;
                progressBar.style.width = `${pct}%`;
              }
            }, 100);
          }
        } catch (e) {}
      });

      card.addEventListener("mouseleave", () => {
        try {
          videoPreview.pause();
          if (progressInterval) clearInterval(progressInterval);
          if (progressBar) progressBar.style.width = "0%";
        } catch (e) {}
      });
    }

    // Clique abre o modal
    card.addEventListener("click", () => {
      playUiSound(950, 0.04);
      openProjectModal(project.id);
    });

    grid.appendChild(card);
  });
}

// Spotlight Mouse Tracker nos Cards
function setupSpotlightTracker() {
  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".project-card, .process-card, .photo-card, .contact-box");
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--spotlight-x", `${x}px`);
      card.style.setProperty("--spotlight-y", `${y}px`);
    });
  });
}

// Mouse Follower Suave
function setupMouseFollower() {
  const follower = document.querySelector(".mouse-follower");
  if (!follower) return;

  window.addEventListener("mousemove", (e) => {
    follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

// 3D Tilt no Cartao da Foto de Perfil
function setup3DTilt() {
  const card = document.querySelector(".photo-card");
  if (!card) return;

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
  if (!strip) return;

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
    btn.title = soundEnabled ? "Som da interface: Ativado" : "Som da interface: Desativado";
    showToast(soundEnabled ? "🔊 Som da interface ativado!" : "🔇 Som da interface silenciado.");
    if (soundEnabled) playUiSound(880, 0.05);
  });
}

// Filtros com Som
function setupFilterTabs() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      playUiSound(700, 0.02);
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderProjects();
    });
  });
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

  shareBtn?.addEventListener("click", () => {
    playUiSound(800, 0.03);
    const project = portfolioProjects[activeModalProjectIndex];
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(`Link de "${project.title}" copiado para a área de transferência!`);
    } else {
      showToast(`Compartilhando projeto: ${project.title}`);
    }
  });

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (!backdrop.classList.contains("active")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") navigateProject(-1);
    if (e.key === "ArrowRight") navigateProject(1);
  });
}

function openProjectModal(projectId) {
  const index = portfolioProjects.findIndex(p => p.id === projectId);
  if (index === -1) return;

  activeModalProjectIndex = index;
  activeMediaIndex = 0;
  updateModalContent();

  const backdrop = document.getElementById("projectModal");
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
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
    btn.className = `modal-switch-btn ${index === activeMediaIndex ? "active" : ""}`;
    const icon = item.type === "video" ? "🎬 " : "🖼️ ";
    btn.textContent = `${icon}${item.title}`;
    btn.addEventListener("click", () => {
      playUiSound(720, 0.02);
      document.querySelectorAll(".modal-switch-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
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
      <img src="${item.src}" alt="${item.title}" />
    `;
  }
}

function closeModal() {
  playUiSound(500, 0.03);
  const backdrop = document.getElementById("projectModal");
  if (!backdrop) return;

  const v = document.getElementById("activeModalVideo");
  if (v) {
    v.pause();
    v.src = "";
  }

  const viewport = document.getElementById("modalPlayerViewport");
  if (viewport) viewport.innerHTML = "";

  backdrop.classList.remove("active");
  document.body.style.overflow = "";
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

  btn.addEventListener("click", () => {
    playUiSound(600, 0.02);
    navLinks.classList.toggle("mobile-open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
    });
  });
}

// Rolagem Suave & Links Ativos
function setupSmoothScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 130;
      if (window.scrollY >= secTop) {
        current = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
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

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    playUiSound(880, 0.05);

    const name = document.getElementById("senderName")?.value || "Cliente";
    const msg = document.getElementById("senderMsg")?.value || "";

    showToast(`Obrigado, ${name}! Mensagem enviada com sucesso.`);

    const phone = "5511999999999";
    const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(`Olá Diego! Meu nome é ${name}. Gostaria de falar sobre um projeto: ${msg}`)}`;
    
    const waBtn = document.getElementById("heroWaBtn");
    if (waBtn) waBtn.href = waUrl;

    form.reset();
  });
}
