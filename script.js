/**
 * FabLab Website Core Functionality
 * Features:
 * - Mobile Navigation
 * - Scroll Effects
 * - Smooth Scrolling
 * - Hero Slideshow
 * - Theme Toggle
 * - Language Selector
 * - Equipment & Portfolio Filtering
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all core functionality
    initNavigation();
    initScrollEffects();
    initSmoothScrolling();
    initContactForm();
    createScrollToTopButton();
    initHeroSlideshow();
    initThemeToggle();
    initLanguageSelector();
    initEquipmentFilter();
    enhancePortfolio();
    initFAQ();
    initFileUpload();
    initFormAnimations();
    
    // Add favicon to prevent 404 error
    if (!document.querySelector('link[rel="icon"]')) {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="0.9em" font-size="90">🏭</text></svg>';
        document.head.appendChild(favicon);
    }
    
    // Mark body as loaded to enable transitions
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

/**
 * Initialize Mobile Navigation
 */
function initNavigation() {
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
    }
}

/**
 * Initialize Scroll Effects
 */
function initScrollEffects() {
    const navbar = document.querySelector('nav');
    
    if (navbar) {
        // Clear scrolled class on initial load
        navbar.classList.remove('scrolled');
        
        // Add scrolled class when scrolling down
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

/**
 * Initialize Smooth Scrolling
 */
function initSmoothScrolling() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const ctaButton = document.querySelector('.cta-button');
    
    
    // Link click handling
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
    
    // CTA button handling
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
}

/**
 * Initialize Contact Form
 */
function initContactForm() {
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
}

/**
 * Create Scroll To Top Button
 */
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

/**
 * Initialize Hero Slideshow
 */
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

/**
 * Initialize Theme Toggle
 */
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-toggle-icon');
    
    if (!themeToggle || !themeIcon) return;
    
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
    
    // Toggle theme on click with immediate reload
    themeToggle.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Toggle the theme preference in localStorage
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        
        // Reload the page to apply the new theme
        window.location.reload();
    });
}

/**
 * Initialize Language Selector
 */
function initLanguageSelector() {
    const selectSelected = document.querySelector('.select-selected');
    const selectItems = document.querySelector('.select-items');
    const selectOptions = document.querySelectorAll('.select-item');
    
    if (!selectSelected || !selectItems || !selectOptions.length) return;
    
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

/**
 * Initialize Equipment Filter
 */
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

/**
 * Enhance Portfolio Section
 */
function enhancePortfolio() {
    // Get all portfolio items and tabs
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioTabs = document.querySelectorAll('.portfolio-tab');
    
    // Set up filter for portfolio items
    if (portfolioTabs.length && portfolioItems.length) {
        portfolioTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                portfolioTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Get selected category
                const category = tab.getAttribute('data-category');
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Set up modal for portfolio
    const portfolioModal = document.querySelector('.portfolio-modal');
    const modalCloseButton = portfolioModal?.querySelector('.close-modal');
    
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', () => {
            portfolioModal.classList.remove('active');
        });
        
        if (portfolioModal) {
            portfolioModal.addEventListener('click', (e) => {
                if (e.target === portfolioModal) {
                    portfolioModal.classList.remove('active');
                }
            });
        }
    }
}

/**
 * Initialize FAQ Accordion
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (!faqItems.length) return;
    
    // Animate FAQ items on load
    setTimeout(() => {
        faqItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });
    }, 300);

    // Add click event to each FAQ header
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        const content = item.querySelector('.faq-content');
        
        // Calculate content height for smooth transitions
        function updateContentHeight() {
            // First, set a fixed height to enable transition
            if (item.classList.contains('active')) {
                // Get the scroll height of the content
                const contentHeight = content.scrollHeight;
                content.style.maxHeight = contentHeight + 'px';
            } else {
                // Reset to 0 when closed
                content.style.maxHeight = '0px';
            }
        }
        
        header.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherContent = otherItem.querySelector('.faq-content');
                otherContent.style.maxHeight = '0px';
            });
            
            // If clicked item wasn't active, make it active
            if (!isActive) {
                item.classList.add('active');
                updateContentHeight();
                
                // Add a mutation observer to detect content changes and update height accordingly
                const observer = new MutationObserver(() => {
                    if (item.classList.contains('active')) {
                        const newHeight = content.scrollHeight;
                        content.style.maxHeight = newHeight + 'px';
                    }
                });
                
                observer.observe(content, { 
                    childList: true, 
                    subtree: true, 
                    attributes: true,
                    characterData: true 
                });
                
                // Disconnect after a reasonable time to avoid memory leaks
                setTimeout(() => observer.disconnect(), 2000);
            }
        });
        
        // Handle window resize to adjust content height
        window.addEventListener('resize', () => {
            if (item.classList.contains('active')) {
                const newHeight = content.scrollHeight;
                content.style.maxHeight = newHeight + 'px';
            }
        });
    });
    
    // Open first FAQ item by default
    if (faqItems.length > 0) {
        setTimeout(() => {
            faqItems[0].classList.add('active');
            const content = faqItems[0].querySelector('.faq-content');
            content.style.maxHeight = content.scrollHeight + 'px';
        }, 800);
    }
}

/**
 * Initialize File Upload
 */
function initFileUpload() {
    const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('file-upload');
    const fileList = document.getElementById('file-list');
    
    if (!dropArea || !fileInput || !fileList) return;
    
    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });
    
    // Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });
    
    // Handle dropped files
    dropArea.addEventListener('drop', handleDrop, false);
    
    // Handle files from input
    fileInput.addEventListener('change', handleFiles, false);
    
    // IMPORTANT: Remove the general click handler for the drop area
    // Only add a click handler to the browse text
    const browseText = dropArea.querySelector('.browse-text');
    if (browseText) {
        browseText.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent the click from bubbling to the drop area
            fileInput.click();
        });
    }
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    function highlight() {
        dropArea.classList.add('highlight');
    }
    
    function unhighlight() {
        dropArea.classList.remove('highlight');
    }
    
    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles({ target: { files } });
    }
    
    function handleFiles(e) {
        const files = e.target.files;
        if (files.length > 5) {
            alert('Please select no more than 5 files');
            return;
        }
        
        fileList.innerHTML = '';
        
        [...files].forEach(file => {
            // Validate file type
            const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
            if (!validTypes.includes(file.type)) {
                alert(`File type not allowed: ${file.name}`);
                return;
            }
            
            // File size validation (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert(`File too large: ${file.name}`);
                return;
            }
            
            // Create file item element
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            
            // File icon based on type
            let fileIcon = 'fa-file';
            if (file.type === 'application/pdf') fileIcon = 'fa-file-pdf';
            if (file.type.startsWith('image/')) fileIcon = 'fa-file-image';
            
            // Format file size
            const fileSize = formatFileSize(file.size);
            
            fileItem.innerHTML = `
                <div class="file-item-name">
                    <i class="fas ${fileIcon}"></i>
                    ${file.name}
                </div>
                <div class="file-item-size">${fileSize}</div>
                <div class="remove-file" data-name="${file.name}">
                    <i class="fas fa-times"></i>
                </div>
            `;
            
            fileList.appendChild(fileItem);
        });
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-file').forEach(button => {
            button.addEventListener('click', function() {
                this.closest('.file-item').remove();
            });
        });
    }
    
    function formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' bytes';
        else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        else return (bytes / 1048576).toFixed(1) + ' MB';
    }
}

/**
 * Initialize Form Animations
 */
function initFormAnimations() {
    // Add floating label effect for inputs that are pre-filled
    const inputs = document.querySelectorAll('.input-group input, .input-group select, .input-group textarea');
    
    inputs.forEach(input => {
        // Check if input has value on load
        if (input.value.trim() !== '') {
            input.classList.add('has-value');
        }
        
        // Add event listeners for focus and blur
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
            if (input.value.trim() !== '') {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        });
        
        // For select elements
        if (input.tagName.toLowerCase() === 'select') {
            input.addEventListener('change', () => {
                if (input.value !== '') {
                    input.classList.add('has-value');
                }
            });
        }
    });
}