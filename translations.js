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
    
    // Update dynamic content (equipment, portfolio, etc.)
    updateDynamicContent(lang);
}

// Update elements that need special handling (placeholders, etc.)
function updateSpecificElements(lang) {
    try {
        // Navigation items
        document.querySelectorAll('.nav-links li a').forEach(link => {
            const text = link.textContent.trim();
            if (text === "Home") link.textContent = translations[lang].home;
            else if (text === "Services") link.textContent = translations[lang].services;
            else if (text === "Equipment") link.textContent = translations[lang].equipment;
            else if (text === "Portfolio") link.textContent = translations[lang].portfolio;
            else if (text === "About") link.textContent = translations[lang].about;
            else if (text === "Contact") link.textContent = translations[lang].contact;
        });
        
        // Footer quick links
        document.querySelectorAll('.footer-links ul li a').forEach(link => {
            const text = link.textContent.trim();
            if (text === "Home") link.textContent = translations[lang].home;
            else if (text === "Services") link.textContent = translations[lang].services;
            else if (text === "Equipment") link.textContent = translations[lang].equipment;
            else if (text === "Portfolio") link.textContent = translations[lang].portfolio;
            else if (text === "About Us") link.textContent = translations[lang].aboutUs;
            else if (text === "Contact") link.textContent = translations[lang].contact;
        });
        
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
        
        // Update service cards - match the current structure
        const serviceCards = document.querySelectorAll('.service-card');
        if (serviceCards.length >= 4) {
            // Updated to match the current HTML structure
            const threeDCard = document.querySelector('.service-card[data-service="3d-printing"]');
            const prototypeCard = document.querySelector('.service-card[data-service="prototyping"]');
            const uvCard = document.querySelector('.service-card[data-service="uv-printing"]');
            const modelingCard = document.querySelector('.service-card[data-service="3d-modeling"]');
            
            if (threeDCard) {
                threeDCard.querySelector('h3').textContent = translations[lang].threeD;
                threeDCard.querySelector('p').textContent = translations[lang].threeDDesc;
            }
            
            if (prototypeCard) {
                prototypeCard.querySelector('h3').textContent = translations[lang].laser;
                prototypeCard.querySelector('p').textContent = translations[lang].laserDesc;
            }
            
            if (uvCard) {
                uvCard.querySelector('h3').textContent = translations[lang].uv;
                uvCard.querySelector('p').textContent = translations[lang].uvDesc;
            }
            
            if (modelingCard) {
                modelingCard.querySelector('h3').textContent = translations[lang].cad;
                modelingCard.querySelector('p').textContent = translations[lang].cadDesc;
            }
        }
        
        // Equipment section
        const equipmentTitle = document.querySelector('#equipment .section-title');
        if (equipmentTitle) equipmentTitle.textContent = translations[lang].ourEquipment;
        
        // Equipment tabs
        const allEquipmentTab = document.querySelector('.equipment-tab[data-category="all"]');
        const printerTab = document.querySelector('.equipment-tab[data-category="3d-printers"]');
        const laserCncTab = document.querySelector('.equipment-tab[data-category="laser-cnc"]');
        const prototypeTab = document.querySelector('.equipment-tab[data-category="prototype"]');
        
        if (allEquipmentTab) allEquipmentTab.textContent = translations[lang].allEquipment;
        if (printerTab) printerTab.textContent = translations[lang].threeDPrinters;
        if (laserCncTab) laserCncTab.textContent = translations[lang].laserCnc;
        if (prototypeTab) prototypeTab.textContent = translations[lang].prototypeTools;
        
        // Portfolio section
        const portfolioTitle = document.querySelector('#portfolio .section-title');
        if (portfolioTitle) portfolioTitle.textContent = translations[lang].ourWork;
        
        // Portfolio tabs
        const allPortfolioTab = document.querySelector('.portfolio-tab[data-category="all"]');
        const fdmTab = document.querySelector('.portfolio-tab[data-category="fdm"]');
        const slaTab = document.querySelector('.portfolio-tab[data-category="sla"]');
        const laserTab = document.querySelector('.portfolio-tab[data-category="laser"]');
        const cncTab = document.querySelector('.portfolio-tab[data-category="cnc"]');
        const uvTab = document.querySelector('.portfolio-tab[data-category="uv"]');
        
        if (allPortfolioTab) allPortfolioTab.textContent = translations[lang].allProjects;
        if (fdmTab) fdmTab.textContent = translations[lang].fdmPrinting;
        if (slaTab) slaTab.textContent = translations[lang].slaPrinting;
        if (laserTab) laserTab.textContent = translations[lang].laserCutting;
        if (cncTab) cncTab.textContent = translations[lang].cnc;
        if (uvTab) uvTab.textContent = translations[lang].uvPrinting;
        
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
        
        // Form labels and inputs
        const nameLabel = document.querySelector('label[for="name"]');
        const emailLabel = document.querySelector('label[for="email"]');
        const phoneLabel = document.querySelector('label[for="phone"]');
        const subjectLabel = document.querySelector('label[for="subject"]');
        const messageLabel = document.querySelector('label[for="message"]');
        const submitBtn = document.querySelector('.submit-btn');
        
        if (nameLabel) nameLabel.textContent = translations[lang].name;
        if (emailLabel) emailLabel.textContent = translations[lang].email;
        if (phoneLabel) phoneLabel.textContent = translations[lang].phone;
        if (subjectLabel) subjectLabel.textContent = translations[lang].subject;
        if (messageLabel) messageLabel.textContent = translations[lang].message;
        if (submitBtn) submitBtn.textContent = translations[lang].sendMessage;
        
        // Subject dropdown options
        const subjectSelect = document.getElementById('subject');
        if (subjectSelect && subjectSelect.options.length > 0) {
            subjectSelect.options[0].text = translations[lang].selectSubject;
            if (subjectSelect.options.length > 1) subjectSelect.options[1].text = translations[lang].generalInquiry;
            if (subjectSelect.options.length > 2) subjectSelect.options[2].text = translations[lang].equipmentRental;
            if (subjectSelect.options.length > 3) subjectSelect.options[3].text = translations[lang].workshopRegistration;
            if (subjectSelect.options.length > 4) subjectSelect.options[4].text = translations[lang].partnership;
            if (subjectSelect.options.length > 5) subjectSelect.options[5].text = translations[lang].other;
        }
        
        // Footer
        const footerLogo = document.querySelector('.footer-logo p');
        const footerBottom = document.querySelector('.footer-bottom p');
        
        if (footerLogo) footerLogo.textContent = translations[lang].footerDesc;
        if (footerBottom) footerBottom.textContent = `© 2025 Center for Youth Initiatives FabLab. ${translations[lang].rights}`;
        
        // Footer quick links title
        const quickLinksTitle = document.querySelector('.footer-links h3');
        if (quickLinksTitle && quickLinksTitle.textContent.includes('Quick Links')) {
            quickLinksTitle.textContent = translations[lang].quickLinks;
        }
        
        // Contact info title
        const contactInfoTitle = document.querySelectorAll('.footer-links h3');
        if (contactInfoTitle.length > 1 && contactInfoTitle[contactInfoTitle.length-1].textContent.includes('Contact Info')) {
            contactInfoTitle[contactInfoTitle.length-1].textContent = translations[lang].contactInfo;
        }
        
        // Social media follow us
        const socialTitle = document.querySelector('.footer-social h3');
        if (socialTitle) socialTitle.textContent = translations[lang].followUs;
        
        // Form section title
        const formTitle = document.querySelector('.contact-form h3');
        if (formTitle) formTitle.textContent = translations[lang].sendUsMessage;
        
    } catch(e) {
        console.error("Error updating language elements:", e, e.stack);
    }
}

// Update dynamic content like equipment items and portfolio
function updateDynamicContent(lang) {
    try {
        if (lang === 'en') return; // No need to translate for English
        
        const tr = translations[lang];
        
        // Translate equipment names
        document.querySelectorAll('.equipment-info h3').forEach(heading => {
            const originalText = heading.textContent.trim();
            const key = `equipment_${originalText.replace(/\s+/g, '_').toLowerCase()}`;
            if (tr[key]) {
                heading.textContent = tr[key];
            }
        });
        
       // Inside translateDynamicContent function, replace the equipment specs translation part with:
// Translate equipment specs
document.querySelectorAll('.equipment-specs').forEach(spec => {
    const originalText = spec.textContent.trim();
    let label = "";
    let value = "";
    
    if (originalText.includes(':')) {
        [label, value] = originalText.split(':');
        label = label.trim();
        value = value.trim();
        
        // Handle special case for Multi-Material
        let specKey = "";
        if (label === "Multi-Material") {
            specKey = "spec_multi_material";
        } else {
            specKey = `spec_${label.toLowerCase().replace(/\s+/g, '_')}`;
        }
        
        if (tr[specKey]) {
            spec.textContent = `${tr[specKey]}: ${value}`;
        }
    }
});
        
        // Translate portfolio item titles
        document.querySelectorAll('.portfolio-item h3').forEach(title => {
            const originalText = title.textContent.trim();
            
            // Direct matching for specific titles from the user's list
            let found = false;
            for (const [key, value] of Object.entries(tr)) {
                if (key.startsWith('portfolio_exact_') && tr[key + '_en'] === originalText) {
                    title.textContent = value;
                    found = true;
                    break;
                }
            }
            
            // If no exact match found, try a normalized key approach
            if (!found) {
                // Create a simplified key from the title text
                const titleKey = `portfolio_${originalText.toLowerCase().replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30)}`;
                
                if (tr[titleKey]) {
                    title.textContent = tr[titleKey];
                }
            }
        });
    } catch(e) {
        console.error("Error updating dynamic content:", e, e.stack);
    }
}

// All translations
const translations = {
    en: {
        home: "Home",
        services: "Services",
        servicesIntro: "Our FabLab offers a comprehensive range of digital fabrication services including 3D printing (FDM & SLA), laser cutting, CNC machining, and UV printing. We specialize in custom parts manufacturing, equipment repair, and parts design for various industries.",
        portfolio: "Portfolio",
        equipment: "Equipment",
        about: "About",
        contact: "Contact",
        welcome: "The Youth Initiatives Center's (CFYI) FabLab will turn your fantasies into a finished product",
        slogan: "CMI offers services for the production of highly complex parts and mechanisms",
        exploreServices: "Explore Our Services",
        ourServices: "Our Services",
        threeD: "3D Printing",
        threeDDesc: "High-quality 3D printing services for prototypes and final products.",
        laser: "Prototyping",
        laserDesc: "Precision prototyping using laser cutting and CNC machining.",
        uv: "UV Printing",
        uvDesc: "High-resolution UV printing on various materials and surfaces.",
        cad: "3D Modeling",
        cadDesc: "Professional 3D modeling and CAD design services.",
        ourWork: "Our Work",
        allProjects: "All Projects",
        ourEquipment: "Our Equipment",
        allEquipment: "All Equipment",
        threeDPrinters: "3D Printers",
        laserCnc: "Laser & CNC",
        prototypeTools: "Prototyping",
        fdmPrinting: "FDM Printing",
        slaPrinting: "SLA Resin",
        laserCutting: "Laser Cutting",
        cnc: "CNC Machining",
        uvPrinting: "UV Printing",
        aboutUs: "About Us",
        aboutDesc1: "Our FabLab is equipped with state-of-the-art fabrication tools and staffed by experienced makers. We provide services to individuals, startups, and established businesses looking to prototype, create, and innovate.",
        aboutDesc2: "With years of experience in digital fabrication, our team can help bring your ideas to life.",
        leadDesigner: "Lead Designer",
        fabricationExpert: "Fabrication Expert",
        electronicsSpecialist: "Electronics Specialist",
        contactUs: "Contact Us",
        name: "Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
        selectSubject: "Select a subject",
        generalInquiry: "General Inquiry",
        equipmentRental: "Equipment Rental",
        workshopRegistration: "Workshop Registration",
        partnership: "Partnership Opportunities",
        other: "Other",
        sendMessage: "Send Message",
        sendUsMessage: "Send us a Message",
        rights: "All Rights Reserved.",
        quickLinks: "Quick Links",
        contactInfo: "Contact Info",
        followUs: "Follow Us",
        footerDesc: "The Center for Youth Initiatives is a hub for innovation, collaboration, and creativity. We provide access to digital fabrication tools and workshops to empower the next generation of creators."
    },
    ru: {
        
        home: "Главная",
        services: "Услуги",
        servicesIntro: "Наш FabLab предлагает полный спектр услуг цифрового производства, включая 3D-печать (FDM и SLA), лазерную резку, ЧПУ-обработку и УФ-печать. Мы специализируемся на изготовлении деталей на заказ, ремонте оборудования и проектировании деталей для различных отраслей.",
        portfolio: "Портфолио",
        equipment: "Оборудование",
        about: "О нас",
        contact: "Контакты",
        welcome: "FabLab Центра Молодежных Инициатив(ЦМИ)превратит ваши фантазии в готовый продукт",
        slogan: "ЦМИ предлагает услуги по изготовлению деталей и механизмов повышенной сложности",
        ourServices: "Наши услуги",
        exploreServices: "Исследуйте наши услуги",
        threeD: "3D-печать",
        threeDDesc: "Высококачественные услуги 3D-печати для прототипов и готовых изделий.",
        laser: "Прототипирование",
        laserDesc: "Точное прототипирование с использованием лазерной резки и ЧПУ-обработки.",
        uv: "УФ-печать",
        uvDesc: "Высокоточная УФ-печать на различных материалах и поверхностях.",
        cad: "3D-моделирование",
        cadDesc: "Профессиональные услуги 3D-моделирования и CAD-дизайна.",
        ourWork: "Наши работы",
        allProjects: "Все проекты",
        ourEquipment: "Наше оборудование",
        allEquipment: "Всё оборудование",
        threeDPrinters: "3D-принтеры",
        laserCnc: "Лазер и ЧПУ",
        prototypeTools: "Прототипирование",
        fdmPrinting: "FDM печать",
        slaPrinting: "SLA смола",
        laserCutting: "Лазерная резка",
        cnc: "ЧПУ обработка",
        uvPrinting: "УФ-печать",
        aboutUs: "О нас",
        aboutDesc1: "Наш FabLab оснащен современными инструментами для производства и укомплектован опытными мастерами. Мы предоставляем услуги частным лицам, стартапам и компаниям, которые хотят создавать прототипы и внедрять инновации.",
        aboutDesc2: "Имея многолетний опыт в цифровом производстве, наша команда поможет воплотить ваши идеи в жизнь.",
        leadDesigner: "Ведущий дизайнер",
        fabricationExpert: "Эксперт по производству",
        electronicsSpecialist: "Специалист по электронике",
        contactUs: "Свяжитесь с нами",
        name: "Имя",
        email: "Электронная почта",
        phone: "Телефон",
        subject: "Тема",
        message: "Сообщение",
        selectSubject: "Выберите тему",
        generalInquiry: "Общий вопрос",
        equipmentRental: "Аренда оборудования",
        workshopRegistration: "Запись на мастер-класс",
        partnership: "Возможности сотрудничества",
        other: "Другое",
        sendMessage: "Отправить сообщение",
        sendUsMessage: "Отправьте нам сообщение",
        rights: "Все права защищены.",
        quickLinks: "Быстрые ссылки",
        contactInfo: "Контактная информация",
        followUs: "Следите за нами",
        footerDesc: "Центр молодежных инициатив - это центр инноваций, сотрудничества и творчества. Мы предоставляем доступ к инструментам цифрового производства и мастер-классам для развития нового поколения творцов.",
        
        // Equipment names
        equipment_raise3d_pro3: "Raise3D Pro3",
        equipment_prusa_i3_mk3s: "Prusa i3 MK3S+",
        equipment_prusa_i3_mk3s_mmu2s: "Prusa i3 MK3S+ MMU2S",
        equipment_3d_printer_skrinter: "3D-принтер Skrinter",
        equipment_formlabs_form_3: "Formlabs Form 3",
        equipment_phrozen_sonic_mega_8k: "PHROZEN Sonic MEGA 8K",
        equipment_photonim_gs6040: "Photonim GS6040",
        equipment_volter_s: "VOLTER-S",
        equipment_roland_mono_fab_srm_20: "Roland Mono fab SRM-20",
        equipment_roland_versauv_lef2_200: "Roland VersaUV LEF2-200",
        equipment_roland_versastudio_bn_20: "Roland VersaSTUDIO BN-20",
        equipment_einscan_h: "EINSCAN H",
        
        // Equipment specs
        spec_build_volume: "Рабочий объём",
        spec_multi_material: "Мультиматериал",
        spec_resolution: "Разрешение",
        spec_working_area: "Рабочая область",
        spec_print_area: "Область печати",
        spec_width: "Ширина",
        spec_accuracy: "Точность",

        
        // Portfolio item titles - exact matches with English reference
        portfolio_exact_premium_uv_printing_for_customized_gifts_branding_en: "Premium UV Printing for Customized Gifts & Branding",
        portfolio_exact_premium_uv_printing_for_customized_gifts_branding: "Премиальная УФ-печать для индивидуальных подарков и брендинга",
        
        portfolio_exact_high_quality_sticker_printing_for_branding_promotion_en: "High-Quality Sticker Printing for Branding & Promotion",
        portfolio_exact_high_quality_sticker_printing_for_branding_promotion: "Высококачественная печать наклеек для брендинга и продвижения",
        
        portfolio_exact_uv_printing_technology_for_stunning_long_lasting_designs_en: "UV Printing Technology for Stunning & Long-Lasting Designs",
        portfolio_exact_uv_printing_technology_for_stunning_long_lasting_designs: "Технология УФ-печати для потрясающих и долговечных дизайнов",
        
        portfolio_exact_vibrant_durable_uv_printed_designs_on_accessories_en: "Vibrant & Durable UV-Printed Designs on Accessories",
        portfolio_exact_vibrant_durable_uv_printed_designs_on_accessories: "Яркие и долговечные УФ-печатные дизайны на аксессуарах",
        
        portfolio_exact_precision_cnc_wood_carving_engraving_services_en: "Precision CNC Wood Carving & Engraving Services",
        portfolio_exact_precision_cnc_wood_carving_engraving_services: "Услуги точной резьбы и гравировки по дереву на ЧПУ",
        
        portfolio_exact_precision_cnc_crafted_heart_shaped_wooden_box_en: "Precision CNC-Crafted Heart-Shaped Wooden Box",
        portfolio_exact_precision_cnc_crafted_heart_shaped_wooden_box: "Точно изготовленная с помощью ЧПУ деревянная коробка в форме сердца",
        
        portfolio_exact_personalized_wooden_gift_sets_perfect_for_any_occasion_en: "Personalized Wooden Gift Sets – Perfect for Any Occasion",
        portfolio_exact_personalized_wooden_gift_sets_perfect_for_any_occasion: "Персонализированные деревянные подарочные наборы – идеально для любого случая",
        
        portfolio_exact_celegant_stylish_laser_cut_wooden_watch_en: "CElegant & Stylish Laser-Cut Wooden Watch",
        portfolio_exact_celegant_stylish_laser_cut_wooden_watch: "Элегантные и стильные деревянные часы лазерной резки",
        
        portfolio_exact_cultural_heritage_meets_innovation_3d_printed_amir_temur_statue_en: "Cultural Heritage Meets Innovation: 3D-Printed Amir Temur Statue",
        portfolio_exact_cultural_heritage_meets_innovation_3d_printed_amir_temur_statue: "Культурное наследие встречается с инновациями: 3D-печатная статуя Амира Темура",
        
        portfolio_exact_minimalist_cnc_wooden_organizer_for_office_home_en: "Minimalist CNC Wooden Organizer for Office & Home",
        portfolio_exact_minimalist_cnc_wooden_organizer_for_office_home: "Минималистичный деревянный органайзер с ЧПУ для офиса и дома",
        
        portfolio_exact_high_precision_sla_3d_printing_for_industrial_applications_en: "High-Precision SLA 3D Printing for Industrial Applications",
        portfolio_exact_high_precision_sla_3d_printing_for_industrial_applications: "Высокоточная SLA 3D-печать для промышленных применений",
        
        portfolio_exact_bringing_ideas_to_life_with_sla_additive_manufacturing_en: "Bringing Ideas to Life with SLA Additive Manufacturing",
        portfolio_exact_bringing_ideas_to_life_with_sla_additive_manufacturing: "Воплощение идей с помощью SLA аддитивного производства",
        
        portfolio_exact_innovative_manufacturing_for_custom_parts_en: "Innovative Manufacturing for Custom Parts",
        portfolio_exact_innovative_manufacturing_for_custom_parts: "Инновационное производство для изготовления деталей на заказ",
        
        portfolio_exact_from_concept_to_reality_high_precision_3d_printing_en: "From Concept to Reality: High-Precision 3D Printing",
        portfolio_exact_from_concept_to_reality_high_precision_3d_printing: "От концепции к реальности: высокоточная 3D-печать",
        
        portfolio_exact_custom_3d_printed_solutions_for_engineering_art_industry_education_en: "Custom 3D-Printed Solutions for Engineering, Art, and Industry, Education",
        portfolio_exact_custom_3d_printed_solutions_for_engineering_art_industry_education: "Индивидуальные 3D-решения для инженерии, искусства, промышленности и образования",
        
        // General portfolio translations with simplified keys
        portfolio_3d_printed_mechanical_parts: "Механические детали, напечатанные на 3D-принтере",
        portfolio_innovative_manufacturing_for_custom: "Инновационное производство для изготовления деталей на заказ",
        portfolio_from_concept_to_reality_high_prec: "От концепции к реальности: высокоточная 3D-печать",
        portfolio_custom_3d_printed_solutions_for_e: "Индивидуальные 3D-решения для инженерии, искусства и промышленности, образования",
        portfolio_jewelry_design_sample: "Образец дизайна ювелирных изделий",
        portfolio_high_precision_sla_3d_printing_fo: "Высокоточная SLA 3D-печать для промышленных применений",
        portfolio_bringing_ideas_to_life_with_sla_a: "Воплощение идей с помощью SLA аддитивного производства",
        portfolio_cultural_heritage_meets_innovatio: "Культурное наследие встречается с инновациями: 3D-печатная статуя Амира Темура",
        portfolio_decorative_panel_design: "Дизайн декоративных панелей",
        portfolio_celegant_stylish_laser_cut_wooden: "Элегантные и стильные деревянные часы лазерной резки",
        portfolio_personalized_wooden_gift_sets: "Персонализированные деревянные подарочные наборы – идеально для любого случая",
        portfolio_architectural_model_component: "Компонент архитектурной модели",
        portfolio_minimalist_cnc_wooden_organizer: "Минималистичный деревянный органайзер с ЧПУ для офиса и дома",
        portfolio_wood_carved_decorative_panel: "Декоративная панель с резьбой по дереву",
        portfolio_precision_cnc_crafted_heart_shape: "Точно изготовленная с помощью ЧПУ деревянная коробка в форме сердца",
        portfolio_precision_cnc_wood_carving_engrav: "Услуги точной резьбы и гравировки по дереву на ЧПУ",
        portfolio_vibrant_durable_uv_printed_design: "Яркие и долговечные УФ-печатные дизайны на аксессуарах",
        portfolio_uv_printing_technology_for_stunni: "Технология УФ-печати для потрясающих и долговечных дизайнов",
        portfolio_premium_uv_printing_for_customize: "Премиальная УФ-печать для индивидуальных подарков и брендинга",
        portfolio_high_quality_sticker_printing_for: "Высококачественная печать наклеек для брендинга и продвижения"
    },
    uz: {
        home: "Bosh sahifa",
        services: "Xizmatlar",
        servicesIntro: "Bizning FabLab 3D bosma (FDM va SLA), lazer kesish, CNC ishlov berish va UV bosma kabi raqamli ishlab chiqarish xizmatlarining keng doirasini taklif etadi. Biz turli sanoat sohalari uchun maxsus detallarni ishlab chiqarish, uskunalarni ta'mirlash va detallarni loyihalashda ixtisoslashganmiz.",
        portfolio: "Portfolio",
        equipment: "Uskunalar",
        about: "Biz haqimizda",
        contact: "Aloqa",
        welcome: "Yoshlar Tashabbuslari Markazining (YTM) FabLab'i sizning fantaziyalaringizni tayyor mahsulotga aylantiradi",
        slogan: "CMI murakkab detallar va mexanizmlarni ishlab chiqarish bo‘yicha xizmatlar taklif qiladi",
        exploreServices: "Xizmatlarimizni ko'ring",
        ourServices: "Bizning xizmatlar",
        threeD: "3D bosma",
        threeDDesc: "Prototiplar va tayyor mahsulotlar uchun yuqori sifatli 3D bosma xizmatlari.",
        laser: "Prototiplash",
        laserDesc: "Lazer kesish va CNC ishlov berish orqali aniq prototiplash.",
        uv: "UV bosma",
        uvDesc: "Turli materiallar va yuzalarga yuqori aniqlikdagi UV bosma.",
        cad: "3D modellashtirish",
        cadDesc: "Professional 3D modellashtirish va CAD dizayn xizmatlari.",
        ourWork: "Bizning ishlar",
        allProjects: "Barcha loyihalar",
        ourEquipment: "Bizning uskunalar",
        allEquipment: "Barcha uskunalar",
        threeDPrinters: "3D printerlar",
        laserCnc: "Lazer va CNC",
        prototypeTools: "Prototiplash",
        fdmPrinting: "FDM bosma",
        slaPrinting: "SLA smola",
        laserCutting: "Lazer kesish",
        cnc: "CNC ishlov berish",
        uvPrinting: "UV bosma",
        aboutUs: "Biz haqimizda",
        aboutDesc1: "Bizning FabLab zamonaviy ishlab chiqarish asboblari bilan jihozlangan va tajribali ustalar tomonidan boshqariladi. Biz yakka shaxslar, startaplar va prototip yaratish, ijod qilish va innovatsiyalarni joriy etishni xohlaydigan kompaniyalarga xizmatlar ko'rsatamiz.",
        aboutDesc2: "Raqamli ishlab chiqarishda ko'p yillik tajribaga ega bo'lgan jamoamiz g'oyalaringizni hayotga tatbiq etishga yordam beradi.",
        leadDesigner: "Bosh dizayner",
        fabricationExpert: "Ishlab chiqarish bo'yicha mutaxassis",
        electronicsSpecialist: "Elektronika bo'yicha mutaxassis",
        contactUs: "Biz bilan bog'laning",
        name: "Ism",
        email: "Elektron pochta",
        phone: "Telefon",
        subject: "Mavzu",
        message: "Xabar",
        selectSubject: "Mavzuni tanlang",
        generalInquiry: "Umumiy so'rov",
        equipmentRental: "Uskunalarni ijaraga olish",
        workshopRegistration: "Ustaxona uchun ro'yxatdan o'tish",
        partnership: "Hamkorlik imkoniyatlari",
        other: "Boshqa",
        sendMessage: "Xabar yuborish",
        sendUsMessage: "Bizga xabar yuboring",
        rights: "Barcha huquqlar himoyalangan.",
        quickLinks: "Tezkor havolalar",
        contactInfo: "Aloqa ma'lumotlari",
        followUs: "Bizni kuzating",
        footerDesc: "Yoshlar tashabbusi markazi innovatsiyalar, hamkorlik va ijodkorlik markazi hisoblanadi. Biz yangi avlod ijodkorlari salohiyatini oshirish uchun raqamli ishlab chiqarish vositalari va seminarlariga kirish imkoniyatini taqdim etamiz.",
        
        // Equipment names
        equipment_raise3d_pro3: "Raise3D Pro3",
        equipment_prusa_i3_mk3s: "Prusa i3 MK3S+",
        equipment_prusa_i3_mk3s_mmu2s: "Prusa i3 MK3S+ MMU2S",
        equipment_3d_printer_skrinter: "3D printer Skrinter",
        equipment_formlabs_form_3: "Formlabs Form 3",
        equipment_phrozen_sonic_mega_8k: "PHROZEN Sonic MEGA 8K",
        equipment_photonim_gs6040: "Photonim GS6040",
        equipment_volter_s: "VOLTER-S",
        equipment_roland_mono_fab_srm_20: "Roland Mono fab SRM-20",
        equipment_roland_versauv_lef2_200: "Roland VersaUV LEF2-200",
        equipment_roland_versastudio_bn_20: "Roland VersaSTUDIO BN-20",
        equipment_einscan_h: "EINSCAN H",
        
        // Equipment specs
        spec_build_volume: "Bosma hajmi",
        spec_multi_material: "Ko'p materialli",
        spec_resolution: "Aniqlik",
        spec_working_area: "Ish maydoni",
        spec_print_area: "Bosma maydoni",
        spec_width: "Kengligi",
        spec_accuracy: "Aniqlik",
        
        // Portfolio item titles - exact matches with English reference
        portfolio_exact_premium_uv_printing_for_customized_gifts_branding_en: "Premium UV Printing for Customized Gifts & Branding",
        portfolio_exact_premium_uv_printing_for_customized_gifts_branding: "Maxsus sovg'alar va brending uchun premium UV bosma",
        
        portfolio_exact_high_quality_sticker_printing_for_branding_promotion_en: "High-Quality Sticker Printing for Branding & Promotion",
        portfolio_exact_high_quality_sticker_printing_for_branding_promotion: "Brending va reklama uchun yuqori sifatli stiker bosma",
        
        portfolio_exact_uv_printing_technology_for_stunning_long_lasting_designs_en: "UV Printing Technology for Stunning & Long-Lasting Designs",
        portfolio_exact_uv_printing_technology_for_stunning_long_lasting_designs: "Ajoyib va uzoq muddatli dizaynlar uchun UV bosma texnologiyasi",
        
        portfolio_exact_vibrant_durable_uv_printed_designs_on_accessories_en: "Vibrant & Durable UV-Printed Designs on Accessories",
        portfolio_exact_vibrant_durable_uv_printed_designs_on_accessories: "Aksessuarlarda yorqin va chidamli UV bosma dizaynlar",
        
        portfolio_exact_precision_cnc_wood_carving_engraving_services_en: "Precision CNC Wood Carving & Engraving Services",
        portfolio_exact_precision_cnc_wood_carving_engraving_services: "Aniq CNC yog'och o'ymakorlik va gravirovka xizmatlari",
        
        portfolio_exact_precision_cnc_crafted_heart_shaped_wooden_box_en: "Precision CNC-Crafted Heart-Shaped Wooden Box",
        portfolio_exact_precision_cnc_crafted_heart_shaped_wooden_box: "Aniqlik bilan CNC texnologiyasi orqali yaratilgan yurak shaklidagi yog'och quti",
        
        portfolio_exact_personalized_wooden_gift_sets_perfect_for_any_occasion_en: "Personalized Wooden Gift Sets – Perfect for Any Occasion",
        portfolio_exact_personalized_wooden_gift_sets_perfect_for_any_occasion: "Shaxsiy yog'och sovg'a to'plamlari – har qanday tadbir uchun ideal",
        
        portfolio_exact_celegant_stylish_laser_cut_wooden_watch_en: "CElegant & Stylish Laser-Cut Wooden Watch",
        portfolio_exact_celegant_stylish_laser_cut_wooden_watch: "Nozik va zamonaviy lazer bilan kesilgan yog'och soat",
        
        portfolio_exact_cultural_heritage_meets_innovation_3d_printed_amir_temur_statue_en: "Cultural Heritage Meets Innovation: 3D-Printed Amir Temur Statue",
        portfolio_exact_cultural_heritage_meets_innovation_3d_printed_amir_temur_statue: "Madaniy meros va innovatsiyalar: 3D bosmada chop etilgan Amir Temur haykali",
        
        portfolio_exact_minimalist_cnc_wooden_organizer_for_office_home_en: "Minimalist CNC Wooden Organizer for Office & Home",
        portfolio_exact_minimalist_cnc_wooden_organizer_for_office_home: "Ofis va uy uchun minimalistik CNC yog'och organayzer",
        
        portfolio_exact_high_precision_sla_3d_printing_for_industrial_applications_en: "High-Precision SLA 3D Printing for Industrial Applications",
        portfolio_exact_high_precision_sla_3d_printing_for_industrial_applications: "Sanoat maqsadlari uchun yuqori aniqlikdagi SLA 3D bosma",
        
        portfolio_exact_bringing_ideas_to_life_with_sla_additive_manufacturing_en: "Bringing Ideas to Life with SLA Additive Manufacturing",
        portfolio_exact_bringing_ideas_to_life_with_sla_additive_manufacturing: "SLA additiv ishlab chiqarish orqali g'oyalarni hayotga tatbiq etish",
        
        portfolio_exact_innovative_manufacturing_for_custom_parts_en: "Innovative Manufacturing for Custom Parts",
        portfolio_exact_innovative_manufacturing_for_custom_parts: "Maxsus qismlar uchun innovatsion ishlab chiqarish",
        
        portfolio_exact_from_concept_to_reality_high_precision_3d_printing_en: "From Concept to Reality: High-Precision 3D Printing",
        portfolio_exact_from_concept_to_reality_high_precision_3d_printing: "G'oyadan haqiqatgacha: yuqori aniqlikdagi 3D bosma",
        
        portfolio_exact_custom_3d_printed_solutions_for_engineering_art_industry_education_en: "Custom 3D-Printed Solutions for Engineering, Art, and Industry, Education",
        portfolio_exact_custom_3d_printed_solutions_for_engineering_art_industry_education: "Muhandislik, san'at, sanoat va ta'lim uchun maxsus 3D bosma yechimlari",
        
        // General portfolio translations with simplified keys
        portfolio_3d_printed_mechanical_parts: "3D bosmada chop etilgan mexanik qismlar",
        portfolio_innovative_manufacturing_for_custom: "Maxsus qismlar uchun innovatsion ishlab chiqarish",
        portfolio_from_concept_to_reality_high_prec: "G'oyadan haqiqatgacha: yuqori aniqlikdagi 3D bosma",
        portfolio_custom_3d_printed_solutions_for_e: "Muhandislik, san'at, sanoat va ta'lim uchun maxsus 3D bosma yechimlari",
        portfolio_jewelry_design_sample: "Zargarlik buyumlari dizayni namunasi",
        portfolio_high_precision_sla_3d_printing_fo: "Sanoat maqsadlari uchun yuqori aniqlikdagi SLA 3D bosma",
        portfolio_bringing_ideas_to_life_with_sla_a: "SLA additiv ishlab chiqarish orqali g'oyalarni hayotga tatbiq etish",
        portfolio_cultural_heritage_meets_innovatio: "Madaniy meros va innovatsiyalar: 3D bosmada chop etilgan Amir Temur haykali",
        portfolio_decorative_panel_design: "Dekorativ panel dizayni",
        portfolio_celegant_stylish_laser_cut_wooden: "Nozik va zamonaviy lazer bilan kesilgan yog'och soat",
        portfolio_personalized_wooden_gift_sets: "Shaxsiy yog'och sovg'a to'plamlari – har qanday tadbir uchun ideal",
        portfolio_architectural_model_component: "Arxitektura modeli komponenti",
        portfolio_minimalist_cnc_wooden_organizer: "Ofis va uy uchun minimalistik CNC yog'och organayzer",
        portfolio_wood_carved_decorative_panel: "Yog'och o'ymakorlik dekorativ panel",
        portfolio_precision_cnc_crafted_heart_shape: "Aniqlik bilan CNC texnologiyasi orqali yaratilgan yurak shaklidagi yog'och quti",
        portfolio_precision_cnc_wood_carving_engrav: "Aniq CNC yog'och o'ymakorlik va gravirovka xizmatlari",
        portfolio_vibrant_durable_uv_printed_design: "Aksessuarlarda yorqin va chidamli UV bosma dizaynlar",
        portfolio_uv_printing_technology_for_stunni: "Ajoyib va uzoq muddatli dizaynlar uchun UV bosma texnologiyasi",
        portfolio_premium_uv_printing_for_customize: "Maxsus sovg'alar va brending uchun premium UV bosma",
        portfolio_high_quality_sticker_printing_for: "Brending va reklama uchun yuqori sifatli stiker bosma"
    }
};

// Make updatePageLanguage function globally available
window.updatePageLanguage = updatePageLanguage;
window.translations = translations;