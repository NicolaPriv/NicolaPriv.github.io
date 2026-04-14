const B = 'images/';

const W = [
  {id:'stacco',t:'Stacco',c:'artdesign',m:'AI Musical Instrument \u00b7 TENOR & NIME 2024',img:B+'full_XL5EMUGy.jpg',bd:'<p>Stacco is an AI musical instrument designed to perform with Neural Audio Synthesis. The performer interacts by throwing, displacing and combining magnetic marbles and ferromagnetic objects onto its board.</p><p>Stacco embeds the score onto the instrument itself. Tracing paper on the board lets performers sketch meaningful areas in the AI models\u2019 latent space directly on the instrument.</p>',g:['full_kzvn7mGF','full_IXqFglGO','full_o2CpBZsw','full_LAmxPAEw','full_yfgFLfDk','full_tls2G5LI']},
  {id:'mouja-plus',t:'Mouja+',c:'performance',m:'SWRL Festival \u00b7 Riga 2024',img:B+'full_LnSdkS4c.jpg',bd:'<p>Mouja+ combines real-time neural audio synthesis using Thales and Stacco with Stable Audio, prompted on stage with Fluxus text scores. Sonic textures are dynamically layered as inputs for timbre transfer.</p>',g:['full_qH51z5Bd','full_fPD9dmN9','full_8XUlskQu','full_m1kVmYZK']},
  {id:'thales',t:'Thales',c:'artdesign',m:'Guthman Award \u00b7 Georgia Tech 2024 \u00b7 NIME 2023 \u00b7 Ars Electronica 2023',img:B+'full_GmevcS1g.png',bd:'<p>Two wireless controllers interacting through tangible magnetic fields. Named after Thales of Miletus, who described magnets as \u201chaving a soul\u201d.</p><p>Uses <a href="https://arxiv.org/abs/2111.05011" target="_blank">RAVE</a> trained on magnet sounds. <a href="https://github.com/Intelligent-Instruments-Lab/Thales" target="_blank">Build your own on GitHub</a>.</p>',g:['full_puOhpcMq','full_ylvIVLOv','full_8G4ARR4a']},
  {id:'end-of-empire',t:'End of Empire',c:'artdesign',m:'With Eva Sajovic \u00b7 British Textile Biennial \u00b7 Nelson 2024',img:B+'full_cJ34MYtS.jpg',bd:'<p>Interactive textile installation reflecting on capitalism, community and technology. Four columns with speakers run different RAVE models activated by capacitive and ultrasound sensors.</p>',g:['full_GCIok1Py','full_hAjg8BVx','full_d6uE6iJl','full_9eaBSK8M','full_qJIxe1LA','full_K44I5IQa']},
  {id:'magnetologues',t:'Magnetologues',c:'performance',m:'With Giacomo Lepri \u00b7 TENOR 2024 \u00b7 Zurich',img:B+'full_OFpRBhun.png',bd:'<p>Performance for two Staccos \u2014 one runs four AI models, the other controls Ambisonics on ZhdK\u2019s 24-channel system.</p><p><a href="https://youtu.be/Bt3O-jhSqiU" target="_blank">Watch on YouTube</a></p>',g:[]},
  {id:'ai-space',t:'Studies on AI, Sound and Space',c:'performance',m:'Ars Electronica 2024 \u00b7 Linz',img:B+'full_yI2Fy14j.jpg',bd:'<p>Practice-based research using the Dodekaotto \u2014 a 20+1 speaker dodecahedron \u2014 exploring how AI models\u2019 internal representations find correspondence in physical space.</p>',g:['full_OoPpe7wN','full_tEXGK1qR','full_FKPjRonl','full_fefZEnVH','full_d2I6OkqI','full_1epvMSTd']},
  {id:'everyday',t:'Everyday Objects of Musical Improvisation',c:'artdesign',m:'Humboldt Forum \u00b7 Berlin 2024',img:B+'full_HtMjat82.jpg',bd:'<p>UdK Berlin and Oxford project on pouring actions as music performance gestures, crafting interactive sound vessels with machine learning.</p>',g:[]},
  {id:'mouja',t:'Mouja',c:'performance',m:'Fabrika Sztuki \u00b7 \u0141\u00f3d\u017a 2023',img:B+'full_RAF6CUWe.jpg',bd:'<p>A performance focusing on odd physical and temporal causalities \u2014 AI-based sonic reconfigurations where the dataset\u2019s sonic spectres are materialised through unpredictable magnetic interactions.</p>',g:[]},
  {id:'scramble',t:'Scramble',c:'artdesign',m:'With Omar Rampado \u00b7 EvoMusArt 2022',img:B+'full_43oiSRhz.jpg',bd:'<p>ML software for real-time music generation from MIDI, combining LSTM Networks and Markov Chains.</p>',g:[]},
  {id:'scramble-live',t:'Scramble Live',c:'artdesign',m:'With Omar Rampado \u00b7 SMC 2023 \u00b7 Stockholm',img:B+'full_j8Mh0wyq.jpg',bd:'<p>Complementary tool for Scramble. Runs trained models with higher interactive capabilities such as real-time analysis of direct MIDI input.</p>',g:[]},
  {id:'midisense',t:'MidiSense',c:'artdesign',m:'With Stefanos Skialivas \u00b7 IIL 2025',img:B+'full_5QQ6BlYP.jpg',bd:'<p>Five portable wifi controllers designed for Maria Arnal, with a MidiApp to interface them with any DAW.</p>',g:[]},
  {id:'magnetic-scores',t:'Magnetic Scores',c:'performance',m:'TENOR 2023 \u00b7 Boston',img:B+'full_WIb2h5wJ.jpg',bd:'<p>Combining visual inscriptions with magnetic ones \u2014 scores that can be both read and haptically experienced through magnetic interactions.</p>',g:[]},
  {id:'plantscapes',t:'Plantscapes / Knitworks',c:'artdesign',m:'With Eva Sajovic \u00b7 198 CAL \u00b7 London 2022',img:B+'full_MCH45aoK.jpg',bd:'<p>Interactive sound installation augmenting textiles with sensors. At times docile, at times unpredictable. All electronics are displayed as aesthetic elements.</p>',g:['full_X7in2NSQ','full_l6OFP5Iu','full_MCH45aoK','full_cb2E74iI']},
  {id:'sperger',t:'Johann Sperger through Time and Bass',c:'performance',m:'With BYOV \u00b7 AIMC 2023 \u00b7 Brighton',img:B+'full_2ThnD5bN.jpg',bd:'<p>With Darija Andzakovic and Natalia Duarte. We retraced Sperger\u2019s route from Trieste to Venice, recording soundscapes and using them to train and navigate a RAVE model \u2014 exploring the relationship between past and present musical technologies through a historically-informed approach.</p>',g:[]},
  {id:'contingent',t:'Contingent Snapshot',c:'performance',m:'With Wolfgang Dorninger \u00b7 Linz 2023',img:B+'full_YyN6EFN1.png',bd:'<p>A performance duo with Wolfgang Dorninger, recorded in Linz and broadcasted as part of an 8-hour music marathon organised by Francesco Zedde and Eugenia Seriakov.</p><p><a href="https://vimeo.com/868215682" target="_blank">Watch on Vimeo</a></p>',g:[]},
  {id:'notochord',t:'Notochord Arcs and Scrambled Signals',c:'performance',m:'With Victor Shepardson \u00b7 AIMC 2023',img:B+'full_2hYgFrtO.png',bd:'<p>Two generative MIDI models wrangled live. Notochord extrudes quasi-music filtered by Scramble before re-harmonization, ad nauseam.</p>',g:[]},
  {id:'oo',t:'O_o',c:'performance',m:'AI, Disklavier and human operator \u00b7 Padova 2022',img:B+'full_YyN6EFN1.png',bd:'<p>Named after an emoticon and an extinct Hawaiian bird. The last recording of its singing has been processed and multiplied by AI. Like Shelley\u2019s Creature, O_o looks for identity in its creator.</p>',g:[]},
  {id:'emo',t:'Emo',c:'artdesign',m:'Altre Parole Foundation \u00b7 Padova 2022',img:B+'full_gz5zN37K.jpeg',bd:'<p>Emo is a graphic score controlled by an AI algorithm for emotion recognition, developed for a workshop with oncologic patients. The system analyses text, weights and represents each of the five basic emotions, producing an ever-shifting graphic score.</p>',g:[]},
  {id:'weird',t:'W.E.I.R.D. Suite',c:'performance',m:'Blackwood Gallery \u00b7 Toronto 2019\u20132021',img:B+'full_0NFMCAwF.png',bd:'<p>Generative piece for piano and Twitter users. Three movements: Uncertainty, Emergency, Identity \u2014 influenced by Bauman\u2019s liquid modernity.</p>',g:[]},
  {id:'treatise',t:'Treatise',c:'performance',m:'With Arazzi Laptop Ensemble \u00b7 Venice 2021',img:B+'full_0NFMCAwF.png',bd:'<p>By Cornelius Cardew (1936\u20131981). Performed by Arazzi Laptop Ensemble at Pase Platform, Venice.</p>',g:[]},
  {id:'peregrinazioni',t:'Peregrinazioni Veneziane',c:'performance',m:'For augmented trombone and Alife \u00b7 Venice 2021',img:B+'full_0NFMCAwF.png',bd:'<p>Spatialized trombone and electronics. Improvisation over a Venetian traditional song. Grains of sound are delayed, inverted and spatialized using 16 boids controlled with an accelerometer mounted on the trombone.</p>',g:[]},
  {id:'grandi-navi',t:'Grandi Navi',c:'performance',m:'Live electronics and trombone \u00b7 Venice 2021',img:B+'full_0NFMCAwF.png',bd:'<p>Improvisation with Alberto Novello, Alessandro Gambato, Mattia Pizzato. Sound projection by Julian Scordato. Pase Platform, Venice.</p>',g:[]},
  {id:'touch',t:'Touch',c:'performance',m:'For modular synth and Twitter users \u00b7 People\u2019s Bureau 2020',img:B+'full_0NFMCAwF.png',bd:'<p>Online artistic residency during the Covid pandemic. Sound events triggered by real-time tweets containing \u201ctouch, free, fear\u201d \u2014 creating ambiguous and sometimes opposed meaning.</p>',g:[]}
];

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

function mkCard(w) {
  const cl = w.c === 'performance' ? 'Scores / Performances' : 'Art / Design';
  return '<a class="card fi" href="#" onclick="openD(\'' + w.id + '\');return false"><img src="' + w.img + '" alt="' + w.t + '" loading="lazy"><div class="ov"><h3>' + w.t + '</h3><div class="wt">' + cl + '</div></div></a>';
}

function renderGrids() {
  document.getElementById('allGrid').innerHTML = W.map(mkCard).join('');
  document.getElementById('perfGrid').innerHTML = W.filter(w => w.c === 'performance').map(mkCard).join('');
  document.getElementById('artGrid').innerHTML = W.filter(w => w.c === 'artdesign').map(mkCard).join('');

  document.getElementById('researchList').innerHTML = R.map(r => {
    const badge = r.badge ? (' <span class="rb">' + r.badge + '</span>') : '';
    return '<div class="ri"><div class="ri-top"><div><h4>' + r.t + '</h4><div class="rv">' + r.v + badge + '</div></div><a href="' + r.url + '" target="_blank" class="rd">PDF \u2193</a></div><div class="ri-cite" onclick="copyCite(this)" title="Click to copy citation">' + r.cite + '</div></div>';
  }).join('');

  initObs();
}

function openD(id) {
  const w = W.find(x => x.id === id);
  if (!w) return;
  let gl = '';
  if (w.g.length) {
    gl = '<div class="gal">' + w.g.map(f => {
      const s = B + f + '.jpg';
      return '<img src="' + s + '" alt="" loading="lazy" onclick="openLb(\'' + s + '\')">';
    }).join('') + '</div>';
  }
  document.getElementById('dtC').innerHTML =
    '<a href="#" class="bk" onclick="goNav(\'home\');return false">\u2190 Back to Works</a>' +
    '<img class="hi2" src="' + w.img + '" alt="' + w.t + '">' +
    '<h2>' + w.t + '</h2>' +
    '<div class="mt">' + w.m + '</div>' +
    '<div class="bd">' + w.bd + '</div>' + gl;
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
renderGrids();
