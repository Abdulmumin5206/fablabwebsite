document.addEventListener('DOMContentLoaded', () => {
    // Get language from URL
    const path = window.location.pathname;
    const langRegex = /\/(en|ru|uz)\//;
    const match = path.match(langRegex);
    
    // Default language
    let lang = 'en';
    if (match && match[1]) {
        lang = match[1];
    }
    
    // Save to localStorage
    localStorage.setItem('language', lang);
    
    // Update language selector
    const selectSelected = document.querySelector('.select-selected .lang-label');
    const selectItems = document.querySelectorAll('.select-item');
    
    if (selectSelected && selectItems.length) {
        selectItems.forEach(item => {
            if (item.getAttribute('data-value') === lang) {
                selectSelected.textContent = item.textContent;
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
    }
    
    // Add language change handlers
    selectItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const newLang = this.getAttribute('data-value');
            if (newLang !== lang) {
                let newUrl;
                if (match) {
                    newUrl = path.replace(langRegex, `/${newLang}/`);
                } else {
                    newUrl = `/${newLang}${path}`;
                }
                window.location.href = newUrl;
            }
            
            document.querySelector('.select-items').classList.remove('select-show');
            document.querySelector('.select-selected').classList.remove('active');
        });
    });
    
    // Translate page
    if (typeof window.updatePageLanguage === 'function') {
        window.updatePageLanguage(lang);
    }
});