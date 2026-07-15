// Diamond Beauty Luxury Website Shared Javascript

document.addEventListener('DOMContentLoaded', () => {
  // --- Scroll-based Header Animation ---
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('py-2', 'shadow-lg');
        header.classList.remove('py-4');
        const nav = header.querySelector('nav');
        if (nav) {
          nav.classList.add('py-2');
          nav.classList.remove('py-4');
        }
      } else {
        header.classList.remove('py-2', 'shadow-lg');
        header.classList.add('py-4');
        const nav = header.querySelector('nav');
        if (nav) {
          nav.classList.add('py-4');
          nav.classList.remove('py-2');
        }
      }
    });
  }

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  }

  // --- Mobile Hamburger Menu Drawer Toggle ---
  setupMobileMenu();

  // --- Form Validation & Redirections ---
  setupForms();
  // --- Page Transitions ---
  setupPageTransitions();

  // --- Dynamic Active Navbar Highlighting ---
  highlightActiveLink();
});

// Highlight active navbar link dynamically based on pathname
function highlightActiveLink() {
  const pathname = window.location.pathname;
  let activeId = 'nav-home';
  
  if (pathname.includes('services.html')) {
    activeId = 'nav-services';
  } else if (pathname.includes('gallery.html')) {
    activeId = 'nav-gallery';
  } else if (pathname.includes('about.html')) {
    activeId = 'nav-about';
  } else if (pathname.includes('contact.html')) {
    activeId = 'nav-contact';
  } else if (pathname.includes('booking.html')) {
    activeId = 'nav-booking';
  } else if (pathname === '/' || pathname === '' || pathname.includes('index.html')) {
    activeId = 'nav-home';
  } else {
    activeId = null;
  }

  if (activeId) {
    // Clear active classes from other links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.className = 'nav-link text-on-surface-variant dark:text-on-primary-container font-body-md text-body-md';
    });
    
    const activeLink = document.getElementById(activeId);
    if (activeLink) {
      activeLink.className = 'nav-link text-secondary font-bold border-b-2 border-secondary pb-1 font-body-md text-body-md';
    }
  }
}

// Setup Page Transitions
function setupPageTransitions() {
  const preloader = document.getElementById('preloader');
  const main = document.querySelector('main');
  const isTransitioning = sessionStorage.getItem('pageTransitioning') === 'true';

  if (!isTransitioning) {
    if (preloader) {
      preloader.classList.add('fade-out');
    }
    if (main) {
      main.classList.add('visible');
    }
  } else {
    // Clear transitioning flag so subsequent loads or refreshes do not show the preloader
    sessionStorage.removeItem('pageTransitioning');

    // Initially make main hidden if preloader exists
    if (preloader && main) {
      main.style.opacity = '0';
      main.style.transform = 'translateY(15px)';
    }

    const revealPage = () => {
      if (preloader) {
        preloader.classList.add('fade-out');
      }
      if (main) {
        setTimeout(() => {
          main.classList.add('visible');
          main.style.opacity = '';
          main.style.transform = '';
        }, 200);
      }
    };

    if (preloader) {
      window.addEventListener('load', revealPage);
      // Safety fallback
      setTimeout(revealPage, 2500);
    } else if (main) {
      main.classList.add('visible');
    }
  }

  // Intercept local page link clicks for fade out transition
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
      const href = link.getAttribute('href');
      const target = link.getAttribute('target');
      
      // Ensure it is a valid local page transition link
      if (
        href && 
        href !== '#' &&
        !href.startsWith('#') && 
        !href.startsWith('tel:') && 
        !href.startsWith('mailto:') && 
        target !== '_blank' && 
        !e.ctrlKey && 
        !e.metaKey && 
        !e.shiftKey
      ) {
        e.preventDefault();

        // Set transition flag in storage
        sessionStorage.setItem('pageTransitioning', 'true');

        // Remove the helper class that bypasses transition
        document.documentElement.classList.remove('no-page-transition');
        
        if (main) {
          main.style.opacity = '';
          main.style.transform = '';
          main.classList.remove('visible');
        }
        
        if (preloader) {
          preloader.classList.remove('fade-out');
        }
        
        setTimeout(() => {
          window.location.href = href;
        }, 550);
      }
    }
  });
}



// Setup Mobile Menu Drawer
function setupMobileMenu() {
  const trigger = document.querySelector('.mobile-menu-trigger') || document.querySelector('nav button.md\\:hidden');
  const drawer = document.getElementById('mobile-menu');
  
  if (trigger && drawer) {
    // Make sure we have a close button in the drawer
    const closeBtn = drawer.querySelector('.close-menu-btn') || drawer.querySelector('button');
    
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      drawer.classList.add('active');
      document.body.classList.add('overflow-hidden');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
      });
    }

    // Close when clicking outside the menu content
    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('active') && !drawer.contains(e.target) && !trigger.contains(e.target)) {
        drawer.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }
}

// Setup Form Validation and WhatsApp Redirection
function setupForms() {
  // Appointment Form
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    // Preselect service from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam) {
      const serviceSelect = appointmentForm.querySelector('select[name="service"]');
      if (serviceSelect) {
        serviceSelect.value = serviceParam;
      }
    }

    // Add real-time label transitions
    const inputs = appointmentForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const label = input.parentElement.querySelector('label');
      if (label) {
        input.addEventListener('focus', () => {
          label.style.color = '#C9A227';
        });
        input.addEventListener('blur', () => {
          if (!input.value) {
            label.style.color = '#755b00'; // Default secondary color
          }
        });
      }
    });

    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(appointmentForm);
      const fullname = formData.get('fullname');
      const mobile = formData.get('mobile');
      const email = formData.get('email');
      const date = formData.get('date');
      const notes = formData.get('notes') || 'None';
      
      const serviceSelect = appointmentForm.querySelector('select[name="service"]');
      const serviceText = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : 'Selected Service';
      
      const timeSelect = appointmentForm.querySelector('select[name="time"]');
      const timeText = timeSelect ? timeSelect.options[timeSelect.selectedIndex].text : 'Selected Time';

      // Visual Feedback
      const submitBtn = document.getElementById('submit-btn');
      const originalContent = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="material-symbols-outlined animate-spin">refresh</span> <span>REDIRECTING TO WHATSAPP...</span>';

      // Construct WhatsApp message
      const wpMessage = `Hello Diamond Beauty Salon,
I would like to book an appointment:
- Service: ${serviceText}
- Name: ${fullname}
- Mobile: ${mobile}
- Email: ${email}
- Preferred Date: ${date}
- Preferred Time: ${timeText}
- Additional Notes: ${notes}`;

      const encodedMessage = encodeURIComponent(wpMessage);
      const whatsappURL = `https://wa.me/919311649802?text=${encodedMessage}`;

      // Simulate a small delay for premium feel
      setTimeout(() => {
        // Redirect to WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Show success screen in the page
        const successContainer = document.getElementById('success-container');
        const formContainer = document.getElementById('booking-form-container');
        const userNameDisplay = document.getElementById('user-name-display');
        const serviceDisplay = document.getElementById('service-display');

        if (successContainer && formContainer) {
          if (userNameDisplay) userNameDisplay.textContent = fullname;
          if (serviceDisplay) serviceDisplay.textContent = serviceText;
          
          successContainer.classList.remove('hidden');
          setTimeout(() => {
            successContainer.classList.remove('opacity-0');
          }, 50);

          formContainer.style.opacity = '0';
          formContainer.style.pointerEvents = 'none';
        }

        // Restore button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
      }, 1200);
    });
  }

  // Inquiry/Contact Form
  const contactForm = document.querySelector('form[onsubmit*="conciliation"]'),
        inquiryForm = document.querySelector('.lg\\:col-span-7 form'); // Check both
  
  const actualContactForm = contactForm || inquiryForm;
  if (actualContactForm && actualContactForm.id !== 'appointment-form') {
    actualContactForm.removeAttribute('onsubmit'); // Remove default alert
    
    // Add real-time label focus behaviors
    const inputs = actualContactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      const label = input.parentElement.querySelector('label');
      if (label) {
        input.addEventListener('focus', () => {
          label.style.color = '#C9A227';
        });
        input.addEventListener('blur', () => {
          if (!input.value) {
            label.style.color = '#747878'; // Reset to default outline color
          }
        });
      }
    });

    actualContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = actualContactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'SENDING INQUIRY...';

      // Mock submit delay
      setTimeout(() => {
        // Show a nice inline success feedback alert
        const formParent = actualContactForm.parentElement;
        
        // Save current HTML structure to allow reset if needed
        const originalFormHTML = formParent.innerHTML;

        formParent.innerHTML = `
          <div class="flex flex-col items-center justify-center text-center py-12 px-4 animate-fade-in">
            <div class="w-16 h-16 bg-secondary-fixed/30 rounded-full flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-secondary text-4xl">done</span>
            </div>
            <h3 class="font-headline-md text-headline-md text-primary mb-4">Message Sent</h3>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-sm mb-8">
              Thank you for contacting us. Our concierge team will get back to you shortly.
            </p>
            <button id="reset-inquiry-btn" class="text-secondary font-bold uppercase tracking-widest border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all">
              Send Another Message
            </button>
          </div>
        `;

        document.getElementById('reset-inquiry-btn').addEventListener('click', () => {
          formParent.innerHTML = originalFormHTML;
          setupForms(); // re-initialize
        });
      }, 1500);
    });
  }
}
