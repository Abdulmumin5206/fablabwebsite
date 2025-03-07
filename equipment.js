// Equipment section functionality
document.addEventListener('DOMContentLoaded', () => {
    // Equipment filtering functionality
    const equipmentTabs = document.querySelectorAll('.equipment-tab');
    const equipmentItems = document.querySelectorAll('.equipment-item');
    
    // Initialize equipment filtering
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
    
    // Equipment details modal functionality
    const modal = document.querySelector('.equipment-modal');
    const closeModal = document.querySelector('.close-modal');
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    
    // Remove all view detail buttons functionality
    if (viewDetailsButtons) {
        viewDetailsButtons.forEach(button => {
            const parent = button.parentElement;
            if (parent) {
                parent.removeChild(button);
            }
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});