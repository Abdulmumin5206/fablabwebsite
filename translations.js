// Translations object
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language and theme systems
    initLanguage();
    initThemeToggle();
});

// Function to update all translatable elements
function updatePageLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders and other specific elements
    updateSpecificElements(lang);
}

// Update elements that need special handling (placeholders, etc.)
function updateSpecificElements(lang) {
    // Hero section
    document.querySelector('.hero-content h1').textContent = translations[lang].welcome;
    document.querySelector('.hero-content p').textContent = translations[lang].slogan;
    document.querySelector('.cta-button').textContent = translations[lang].exploreServices;
    
    // Services section
    document.querySelector('#services .section-title').textContent = translations[lang].ourServices;
    
    // Update service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards[0].querySelector('h3').textContent = translations[lang].threeD;
    serviceCards[0].querySelector('p').textContent = translations[lang].threeDDesc;
    serviceCards[1].querySelector('h3').textContent = translations[lang].laser;
    serviceCards[1].querySelector('p').textContent = translations[lang].laserDesc;
    serviceCards[2].querySelector('h3').textContent = translations[lang].electronics;
    serviceCards[2].querySelector('p').textContent = translations[lang].electronicsDesc;
    serviceCards[3].querySelector('h3').textContent = translations[lang].cad;
    serviceCards[3].querySelector('p').textContent = translations[lang].cadDesc;
    
    // Portfolio section
    document.querySelector('#portfolio .section-title').textContent = translations[lang].ourWork;
    document.querySelector('.filter-btn[data-filter="all"]').textContent = translations[lang].all;
    document.querySelector('.filter-btn[data-filter="3d"]').textContent = translations[lang].threeD;
    document.querySelector('.filter-btn[data-filter="laser"]').textContent = translations[lang].laser;
    document.querySelector('.filter-btn[data-filter="electronics"]').textContent = translations[lang].electronics;
    
    // Portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems[0].querySelector('h3').textContent = translations[lang].productPrototype;
    portfolioItems[0].querySelector('p').textContent = translations[lang].threeDPrintedPrototype;
    portfolioItems[1].querySelector('h3').textContent = translations[lang].customSign;
    portfolioItems[1].querySelector('p').textContent = translations[lang].laserCutSignage;
    portfolioItems[2].querySelector('h3').textContent = translations[lang].iot;
    portfolioItems[2].querySelector('p').textContent = translations[lang].iotDesc;
    portfolioItems[3].querySelector('h3').textContent = translations[lang].arch;
    portfolioItems[3].querySelector('p').textContent = translations[lang].archDesc;
    
    // About section
    document.querySelector('#about .section-title').textContent = translations[lang].aboutUs;
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    aboutParagraphs[0].textContent = translations[lang].aboutDesc1;
    aboutParagraphs[1].textContent = translations[lang].aboutDesc2;
    
    // Team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers[1].querySelector('p').textContent = translations[lang].fabricationExpert;
    teamMembers[2].querySelector('p').textContent = translations[lang].electronicsSpecialist;
    
    // Contact section
    document.querySelector('#contact .section-title').textContent = translations[lang].contactUs;
    
    // Form elements
    const formElements = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
    formElements[0].placeholder = translations[lang].yourName;
    formElements[1].placeholder = translations[lang].yourEmail;
    
    // Select options
    const selectElement = document.querySelector('.contact-form select');
    selectElement.options[0].text = translations[lang].selectService;
    selectElement.options[1].text = translations[lang].threeD;
    selectElement.options[2].text = translations[lang].laser;
    selectElement.options[3].text = translations[lang].electronics;
    selectElement.options[4].text = translations[lang].cad;
    selectElement.options[5].text = translations[lang].other;
    
    // Textarea and button
    document.querySelector('.contact-form textarea').placeholder = translations[lang].yourMessage;
    document.querySelector('.submit-btn').textContent = translations[lang].sendMessage;
    
    // Footer
    document.querySelector('.footer-logo p').textContent = translations[lang].slogan;
    document.querySelector('.footer-bottom p').textContent = `© 2025 FabLab. ${translations[lang].rights}`;
}

// Initialize language selection
function initLanguage() {
    const languageSelect = document.getElementById('language-select');
    const savedLanguage = localStorage.getItem('language') || 'en';
    
    languageSelect.value = savedLanguage;
    updatePageLanguage(savedLanguage);
    
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        localStorage.setItem('language', selectedLanguage);
        updatePageLanguage(selectedLanguage);
    });
}

// Initialize theme toggle
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.getElementById('theme-toggle-icon');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.src = './icons/light.svg';
    } else {
        themeIcon.src = './icons/dark.svg';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        if (isDark) {
            themeIcon.src = './icons/light.svg';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = './icons/dark.svg';
            localStorage.setItem('theme', 'light');
        }
    });
}

const translations = {
    en: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
        welcome: "Welcome to Our FabLab",
        slogan: "Where innovation meets fabrication",
        exploreServices: "Explore Our Services",
        ourServices: "Our Services",
        threeD: "3D Printing",
        threeDDesc: "High-quality 3D printing services for prototypes and final products.",
        laser: "Laser Cutting",
        laserDesc: "Precision laser cutting for various materials and projects.",
        electronics: "Electronics",
        electronicsDesc: "Circuit design and electronic prototyping solutions.",
        cad: "CAD Design",
        cadDesc: "Professional CAD design services for your projects.",
        ourWork: "Our Work",
        all: "All",
        productPrototype: "Product Prototype",
        threeDPrintedPrototype: "3D Printed functional prototype",
        customSign: "Custom Sign",
        laserCutSignage: "Laser cut acrylic signage",
        iot: "IoT Device",
        iotDesc: "Custom IoT monitoring solution",
        arch: "Architectural Model",
        archDesc: "Detailed architectural visualization",
        aboutUs: "About Us",
        aboutDesc1: "Our FabLab is equipped with state-of-the-art fabrication tools and staffed by experienced makers. We provide services to individuals, startups, and established businesses looking to prototype, create, and innovate.",
        aboutDesc2: "With years of experience in digital fabrication, our team can help bring your ideas to life.",
        leadDesigner: "Lead Designer",
        fabricationExpert: "Fabrication Expert",
        electronicsSpecialist: "Electronics Specialist",
        contactUs: "Contact Us",
        yourName: "Your Name",
        yourEmail: "Your Email",
        selectService: "Select Service",
        other: "Other",
        yourMessage: "Your Message",
        sendMessage: "Send Message",
        rights: "All rights reserved."
    },
    ru: {
        home: "Главная",
        services: "Услуги",
        portfolio: "Портфолио",
        about: "О нас",
        contact: "Контакты",
        welcome: "Добро пожаловать в наш FabLab",
        slogan: "Где инновации встречаются с производством",
        exploreServices: "Изучите наши услуги",
        ourServices: "Наши услуги",
        threeD: "3D-печать",
        threeDDesc: "Высококачественные услуги 3D-печати для прототипов и готовых изделий.",
        laser: "Лазерная резка",
        laserDesc: "Точная лазерная резка для различных материалов и проектов.",
        electronics: "Электроника",
        electronicsDesc: "Проектирование схем и создание прототипов электроники.",
        cad: "CAD-дизайн",
        cadDesc: "Профессиональные услуги CAD-дизайна для ваших проектов.",
        ourWork: "Наши работы",
        all: "Все",
        productPrototype: "Прототип продукта",
        threeDPrintedPrototype: "3D-печатный функциональный прототип",
        customSign: "Индивидуальная вывеска",
        laserCutSignage: "Лазерная резка акриловой вывески",
        iot: "IoT устройство",
        iotDesc: "Индивидуальное IoT решение для мониторинга",
        arch: "Архитектурная модель",
        archDesc: "Детальная архитектурная визуализация",
        aboutUs: "О нас",
        aboutDesc1: "Наш FabLab оснащен современными инструментами для производства и укомплектован опытными мастерами. Мы предоставляем услуги частным лицам, стартапам и устоявшимся компаниям, которые хотят создавать прототипы, творить и внедрять инновации.",
        aboutDesc2: "Имея многолетний опыт в цифровом производстве, наша команда поможет воплотить ваши идеи в жизнь.",
        leadDesigner: "Ведущий дизайнер",
        fabricationExpert: "Эксперт по производству",
        electronicsSpecialist: "Специалист по электронике",
        contactUs: "Свяжитесь с нами",
        yourName: "Ваше имя",
        yourEmail: "Ваш email",
        selectService: "Выберите услугу",
        other: "Другое",
        yourMessage: "Ваше сообщение",
        sendMessage: "Отправить сообщение",
        rights: "Все права защищены."
    },
    uz: {
        home: "Bosh sahifa",
        services: "Xizmatlar",
        portfolio: "Portfolio",
        about: "Biz haqimizda",
        contact: "Aloqa",
        welcome: "FabLab'ga xush kelibsiz",
        slogan: "Innovatsiya ishlab chiqarish bilan uchrashgan joy",
        exploreServices: "Xizmatlarimizni ko'ring",
        ourServices: "Bizning xizmatlar",
        threeD: "3D bosma",
        threeDDesc: "Prototiplar va tayyor mahsulotlar uchun yuqori sifatli 3D bosma xizmatlari.",
        laser: "Lazer kesish",
        laserDesc: "Turli materiallar va loyihalar uchun aniq lazer kesish.",
        electronics: "Elektronika",
        electronicsDesc: "Sxema dizayni va elektron prototiplash yechimlari.",
        cad: "CAD dizayn",
        cadDesc: "Loyihalaringiz uchun professional CAD dizayn xizmatlari.",
        ourWork: "Bizning ishlar",
        all: "Barcha",
        productPrototype: "Mahsulot prototipi",
        threeDPrintedPrototype: "3D bosib chiqarilgan funksional prototip",
        customSign: "Maxsus belgi",
        laserCutSignage: "Lazer kesish akril belgilari",
        iot: "IoT qurilmasi",
        iotDesc: "Maxsus IoT nazorat yechimi",
        arch: "Arxitektura modeli",
        archDesc: "Batafsil arxitektura vizualizatsiyasi",
        aboutUs: "Biz haqimizda",
        aboutDesc1: "Bizning FabLab zamonaviy ishlab chiqarish asboblari bilan jihozlangan va tajribali mutaxassislar bilan ta'minlangan. Biz yakka shaxslar, startaplar va prototip yaratish, yaratish va innovatsiya qilishni xohlaydigan barqaror korxonalarga xizmatlar ko'rsatamiz.",
        aboutDesc2: "Raqamli ishlab chiqarishda ko'p yillik tajribaga ega bo'lgan jamoamiz g'oyalaringizni hayotga tatbiq etishga yordam beradi.",
        leadDesigner: "Bosh dizayner",
        fabricationExpert: "Ishlab chiqarish bo'yicha mutaxassis",
        electronicsSpecialist: "Elektronika bo'yicha mutaxassis",
        contactUs: "Biz bilan bog'laning",
        yourName: "Ismingiz",
        yourEmail: "Elektron pochtangiz",
        selectService: "Xizmatni tanlang",
        other: "Boshqa",
        yourMessage: "Xabaringiz",
        sendMessage: "Xabar yuborish",
        rights: "Barcha huquqlar himoyalangan."
    }
};