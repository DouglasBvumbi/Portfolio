// ===========================
// Global Variables
// ===========================
const themeToggle = document.getElementById('themeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-link');

// ===========================
// Theme Toggle (Dark/Light Mode)
// ===========================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', toggleTheme);

// ===========================
// Mobile Menu Toggle
// ===========================
function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

mobileMenuToggle.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// ===========================
// Active Navigation Link on Scroll
// ===========================
function setActiveNavLink() {
    const sections = document.querySelectorAll('.section, .hero');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

// ===========================
// Smooth Scrolling
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Typing Animation for Hero Section
// ===========================
const roles = [
    'Database Analyst',
    'IT Technician',
    'Information Specialist',
    'Graphic Designer',
    'Web Developer',
    'Systems Analyst'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRole() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before next role
    }

    setTimeout(typeRole, typingSpeed);
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeRole, 1000);
});

// ===========================
// Scroll to Top Button
// ===========================
function handleScrollTopButton() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', handleScrollTopButton);

// ===========================
// Skills Animation on Scroll
// ===========================
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

window.addEventListener('load', animateSkills);

// ===========================
// Projects Data and Rendering
// ===========================
const projectsData = [
    {
        id: 1,
        title: 'Online Border Management System',
        category: 'web',
        description: 'Comprehensive digital platform developed for Zimbabwe\'s Department of Immigration to streamline travel document processing and visa management. Features secure data handling, automated workflow processes, and real-time status tracking for enhanced efficiency in immigration services.',
        image: 'img/evisaimg.png',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        liveLink: 'https://www.evisa.gov.zw/', // Easy to update
        githubLink: '#'
    },
    {
        id: 2,
        title: 'Creative Media, Marketing & Student Engagement',
        category: 'design',
        description: 'Produced a wide range of promotional materials for the university\'s learning center (library), including flyers, posters, videos, and digital content. Designed and customized Kumospace virtual environments to support online engagement and branding. Created high-quality visuals using Photoshop, Illustrator, After Effects, and Doodly. Supported student outreach by organizing events, presenting library services, and driving awareness of academic resources through targeted marketing initiatives.',
        image: 'img/upimg.png',
        technologies: ['SQL Server', 'Python', 'Power BI', 'Azure'],
        liveLink: 'gallery.html',
        githubLink: '#'
    },
    {
        id: 9,
        title: 'Quotation Generator Application — Femtobiotics',
        category: 'it',
        description: 'Designed and developed a standalone Windows application for generating accurate, automated quotations for pharmacies. Built with Visual Studio 2022 and packaged for offline use to support field operations. Implemented clean UI workflows, automatic price calculations, and export-ready quotation templates. Delivered a reliable, production-ready tool currently used by the company to streamline quotation processing.',
        image: 'img/f1.png',
        technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
        liveLink: 'femtobiotics.html',
        githubLink: 'https://github.com/yourusername/project'
    }
];

// Render projects
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === filter);

    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-category="${project.category}" data-aos="fade-up">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x250/6366f1/ffffff?text=${encodeURIComponent(project.title)}'">
                <div class="project-overlay">
                    <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="project-link" title="View Live Project">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                    ${project.githubLink !== '#' ? `
                        <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="project-link" title="View Code">
                            <i class="fab fa-github"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
            <div class="project-content">
                <span class="project-category">${getCategoryName(project.category)}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
    `).join('');

    // Reinitialize AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

function getCategoryName(category) {
    const categories = {
        'web': 'Web App',
        'database': 'Database',
        'design': 'Design',
        'it': 'IT Solution'
    };
    return categories[category] || category;
}

// Project filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        const filter = button.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// Initial render
window.addEventListener('load', () => {
    renderProjects();
});

// ===========================
// Contact Form Validation and Submission
// ===========================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm() {
    let isValid = true;
    const formData = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        subject: document.getElementById('subject'),
        message: document.getElementById('message')
    };

    // Reset errors
    Object.values(formData).forEach(field => {
        field.parentElement.classList.remove('error');
        field.parentElement.querySelector('.error-message').textContent = '';
    });

    // Validate name
    if (formData.name.value.trim().length < 2) {
        showError(formData.name, 'Name must be at least 2 characters long');
        isValid = false;
    }

    // Validate email
    if (!validateEmail(formData.email.value.trim())) {
        showError(formData.email, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate subject
    if (formData.subject.value.trim().length < 3) {
        showError(formData.subject, 'Subject must be at least 3 characters long');
        isValid = false;
    }

    // Validate message
    if (formData.message.value.trim().length < 10) {
        showError(formData.message, 'Message must be at least 10 characters long');
        isValid = false;
    }

    return isValid;
}

function showError(field, message) {
    field.parentElement.classList.add('error');
    field.parentElement.querySelector('.error-message').textContent = message;
}

function showFormStatus(message, isSuccess) {
    const formStatus = document.getElementById('formStatus');
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + (isSuccess ? 'success' : 'error');
    
    setTimeout(() => {
        formStatus.style.display = 'none';
        formStatus.className = 'form-status';
    }, 5000);
}

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm ${formData.name}

📧 Email: ${formData.email}
📋 Subject: ${formData.subject}

💬 Message:
${formData.message}`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Replace with your WhatsApp number (include country code, no + symbol)
    const whatsappNumber = '263777961750'; // Update this with your actual WhatsApp number
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    showFormStatus('Redirecting to WhatsApp...', true);
    
    // Reset form after a short delay
    setTimeout(() => {
        contactForm.reset();
        showFormStatus('', false);
    }, 2000);
});

// Real-time validation
const formInputs = contactForm.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim().length > 0) {
            input.parentElement.classList.remove('error');
            input.parentElement.querySelector('.error-message').textContent = '';
        }
    });
});

// ===========================
// Particles.js Configuration
// ===========================
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#8b7355'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#8b7355',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ===========================
// Initialize AOS (Animate On Scroll)
// ===========================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            delay: 100
        });
    }
}

// ===========================
// Lazy Loading Images
// ===========================
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// ===========================
// Performance Optimization: Debounce
// ===========================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handlers for better performance
const debouncedScrollHandler = debounce(() => {
    handleNavbarScroll();
    setActiveNavLink();
    handleScrollTopButton();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// ===========================
// Initialize All Features on Page Load
// ===========================
window.addEventListener('load', () => {
    initTheme();
    initParticles();
    initAOS();
    initLazyLoading();
    
    // Add fade-in animation to page
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Service Worker Registration (Optional for PWA)
// ===========================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// ===========================
// Console Message (Optional Easter Egg)
// ===========================
console.log('%c👋 Hi there, curious developer!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cLike what you see? Let\'s connect!', 'color: #10b981; font-size: 14px;');
console.log('%c🔗 GitHub: https://github.com/yourusername', 'color: #64748b; font-size: 12px;');
console.log('%c💼 LinkedIn: https://linkedin.com/in/yourusername', 'color: #64748b; font-size: 12px;');

// ===========================
// Export functions for testing (if needed)
// ===========================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        validateForm,
        debounce
    };
}
