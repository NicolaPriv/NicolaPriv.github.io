/*
 * main.js — Loads works from individual JSON files in /works/
 *
 * Each work file (e.g. works/stacco.json) has this structure:
 *
 *   {
 *     "id":       "stacco",
 *     "title":    "Stacco",
 *     "category": "artdesign" or "performance",
 *     "meta":     "AI Musical Instrument · TENOR & NIME 2024",
 *     "image":    "images/full_XL5EMUGy.jpg",
 *     "content":  [
 *       { "type": "text",  "value": "A paragraph of text. HTML links allowed." },
 *       { "type": "text",  "value": "Another paragraph." },
 *       { "type": "video", "platform": "youtube", "videoId": "AJpuVTn_tPM" },
 *       { "type": "video", "platform": "vimeo",   "videoId": "868215682" },
 *       { "type": "image", "src": "images/my-photo.jpg", "alt": "Description" }
 *     ],
 *     "gallery": [
 *       "images/full_kzvn7mGF.jpg",
 *       "images/full_IXqFglGO.jpg"
 *     ],
 *     "paper": { "title": "Paper Title", "url": "papers/filename.pdf" },
 *     "links": [
 *       { "label": "GitHub", "url": "https://github.com/..." },
 *       { "label": "Download", "url": "https://..." }
 *     ]
 *   }
 *
 * Notes:
 *   - "paper": set to null if no paper; fill in to show a download link
 *   - "links": set to [] if no links; add objects to show external buttons
 *
 * To add a new work:
 *   1. Create a new JSON file in works/ (e.g. works/my-new-work.json)
 *   2. Add its name (without .json) to works/manifest.json
 */

let W = [];

const R = [
  {t:'Querying the Ghost: AI Hauntography in NIME',v:'NIME 2024',badge:'Best Paper',url:'papers/ws4R9T51.pdf',cite:'Privato, N. (2024). Querying the Ghost: AI Hauntography in NIME. Proceedings of NIME 2024.'},
  {t:'Stacco: Exploring the Embodied Perception of Latent Representations in Neural Synthesis',v:'NIME 2024',url:'papers/IQ8kf7lp.pdf',cite:'Privato, N. & Lepri, G. (2024). Stacco: Exploring the Embodied Perception of Latent Representations in Neural Synthesis. Proceedings of NIME 2024.'},
  {t:'AI Hauntology and the Hauntographic Method',v:'xCoAx 2024',url:'papers/KqfOY96V.pdf',cite:'Privato, N. (2024). AI Hauntology and the Hauntographic Method. Proceedings of xCoAx 2024.'},
  {t:'Mouja',v:'xCoAx 2024',url:'papers/vPYCulwi.pdf',cite:'Privato, N. (2024). Mouja. Proceedings of xCoAx 2024.'},
  {t:'Sketching Magnetic Interactions for Neural Synthesis',v:'TENOR 2024',url:'papers/btdMyOUI.pdf',cite:'Privato, N. & Lepri, G. (2024). Sketching Magnetic Interactions for Neural Synthesis. Proceedings of TENOR 2024.'},
  {t:'A Context-sensitive Approach to XAI in Music Performance',v:'XAIxArts 2023',url:'papers/Q70BCFmK.pdf',cite:'Privato, N. (2023). A Context-sensitive Approach to XAI in Music Performance. XAIxArts Workshop 2023.'},
  {t:'Magnetic Interactions as a Somatosensory Interface',v:'NIME 2023',url:'papers/2zlKJI90.pdf',cite:'Privato, N. (2023). Magnetic Interactions as a Somatosensory Interface. Proceedings of NIME 2023.'},
  {t:'The Magnetic Score: Somatosensory Inscriptions and Relational Design',v:'TENOR 2023',url:'papers/yiP1XP7E.pdf',cite:'Privato, N. (2023). The Magnetic Score: Somatosensory Inscriptions and Relational Design in the Instrument-Score. Proceedings of TENOR 2023.'},
  {t:'Scramble Live: Combining LSTM and Markov Chains',v:'SMC 2022',url:'papers/zZTTogpc.pdf',cite:'Privato, N. & Rampado, O. (2022). Scramble Live: Combining LSTM and Markov Chains for Real-time Musical Interaction. Proceedings of SMC 2022.'},
  {t:'Scramble: A Creative Tool Combining LSTM and Markov Chains in Max',v:'EvoMUSART 2022',url:'papers/SWGRA7j4.pdf',cite:'Privato, N. & Rampado, O. (2022). Scramble: A Creative Tool for the Musician Combining LSTM and Markov Chains in Max. EvoMUSART 2022.'},
  {t:'W.E.I.R.D. Enters the Stage',v:'xCoAx 2021',url:'papers/egG5IeGb.pdf',cite:'Privato, N. (2021). W.E.I.R.D. Enters the Stage. Proceedings of xCoAx 2021.'},
  {t:'Sketching Sonic Trajectories',v:'SMC 2021',url:'papers/uczU4Sxk.pdf',cite:'Privato, N. (2021). Sketching Sonic Trajectories: A IanniX Tool for Composing the Electroacoustic Space. Proceedings of SMC 2021.'}
];

// --- Render a content block from a work's JSON ---
function renderBlock(block) {
  switch (block.type) {
    case 'text':
      return '<p>' + block.value + '</p>';
    case 'video':
      if (block.platform === 'youtube') {
        return '<div class="video-embed"><iframe src="https://www.youtube.com/embed/' + block.videoId + '" allowfullscreen></iframe></div>';
      } else if (block.platform === 'vimeo') {
        return '<div class="video-embed"><iframe src="https://player.vimeo.com/video/' + block.videoId + '" allowfullscreen></iframe></div>';
      }
      return '';
    case 'image':
      return '<img src="' + block.src + '" alt="' + (block.alt || '') + '" class="dt-img" loading="lazy" onclick="openLb(\'' + block.src + '\')" style="cursor:pointer;border-radius:3px;margin-bottom:1.2rem">';
    default:
      return '';
  }
}

// --- Build a portfolio card ---
function mkCard(w) {
  const cl = w.category === 'performance' ? 'Scores / Performances' : 'Art / Design';
  return '<a class="card fi" href="#" onclick="openD(\'' + w.id + '\');return false">' +
    '<img src="' + w.image + '" alt="' + w.title + '" loading="lazy">' +
    '<div class="ov"><h3>' + w.title + '</h3><div class="wt">' + cl + '</div></div></a>';
}

// --- Render all grids ---
function renderGrids() {
  document.getElementById('allGrid').innerHTML = W.map(mkCard).join('');
  document.getElementById('perfGrid').innerHTML = W.filter(w => w.category === 'performance').map(mkCard).join('');
  document.getElementById('artGrid').innerHTML = W.filter(w => w.category === 'artdesign').map(mkCard).join('');

  document.getElementById('researchList').innerHTML = R.map(r => {
    const badge = r.badge ? (' <span class="rb">' + r.badge + '</span>') : '';
    return '<div class="ri"><div class="ri-top"><div><h4>' + r.t + '</h4><div class="rv">' + r.v + badge + '</div></div><a href="' + r.url + '" target="_blank" class="rd">PDF \u2193</a></div><div class="ri-cite" onclick="copyCite(this)" title="Click to copy citation">' + r.cite + '</div></div>';
  }).join('');

  initObs();
}

// --- Open detail page for a work ---
function openD(id) {
  const w = W.find(x => x.id === id);
  if (!w) return;

  // Render content blocks
  const body = w.content.map(renderBlock).join('');

  // Render gallery
  let gl = '';
  if (w.gallery && w.gallery.length) {
    gl = '<div class="gal">' + w.gallery.map(src => {
      return '<img src="' + src + '" alt="" loading="lazy" onclick="openLb(\'' + src + '\')">';
    }).join('') + '</div>';
  }

  // Render paper link
  let paperHtml = '';
  if (w.paper && w.paper.title && w.paper.url) {
    paperHtml = '<div class="dt-paper"><a href="' + w.paper.url + '" target="_blank">\u2193 ' + w.paper.title + '</a></div>';
  }

  // Render external links
  let linksHtml = '';
  if (w.links && w.links.length) {
    linksHtml = '<div class="dt-links">' + w.links.map(l => {
      return '<a href="' + l.url + '" target="_blank" class="btn">' + l.label + ' \u2197</a>';
    }).join('') + '</div>';
  }

  document.getElementById('dtC').innerHTML =
    '<a href="#" class="bk" onclick="goNav(\'home\');return false">\u2190 Back to Works</a>' +
    '<img class="hi2" src="' + w.image + '" alt="' + w.title + '">' +
    '<h2>' + w.title + '</h2>' +
    '<div class="mt">' + w.meta + '</div>' +
    '<div class="bd">' + body + '</div>' +
    paperHtml + linksHtml + gl;

  showPage('detail');
}

function copyCite(el) {
  navigator.clipboard.writeText(el.textContent.replace('copy', '').trim());
  el.style.background = '#e0f0e0';
  setTimeout(() => { el.style.background = ''; }, 800);
}

function goNav(id) {
  showPage(id);
  closeMenu();
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  const el = document.getElementById('nav-' + id);
  if (el) el.classList.add('active');
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + id);
  if (el) el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
  requestAnimationFrame(initObs);
}

function toggleMenu() {
  const n = document.getElementById('mn');
  n.classList.toggle('open');
  document.querySelector('.mb').textContent = n.classList.contains('open') ? '\u2715' : '\u2630';
}

function closeMenu() {
  document.getElementById('mn').classList.remove('open');
  document.querySelector('.mb').textContent = '\u2630';
}

function initObs() {
  const o = new IntersectionObserver(es => {
    es.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 50);
    });
  }, { threshold: .06 });
  document.querySelectorAll('.fi:not(.vis)').forEach(el => o.observe(el));
}

function openLb(s) {
  document.getElementById('lb-img').src = s;
  document.getElementById('lb').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLb() {
  document.getElementById('lb').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

// --- Load works from individual JSON files ---
async function loadWorks() {
  try {
    const res = await fetch('works/manifest.json');
    const manifest = await res.json();
    const works = await Promise.all(
      manifest.map(name => fetch('works/' + name + '.json').then(r => r.json()))
    );
    W = works;
    renderGrids();
  } catch (err) {
    console.error('Failed to load works:', err);
  }
}

loadWorks();
