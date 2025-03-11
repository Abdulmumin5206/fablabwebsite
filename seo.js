/**
 * FabLab SEO Implementation for GitHub Pages
 */
document.addEventListener('DOMContentLoaded', () => {
    updateMetaTags();
    updateAltText();
    addRichContent();
    
    // Listen for language changes
    const languageItems = document.querySelectorAll('.select-item');
    languageItems.forEach(item => {
        item.addEventListener('click', () => {
            // Wait for language change to complete
            setTimeout(() => {
                updateMetaTags();
                updateAltText();
                addRichContent();
            }, 200);
        });
    });
});

/**
 * Updates meta tags based on current language
 */
function updateMetaTags() {
    const lang = localStorage.getItem('language') || 'en';
    
    // Set HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Update title based on language
    if (lang === 'en') {
        document.title = "FabLab Services - 3D Printing, Laser Cutting, CNC Machining & Design Services";
    } else if (lang === 'ru') {
        document.title = "Услуги FabLab - 3D печать, лазерная резка, ЧПУ обработка и услуги проектирования";
    } else if (lang === 'uz') {
        document.title = "FabLab xizmatlari - 3D bosma, lazer kesish, CNC ishlov berish va dizayn xizmatlari";
    }
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        if (lang === 'en') {
            metaDescription.setAttribute('content', 'Professional 3D printing, laser cutting, CNC machining, spare parts design & manufacturing, UV printing services at the Center for Youth Initiatives FabLab in Tashkent.');
        } else if (lang === 'ru') {
            metaDescription.setAttribute('content', 'Профессиональные услуги 3D печати, лазерной резки, ЧПУ обработки, проектирования и изготовления запасных частей, УФ печати в Центре Молодежных Инициатив FabLab в Ташкенте.');
        } else if (lang === 'uz') {
            metaDescription.setAttribute('content', 'Toshkentdagi Yoshlar Tashabbuslari Markazi FabLab\'ida professional 3D bosma, lazer kesish, CNC ishlov berish, ehtiyot qismlarni loyihalash va ishlab chiqarish, UV bosma xizmatlari.');
        }
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        if (lang === 'en') {
            metaKeywords.setAttribute('content', '3D printing, FDM printing, SLA printing, laser cutting, CNC machines, spare parts, parts manufacturing, equipment repair, parts design, mold design, stamp mold, UV printing, CAD, additive manufacturing');
        } else if (lang === 'ru') {
            metaKeywords.setAttribute('content', '3D печать, FDM печать, SLA печать, лазерная резка, станки ЧПУ, запасные части, изготовление деталей, ремонт оборудования, проектирование деталей, пресс форма, штамп форма, УФ печать, САПР, аддитивное производство');
        } else if (lang === 'uz') {
            metaKeywords.setAttribute('content', '3D bosma, FDM bosma, SLA bosma, lazer kesish, CNC dastgohlar, ehtiyot qismlar, detallarni ishlab chiqarish, uskunalarni tamirlash, detallarni loyihalash, press qolip, shtamp qolip, UV bosma, CAD, additiv ishlab chiqarish');
        }
    }

    // Update canonical
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
        canonicalLink.setAttribute('href', 'https://abdulmumin5206.github.io/fablabwebsite/');
    }

    // Update hreflang links
    const hreflangLink = document.querySelector('link[rel="alternate"][hreflang]');
    if (hreflangLink) {
        hreflangLink.setAttribute('href', 'https://abdulmumin5206.github.io/fablabwebsite/');
    }
}

/**
 * Updates image alt text with SEO-friendly descriptions
 */
function updateAltText() {
    const lang = localStorage.getItem('language') || 'en';
    
    // Equipment images
    const equipmentImages = document.querySelectorAll('.equipment-item img');
    equipmentImages.forEach(img => {
        const parentItem = img.closest('.equipment-item');
        if (!parentItem) return;
        
        const title = parentItem.querySelector('h3')?.textContent;
        const type = parentItem.querySelector('.equipment-type')?.textContent;
        
        if (title) {
            if (lang === 'en') {
                img.alt = `${title} - Professional ${type || ''} equipment at Center for Youth Initiatives FabLab Tashkent`;
            } else if (lang === 'ru') {
                img.alt = `${title} - Профессиональное ${type || ''} оборудование в Центре Молодежных Инициатив FabLab Ташкент`;
            } else if (lang === 'uz') {
                img.alt = `${title} - Toshkentdagi Yoshlar Tashabbuslari Markazi FabLab'da professional ${type || ''} uskunasi`;
            }
        }
    });
    
    // Portfolio images
    const portfolioImages = document.querySelectorAll('.portfolio-item img');
    portfolioImages.forEach(img => {
        const parentItem = img.closest('.portfolio-item');
        if (!parentItem) return;
        
        const title = parentItem.querySelector('h3')?.textContent;
        const category = parentItem.getAttribute('data-category');
        
        if (title && category) {
            let altText = '';
            
            if (lang === 'en') {
                if (category === 'fdm') {
                    altText = `FDM 3D printed ${title} - Custom parts manufacturing at FabLab Tashkent`;
                } else if (category === 'sla') {
                    altText = `SLA resin 3D printed ${title} - High-precision parts at FabLab Tashkent`;
                } else if (category === 'laser') {
                    altText = `Laser cut ${title} - Precision laser cutting services at FabLab Tashkent`;
                } else if (category === 'cnc') {
                    altText = `CNC machined ${title} - Custom CNC manufacturing at FabLab Tashkent`;
                } else if (category === 'uv') {
                    altText = `UV printed ${title} - High-resolution UV printing at FabLab Tashkent`;
                }
            } else if (lang === 'ru') {
                if (category === 'fdm') {
                    altText = `${title} напечатанный на FDM 3D принтере - Изготовление деталей на заказ в FabLab Ташкент`;
                } else if (category === 'sla') {
                    altText = `${title} напечатанный на SLA 3D принтере - Высокоточные детали в FabLab Ташкент`;
                } else if (category === 'laser') {
                    altText = `${title} вырезанный лазером - Услуги точной лазерной резки в FabLab Ташкент`;
                } else if (category === 'cnc') {
                    altText = `${title} изготовленный на ЧПУ - Индивидуальное производство на ЧПУ в FabLab Ташкент`;
                } else if (category === 'uv') {
                    altText = `${title} с УФ-печатью - Высокоточная УФ-печать в FabLab Ташкент`;
                }
            } else if (lang === 'uz') {
                if (category === 'fdm') {
                    altText = `FDM 3D printerda bosilgan ${title} - Toshkent FabLab'da maxsus detallarni ishlab chiqarish`;
                } else if (category === 'sla') {
                    altText = `SLA smola 3D printerda bosilgan ${title} - Toshkent FabLab'da yuqori aniqlikdagi detallar`;
                } else if (category === 'laser') {
                    altText = `Lazer bilan kesilgan ${title} - Toshkent FabLab'da aniq lazer kesish xizmatlari`;
                } else if (category === 'cnc') {
                    altText = `CNC'da ishlov berilgan ${title} - Toshkent FabLab'da maxsus CNC ishlab chiqarish`;
                } else if (category === 'uv') {
                    altText = `UV bosma ${title} - Toshkent FabLab'da yuqori aniqlikdagi UV bosma`;
                }
            }
            
            if (altText) {
                img.alt = altText;
            }
        }
    });
    
    // Service icons
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const icon = card.querySelector('.service-icon i');
        if (!icon) return;
        
        const title = card.querySelector('h3')?.textContent;
        
        if (title) {
            if (lang === 'en') {
                icon.setAttribute('aria-label', `${title} service at FabLab Center for Youth Initiatives`);
            } else if (lang === 'ru') {
                icon.setAttribute('aria-label', `Услуга ${title} в FabLab Центра Молодежных Инициатив`);
            } else if (lang === 'uz') {
                icon.setAttribute('aria-label', `Yoshlar Tashabbuslari Markazi FabLab'da ${title} xizmati`);
            }
        }
    });
}

/**
 * Adds rich SEO content to the page
 */
function addRichContent() {
    const lang = localStorage.getItem('language') || 'en';
    const servicesSection = document.getElementById('services');
    
    if (!servicesSection) return;
    
    // Remove existing rich content
    const existingContent = document.querySelector('.seo-rich-content');
    if (existingContent) {
        existingContent.remove();
    }
    
    // Create new rich content div
    const richContentDiv = document.createElement('div');
    richContentDiv.className = 'seo-rich-content';
    richContentDiv.setAttribute('aria-hidden', 'true');
    richContentDiv.style.display = 'none';
    
    // Add rich keyword content based on language
    if (lang === 'en') {
        richContentDiv.innerHTML = `
            <div class="seo-service">
                <h2>3D Printing Services in Tashkent</h2>
                <p>Our FabLab offers high-quality FDM and SLA 3D printing services for prototypes, custom parts, and final products. We use professional-grade equipment including Raise3D Pro3, Prusa i3 MK3S+, Formlabs Form 3, and PHROZEN Sonic MEGA 8K printers to ensure exceptional quality for all your manufacturing needs.</p>
                <h3>Spare Parts Manufacturing</h3>
                <p>Need replacement parts? Our 3D printing services can create exact replicas of broken or worn-out components. We specialize in reverse engineering and parts design for equipment repair and maintenance.</p>
            </div>
            <div class="seo-service">
                <h2>Laser Cutting & CNC Machining</h2>
                <p>Precision laser cutting and CNC machining services for parts manufacturing and prototyping. Our Photonim GS6040 CO₂ laser cutter and VOLTER-S CNC machines allow us to create accurate parts from various materials including wood, acrylic, and metal.</p>
                <h3>Mold Design and Manufacturing</h3>
                <p>We offer professional mold design and stamp mold fabrication services using our advanced CNC machines. Perfect for production runs and custom manufacturing projects.</p>
            </div>
            <div class="seo-service">
                <h2>CAD Design & Parts Engineering</h2>
                <p>Professional 3D modeling and parts design services for manufacturing, prototyping, and repair. We help create custom parts, replacement components, and molds for various applications using industry-standard CAD software.</p>
                <h3>Additive Manufacturing Solutions</h3>
                <p>Leverage the power of additive manufacturing for your projects. Our services include consulting on design for additive manufacturing (DfAM) to optimize your parts for 3D printing production.</p>
            </div>
            <div class="seo-service">
                <h2>UV Printing Services</h2>
                <p>High-resolution UV printing on various materials and surfaces using our Roland VersaUV LEF2-200 printer. Perfect for branding, customized products, and promotional materials.</p>
            </div>
        `;
    } else if (lang === 'ru') {
        richContentDiv.innerHTML = `
            <div class="seo-service">
                <h2>Услуги 3D печати в Ташкенте</h2>
                <p>Наш FabLab предлагает высококачественные услуги FDM и SLA 3D печати для прототипов, индивидуальных деталей и готовых изделий. Мы используем профессиональное оборудование, включая принтеры Raise3D Pro3, Prusa i3 MK3S+, Formlabs Form 3 и PHROZEN Sonic MEGA 8K, чтобы обеспечить исключительное качество для всех ваших производственных потребностей.</p>
                <h3>Изготовление запасных частей</h3>
                <p>Нужны запасные части? Наши услуги 3D-печати могут создать точные копии сломанных или изношенных компонентов. Мы специализируемся на обратном инжиниринге и проектировании деталей для ремонта и обслуживания оборудования.</p>
            </div>
            <div class="seo-service">
                <h2>Лазерная резка и ЧПУ обработка</h2>
                <p>Точные услуги лазерной резки и ЧПУ обработки для изготовления деталей и прототипирования. Наши станки Photonim GS6040 CO₂ и VOLTER-S ЧПУ позволяют создавать точные детали из различных материалов, включая дерево, акрил и металл.</p>
                <h3>Проектирование и изготовление форм</h3>
                <p>Мы предлагаем профессиональные услуги по проектированию пресс-форм и изготовлению штамп-форм с использованием наших современных станков ЧПУ. Идеально подходит для производственных партий и индивидуальных производственных проектов.</p>
            </div>
            <div class="seo-service">
                <h2>САПР проектирование и инженерия деталей</h2>
                <p>Профессиональные услуги 3D моделирования и проектирования деталей для производства, прототипирования и ремонта. Мы помогаем создавать индивидуальные детали, запасные компоненты и пресс-формы для различных применений с использованием отраслевого стандартного программного обеспечения САПР.</p>
                <h3>Решения для аддитивного производства</h3>
                <p>Используйте возможности аддитивного производства для ваших проектов. Наши услуги включают консультации по проектированию для аддитивного производства (DfAM), чтобы оптимизировать ваши детали для производства методом 3D-печати.</p>
            </div>
            <div class="seo-service">
                <h2>Услуги УФ-печати</h2>
                <p>Высокоточная УФ-печать на различных материалах и поверхностях с использованием нашего принтера Roland VersaUV LEF2-200. Идеально подходит для брендинга, индивидуальных продуктов и рекламных материалов.</p>
            </div>
        `;
    } else if (lang === 'uz') {
        richContentDiv.innerHTML = `
            <div class="seo-service">
                <h2>Toshkentda 3D bosma xizmatlari</h2>
                <p>Bizning FabLab prototiplar, maxsus detallar va tayyor mahsulotlar uchun yuqori sifatli FDM va SLA 3D bosma xizmatlarini taklif etadi. Barcha ishlab chiqarish ehtiyojlaringiz uchun ajoyib sifatni ta'minlash uchun Raise3D Pro3, Prusa i3 MK3S+, Formlabs Form 3 va PHROZEN Sonic MEGA 8K printerlar kabi professional darajadagi uskunalardan foydalanamiz.</p>
                <h3>Ehtiyot qismlarni ishlab chiqarish</h3>
                <p>Ehtiyot qismlarga muhtojmisiz? Bizning 3D bosma xizmatlarimiz singan yoki eskirgan komponentlarning aniq nusxalarini yaratishi mumkin. Biz uskunalarni ta'mirlash va texnik xizmat ko'rsatish uchun teskari muhandislik va detallarni loyihalashga ixtisoslashganmiz.</p>
            </div>
            <div class="seo-service">
                <h2>Lazer kesish va CNC ishlov berish</h2>
                <p>Detallarni ishlab chiqarish va prototiplash uchun aniq lazer kesish va CNC ishlov berish xizmatlari. Bizning Photonim GS6040 CO₂ lazer kesuvchi va VOLTER-S CNC mashinalarimiz yog'och, akril va metall kabi turli materiallardan aniq detallarni yaratish imkonini beradi.</p>
                <h3>Qolip dizayni va ishlab chiqarish</h3>
                <p>Biz zamonaviy CNC mashinalarimizdan foydalangan holda professional press qolip dizayni va shtamp qolip ishlab chiqarish xizmatlarini taklif etamiz. Ishlab chiqarish partiyalari va maxsus ishlab chiqarish loyihalari uchun ideal.</p>
            </div>
            <div class="seo-service">
                <h2>CAD dizayn va detallarni muhandislik qilish</h2>
                <p>Ishlab chiqarish, prototiplash va ta'mirlash uchun professional 3D modellashtirish va detal loyihalash xizmatlari. Biz sanoat standartidagi CAD dasturiy ta'minotidan foydalangan holda turli xil ilovalar uchun maxsus detallar, o'rindosh komponentlar va qoliplar yaratishga yordam beramiz.</p>
                <h3>Additiv ishlab chiqarish yechimlari</h3>
                <p>Loyihalaringiz uchun additiv ishlab chiqarish imkoniyatlaridan foydalaning. Bizning xizmatlarimiz 3D bosma ishlab chiqarish uchun detallaringizni optimallashtirish uchun additiv ishlab chiqarish uchun dizayn (DfAM) bo'yicha maslahatlarni o'z ichiga oladi.</p>
            </div>
            <div class="seo-service">
                <h2>UV bosma xizmatlari</h2>
                <p>Roland VersaUV LEF2-200 printerimizdan foydalangan holda turli xil materiallar va yuzalarga yuqori aniqlikdagi UV bosma. Brending, maxsus mahsulotlar va reklama materiallari uchun ideal.</p>
            </div>
        `;
    }
    
    servicesSection.appendChild(richContentDiv);
}