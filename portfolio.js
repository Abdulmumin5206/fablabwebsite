// Portfolio section functionality
document.addEventListener('DOMContentLoaded', () => {
    // Portfolio filtering functionality
    const portfolioTabs = document.querySelectorAll('.portfolio-tab');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Initialize portfolio filtering
    if (portfolioTabs.length && portfolioItems.length) {
        portfolioTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                portfolioTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Get selected category
                const category = tab.getAttribute('data-category');
                
                // Count for maintaining grid layout
                let visibleCount = 0;
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'flex';
                        visibleCount++;
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Add empty placeholders to maintain grid layout if needed
                const portfolioGrid = document.querySelector('.portfolio-grid');
                
                // Remove any existing placeholders
                document.querySelectorAll('.portfolio-placeholder').forEach(placeholder => {
                    placeholder.remove();
                });
                
                // Add placeholders to fill out the row
                if (visibleCount % 4 !== 0 && visibleCount > 0) {
                    const placeholdersNeeded = 4 - (visibleCount % 4);
                    for (let i = 0; i < placeholdersNeeded; i++) {
                        const placeholder = document.createElement('div');
                        placeholder.className = 'portfolio-placeholder';
                        placeholder.style.visibility = 'hidden';
                        portfolioGrid.appendChild(placeholder);
                    }
                }
            });
        });
    }
    
    // Ensure the first tab is active by default
    if (portfolioTabs.length > 0 && !document.querySelector('.portfolio-tab.active')) {
        portfolioTabs[0].classList.add('active');
    }
    
    // Adjust scroll position when tab is clicked
    portfolioTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const navContainer = this.closest('.portfolio-nav');
            if (navContainer) {
                const tabRect = this.getBoundingClientRect();
                const containerRect = navContainer.getBoundingClientRect();
                
                // Center the clicked tab if possible
                const scrollPosition = navContainer.scrollLeft + (tabRect.left - containerRect.left) - 
                    (containerRect.width / 2) + (tabRect.width / 2);
                
                navContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});