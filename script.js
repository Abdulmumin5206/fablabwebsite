document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded");
    
    // Add background to nav when scrolling
    const navbar = document.querySelector('nav');
    
    // Check scroll position on page load
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
    
    // Portfolio items hover
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const overlay = item.querySelector('.portfolio-overlay');
            if (overlay) {
                overlay.style.transform = 'translateY(0)';
            }
            
            // Add hover class to image container if it exists
            const imageContainer = item.querySelector('.image-transition-container');
            if (imageContainer) {
                imageContainer.classList.add('hover');
            }
            
            // Activate hover image if it exists
            const hoverImage = item.querySelector('.hover-image');
            const mainImage = item.querySelector('.main-image');
            if (hoverImage && mainImage) {
                hoverImage.classList.add('active');
                mainImage.classList.add('inactive');
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const overlay = item.querySelector('.portfolio-overlay');
            if (overlay) {
                overlay.style.transform = 'translateY(100%)';
            }
            
            // Remove hover class from image container
            const imageContainer = item.querySelector('.image-transition-container');
            if (imageContainer) {
                imageContainer.classList.remove('hover');
            }
            
            // Deactivate hover image
            const hoverImage = item.querySelector('.hover-image');
            const mainImage = item.querySelector('.main-image');
            if (hoverImage && mainImage) {
                hoverImage.classList.remove('active');
                mainImage.classList.remove('inactive');
            }
        });
    });
    
    // Equipment image hover effect
    setupEquipmentHoverImages();
    
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (burger && nav && navLinks) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger Animation
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
                    top: targetElement.offsetTop - 70, // Offset for fixed navbar
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
            
            if (translations[lang] && translations[lang].formSubmitted) {
                message = translations[lang].formSubmitted;
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
    initCustomLanguageSelector();
});

// Function to create scroll to top button
function createScrollToTopButton() {
    // Check if button already exists
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
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Update current slide index
        currentSlide = index;
    };
    
    // Function to show the next slide
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };
    
    // Start the slideshow
    if (slides.length > 1) {
        // Set initial slide
        showSlide(0);
        
        // Start automatic slideshow
        slideInterval = setInterval(nextSlide, 5000);
        
        // Add click event to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(slideInterval);
                showSlide(index);
                slideInterval = setInterval(nextSlide, 5000);
            });
        });
    }
}

// Initialize theme toggle functionality
function initThemeToggle() {
    console.log("Initializing theme toggle");
    const themeToggle = document.querySelector('.theme-toggle');
    const themeMoonIcon = document.querySelector('.theme-toggle .fa-moon');
    const themeSunIcon = document.querySelector('.theme-toggle .fa-sun');
    
    if (!themeToggle) return;
    
    // Set initial theme based on localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log("Saved theme:", savedTheme);
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Create moon icon if it doesn't exist
    if (!themeMoonIcon && !document.getElementById('theme-toggle-icon')) {
        const moonIcon = document.createElement('i');
        moonIcon.className = 'fas fa-moon';
        themeToggle.appendChild(moonIcon);
    }
    
    // Create sun icon if it doesn't exist
    if (!themeSunIcon && !document.getElementById('theme-toggle-icon')) {
        const sunIcon = document.createElement('i');
        sunIcon.className = 'fas fa-sun';
        themeToggle.appendChild(sunIcon);
    }
    
    // Special case for single icon with ID
    const singleThemeIcon = document.getElementById('theme-toggle-icon');
    if (singleThemeIcon) {
        // Update icon based on current theme
        if (savedTheme === 'dark') {
            singleThemeIcon.classList.remove('fa-moon');
            singleThemeIcon.classList.add('fa-sun');
        } else {
            singleThemeIcon.classList.add('fa-moon');
            singleThemeIcon.classList.remove('fa-sun');
        }
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        console.log("Theme toggle clicked");
        document.body.classList.toggle('dark-mode');
        
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // Update single icon if it exists
        if (singleThemeIcon) {
            if (isDarkMode) {
                singleThemeIcon.classList.remove('fa-moon');
                singleThemeIcon.classList.add('fa-sun');
            } else {
                singleThemeIcon.classList.add('fa-moon');
                singleThemeIcon.classList.remove('fa-sun');
            }
        }
    });
}

// Function to set up equipment hover images
function setupEquipmentHoverImages() {
    console.log("Setting up equipment hover images");
    const equipmentItems = document.querySelectorAll('#equipment .portfolio-item');
    
    equipmentItems.forEach(item => {
        // Skip if already processed or missing main components
        if (item.querySelector('.image-transition-container')) return;
        
        const mainImage = item.querySelector('img');
        if (!mainImage) return;
        
        const originalSrc = mainImage.src;
        
        // Extract the filename from the path
        const lastSlash = originalSrc.lastIndexOf('/');
        const basePath = originalSrc.substring(0, lastSlash + 1);
        const fileName = originalSrc.substring(lastSlash + 1);
        
        // Create hover image path by adding "-hover" before the extension
        const dotIndex = fileName.lastIndexOf('.');
        const nameWithoutExt = fileName.substring(0, dotIndex);
        const extension = fileName.substring(dotIndex);
        const hoverFileName = nameWithoutExt + "-hover" + extension;
        const hoverSrc = basePath + hoverFileName;
        
        console.log("Original image:", originalSrc);
        console.log("Hover image:", hoverSrc);
        
        // Create container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-transition-container';
        
        // Move original image
        const originalParent = mainImage.parentNode;
        originalParent.removeChild(mainImage);
        mainImage.classList.add('main-image');
        imageContainer.appendChild(mainImage);
        
        // Create hover image
        const hoverImage = document.createElement('img');
        hoverImage.src = hoverSrc;
        hoverImage.alt = mainImage.alt;
        hoverImage.className = 'hover-image';
        imageContainer.appendChild(hoverImage);
        
        // Add container to item
        originalParent.appendChild(imageContainer);
    });
}

// Initialize custom language selector
function initCustomLanguageSelector() {
    console.log("Initializing custom language selector");
    const selectSelected = document.querySelector('.select-selected');
    const selectItems = document.querySelector('.select-items');
    const selectOptions = document.querySelectorAll('.select-item');
    
    if (!selectSelected || !selectItems || !selectOptions.length) {
        console.warn("Language selector elements not found");
        return;
    }
    
    // Get saved language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en';
    console.log("Saved language:", savedLanguage);
    
    // Set initial selected option and update text
    selectOptions.forEach(option => {
        const optionValue = option.getAttribute('data-value');
        if (optionValue === savedLanguage) {
            const label = selectSelected.querySelector('.lang-label');
            if (label) {
                label.textContent = option.textContent;
            }
            option.classList.add('selected');
        }
    });
    
    // Update page language on load
    if (typeof updatePageLanguage === 'function') {
        updatePageLanguage(savedLanguage);
    } else {
        console.error("updatePageLanguage function not found");
    }
    
    // Toggle dropdown on click
    selectSelected.addEventListener('click', () => {
        console.log("Language selector clicked");
        selectSelected.classList.toggle('active');
        selectItems.classList.toggle('select-hide');
        selectItems.classList.toggle('select-show');
    });
    
    // Handle option selection
    selectOptions.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value');
            const text = option.textContent;
            console.log("Language selected:", value, text);
            
            // Update selected text
            const label = selectSelected.querySelector('.lang-label');
            if (label) {
                label.textContent = text;
            }
            
            // Update selected option
            selectOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            
            // Close dropdown
            selectSelected.classList.remove('active');
            selectItems.classList.add('select-hide');
            selectItems.classList.remove('select-show');
            
            // Save selection to localStorage
            localStorage.setItem('language', value);
            
            // Update page language
            if (typeof updatePageLanguage === 'function') {
                updatePageLanguage(value);
            } else {
                console.error("updatePageLanguage function not found");
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!selectSelected.contains(e.target) && !selectItems.contains(e.target)) {
            selectSelected.classList.remove('active');
            selectItems.classList.add('select-hide');
            selectItems.classList.remove('select-show');
        }
    });
}

// Gallery Modal functionality
function createGalleryModal() {
    // Create modal if it doesn't exist
    if (!document.querySelector('.gallery-modal')) {
        const modal = document.createElement('div');
        modal.className = 'gallery-modal';
        
        modal.innerHTML = `
            <span class="close-modal">&times;</span>
            <div class="modal-content">
                <div class="gallery-images"></div>
                <div class="gallery-controls">
                    <button class="prev-btn"><i class="fas fa-chevron-left"></i></button>
                    <button class="next-btn"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal event
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
        
        // Navigation buttons
        const prevBtn = modal.querySelector('.prev-btn');
        const nextBtn = modal.querySelector('.next-btn');
        
        prevBtn.addEventListener('click', () => {
            navigateGallery(-1);
        });
        
        nextBtn.addEventListener('click', () => {
            navigateGallery(1);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'block') {
                if (e.key === 'ArrowLeft') {
                    navigateGallery(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateGallery(1);
                }
            }
        });
    }
}

// Initialize portfolio gallery if needed
function initPortfolioGallery() {
    const portfolioItems = document.querySelectorAll('.portfolio-container .portfolio-item');
    
    // Create gallery modal
    createGalleryModal();
    
    // Add click event to portfolio items
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openGalleryModal(item, index);
        });
    });
}

// Open gallery modal with selected image
function openGalleryModal(item, index) {
    const modal = document.querySelector('.gallery-modal');
    const galleryImages = modal.querySelector('.gallery-images');
    
    // Clear existing images
    galleryImages.innerHTML = '';
    
    // Find all images in the same category
    const category = item.getAttribute('data-category');
    const categoryItems = document.querySelectorAll(`.portfolio-item[data-category="${category}"]`);
    
    // Add images to modal
    categoryItems.forEach((categoryItem, i) => {
        const img = categoryItem.querySelector('img').cloneNode(true);
        img.classList.toggle('active', i === index);
        galleryImages.appendChild(img);
    });
    
    // Store current index
    modal.setAttribute('data-current-index', index);
    modal.setAttribute('data-category', category);
    
    // Show modal
    modal.style.display = 'block';
}

// Navigate through gallery images
function navigateGallery(direction) {
    const modal = document.querySelector('.gallery-modal');
    const images = modal.querySelectorAll('.gallery-images img');
    
    let currentIndex = parseInt(modal.getAttribute('data-current-index'));
    let newIndex = currentIndex + direction;
    
    // Loop around if at end
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    
    // Update active image
    images.forEach((img, i) => {
        img.classList.toggle('active', i === newIndex);
    });
    
    // Update current index
    modal.setAttribute('data-current-index', newIndex);
}