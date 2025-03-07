// Function to update all translatable elements
function updatePageLanguage(lang) {
    console.log("Updating page language to:", lang);
    
    // If translations for this language don't exist, use English as fallback
    if (!translations[lang]) {
        console.warn(`Translations for ${lang} not found, using English as fallback`);
        lang = 'en';
    }
    
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${lang}`);
        }
    });
    
    // Update specific elements
    updateSpecificElements(lang);
}

// Update elements that need special handling (placeholders, etc.)
function updateSpecificElements(lang) {
    try {
        // Hero section
        const heroTitle = document.querySelector('.hero-content h1');
        const heroSlogan = document.querySelector('.hero-content p');
        const ctaButton = document.querySelector('.cta-button');
        
        if (heroTitle) heroTitle.textContent = translations[lang].welcome;
        if (heroSlogan) heroSlogan.textContent = translations[lang].slogan;
        if (ctaButton) ctaButton.textContent = translations[lang].exploreServices;
        
        // Services section
        const servicesTitle = document.querySelector('#services .section-title');
        if (servicesTitle) servicesTitle.textContent = translations[lang].ourServices;
        
        // Update service cards
        const serviceCards = document.querySelectorAll('.service-card');
        if (serviceCards.length >= 4) {
            serviceCards[0].querySelector('h3').textContent = translations[lang].threeD;
            serviceCards[0].querySelector('p').textContent = translations[lang].threeDDesc;
            serviceCards[1].querySelector('h3').textContent = translations[lang].laser;
            serviceCards[1].querySelector('p').textContent = translations[lang].laserDesc;
            serviceCards[2].querySelector('h3').textContent = translations[lang].electronics;
            serviceCards[2].querySelector('p').textContent = translations[lang].electronicsDesc;
            serviceCards[3].querySelector('h3').textContent = translations[lang].cad;
            serviceCards[3].querySelector('p').textContent = translations[lang].cadDesc;
        }
        
        // Equipment section
        const equipmentTitle = document.querySelector('#equipment .section-title');
        if (equipmentTitle) equipmentTitle.textContent = translations[lang].equipment;
        
        // Equipment category titles
        const equipmentCategoryTitles = document.querySelectorAll('#equipment .category-title');
        if (equipmentCategoryTitles.length >= 3) {
            equipmentCategoryTitles[0].textContent = translations[lang].threeDPrinters;
            equipmentCategoryTitles[1].textContent = translations[lang].laserCnc;
            equipmentCategoryTitles[2].textContent = translations[lang].prototypeTools;
        }
        
        // Portfolio section
        const portfolioTitle = document.querySelector('#portfolio .section-title');
        if (portfolioTitle) portfolioTitle.textContent = translations[lang].ourWork;
        
        // Portfolio category titles
        const portfolioCategoryTitles = document.querySelectorAll('#portfolio .category-title');
        if (portfolioCategoryTitles.length >= 5) {
            portfolioCategoryTitles[0].textContent = translations[lang].fdmPrinting;
            portfolioCategoryTitles[1].textContent = translations[lang].slaPrinting;
            portfolioCategoryTitles[2].textContent = translations[lang].laserCutting;
            portfolioCategoryTitles[3].textContent = translations[lang].cnc;
            portfolioCategoryTitles[4].textContent = translations[lang].uvPrinting;
        }
        
        // About section
        const aboutTitle = document.querySelector('#about .section-title');
        if (aboutTitle) aboutTitle.textContent = translations[lang].aboutUs;
        
        const aboutParagraphs = document.querySelectorAll('.about-text p');
        if (aboutParagraphs.length >= 2) {
            aboutParagraphs[0].textContent = translations[lang].aboutDesc1;
            aboutParagraphs[1].textContent = translations[lang].aboutDesc2;
        }
        
        // Team members
        const teamMembers = document.querySelectorAll('.team-member');
        if (teamMembers.length >= 3) {
            if (teamMembers[0].querySelector('p')) teamMembers[0].querySelector('p').textContent = translations[lang].leadDesigner;
            if (teamMembers[1].querySelector('p')) teamMembers[1].querySelector('p').textContent = translations[lang].fabricationExpert;
            if (teamMembers[2].querySelector('p')) teamMembers[2].querySelector('p').textContent = translations[lang].electronicsSpecialist;
        }
        
        // Contact section
        const contactTitle = document.querySelector('#contact .section-title');
        if (contactTitle) contactTitle.textContent = translations[lang].contactUs;
        
        // Form elements
        const nameInput = document.querySelector('.contact-form input[type="text"]');
        const emailInput = document.querySelector('.contact-form input[type="email"]');
        const textarea = document.querySelector('.contact-form textarea');
        const submitBtn = document.querySelector('.submit-btn');
        
        if (nameInput) nameInput.placeholder = translations[lang].yourName;
        if (emailInput) emailInput.placeholder = translations[lang].yourEmail;
        if (textarea) textarea.placeholder = translations[lang].yourMessage;
        if (submitBtn) submitBtn.textContent = translations[lang].sendMessage;
        
        // Select options in the form
        const selectElement = document.querySelector('.contact-form select');
        if (selectElement) {
            if (selectElement.options.length > 0) selectElement.options[0].text = translations[lang].selectService;
            if (selectElement.options.length > 1) selectElement.options[1].text = translations[lang].threeD;
            if (selectElement.options.length > 2) selectElement.options[2].text = translations[lang].laser;
            if (selectElement.options.length > 3) selectElement.options[3].text = translations[lang].electronics;
            if (selectElement.options.length > 4) selectElement.options[4].text = translations[lang].cad;
            if (selectElement.options.length > 5) selectElement.options[5].text = translations[lang].other;
        }
        
        // Footer
        const footerLogo = document.querySelector('.footer-logo p');
        const footerBottom = document.querySelector('.footer-bottom p');
        
        if (footerLogo) footerLogo.textContent = translations[lang].slogan;
        if (footerBottom) footerBottom.textContent = `© 2025 FabLab. ${translations[lang].rights}`;
        
    } catch(e) {
        console.error("Error updating language elements:", e, e.stack);
    }
}

// All translations
const translations = {
    en: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        equipment: "Equipment",
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
        threeDPrinters: "3D Printers",
        laserCnc: "Laser & CNC Equipment",
        prototypeTools: "Prototyping Tools",
        fdmPrinting: "FDM 3D Printing",
        slaPrinting: "SLA Resin Printing",
        laserCutting: "Laser Cutting & Engraving",
        cnc: "CNC",
        uvPrinting: "UV Printing",
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
        rights: "All rights reserved.",
        formSubmitted: "Thank you for your message! In a real website, this would be sent to our server."
    },
    ru: {
        home: "Главная",
        services: "Услуги",
        portfolio: "Портфолио",
        equipment: "Оборудование",
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
        threeDPrinters: "3D-принтеры",
        laserCnc: "Лазерное и ЧПУ оборудование",
        prototypeTools: "Инструменты для прототипирования",
        fdmPrinting: "FDM 3D-печать",
        slaPrinting: "SLA печать смолой",
        laserCutting: "Лазерная резка и гравировка",
        cnc: "ЧПУ обработка",
        uvPrinting: "УФ-печать",
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
        rights: "Все права защищены.",
        formSubmitted: "Спасибо за ваше сообщение! На реальном сайте оно было бы отправлено на наш сервер."
    },
    uz: {
        home: "Bosh sahifa",
        services: "Xizmatlar",
        portfolio: "Portfolio",
        equipment: "Uskunalar",
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
        threeDPrinters: "3D printerlar",
        laserCnc: "Lazer va CNC uskunalar",
        prototypeTools: "Prototiplash asboblari",
        fdmPrinting: "FDM 3D bosma",
        slaPrinting: "SLA smola bosma",
        laserCutting: "Lazer kesish va gravirovka",
        cnc: "CNC",
        uvPrinting: "UV bosma",
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
        rights: "Barcha huquqlar himoyalangan.",
        formSubmitted: "Xabaringiz uchun rahmat! Haqiqiy veb-saytda bu bizning serverimizga yuborilardi."
    }
};