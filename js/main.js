function renderNavbar() {
  return `
    <nav id="navbar">
      <div class="container nav-inner">
        <a href="#hero" class="nav-logo"><span>&lt;</span>Rathan<span> /&gt;</span></a>
        <div class="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact" class="nav-cta">Contact</a>
        </div>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div class="nav-mobile" id="nav-mobile">
      <button class="nav-mobile-close" id="nav-mobile-close">✕</button>
      <a href="#about" class="nav-mob-link">About</a>
      <a href="#skills" class="nav-mob-link">Skills</a>
      <a href="#projects" class="nav-mob-link">Projects</a>
      <a href="#experience" class="nav-mob-link">Experience</a>
      <a href="#achievements" class="nav-mob-link">Achievements</a>
      <a href="#contact" class="nav-mob-link">Contact</a>
    </div>
  `;
}

function renderHero() {
  const statsHTML = DATA.stats
    .map(
      (item) => `
        <div class="hero-stat-badge reveal reveal-delay-1">
          <span>${item.icon}</span>
          <span class="stat-value">${item.value}</span>
          <span>${item.label}</span>
        </div>
      `
    )
    .join('');

  return `
    <section id="hero">
      <canvas id="hero-canvas"></canvas>
      <div class="hero-bg-grid"></div>
      <div class="hero-bg-glow hero-glow-one"></div>
      <div class="hero-bg-glow hero-glow-two"></div>

      <div class="container hero-inner">
        <div class="hero-content">
          <div class="hero-badge">Available for exciting opportunities</div>
          <h1 class="hero-headline">
            Hi, I’m <span class="name-highlight">${DATA.personal.name}</span>
          </h1>
          <p class="hero-subtitle hero-title-line">${DATA.personal.title}</p>
          <p class="hero-subtitle">
            <span id="typing-text"></span>
            <span class="typing-cursor">&nbsp;</span>
          </p>

          <div class="hero-stats">${statsHTML}</div>

          <div class="hero-actions">
            <a href="#projects" class="btn-primary">🚀 View Projects</a>
            <a href="#contact" class="btn-secondary">📬 Contact</a>
          </div>

          <div class="hero-socials">
            <a href="${DATA.personal.socials.github}" target="_blank" rel="noreferrer" title="GitHub">GH</a>
            <a href="${DATA.personal.socials.linkedin}" target="_blank" rel="noreferrer" title="LinkedIn">IN</a>
            <a href="mailto:${DATA.personal.email}" title="Email">@</a>
          </div>
        </div>

        <div class="hero-avatar-wrap reveal reveal-delay-2">
          <div class="hero-avatar-ring"></div>
          <div class="hero-avatar-inner" aria-label="Rathan Vengala initials">RV</div>
          <div class="hero-floating-badge">Open to Work</div>
        </div>
      </div>

      <div class="scroll-indicator">
        <div class="scroll-mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section id="about" class="section">
      <div class="container">
        <div class="about-grid">
          <div class="reveal">
            <div class="section-label">Who I Am</div>
            <h2 class="section-title">About <span>Me</span></h2>
            <p class="about-summary">${DATA.personal.summary}</p>

            <div class="about-highlights">
              <div class="about-highlight-item"><span class="icon">⚡</span><span>5+ years building scalable backend systems for modern product teams.</span></div>
              <div class="about-highlight-item"><span class="icon">🤖</span><span>Exploring AI/LLM systems using RAG, embeddings, LangGraph, and agentic workflows.</span></div>
              <div class="about-highlight-item"><span class="icon">☁️</span><span>Strong experience with AWS-native architecture, deployment automation, and reliable delivery.</span></div>
              <div class="about-highlight-item"><span class="icon">💬</span><span>Focused on system design, backend reliability, and building clean production-ready APIs.</span></div>
            </div>
          </div>

          <div class="reveal reveal-delay-2">
            <div class="coding-card lc">
              <div class="coding-card-header">
                <div class="coding-card-name">💡 Core Strength</div>
              </div>
              <div class="coding-stats-grid">
                <div class="coding-stat"><div class="val">5+</div><div class="lbl">Years</div></div>
                <div class="coding-stat"><div class="val">AWS</div><div class="lbl">Cloud</div></div>
                <div class="coding-stat"><div class="val">AI</div><div class="lbl">Focus</div></div>
              </div>
              <div class="coding-badges">
                <span class="coding-badge">Java</span>
                <span class="coding-badge">Spring Boot</span>
                <span class="coding-badge green">System Design</span>
                <span class="coding-badge">LLM</span>
                <span class="coding-badge">Microservices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSkills() {
  const colorMap = {
    cyan: 'pill-cyan',
    indigo: 'pill-indigo',
    violet: 'pill-violet',
    emerald: 'pill-emerald',
    amber: 'pill-amber',
    rose: 'pill-rose'
  };

  const skillsHTML = DATA.skills
    .map(
      (group, index) => `
        <div class="skill-group reveal reveal-delay-${(index % 3) + 1}">
          <div class="skill-group-header">
            <div class="skill-group-icon">${group.icon}</div>
            <div class="skill-group-name">${group.category}</div>
          </div>
          <div class="skill-pills">
            ${group.items.map((item) => `<span class="skill-pill ${colorMap[group.color]}">${item}</span>`).join('')}
          </div>
        </div>
      `
    )
    .join('');

  return `
    <section id="skills" class="section">
      <div class="container">
        <div class="reveal" style="margin-bottom: 48px;">
          <div class="section-label">Tech Stack</div>
          <h2 class="section-title">Skills <span>& Architecture</span></h2>
          <p class="section-desc">Technologies and practices used to build reliable, scalable, and intelligent systems.</p>
        </div>
        <div class="skills-grid">${skillsHTML}</div>
      </div>
    </section>
  `;
}

function renderProjects() {
  const projectsHTML = DATA.projects
    .map(
      (project, index) => `
        <article class="project-card color-${project.color} reveal reveal-delay-${index + 1}">
          <div class="project-glow"></div>
          <div class="project-number">0${index + 1}</div>
          <div class="project-content">
            <div class="project-meta">
              <span class="project-company-badge">${project.company}</span>
              ${project.role ? `<span class="project-role-badge">${project.role}</span>` : ''}
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-subtitle">${project.subtitle}</p>
            <p class="project-desc">${project.description}</p>
            <div class="project-highlights">
              ${project.highlights.map((item) => `<div class="project-highlight">${item}</div>`).join('')}
            </div>
            <div class="project-tech-list">
              ${project.tech.map((tech) => `<span class="project-tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
              <a href="${project.github}" target="_blank" rel="noreferrer" class="project-link">GitHub</a>
              ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noreferrer" class="project-link">Live Demo</a>` : ''}
            </div>
          </div>
        </article>
      `
    )
    .join('');

  return `
    <section id="projects" class="section">
      <div class="container">
        <div class="projects-header reveal">
          <div class="section-label">Featured Work</div>
          <h2 class="section-title">Featured <span>Projects</span></h2>
          <p class="section-desc">Selected work across backend architecture, AI products, and production-grade engineering.</p>
        </div>
        <div class="projects-grid">${projectsHTML}</div>
      </div>
    </section>
  `;
}

function renderExperience() {
  const timelineHTML = DATA.experience
    .map(
      (job, index) => `
        <div class="timeline-item ${job.current ? 'current' : ''} reveal reveal-delay-${index + 1}">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <div>
                <div class="timeline-title">${job.title}</div>
                <div class="timeline-company">${job.company} · ${job.location}</div>
              </div>
              <div class="timeline-period">${job.period}</div>
            </div>
            <div class="timeline-highlights">
              ${job.highlights.map((point) => `<div class="timeline-point">${point}</div>`).join('')}
            </div>
          </div>
        </div>
      `
    )
    .join('');

  return `
    <section id="experience" class="section">
      <div class="container">
        <div class="reveal" style="margin-bottom: 56px;">
          <div class="section-label">Career</div>
          <h2 class="section-title">Work <span>Experience</span></h2>
          <p class="section-desc">Building backend systems and intelligent engineering solutions across enterprise and AI-focused work.</p>
        </div>
        <div class="timeline">${timelineHTML}</div>
      </div>
    </section>
  `;
}

function renderAchievements() {
  const achievementsHTML = DATA.achievements
    .map(
      (item, index) => `
        <div class="achievement-card ${item.color}-card reveal reveal-delay-${index + 1}">
          <span class="achievement-icon">${item.icon}</span>
          <div class="achievement-title">${item.title}</div>
          <div class="achievement-org">${item.org}</div>
          <p class="achievement-desc">${item.description}</p>
        </div>
      `
    )
    .join('');

  return `
    <section id="achievements" class="section">
      <div class="container">
        <div class="reveal" style="margin-bottom: 40px;">
          <div class="section-label">Honors & Education</div>
          <h2 class="section-title">Achievements <span>& Milestones</span></h2>
          <p class="section-desc">A mix of engineering momentum, practical delivery, and a strong academic foundation.</p>
        </div>

        <div class="achievements-grid">${achievementsHTML}</div>

        <div class="education-card reveal reveal-delay-2">
          <div class="edu-icon">🎓</div>
          <div>
            <div class="edu-degree">${DATA.education.degree}</div>
            <div class="edu-institution">${DATA.education.institution}</div>
            <div class="edu-details">
              <div class="edu-detail"><span>CGPA</span><span class="badge">${DATA.education.cgpa}</span></div>
              <div class="edu-detail">📅 ${DATA.education.period}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section id="contact" class="section">
      <div class="container">
        <div class="reveal" style="margin-bottom: 56px;">
          <div class="section-label">Get In Touch</div>
          <h2 class="section-title">Let’s <span>Connect</span></h2>
        </div>

        <div class="contact-grid">
          <div class="contact-info reveal">
            <h3>Say hello 👋</h3>
            <p>I’m always open to thoughtful conversations about backend engineering, distributed systems, cloud architecture, and AI-driven product work.</p>

            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-item-icon">✉️</div>
                <div>
                  <div class="contact-item-label">Email</div>
                  <div class="contact-item-value">${DATA.personal.email}</div>
                </div>
                <button class="copy-btn" data-value="${DATA.personal.email}">Copy</button>
              </div>

              <div class="contact-item">
                <div class="contact-item-icon">📍</div>
                <div>
                  <div class="contact-item-label">Location</div>
                  <div class="contact-item-value">${DATA.personal.location}</div>
                </div>
              </div>
            </div>

            <div class="contact-socials-label">Find me on</div>
            <div class="contact-socials">
              <a href="${DATA.personal.socials.github}" target="_blank" rel="noreferrer" class="contact-social-link">GitHub</a>
              <a href="${DATA.personal.socials.linkedin}" target="_blank" rel="noreferrer" class="contact-social-link">LinkedIn</a>
              <a href="mailto:${DATA.personal.email}" class="contact-social-link">Email</a>
            </div>
          </div>

          <div class="contact-form reveal reveal-delay-2">
            <h3>Send a message</h3>
            <form id="contact-form">
              <div class="form-group">
                <label class="form-label" for="form-name">Your Name</label>
                <input class="form-input" id="form-name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="form-email">Email Address</label>
                <input class="form-input" id="form-email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="form-subject">Subject</label>
                <input class="form-input" id="form-subject" name="subject" type="text" placeholder="Project, role, or opportunity" />
              </div>
              <div class="form-group">
                <label class="form-label" for="form-message">Message</label>
                <textarea class="form-textarea" id="form-message" name="message" placeholder="Tell me about your idea or opportunity..." required></textarea>
              </div>
              <button type="submit" class="form-submit">Send Message</button>
              <div class="form-status" id="form-status"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer>
      <div class="container footer-inner">
        <div class="footer-logo">&lt;Rathan /&gt;</div>
        <p class="footer-text">© ${new Date().getFullYear()} Rathan Vengala · Built with passion and precision</p>
        <div class="footer-socials">
          <a href="${DATA.personal.socials.github}" target="_blank" rel="noreferrer" title="GitHub">GH</a>
          <a href="${DATA.personal.socials.linkedin}" target="_blank" rel="noreferrer" title="LinkedIn">IN</a>
          <a href="mailto:${DATA.personal.email}" title="Email">@</a>
        </div>
      </div>
    </footer>
    <button id="back-to-top" aria-label="Back to top">↑</button>
  `;
}

function initApp() {
  const app = document.getElementById('app');

  app.innerHTML = [
    renderNavbar(),
    '<main>',
    renderHero(),
    renderAbout(),
    renderSkills(),
    renderProjects(),
    renderExperience(),
    renderAchievements(),
    renderContact(),
    '</main>',
    renderFooter()
  ].join('');

  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('nav-mobile');
  const mobileClose = document.getElementById('nav-mobile-close');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    if (backToTop) {
      backToTop.classList.toggle('visible', window.scrollY > 350);
    }
  });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  mobileClose?.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });

  document.querySelectorAll('.nav-mob-link').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.querySelector('[data-value]')?.addEventListener('click', function () {
    navigator.clipboard.writeText(this.dataset.value).then(() => {
      const original = this.textContent;
      this.textContent = 'Copied!';
      setTimeout(() => {
        this.textContent = original;
      }, 1500);
    });
  });

  document.getElementById('contact-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim() || 'Portfolio Inquiry';
    const message = document.getElementById('form-message').value.trim();
    const status = document.getElementById('form-status');

    if (!name || !email || !message) {
      status.textContent = 'Please fill in all required fields.';
      status.classList.remove('success');
      status.style.display = 'block';
      return;
    }

    const mailtoLink = `mailto:${DATA.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;

    status.textContent = 'Opening your email client...';
    status.classList.add('success');
    status.style.display = 'block';
    this.reset();
  });

  initRevealAnimations();
  initTypingEffect();
  initActiveNav();
  initHeroParticles();
  animateCounters();
}

document.addEventListener('DOMContentLoaded', initApp);