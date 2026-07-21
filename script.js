/* =========================================================
   NAFISA NASRIN — PORTFOLIO SCRIPT
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- CONTENT DATA (edit here to update the site) ---------- */

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Python",
    "C", "Java", "Node.js", "Data Structures", "Algorithms", "Photoshop"
  ];

  const capstoneProjects = [
    {
      tag: "Capstone Project",
      title: "CampusNova",
      desc: "A smart campus management platform designed to centralize academic resources, notices, and everyday campus services into one streamlined experience.",
      stack: ["React", "Node.js", "JavaScript"]
    },
    {
      tag: "Capstone Project",
      title: "Women Safety App",
      desc: "A safety-focused application built to enable quick emergency alerts and location sharing, aimed at improving response time during emergencies.",
      stack: ["React", "JavaScript", "Node.js"]
    }
  ];

  const otherProjects = [
    {
      tag: "Web Game",
      title: "Chess Project",
      desc: "An interactive web-based chess game with move validation and a clean, responsive board interface.",
      stack: ["HTML", "CSS", "JavaScript"]
    },
    {
      tag: "Web App",
      title: "Study Helper Website",
      desc: "A productivity tool that helps students organize study material and manage study sessions more effectively.",
      stack: ["HTML", "CSS", "JavaScript"]
    }
  ];

  // Placeholder certificates — replace with real ones anytime.
  const certificates = [
    { name: "Web Development Fundamentals", issuer: "Add issuing platform", year: "Add year" },
    { name: "Python Programming", issuer: "Add issuing platform", year: "Add year" },
    { name: "Data Structures & Algorithms", issuer: "Add issuing platform", year: "Add year" }
  ];

  const socials = [
    { label: "GitHub", short: "Gh", url: "https://github.com/nafisa009?tab=repositories" },
    { label: "LinkedIn", short: "In", url: "https://www.linkedin.com/in/nafisa-nasrin-1872ba341/" },
    { label: "Facebook", short: "Fb", url: "https://www.facebook.com/nafuwu" },
    { label: "Instagram", short: "Ig", url: "https://www.instagram.com/__bee.boo__/" }
  ];

  /* ---------- RENDER: SKILLS ---------- */
  const skillsGrid = document.getElementById('skillsGrid');
  skillsGrid.innerHTML = skills.map(s => `
    <div class="skill-badge reveal">
      <span class="skill-icon">✦</span>
      <span class="skill-name">${s}</span>
    </div>
  `).join('');

  /* ---------- RENDER: PROJECTS ---------- */
  const capstoneGrid = document.getElementById('capstoneGrid');
  capstoneGrid.innerHTML = capstoneProjects.map(p => `
    <div class="project-card featured reveal">
      <span class="project-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-stack">
        ${p.stack.map(s => `<span class="stack-chip">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');

  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = otherProjects.map(p => `
    <div class="project-card reveal">
      <span class="project-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-stack">
        ${p.stack.map(s => `<span class="stack-chip">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');

  /* ---------- RENDER: CERTIFICATES ---------- */
  const certGrid = document.getElementById('certGrid');
  certGrid.innerHTML = certificates.map(c => `
    <div class="cert-card reveal">
      <span class="cert-icon">❖</span>
      <h4>${c.name}</h4>
      <p>${c.issuer} — ${c.year}</p>
    </div>
  `).join('');

  /* ---------- RENDER: SOCIALS ---------- */
  const socialRow = document.getElementById('socialRow');
  socialRow.innerHTML = socials.map(s => `
    <a class="social-link" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" title="${s.label}">${s.short}</a>
  `).join('');

  /* ---------- FOOTER YEAR ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- PETAL FIELD ---------- */
  const petalField = document.getElementById('petalField');
  const PETAL_COUNT = window.innerWidth < 700 ? 14 : 26;

  for (let i = 0; i < PETAL_COUNT; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    const size = 8 + Math.random() * 10;
    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 12;
    const delay = Math.random() * -20;
    const drift = (Math.random() * 160 - 80).toFixed(0) + 'px';
    const hueShift = Math.random() > 0.5 ? 'rotate(0deg)' : 'rotate(20deg)';

    petal.style.left = left + 'vw';
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';
    petal.style.animationDuration = duration + 's';
    petal.style.animationDelay = delay + 's';
    petal.style.setProperty('--drift', drift);
    petal.style.transform = hueShift;

    petalField.appendChild(petal);
  }

  /* ---------- CURSOR GLOW ---------- */
  const cursorGlow = document.getElementById('cursorGlow');
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
  } else {
    cursorGlow.style.display = 'none';
  }

  /* ---------- NAVBAR SCROLL STATE ---------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ---------- MOBILE NAV TOGGLE ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealTargets = document.querySelectorAll('.section, .stat-card, .skill-badge, .project-card, .cert-card, .timeline-item, .about-card');
  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* ---------- 3D TILT ON PROJECT CARDS ---------- */
  const tiltCards = document.querySelectorAll('.project-card');
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  if (isFinePointer) {
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }

  /* ---------- CONTACT FORM (mailto fallback — no backend needed) ---------- */
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !email || !message) {
      formNote.textContent = 'Please fill in every field before sending.';
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:nafisanasrin28@gmail.com?subject=${subject}&body=${body}`;

    formNote.textContent = 'Opening your email app to send the message…';
    contactForm.reset();
  });

});