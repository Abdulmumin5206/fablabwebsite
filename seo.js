// Add this function to your seo.js file
function addFAQSchema() {
    const lang = localStorage.getItem('language') || 'en';
    
    // Remove existing FAQ schema
    const existingSchema = document.querySelector('script[data-schema="faq"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    // Create FAQ questions based on language
    let faqQuestions = [];
    
    if (lang === 'en') {
      faqQuestions = [
        {
          "@type": "Question",
          "name": "What 3D printing services do you offer in Tashkent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer both FDM (Fused Deposition Modeling) and SLA (Stereolithography) 3D printing services in Tashkent. Our equipment includes Raise3D Pro3, Prusa i3 MK3S+, Formlabs Form 3, and PHROZEN Sonic MEGA 8K printers, allowing us to work with a wide range of materials including PLA, PETG, ABS, TPU, and photopolymer resins."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide laser cutting services in Uzbekistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide professional laser cutting services in Uzbekistan using our Photonim GS6040 CO₂ laser cutter. We can cut and engrave various materials including wood, acrylic, fabric, paper, and thin metals with high precision. Our working area is 600 × 400 mm."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with custom parts design in Tashkent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Our professional design team in Tashkent provides comprehensive 3D modeling and CAD design services. We can help with everything from reverse engineering existing parts to creating new custom designs from scratch. We specialize in design for additive manufacturing (DfAM) to ensure your parts are optimized for production."
          }
        },
        {
          "@type": "Question",
          "name": "What is the turnaround time for 3D printing projects in your Tashkent facility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Turnaround times vary depending on project complexity, size, and our current workload. Simple FDM prints can often be completed within 24-48 hours, while more complex SLA prints might take 2-4 days. For large or rush orders, please contact us directly to discuss timeline requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Where is your digital fabrication lab located in Uzbekistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our FabLab is located in Tashkent, Mirzo-Ulugbek district, Olmachi 17, 100007, Uzbekistan. We serve clients from all over Uzbekistan and Central Asia with our digital fabrication services."
          }
        }
      ];
    } else if (lang === 'ru') {
      faqQuestions = [
        {
          "@type": "Question",
          "name": "Какие услуги 3D-печати вы предлагаете в Ташкенте?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Мы предлагаем услуги 3D-печати как по технологии FDM (моделирование методом наплавления), так и SLA (стереолитография) в Ташкенте. Наше оборудование включает принтеры Raise3D Pro3, Prusa i3 MK3S+, Formlabs Form 3 и PHROZEN Sonic MEGA 8K, что позволяет нам работать с широким спектром материалов, включая PLA, PETG, ABS, TPU и фотополимерные смолы."
          }
        },
        {
          "@type": "Question",
          "name": "Предоставляете ли вы услуги лазерной резки в Узбекистане?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, мы предоставляем профессиональные услуги лазерной резки в Узбекистане с использованием нашего CO₂ лазерного резака Photonim GS6040. Мы можем резать и гравировать различные материалы, включая дерево, акрил, ткань, бумагу и тонкие металлы с высокой точностью. Наша рабочая область составляет 600 × 400 мм."
          }
        },
        {
          "@type": "Question",
          "name": "Можете ли вы помочь с проектированием деталей на заказ в Ташкенте?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Абсолютно! Наша профессиональная команда дизайнеров в Ташкенте предоставляет комплексные услуги 3D-моделирования и проектирования CAD. Мы можем помочь с обратным инжинирингом существующих деталей и созданием новых индивидуальных проектов с нуля. Мы специализируемся на проектировании для аддитивного производства (DfAM), чтобы гарантировать оптимизацию ваших деталей для производства."
          }
        }
      ];
    } else if (lang === 'uz') {
      faqQuestions = [
        {
          "@type": "Question",
          "name": "Toshkentda qanday 3D bosma xizmatlarini taklif qilasiz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Toshkentda ham FDM (Fused Deposition Modeling) ham SLA (Stereolithography) 3D bosma xizmatlarini taklif qilamiz. Bizning uskunalarimiz Raise3D Pro3, Prusa i3 MK3S+, Formlabs Form 3 va PHROZEN Sonic MEGA 8K printerlarini o'z ichiga oladi, bu bizga PLA, PETG, ABS, TPU va fotopolimer smolalar kabi materiallarning keng doirasi bilan ishlash imkonini beradi."
          }
        },
        {
          "@type": "Question",
          "name": "O'zbekistonda lazer kesish xizmatlarini taqdim etasizmi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ha, biz O'zbekistonda Photonim GS6040 CO₂ lazer kesuvchimizdan foydalangan holda professional lazer kesish xizmatlarini taqdim etamiz. Biz yog'och, akril, mato, qog'oz va yupqa metallar kabi turli materiallarni yuqori aniqlik bilan kesish va o'yib naqsh solishimiz mumkin. Bizning ish maydonimiz 600 × 400 mm."
          }
        }
      ];
    }
    
    // Create FAQ schema
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-schema', 'faq');
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqQuestions
    });
    
    // Add to head
    document.head.appendChild(faqSchema);
  }
  
  // Add breadcrumb schema
  function addBreadcrumbSchema() {
    const lang = localStorage.getItem('language') || 'en';
    const path = window.location.pathname;
    
    // Only add breadcrumbs for deeper pages
    if (path.split('/').length <= 3) return;
    
    const existingSchema = document.querySelector('script[data-schema="breadcrumb"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    // Determine breadcrumb items based on path
    const breadcrumbItems = [];
    const basePath = 'https://abdulmumin5206.github.io/fablabwebsite';
    
    // Always add home
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 1,
      "name": lang === 'en' ? "Home" : (lang === 'ru' ? "Главная" : "Bosh sahifa"),
      "item": `${basePath}/${lang}/`
    });
    
    // Add additional path segments
    const segments = path.split('/').filter(s => s && s !== 'fablabwebsite' && s !== lang);
    
    segments.forEach((segment, index) => {
      let name = '';
      
      // Map segment to readable name
      if (segment === 'services') {
        name = lang === 'en' ? "Services" : (lang === 'ru' ? "Услуги" : "Xizmatlar");
      } else if (segment === '3d-printing') {
        name = lang === 'en' ? "3D Printing" : (lang === 'ru' ? "3D Печать" : "3D Bosma");
      } else if (segment === 'laser-cutting') {
        name = lang === 'en' ? "Laser Cutting" : (lang === 'ru' ? "Лазерная резка" : "Lazer Kesish");
      } else {
        name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      }
      
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `${basePath}/${lang}/${segments.slice(0, index + 1).join('/')}/`
      });
    });
    
    // Create breadcrumb schema
    const breadcrumbSchema = document.createElement('script');
    breadcrumbSchema.type = 'application/ld+json';
    breadcrumbSchema.setAttribute('data-schema', 'breadcrumb');
    breadcrumbSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    });
    
    // Add to head
    document.head.appendChild(breadcrumbSchema);
  }
  
  // Add LocalBusiness schema with geo coordinates
  function addLocalBusinessSchema() {
    const lang = localStorage.getItem('language') || 'en';
    
    const existingSchema = document.querySelector('script[data-schema="business"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    // Business description based on language
    let description = '';
    if (lang === 'en') {
      description = "Professional digital fabrication services including 3D printing, laser cutting, CNC machining, and design services in Tashkent, Uzbekistan.";
    } else if (lang === 'ru') {
      description = "Профессиональные услуги цифрового производства, включая 3D-печать, лазерную резку, ЧПУ-обработку и услуги проектирования в Ташкенте, Узбекистан.";
    } else if (lang === 'uz') {
      description = "Toshkent, O'zbekistonda professional raqamli ishlab chiqarish xizmatlari, jumladan 3D bosma, lazer kesish, CNC ishlov berish va dizayn xizmatlari.";
    }
    
    // Create business schema
    const businessSchema = document.createElement('script');
    businessSchema.type = 'application/ld+json';
    businessSchema.setAttribute('data-schema', 'business');
    businessSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "FabLab Center for Youth Initiatives",
      "image": "https://abdulmumin5206.github.io/fablabwebsite/images/logo.png",
      "description": description,
      "url": "https://abdulmumin5206.github.io/fablabwebsite/",
      "telephone": "+998770883977",
      "email": "Info@cfyi.uz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Olmachi 17",
        "addressLocality": "Tashkent",
        "addressRegion": "Mirzo-Ulugbek District",
        "postalCode": "100007",
        "addressCountry": "UZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.3366,
        "longitude": 69.2949
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "$$",
      "sameAs": [
        "https://www.instagram.com/fablab.cfyi/",
        "https://www.linkedin.com/company/center-for-youth-initiatives",
        "https://www.youtube.com/@CenterforYouthInitiatives",
        "https://www.facebook.com/centerforyouthinitiatives"
      ]
    });
    
    // Add to head
    document.head.appendChild(businessSchema);
  }
  
  // Add all schemas
  function addAllSchemas() {
    addFAQSchema();
    addBreadcrumbSchema();
    addLocalBusinessSchema();
  }
  
  // Update addRichContent function to include schema
  function addRichContent() {
    // Your existing code...
    
    // Then add this at the end of the function
    addAllSchemas();
  }