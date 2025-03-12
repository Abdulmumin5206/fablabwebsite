document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded");

    // Mobile Navigation - Burger Menu
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', function () {
            // Toggle nav-active class on nav-links
            navLinks.classList.toggle('nav-active');

            // Toggle the burger animation
            this.classList.toggle('toggle');

            // Animate each nav link
            document.querySelectorAll('.nav-links li').forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    } else {
        console.error("Burger or nav-links element not found!");
    }

    // Add background to nav when scrolling
  // Navigation background kaydırma ile eklensin
const navbar = document.querySelector('nav');

if (navbar) {
    // Sayfa ilk yüklendiğinde
    navbar.classList.remove('scrolled'); // Başlangıçta scrolled class'ını kaldır
    
    // Scroll olayını dinle
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Sayfa yüklendikten sonra geçiş efektlerini etkinleştir
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    if (burger) burger.classList.remove('toggle');
                    document.querySelectorAll('.nav-links li').forEach(link => {
                        link.style.animation = '';
                    });
                }
            }
        });
    });

    // Form Submission
    const contactForm = document.querySelector('#contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get current language for message
            const lang = localStorage.getItem('language') || 'en';
            let message = 'Thank you for your message! In a real website, this would be sent to our server.';

            if (window.translations && window.translations[lang] && window.translations[lang].formSubmitted) {
                message = window.translations[lang].formSubmitted;
            }

            alert(message);
            contactForm.reset();
        });
    }

    // Scroll to top button
    createScrollToTopButton();

    // CTA Button Scroll
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const servicesSection = document.querySelector('#services');

            if (servicesSection) {
                window.scrollTo({
                    top: servicesSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Initialize hero slideshow
    initHeroSlideshow();

    // Initialize theme toggle
    initThemeToggle();

    // Initialize custom language selector
    initLanguageSelector();

    // Equipment filtering functionality
    initEquipmentFilter();

    // Portfolio enhancements
    enhancePortfolio();

    // Add favicon to prevent 404 error
    addFavicon();

    // Translate equipment and portfolio items
    translateDynamicContent();
});

// Function to add a simple favicon
function addFavicon() {
    if (!document.querySelector('link[rel="icon"]')) {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="0.9em" font-size="90">🏭</text></svg>';
        document.head.appendChild(favicon);
    }
}

// Function to create scroll to top button
function createScrollToTopButton() {
    if (document.querySelector('.scroll-top-btn')) return;

    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-top-btn';

    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
}

// Initialize hero slideshow
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero .slide');
    const dots = document.querySelectorAll('.nav-dot');

    if (!slides.length) return;

    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');

        currentSlide = index;
    };

    // Function to show the next slide
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    // Start the slideshow
    if (slides.length > 1) {
        showSlide(0);

        slideInterval = setInterval(nextSlide, 5000);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(slideInterval);
                showSlide(index);
                slideInterval = setInterval(nextSlide, 5000);
            });
        });
    }
}

// Theme toggle functionality with page reload
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-toggle-icon');

    if (!themeToggle || !themeIcon) {
        console.error("Theme toggle elements not found");
        return;
    }

    // Apply saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Apply theme on load
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.className = 'fas fa-sun';
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.className = 'fas fa-moon';
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', function () {
        // Toggle dark mode class
        const isDarkMode = document.body.classList.toggle('dark-mode');

        // Update icon
        themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';

        // Save preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        // Reload the page
        window.location.reload();
    });
}

// Language selector functionality with page reload
function initLanguageSelector() {
    const selectSelected = document.querySelector('.select-selected');
    const selectItems = document.querySelector('.select-items');
    const selectOptions = document.querySelectorAll('.select-item');

    if (!selectSelected || !selectItems || !selectOptions.length) {
        console.error("Language selector elements not found");
        return;
    }

    // Apply saved language or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';

    // Set initial display
    selectOptions.forEach(option => {
        const lang = option.getAttribute('data-value');
        if (lang === savedLanguage) {
            const label = selectSelected.querySelector('.lang-label');
            if (label) {
                label.textContent = option.textContent;
            }
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });

    // Apply translations on load
    if (typeof window.updatePageLanguage === 'function') {
        window.updatePageLanguage(savedLanguage);
    } else {
        console.error("updatePageLanguage function not found");
    }

    // Toggle dropdown
    selectSelected.addEventListener('click', function (e) {
        e.stopPropagation();
        selectItems.classList.toggle('select-show');
        selectSelected.classList.toggle('active');
    });

    // Handle option selection
    selectOptions.forEach(option => {
        option.addEventListener('click', function () {
            const lang = this.getAttribute('data-value');
            const currentLang = localStorage.getItem('language') || 'en';

            // Only reload if language actually changed
            if (lang !== currentLang) {
                // Update display
                const label = selectSelected.querySelector('.lang-label');
                if (label) {
                    label.textContent = this.textContent;
                }

                // Update selection state
                selectOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');

                // Save preference
                localStorage.setItem('language', lang);

                // Close dropdown
                selectItems.classList.remove('select-show');
                selectSelected.classList.remove('active');

                // Reload the page to apply new language
                window.location.reload();
            } else {
                // Just close the dropdown if same language selected
                selectItems.classList.remove('select-show');
                selectSelected.classList.remove('active');
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!selectSelected.contains(e.target) && !selectItems.contains(e.target)) {
            selectItems.classList.remove('select-show');
            selectSelected.classList.remove('active');
        }
    });
}

// Equipment filtering functionality
function initEquipmentFilter() {
    const equipmentTabs = document.querySelectorAll('.equipment-tab');
    const equipmentItems = document.querySelectorAll('.equipment-item');

    if (!equipmentTabs.length || !equipmentItems.length) return;

    // Initialize with "all" selected
    equipmentTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            equipmentTabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Get selected category
            const category = tab.getAttribute('data-category');

            // Filter equipment items
            equipmentItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Enhance portfolio section
function enhancePortfolio() {
    // Get all portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Define titles for each category
    const titles = {
        'fdm': [
            '3D Printed Mechanical Parts',
            'Custom Prototype Assembly',
            'Educational Model Kit',
            'Industrial Component Replica'
        ],
        'sla': [
            'High-Detail Figurine',
            'Dental Model Prototype',
            'Jewelry Design Sample',
            'Complex Mechanical Assembly'
        ],
        'laser': [
            'Decorative Panel Design',
            'Custom Signage Solution',
            'Architectural Model Component',
            'Precision-Cut Product Parts'
        ],
        'cnc': [
            'Machined Aluminum Component',
            'Wood Carved Decorative Panel',
            'Custom Fixture Assembly',
            'Precision Manufacturing Sample'
        ],
        'uv': [
            'UV Printed Acrylic Display',
            'Glass Surface Customization',
            'Wood Product Personalization',
            'Electronic Enclosure Printing'
        ]
    };

    // Assign titles to portfolio items based on category
    portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (category && titles[category]) {
            // Find index within its category
            const categoryItems = Array.from(document.querySelectorAll(`.portfolio-item[data-category="${category}"]`));
            const index = categoryItems.indexOf(item);

            if (index >= 0 && index < titles[category].length) {
                item.setAttribute('data-title', titles[category][index]);
            }
        }
    });
}

// Function to translate equipment specs and portfolio item descriptions
function translateDynamicContent() {
    const currentLang = localStorage.getItem('language') || 'en';
    if (currentLang === 'en') return; // No need to translate if English

    if (!window.translations || !window.translations[currentLang]) {
        console.warn(`Translations for ${currentLang} not found for dynamic content`);
        return;
    }

    // Get the translations for the current language
    const tr = window.translations[currentLang];

    // Translate equipment headings and specifications
    document.querySelectorAll('.equipment-info h3').forEach(heading => {
        const key = `equipment_${heading.textContent.trim().replace(/\s+/g, '_').toLowerCase()}`;
        if (tr[key]) {
            heading.textContent = tr[key];
        }
    });

    // Translate equipment specs
    document.querySelectorAll('.equipment-specs').forEach(spec => {
        const originalText = spec.textContent.trim();
        const specKey = `spec_${originalText.split(':')[0].trim().replace(/\s+/g, '_').toLowerCase()}`;

        if (tr[specKey]) {
            // Keep the measurement values, just translate the label
            const valueText = originalText.includes(':') ? ': ' + originalText.split(':')[1].trim() : '';
            spec.textContent = tr[specKey] + valueText;
        }
    });

    // Translate portfolio item titles
    document.querySelectorAll('.portfolio-item h3').forEach(title => {
        const originalText = title.textContent.trim();
        const titleKey = `portfolio_${originalText.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}`;

        if (tr[titleKey]) {
            title.textContent = tr[titleKey];
        }
    });
}