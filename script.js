/**
 * NovaPulse — Main Application Logic
 * Interactive UI, Theme Toggle, Smooth Scroll, 3D Tilt, Form Validation & Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initScrollReveal();
  initStatsCounter();
  initTiltCards();
  initAboutTabs();
  initFeatureFilters();
  initModals();
  initFAQAccordion();
  initContactForm();
  initNewsletter();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('novapulse_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('novapulse_theme', newTheme);

    showToast(`თემა შეიცვალა: ${newTheme === 'dark' ? 'ღამის რეჟიმი 🌙' : 'დღის რეჟიმი ☀️'}`);
  });
}

/* --------------------------------------------------------------------------
   2. Sticky Navbar on Scroll
   -------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   3. Mobile Menu Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-menu-drawer');
  const navLinks = drawer ? drawer.querySelectorAll('a') : [];

  if (!toggleBtn || !drawer) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    toggleBtn.classList.toggle('active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close when clicking outside drawer
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });
}

/* --------------------------------------------------------------------------
   4. Scroll Spy (Active Navigation Links)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        desktopLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });
}

/* --------------------------------------------------------------------------
   5. Scroll Reveal Animations (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-fade-up');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. Stats Number Animated Counter
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const startCounters = () => {
    statNumbers.forEach(counter => {
      const targetStr = counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      const isFloat = targetStr.includes('.');
      const targetVal = parseFloat(targetStr);
      const duration = 2000;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = targetVal * easeOut;

        if (isFloat) {
          counter.textContent = currentVal.toFixed(targetStr.split('.')[1].length) + suffix;
        } else {
          counter.textContent = Math.floor(currentVal).toLocaleString() + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = targetStr + suffix;
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  const statsSection = document.querySelector('.hero-stats-wrapper');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      startCounters();
      obs.unobserve(entries[0].target);
    }
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

/* --------------------------------------------------------------------------
   7. 3D Tilt Effect on Interactive Cards
   -------------------------------------------------------------------------- */
function initTiltCards() {
  // Only apply tilt on desktop devices with hover support
  if (window.matchMedia('(hover: none)').matches) return;

  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      card.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.1s ease-out';
    });
  });
}

/* --------------------------------------------------------------------------
   8. About Section Interactive Tabs
   -------------------------------------------------------------------------- */
function initAboutTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabTarget = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const activeContent = document.getElementById(`tab-content-${tabTarget}`);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. Features Category Filters
   -------------------------------------------------------------------------- */
function initFeatureFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const featureCards = document.querySelectorAll('.feature-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      featureCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   10. Modals (Feature Info & Video Demo)
   -------------------------------------------------------------------------- */
function initModals() {
  const featureModal = document.getElementById('feature-modal');
  const demoModal = document.getElementById('demo-modal');
  const featureClose = document.getElementById('modal-close');
  const demoClose = document.getElementById('demo-close');
  const openDemoBtn = document.getElementById('open-demo-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCat = document.getElementById('modal-cat');
  const modalBody = document.getElementById('modal-body');
  const modalIcon = document.getElementById('modal-icon');

  const featureData = {
    performance: {
      title: 'ულტრა-სწრაფი წარმადობა',
      category: 'წარმადობა & სისწრაფე',
      icon: '⚡',
      desc: 'ჩვენი სისტემა იყენებს განაწილებულ Edge ქსელებსა და უახლეს Caching ტექნოლოგიებს. მონაცემთა გადაცემის საშუალო დაყოვნება შეადგენს 0.05 წამს, რაც უზრუნველყოფს უმაღლეს სიჩქარეს მილიონობით ერთდროული მომხმარებლის პირობებშიც კი.'
    },
    security: {
      title: 'საბანკო დონის კიბერდაცვა',
      category: 'უსაფრთხოება & დაცვა',
      icon: '🛡️',
      desc: 'ყველა მონაცემი დაშიფრულია სამხედრო დონის AES-256 და RSA-4096 ალგორითმებით. სისტემაში ინტეგრირებულია მუდმივი DDoS შეტევებისგან დაცვის ფარი, ავტომატური Threat Detection და რეგულარული აუდიტი.'
    },
    ai: {
      title: 'ჭკვიანი AI ავტომატიზაცია',
      category: 'ხელოვნური ინტელექტი',
      icon: '🤖',
      desc: 'ინტელექტუალური ნეირონული მოდელები მუდმივად სწავლობენ თქვენი ბიზნესის სპეციფიკას. ისინი ავტომატურად ამუშავებენ რუტინულ დავალებებს, პროგნოზირებენ ტენდენციებს და ზრდიან გუნდის ეფექტურობას.'
    },
    analytics: {
      title: 'რეალურ დროში მონიტორინგი',
      category: 'მონაცემთა ანალიზი',
      icon: '📊',
      desc: 'მიიღეთ სრული გამჭვირვალობა თქვენი სისტემების მუშაობაზე. ინტერაქტიული გრაფიკები, გაფრთხილებები და მეტრიკები პირდაპირ ეთერში გაწვდით ინფორმაციას ნებისმიერი ანომალიის შესახებ.'
    },
    cloud: {
      title: 'გლობალური Cloud სინქრონიზაცია',
      category: 'ღრუბლოვანი სერვისი',
      icon: '☁️',
      desc: 'შეუზღუდავი მასშტაბირებადობა ნებისმიერ წერტილში. ავტომატური რეზერვირება და მონაცემთა მყისიერი სინქრონიზაცია უზრუნველყოფს ბიზნესის უწყვეტ მუშაობას ნებისმიერ ვითარებაში.'
    },
    support: {
      title: '24/7 პრემიუმ მხარდაჭერა',
      category: 'კლიენტთა მომსახურება',
      icon: '💬',
      desc: 'ჩვენი გუნდი მუდამ თქვენს გვერდითაა. მიიღეთ პერსონალური ტექნიკური მენეჯერის დახმარება, სწრაფი სატელეფონო და ჩათ მხარდაჭერა 15 წუთზე ნაკლებ დროში.'
    }
  };

  // Open Feature Modal
  document.querySelectorAll('.feature-learn-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const featKey = btn.getAttribute('data-feature');
      const data = featureData[featKey];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalCat.textContent = data.category;
      modalIcon.textContent = data.icon;
      modalBody.innerHTML = `<p>${data.desc}</p>`;

      featureModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Open Demo Modal
  if (openDemoBtn && demoModal) {
    openDemoBtn.addEventListener('click', () => {
      demoModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close modals
  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (featureClose) featureClose.addEventListener('click', () => closeModal(featureModal));
  if (demoClose) demoClose.addEventListener('click', () => closeModal(demoModal));

  [featureModal, demoModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(featureModal);
      closeModal(demoModal);
    }
  });
}

/* --------------------------------------------------------------------------
   11. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFAQAccordion() {
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const panel = item.querySelector('.accordion-panel');
      const isOpen = item.classList.contains('active');

      // Close all other panels
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.accordion-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          const otherPanel = otherItem.querySelector('.accordion-panel');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      // Toggle current panel
      if (!isOpen) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 30 + 'px';
      } else {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   12. Contact Form Interactive Validation & Submission
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const privacyCheck = document.getElementById('privacy-agree');

    // Reset errors
    form.querySelectorAll('.form-group, .form-checkbox-group').forEach(grp => {
      grp.classList.remove('has-error');
    });

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      emailInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
      messageInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Checkbox
    if (!privacyCheck.checked) {
      privacyCheck.closest('.form-checkbox-group').classList.add('has-error');
      isValid = false;
    }

    if (!isValid) return;

    // Simulate async submission
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      form.reset();

      showToast('🎉 მადლობა! თქვენი შეტყობინება წარმატებით გაიგზავნა. მალე დაგიკავშირდებით!');
    }, 1200);
  });
}

/* --------------------------------------------------------------------------
   13. Newsletter Subscription
   -------------------------------------------------------------------------- */
function initNewsletter() {
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterInput = document.getElementById('newsletter-email');

  if (!newsletterForm || !newsletterInput) return;

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!newsletterInput.value.trim()) return;

    showToast('✨ თქვენ წარმატებით გამოიწერეთ NovaPulse-ის სიახლეები!');
    newsletterInput.value = '';
  });
}

/* --------------------------------------------------------------------------
   14. Back to Top Button & Scroll Progress Ring
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  const progressCircle = document.querySelector('.progress-ring-circle');
  if (!backToTopBtn || !progressCircle) return;

  const circumference = 2 * Math.PI * 21; // r=21 -> ~131.95
  progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
  progressCircle.style.strokeDashoffset = circumference;

  const handleScroll = () => {
    const scrollY = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / (docHeight || 1);

    if (scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    const offset = circumference - (scrollProgress * circumference);
    progressCircle.style.strokeDashoffset = Math.max(0, offset);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   15. Toast Notification System
   -------------------------------------------------------------------------- */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 400);
  }, 4000);
}
