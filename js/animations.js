function initRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -25px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const phrases = [
    'Building scalable backend platforms.',
    'Designing event-driven systems.',
    'Exploring RAG and LLM-powered products.',
    'Crafting cloud-native engineering solutions.'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let typeSpeed = 70;

  function tick() {
    const current = phrases[phraseIndex];

    if (deleting) {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      typeSpeed = 35;
    } else {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      typeSpeed = 70;
    }

    if (!deleting && charIndex === current.length) {
      typeSpeed = 1400;
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 350;
    }

    setTimeout(tick, typeSpeed);
  }

  tick();
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initHeroParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let w = 0;
  let h = 0;
  let particles = [];

  const resize = () => {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  };

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.r = Math.random() * 1.8 + 0.5;
      this.dx = (Math.random() - 0.5) * 0.5;
      this.dy = (Math.random() - 0.5) * 0.5;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.color = Math.random() > 0.5 ? '#6366F1' : '#06B6D4';
    }

    update() {
      this.x += this.dx;
      this.y += this.dy;

      if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
    }
  }

  const initParticles = () => {
    particles = Array.from({ length: 70 }, () => new Particle());
  };

  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    ctx.globalAlpha = 1;

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - distance / 110)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  };

  resize();
  initParticles();
  animate();

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });
}

function animateCounters() {
  const elements = document.querySelectorAll('[data-count]');
  if (!elements.length) return;

  elements.forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = prefix + Math.round(current) + suffix;

          if (current >= target) {
            clearInterval(timer);
          }
        }, 16);

        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(el);
  });
}
