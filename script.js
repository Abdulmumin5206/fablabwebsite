document.addEventListener('DOMContentLoaded', () => {
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
            item.querySelector('.portfolio-overlay').style.transform = 'translateY(0)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.querySelector('.portfolio-overlay').style.transform = 'translateY(100%)';
        });
    });
    
    // Equipment image hover effect with enhanced smooth transition
    setupEquipmentHoverImages();
    
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
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
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for fixed navbar
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.toggle('toggle');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
    
    // Form Submission (you'll need a backend for actual processing)
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // For demonstration only - normally you'd send to a server
            alert('Thank you for your message! In a real website, this would be sent to our server.');
            contactForm.reset();
        });
    }
    
    // Scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '&uarr;';
    scrollBtn.className = 'scroll-top-btn';
    scrollBtn.style.position = 'fixed';
    scrollBtn.style.bottom = '20px';
    scrollBtn.style.right = '20px';
    scrollBtn.style.height = '50px';
    scrollBtn.style.width = '50px';
    scrollBtn.style.fontSize = '25px';
    scrollBtn.style.backgroundColor = '#4a90e2';
    scrollBtn.style.color = 'white';
    scrollBtn.style.border = 'none';
    scrollBtn.style.borderRadius = '50%';
    scrollBtn.style.cursor = 'pointer';
    scrollBtn.style.display = 'none';
    scrollBtn.style.zIndex = '999';
    
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
    
    // CTA Button Scroll
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const servicesSection = document.querySelector('#services');
            
            window.scrollTo({
                top: servicesSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }
});

function setupEquipmentHoverImages() {
    const equipmentItems = document.querySelectorAll('#equipment .portfolio-item');
    
    equipmentItems.forEach(item => {
        const mainImage = item.querySelector('img');
        const originalSrc = mainImage.src;
        
        // Create container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-transition-container';
        
        // Move original image
        item.removeChild(mainImage);
        imageContainer.appendChild(mainImage);
        
        // Create hover image
        const hoverImage = document.createElement('img');
        hoverImage.src = originalSrc.replace('.jpg', '-hover.jpg').replace('.webp', '-hover.webp');
        hoverImage.alt = mainImage.alt;
        hoverImage.className = 'hover-image';
        imageContainer.appendChild(hoverImage);
        
        // Add container to item
        item.insertBefore(imageContainer, item.firstChild);
        
        // Hover effects
        item.addEventListener('mouseenter', () => {
            imageContainer.classList.add('hover');
            hoverImage.classList.add('active');
            mainImage.classList.add('inactive');
        });
        
        item.addEventListener('mouseleave', () => {
            hoverImage.classList.remove('active');
            mainImage.classList.remove('inactive');
            imageContainer.classList.remove('hover');
        });
    });
}