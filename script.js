document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded");
    
    // Add background to nav when scrolling
    const navbar = document.querySelector('nav');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // MODIFIED: Different hover effects for equipment vs portfolio
    // Equipment section - WITH hover effects and image swap
    const equipmentItems = document.querySelectorAll('#equipment .portfolio-item');
    
    equipmentItems.forEach(item => {
        // Setup image swap on hover
        const img = item.querySelector('img');
        if (img) {
            // Create hover image path by adding "-hover" before extension
            const src = img.getAttribute('src');
            const dotIndex = src.lastIndexOf('.');
            const hoverSrc = src.substring(0, dotIndex) + '-hover' + src.substring(dotIndex);
            
            // Store original and hover images
            img.dataset.originalSrc = src;
            img.dataset.hoverSrc = hoverSrc;
        }
        
        item.addEventListener('mouseenter', () => {
            // Change image to hover version
            const img = item.querySelector('img');
            if (img && img.dataset.hoverSrc) {
                img.src = img.dataset.hoverSrc;
            }
            
            // Show overlay with fade
            const overlay = item.querySelector('.portfolio-overlay');
            if (overlay) {
                overlay.classList.add('show-overlay');
            }
        });
        
        item.addEventListener('mouseleave', () => {
            // Change image back to original
            const img = item.querySelector('img');
            if (img && img.dataset.originalSrc) {
                img.src = img.dataset.originalSrc;
            }
            
            // Hide overlay
            const overlay = item.querySelector('.portfolio-overlay');
            if (overlay) {
                overlay.classList.remove('show-overlay');
            }
        });
    });
    
    // Portfolio section - NO hover effects
    const portfolioItems = document.querySelectorAll('#portfolio .portfolio-item');
    
    portfolioItems.forEach(item => {
        // Disable hover effects by removing any event listeners
        const overlay = item.querySelector('.portfolio-overlay');
        if (overlay) {
            overlay.style.display = 'none'; // Hide overlay completely
        }
    });
    
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (burger && nav && navLinks) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            burger.classList.toggle('toggle');
        });
    }
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav && nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    navLinks.forEach(link => {
                        link.style.animation = '';
                    });
                }
            }
        });
    });
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    
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
    
    // FIXED: Initialize theme toggle
    initThemeToggle();
    
    // FIXED: Initialize custom language selector
    initLanguageSelector();
    
    // Add favicon to prevent 404 error
    addFavicon();
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

// FIXED: Theme toggle functionality
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
    themeToggle.addEventListener('click', function() {
        // Toggle dark mode class
        const isDarkMode = document.body.classList.toggle('dark-mode');
        
        // Update icon
        themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
        
        // Save preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
}

// FIXED: Language selector functionality
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
    selectSelected.addEventListener('click', function(e) {
        e.stopPropagation();
        selectItems.classList.toggle('select-show');
        selectItems.classList.toggle('select-hide');
        selectSelected.classList.toggle('active');
    });
    
    // Handle option selection
    selectOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-value');
            
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
            
            // Apply translations
            if (typeof window.updatePageLanguage === 'function') {
                window.updatePageLanguage(lang);
            }
            
            // Close dropdown
            selectItems.classList.add('select-hide');
            selectItems.classList.remove('select-show');
            selectSelected.classList.remove('active');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!selectSelected.contains(e.target) && !selectItems.contains(e.target)) {
            selectItems.classList.add('select-hide');
            selectItems.classList.remove('select-show');
            selectSelected.classList.remove('active');
        }
    });

    
}