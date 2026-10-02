/**
 * Sadun Deshapriya - Personal Portfolio Website
 * Auspify Full Stack Development Internship - Task 1
 * Core Logic & Interactive Enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypewriter();
  initNavbar();
  initProjectsFilter();
  initProjectModals();
  initResumeModal();
  initContactForm();
  initScrollAnimations();
});

/* -------------------------------------------------------------
 * 1. Theme Toggle (Dark / Light Mode)
 * ------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const storedTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.className = 'fas fa-moon';
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
      themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
      themeIcon.className = 'fas fa-sun';
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
      themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    }
  }
}

/* -------------------------------------------------------------
 * 2. Typewriter Effect in Hero
 * ------------------------------------------------------------- */
function initTypewriter() {
  const targetElement = document.getElementById('typing-element');
  if (!targetElement) return;

  const roles = [
    'Software Engineering Student',
    'Full-Stack Developer (MERN / Spring Boot)',
    'Fiverr Freelancer & Tech Creator',
    'Cloud & Microservices Enthusiast'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      targetElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      targetElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* -------------------------------------------------------------
 * 3. Navbar Sticky & Mobile Menu Toggle & Scroll Spy
 * ------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll Spy: highlight active link
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinkItems.forEach(link => link.classList.remove('active'));
        if (navItem) navItem.classList.add('active');
      }
    });
  });

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking link
    navLinkItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
}

/* -------------------------------------------------------------
 * 4. Project Category Filtering
 * ------------------------------------------------------------- */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 5. Project Details Modal
 * ------------------------------------------------------------- */
const projectDetailsData = {
  janaya360: {
    title: 'Janaya360 Political Promises Tracker (JusticeLink Platform)',
    category: 'Full-Stack Civic Tech',
    image: 'assets/images/project-janaya360.jpg',
    description: 'A full-stack civic transparency platform designed to empower citizens by tracking political promises, parliamentary attendance, public feedback, notifications, and breaking news.',
    features: [
      'JWT-based secure authentication with Role-Based Access Control (RBAC)',
      'Automated news aggregation using News API & real-time notifications',
      'SMTP integration for verified alerts, OTP authentication, and feedback delivery',
      'Deployed full stack architecture using Vercel (Frontend) and Render (Backend)',
      'Responsive analytics dashboards with attendance trends and promise fulfillment status'
    ],
    technologies: ['MongoDB', 'Express.js', 'Node.js', 'React.js', 'Tailwind CSS', 'Postman', 'JWT Auth', 'Vercel', 'Render'],
    github: 'https://github.com/sandun_deshapriya',
    demo: '#'
  },
  healthcare: {
    title: 'Smart Health Care System',
    category: 'Microservices & Enterprise Architecture',
    image: 'assets/images/project-healthcare.jpg',
    description: 'A robust microservices-based healthcare application engineered using Spring Boot, containerized with Docker, and served through Nginx reverse proxy for high availability and scalable throughput.',
    features: [
      'Microservices architecture decoupling patient records, appointment scheduling, and authentication',
      'Spring Security & JWT token-based authorization and session management',
      'Payment gateway integration using Stripe API for appointment reservations',
      'Containerized with Docker & Docker Compose; production deployment configured with Nginx reverse proxy',
      'Dynamic React dashboard for medical staff, doctors, and patient portals'
    ],
    technologies: ['React.js', 'Spring Boot', 'MongoDB', 'Microservices', 'Docker', 'Docker Compose', 'Nginx', 'JWT', 'Stripe'],
    github: 'https://github.com/sandun_deshapriya',
    demo: '#'
  },
  wellness: {
    title: 'Wellness Mobile Application',
    category: 'Native Android Development',
    image: 'assets/images/project-wellness.jpg',
    description: 'Native Android application developed with Kotlin, Gradle build automation, and integrated with Spring Boot REST microservices and Apache Kafka for asynchronous health event streaming.',
    features: [
      'Clean Modular Android Architecture adhering to Google Android best practices',
      'Apache Kafka event streaming for real-time telemetry and wellness notifications',
      'Robust Spring Boot RESTful API backend connected with MySQL database',
      'Tested with Postman and unit test suites for verified endpoint reliability'
    ],
    technologies: ['Kotlin', 'Android Studio', 'Gradle', 'Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Kafka', 'Postman'],
    github: 'https://github.com/sandun_deshapriya',
    demo: '#'
  },
  habittracker: {
    title: 'Habit Tracker Mobile Application',
    category: 'AI Integration & Mobile',
    image: 'assets/images/project-wellness.jpg',
    description: 'A scalable, role-based habit and peer-learning application integrating the Google Gemini API to deliver intelligent automated Sinhala-to-English translations and AI-assisted habit coaching.',
    features: [
      'Google Gemini API integration for automated Sinhala-to-English translation & assistance',
      'Role-based peer learning and daily habit streak management',
      'Full CRUD operations supported by Express.js & MongoDB backend',
      'Figma prototype design converted into high-performance native Kotlin components with Shared Preferences persistence'
    ],
    technologies: ['Kotlin', 'Android Studio', 'Google Gemini API', 'Node.js', 'Express.js', 'MongoDB', 'Figma', 'Shared Preferences'],
    github: 'https://github.com/sandun_deshapriya',
    demo: '#'
  },
  petcare: {
    title: 'Pet Care & Learning Management System',
    category: 'Full-Stack Web System',
    image: 'assets/images/project-janaya360.jpg',
    description: 'Comprehensive pet health and management web system featuring scheduling, pet medical records, role-based access, and peer-learning support.',
    features: [
      'Full CRUD operations for pet records, vaccination schedules, and vet consultations',
      'Secure authentication and session management using Shared Preferences & sessions',
      'Clean UI crafted with standard HTML5, CSS3, and PHP database drivers',
      'Tested workflows for real-time data entry and administration'
    ],
    technologies: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Shared Preferences'],
    github: 'https://github.com/sandun_deshapriya',
    demo: '#'
  }
};

function initProjectModals() {
  const modalBackdrop = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-body');
  const closeBtn = document.getElementById('modal-close-btn');
  const triggerBtns = document.querySelectorAll('.view-project-details');

  if (!modalBackdrop || !modalContent) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = projectDetailsData[projectId];

      if (!data) return;

      modalContent.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
          <span class="section-tag" style="margin-bottom: 0.5rem;">${data.category}</span>
          <h2 style="font-size: 1.8rem; font-weight: 800; margin-top: 0.5rem; margin-bottom: 1rem;">${data.title}</h2>
          <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.5rem; max-height: 320px;">
            <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem; font-size: 1.05rem;">
            ${data.description}
          </p>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--accent-cyan);">Key Engineering Features</h4>
          <ul style="list-style: none; padding: 0; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem;">
            ${data.features.map(f => `<li style="display: flex; align-items: flex-start; gap: 0.6rem; color: var(--text-secondary); font-size: 0.95rem;"><i class="fas fa-check-circle" style="color: var(--accent-emerald); margin-top: 0.25rem;"></i><span>${f}</span></li>`).join('')}
          </ul>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--accent-cyan);">Tech Stack & Tools</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
            ${data.technologies.map(t => `<span class="tech-tag" style="padding: 0.35rem 0.75rem; font-size: 0.85rem;">${t}</span>`).join('')}
          </div>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <i class="fab fa-github"></i> View on GitHub
            </a>
            <button class="btn btn-secondary modal-inline-close">
              Close Details
            </button>
          </div>
        </div>
      `;

      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';

      const inlineClose = modalContent.querySelector('.modal-inline-close');
      if (inlineClose) {
        inlineClose.addEventListener('click', closeModal);
      }
    });
  });

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------
 * 6. Interactive CV / Resume Modal
 * ------------------------------------------------------------- */
function initResumeModal() {
  const resumeModal = document.getElementById('resume-modal');
  const openBtns = document.querySelectorAll('.open-resume-btn');
  const closeBtn = document.getElementById('resume-modal-close-btn');
  const printBtn = document.getElementById('print-resume-btn');

  if (!resumeModal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      resumeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeResume() {
    resumeModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeResume);

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeResume();
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* -------------------------------------------------------------
 * 7. Contact Form with Interactive Feedback
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const statusDiv = document.getElementById('form-status');

  if (!form || !statusDiv) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      statusDiv.className = 'form-status error';
      statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please fill in all required fields before submitting.';
      statusDiv.style.display = 'block';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      statusDiv.className = 'form-status error';
      statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please provide a valid email address.';
      statusDiv.style.display = 'block';
      return;
    }

    // Save submission locally for inspection
    const submissions = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    submissions.push({
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('portfolio_messages', JSON.stringify(submissions));

    // Show simulated success message
    statusDiv.className = 'form-status success';
    statusDiv.innerHTML = `<i class="fas fa-check-circle"></i> Thank you, <strong>${name}</strong>! Your message has been received. You can also reach out directly at <a href="mailto:sandundeshapriya206@gmail.com" style="text-decoration: underline; color: inherit;">sandundeshapriya206@gmail.com</a>.`;
    statusDiv.style.display = 'block';

    form.reset();

    setTimeout(() => {
      statusDiv.style.display = 'none';
    }, 8000);
  });
}

/* -------------------------------------------------------------
 * 8. Scroll Animations & Stat Counters
 * ------------------------------------------------------------- */
function initScrollAnimations() {
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  let animated = false;

  function runCounter() {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-count'), 10);
      let current = 0;
      const increment = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.textContent = target + (stat.getAttribute('data-suffix') || '');
          clearInterval(timer);
        } else {
          stat.textContent = current + (stat.getAttribute('data-suffix') || '');
        }
      }, 35);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        runCounter();
        animated = true;
      }
    });
  }, { threshold: 0.4 });

  const statsSection = document.querySelector('.about-stat-row');
  if (statsSection) {
    observer.observe(statsSection);
  }
}
