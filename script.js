// --- CONSTANTS ---
const CONTACT_INFO = {
    address: "Ghorahi, Dang, Nepal",
    phoneMobile: "+977-9810145197", 
    email: "ghorahimero@gmail.com", 
};

const HOURS_INFO = {
    schedule: "Sunday – Friday",
    time: "10:00 AM – 5:00 PM",
};

// --- FULL TRANSLATION DICTIONARY ---
const translations = {
    en: {
        // Top Bar
        directory: 'Directory', emergency: 'Emergency:', police: 'Police', ambulance: 'Ambulance', fire: 'Fire',
        langPrefix: 'lan/भाषा:', 
        // Header
        govName: 'Mero Ghorahi',
        portalName: 'Community Portal',
        // Nav
        navHome: 'Home', navWards: 'Wards', navComplaint: 'Complain', navMenu: 'Menu',
        navVideos: 'Videos', navImages: 'Images', navLifeline: 'Local Lifeline', navAbout: 'About Us',
        // Menu Sections & Items
        menuRights: 'Your Rights', menuAskMayor: 'Ask Your Mayor', menuComplainProgress: 'Complain Progress', menuJoinUs: 'Join Us',
        menuMoney: 'Your Money', menuTaxCalc: 'Tax Calculator', menuDonate: 'Donate Us',
        
        // Home
        missionTitle: 'Our Core Mission', missionText: "We are here to make sure Ghorahi's government is listening and acting. This website is your direct line. We help you report problems you see in the city and make sure your local offices are held responsible for fixing them. We turn your voice into real change, making Ghorahi better, together.",
        // Achievements
        achievementsTitle: 'Our Achievements', achievementsSub: 'Key milestones in our commitment to progress',
        // Wards Page
        wardsTitle: 'Wards Directory', wardsSub: 'Select your ward to view detailed information (1-19)',
        // Ward Modal Translations
        wardDetailsTitle: 'Ward Details', wardHead: 'Representative:', 
        modalNote: 'Contact the ward office directly for service inquiries.',
        
        // Tax Calculator Modal Translations
        taxCalcTitle: 'Indirect Tax Calculator', 
        taxCalcInfo: 'Enter your total Yearly expenditure (excluding rent, savings, and investment) to estimate the amount of indirect tax (like VAT) you pay in Nepal.',
        expenditureLabel: 'Total Yearly Expenditure (NPR):',
        calculateBtn: 'Calculate Tax',
        taxPaidLabel: 'Estimated Indirect Tax Paid:',
        // Donate Modal Translations
        modalDonateTitle: 'Scan to Donate',
        modalDonatePara: 'Your generous contribution helps us improve local infrastructure and services for everyone in the municipality. Thank you for your support!',
        modalDonateNote: 'Note: Please verify the receiver\'s name **[Receiver Name]** before completing the transaction.',
        
        // Local Lifeline Translations
        lifelineTitle: 'Local Lifeline Contacts',
        lifelineSub: 'Essential emergency and public service numbers for Ghorahi.',
        lifelineBack: 'Back to Home',
        lifelineNameHeader: 'Name / Department',
        lifelineNumberHeader: 'Contact Number',
        disasterMgmt: 'Disaster Management',
        khanepaniMgmt: 'Water Supply Management',
        ambulanceStaff: 'Ambulance Staff',
        caoo: 'Chief Administrative Officer',
        nagarPolice: 'Nagar Police',
        traffic: 'Traffic Police',
        raptiHospital: 'Rapti Hospital',
        bloodBank: 'Blood Bank',
        redCrossDang: 'Red Cross Dang',
        cdo: 'Chief District Officer (CDO)',
        nagarPalika: 'Ghorahi Nagarpalika',
        districtCourt: 'District Court',
        nepalTelecom: 'Nepal Telecom',
        electricityAuthority: 'Electricity Authority Ghorahi',

        // Footer
        contact: 'Contact Information', 
        address: 'Community Portal Office', 
        addressLine: 'Ghorahi, Dang, Nepal', 
        phoneMobile: 'Mobile',
        email: 'Email',
        hours: 'Office Hours', hoursInfo: 'Sunday - Friday', hoursTime: '10:00 AM - 5:00 PM', closed: 'Closed on Saturdays and Public Holidays',
        lastUpdated: 'Last Updated', lastUpdatedDate: 'December 8, 2025', 
        copyright: '© 2025 Mero Ghorahi Community Portal. All rights reserved.'
    },
    ne: {
        // Top Bar
        directory: 'निर्देशिका', emergency: 'आकस्मिक सेवा:', police: 'प्रहरी', ambulance: 'एम्बुलेन्स', fire: 'दमकल',
        langPrefix: 'lan/भाषा:', 
        // Header
        govName: 'मेरो घोराही',
        portalName: 'सामुदायिक पोर्टल',
        // Nav
        navHome: 'गृहपृष्ठ', navWards: 'वडाहरू', navComplaint: 'गुनासो', navMenu: 'मेनु',
        navVideos: 'भिडियोहरू', navImages: 'तस्विरहरू', navLifeline: 'स्थानीय हेल्पलाइन', navAbout: 'हाम्रो बारेमा',
        // Menu Sections & Items
        menuRights: 'तपाईंका अधिकारहरू', menuAskMayor: 'मेयरलाई सोध्नुहोस्', menuComplainProgress: 'गुनासो प्रगति', menuJoinUs: 'हामीसँग जोडिनुहोस्',
        menuMoney: 'तपाईंको पैसा', menuTaxCalc: 'कर क्याल्कुलेटर', menuDonate: 'हामीलाई दान गर्नुहोस्',
        // Home
        missionTitle: 'हाम्रो मुख्य उद्देश्य', missionText: 'घोराहीको सरकारले सुनिरहेको र काम गरिरहेको छ भनी सुनिश्चित गर्न हामी यहाँ छौं। यो वेबसाइट तपाईंको प्रत्यक्ष लाइन हो। हामी तपाईंलाई शहरमा देख्ने समस्याहरू रिपोर्ट गर्न मद्दत गर्छौं र तपाईंको स्थानीय कार्यालयहरूलाई ती समस्याहरू समाधान गर्न जिम्मेवार बनाउँछौं भनी सुनिश्चित गर्छौं। हामी तपाईंको आवाजलाई वास्तविक परिवर्तनमा परिणत गर्छौं, घोराहीलाई राम्रो बनाउँछौं।',
        // Achievements
        achievementsTitle: 'हाम्रा उपलब्धिहरू', achievementsSub: 'हाम्रो समुदायलाई परिवर्तन गर्ने हालैका परियोजनाहरू',
        // Wards Page
        wardsTitle: 'वडा निर्देशिका', wardsSub: 'विस्तृत जानकारीको लागि आफ्नो वडा छान्नुहोस् (१-१९)',
        // Ward Modal Translations
        wardDetailsTitle: 'वडाको विवरण', wardHead: 'प्रतिनिधि:', 
        modalNote: 'सेवा सम्बन्धी सोधपुछका लागि वडा कार्यालयमा सिधै सम्पर्क गर्नुहोस्।',
        
        // Tax Calculator Modal Translations
        taxCalcTitle: 'अप्रत्यक्ष कर क्याल्कुलेटर',
        taxCalcInfo: 'नेपालमा तपाईंले तिर्नुभएको अप्रत्यक्ष कर (जस्तै VAT) को अनुमान लगाउन कुल वार्षिक खर्च (भाडा, बचत, र लगानी बाहेक) प्रविष्ट गर्नुहोस्।',
        expenditureLabel: 'कुल वार्षिक खर्च (NPR):',
        calculateBtn: 'कर गणना गर्नुहोस्',
        taxPaidLabel: 'अनुमानित अप्रत्यक्ष कर भुक्तानी:',
        // Donate Modal Translations
        modalDonateTitle: 'स्क्यान गरेर दान गर्नुहोस्',
        modalDonatePara: 'तपाईंको उदार योगदानले नगरपालिकामा स्थानीय पूर्वाधार र सेवाहरू सुधार गर्न मद्दत गर्दछ। तपाईंको सहयोगको लागि धन्यवाद!',
        modalDonateNote: 'नोट: लेनदेन पूरा गर्नु अघि कृपया प्राप्तकर्ताको नाम **[प्राप्तकर्ताको नाम]** प्रमाणित गर्नुहोस्।',
        
        // Local Lifeline Translations
        lifelineTitle: 'स्थानीय हेल्पलाइन सम्पर्कहरू',
        lifelineSub: 'घोराहीका लागि अत्यावश्यक आकस्मिक र सार्वजनिक सेवा नम्बरहरू।',
        lifelineBack: 'गृहपृष्ठमा फर्कनुहोस्',
        lifelineNameHeader: 'नाम / विभाग',
        lifelineNumberHeader: 'सम्पर्क नम्बर',
        disasterMgmt: 'विपद् व्यवस्थापन',
        khanepaniMgmt: 'खानेपानी व्यवस्थापन',
        ambulanceStaff: 'एम्बुलेन्स कर्मचारी',
        caoo: 'प्रमुख प्रशासकीय अधिकृत',
        nagarPolice: 'नगर प्रहरी',
        traffic: 'ट्राफिक प्रहरी',
        raptiHospital: 'राप्ती अस्पताल',
        bloodBank: 'ब्लड बैंक',
        redCrossDang: 'रेड क्रस दाङ',
        cdo: 'प्रमुख जिल्ला अधिकारी (CDO)',
        nagarPalika: 'घोराही नगरपालिका',
        districtCourt: 'जिल्ला अदालत',
        nepalTelecom: 'नेपाल टेलिकम',
        electricityAuthority: 'विद्युत प्राधिकरण घोराही',

        // Footer
        contact: 'सम्पर्क जानकारी', 
        address: 'सामुदायिक पोर्टल कार्यालय', 
        addressLine: 'घोराही, दाङ, नेपाल', 
        phoneMobile: 'मोबाइल',
        email: 'इमेल',
        hours: 'कार्यालय समय', hoursInfo: 'आइतबार - शुक्रबार', hoursTime: 'बिहान १०:०० बजे - साँझ ५:०० बजे', closed: 'शनिबार र सार्वजनिक बिदाहरूमा बन्द',
        lastUpdated: 'अन्तिम अद्यावधिक', lastUpdatedDate: 'डिसेम्बर ८, २०२५', 
        copyright: '© २०२५ मेरो घोराही सामुदायिक पोर्टल। सर्वाधिकार सुरक्षित।'
    }
};

// --- WARD DATA (Only name and phone) ---
const wardData = {
    1: { name: 'Subash Chaudhary', phone: '+977-9869649610' },
    2: { name: 'Narayan Prasad Acharya', phone: '+977-9847923771' },
    3: { name: 'Bishnu Giri', phone: '+977-9847843664' },
    4: { name: 'Patra Bahadur Oli', phone: '+977-9848963570' },
    5: { name: 'Anju Paudel', phone: '+977-9848239000' },
    6: { name: 'Laxmi Subedi', phone: '+977-9849226445' },
    7: { name: 'Madhav Ghimire', phone: '+977-9847985515' },
    8: { name: 'Urmila Paudel', phone: '+977-9864717099' },
    9: { name: 'Tilak Bahadur Batha', phone: '+977-9855826716' },
    10: { name: 'Dhigraj Gautam', phone: '+977-9847848820' },
    11: { name: 'Bijay KC', phone: '+977-9868617731' },
    12: { name: 'Narayan Parsad Sharma', phone: '+977-9847857614' },
    13: { name: 'Ram Krishna Sharma', phone: '+977-9847821510' },
    14: { name: 'Tilakram DC', phone: '+977-9847847499' },
    15: { name: 'Shanta Bhandari Panta', phone: '+977-9847837036' },
    16: { name: 'Nirmala Roka', phone: '+977-9844912942' },
    17: { name: 'Chandani Thapa', phone: '+977-9847830391' },
    18: { name: 'Aruna Adhikari', phone: '+977-9847837954' },
    19: { name: 'Bhim Bahadur KC', phone: '+977-9857831477' },
};

// --- FOUNDER CONTACT DATA ---
const founderData = {
    suzal: {
        name: 'Suzal Adhikari',
        email: 'suzaladhikari12345@gmail.com',
        phone: '9810145197',
        location: 'Ghorahi 15'
    },
    shubham: {
        name: 'Shubham Devkota',
        email: 'shubhamdevkota1111@gmail.com',
        phone: '9867412345',
        location: 'Ghorahi 4'
    }
};

// --- ACHIEVEMENTS CAROUSEL VARIABLES ---
let carouselInterval;
let currentAchievementIndex = 0;
const TOTAL_ACHIEVEMENTS = 4;

// --- API CONFIGURATION ---
const API_URL = 'https://script.google.com/macros/s/AKfycbyrDRHwim9aktW9pw8STiDXsI3HAD2fl9EdcbmgsVIrdF_SsRwcW7ClywVOeyI2ES4fWg/exec';

// --- DOM ELEMENTS (will be initialized in DOMContentLoaded) ---
let currentLang = localStorage.getItem('siteLang') || 'en';
let langBtn, wardsContainer, wardModal, modalCloseBtn, taxModal, taxCloseBtn, taxCalcBtn;
let menuModalOverlay, donateModal, donateCloseBtn, founderModal, founderCloseBtn;
let complaintForm, phoneNumberInput, loadingState, errorContainer, errorTitle, errorMessage;
let noResults, resultsSection, complaintsGrid, complaintCount;

// --- STATUS ICONS MAPPING ---
const statusIcons = {
    'Pending': 'clock',
    'In Progress': 'refresh-cw',
    'Completed': 'check-circle',
    'Registered': 'file-check',
    'Not Accepted': 'x-circle'
};

// ============================================
// UNIVERSAL MENU GENERATOR
// ============================================
function generateUniversalMenu() {
    const menuPlaceholder = document.getElementById('full-menu-modal');
    if (!menuPlaceholder) return;
    
    const t = translations[currentLang];
    
    const menuHTML = `
        <div class="menu-modal-content">
            <button class="menu-modal-close" aria-label="Close Menu">&times;</button>
            
            <div class="menu-modal-header">
                <h3 class="menu-modal-heading" data-key="navMenu">${t.navMenu}</h3>
            </div>
            
            <div class="menu-modal-body">
                <div class="menu-modal-section">
                    <div class="menu-modal-item has-dropdown" id="videos-menu-toggle">
                        <span data-key="navVideos">${t.navVideos}</span>
                        <i data-lucide="chevron-down" class="dropdown-icon"></i>
                    </div>

                    <div class="menu-dropdown-content" id="videos-dropdown">
                        <a href="https://www.tiktok.com/@mero.ghorahi/video/7612230791296290066?lang=en" target="_blank" class="menu-dropdown-item" data-key="navVideosTutorial">${t.navVideosTutorial || 'Tutorial'}</a>
                        <a href="https://www.youtube.com/@meroghorahi" target="_blank" class="menu-dropdown-item" data-key="navVideosYoutube">${t.navVideosYoutube || 'Youtube'}</a>
                        <a href="https://www.tiktok.com/@mero.ghorahi" target="_blank" class="menu-dropdown-item" data-key="navVideosTiktok">${t.navVideosTiktok || 'Tiktok'}</a>
                    </div>

                    <a href="gallery.html" class="menu-modal-item" data-key="navImages">${t.navImages}</a>
                    <a href="localLifeline.html" class="menu-modal-item" data-key="navLifeline">${t.navLifeline}</a>
                    <a href="about.html" class="menu-modal-item" data-key="navAbout">${t.navAbout}</a>
                </div>
                
                <div class="menu-divider"></div>

                <div class="menu-modal-section">
                    <h4 class="menu-modal-subheading" data-key="menuRights">${t.menuRights}</h4>
                    <a href="progress.html" class="menu-modal-item" data-key="menuComplainProgress">${t.menuComplainProgress}</a>
                    <a href="https://near.tl/sm/Xp8hUnfXL" target="_blank" class="menu-modal-item" data-key="menuJoinUs">${t.menuJoinUs}</a>
                </div>
                
                <div class="menu-divider"></div>

                <div class="menu-modal-section">
                    <h4 class="menu-modal-subheading" data-key="menuMoney">${t.menuMoney}</h4>
                    <a href="#tax-calculator" class="menu-modal-item menu-calculator-btn" data-key="menuTaxCalc">${t.menuTaxCalc}</a>
                    <a href="#" class="menu-modal-item" id="open-donate-modal" data-key="menuDonate">${t.menuDonate}</a>
                </div>
            </div>
            
            <div class="menu-modal-footer">
            </div>
        </div>
    `;
    
    menuPlaceholder.innerHTML = menuHTML;
    
    // Re-attach event listeners for menu elements
    setTimeout(() => {
        setupMenuEventListeners();
    }, 0);
}



// ============================================
// TAX CALCULATOR FUNCTIONS
// ============================================
const ESTIMATED_INDIRECT_TAX_RATE = 0.070; 

function calculateIndirectTax() {
    const expenditureInput = document.getElementById('expenditure-input');
    const resultOutput = document.getElementById('tax-result-output');
    if (!expenditureInput || !resultOutput) return;
    
    const expenditure = parseFloat(expenditureInput.value);

    if (isNaN(expenditure) || expenditure < 0) {
        resultOutput.textContent = currentLang === 'en' ? "Please enter a valid amount." : "कृपया वैध रकम प्रविष्ट गर्नुहोस्।";
        return;
    }

    const estimatedTax = expenditure * ESTIMATED_INDIRECT_TAX_RATE;
    resultOutput.textContent = `NPR ${estimatedTax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function openTaxModal() {
    if (taxModal) {
        taxModal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }
}

function closeTaxModal() {
    if (taxModal) {
        taxModal.style.display = 'none';
        const expenditureInput = document.getElementById('expenditure-input');
        const resultOutput = document.getElementById('tax-result-output');
        if (expenditureInput) expenditureInput.value = '';
        if (resultOutput) resultOutput.textContent = 'NPR 0';
        restoreBodyState();
    }
}

// ============================================
// ACHIEVEMENTS CAROUSEL FUNCTIONS
// ============================================
function initializeAchievementsCarousel() {
    const carousel = document.getElementById('achievements-carousel');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (!carousel) return;
    
    updateCarouselPosition();
    updateActiveDot();
    startAutoScroll();
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoScroll();
            showPreviousAchievement();
            startAutoScroll();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoScroll();
            showNextAchievement();
            startAutoScroll();
        });
    }
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoScroll();
            const index = parseInt(dot.getAttribute('data-index'));
            goToAchievement(index);
            startAutoScroll();
        });
    });
    
    let startX = 0, endX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopAutoScroll();
    });
    
    carousel.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', () => {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) showNextAchievement();
            else showPreviousAchievement();
        }
        startAutoScroll();
    });
    
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);
}

function showNextAchievement() {
    currentAchievementIndex = (currentAchievementIndex + 1) % TOTAL_ACHIEVEMENTS;
    updateCarouselPosition();
    updateActiveDot();
}

function showPreviousAchievement() {
    currentAchievementIndex = (currentAchievementIndex - 1 + TOTAL_ACHIEVEMENTS) % TOTAL_ACHIEVEMENTS;
    updateCarouselPosition();
    updateActiveDot();
}

function goToAchievement(index) {
    currentAchievementIndex = index;
    updateCarouselPosition();
    updateActiveDot();
}

function updateCarouselPosition() {
    const carousel = document.getElementById('achievements-carousel');
    if (!carousel) return;
    const translateX = -currentAchievementIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

function updateActiveDot() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        if (index === currentAchievementIndex) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function startAutoScroll() {
    stopAutoScroll();
    carouselInterval = setInterval(showNextAchievement, 5000);
}

function stopAutoScroll() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

// ============================================
// GALLERY FUNCTIONS
// ============================================
function initializeGallery() {
    const photoGrid = document.getElementById('photoGrid');
    const loadingState = document.getElementById('loadingState');
    
    if (!photoGrid) return;
    
    if (loadingState) loadingState.style.display = 'block';
    
    const images = [];
    let loadedCount = 0;
    const totalImages = 100;
    
    for (let i = 1; i <= totalImages; i++) {
        const img = new Image();
        const imgPath = `Complaint/Comp${i}.jpg`;
        
        img.onload = function() {
            images.push({ src: imgPath, title: `Complaint ${i}`, index: i });
            loadedCount++;
            if (loadedCount === totalImages) {
                if (loadingState) loadingState.style.display = 'none';
                if (images.length > 0) renderGallery(images);
                else showEmptyGallery();
            }
        };
        
        img.onerror = function() {
            loadedCount++;
            if (loadedCount === totalImages) {
                if (loadingState) loadingState.style.display = 'none';
                if (images.length > 0) renderGallery(images);
                else showEmptyGallery();
            }
        };
        
        img.src = imgPath;
    }
}

function renderGallery(images) {
    const photoGrid = document.getElementById('photoGrid');
    if (!photoGrid) return;
    
    photoGrid.innerHTML = '';
    images.sort((a, b) => a.index - b.index);
    
    images.forEach(image => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        photoCard.setAttribute('data-src', image.src);
        photoCard.setAttribute('data-title', image.title);
        
        photoCard.innerHTML = `
            <div class="photo-image-container">
                <img src="${image.src}" alt="${image.title}" class="photo-image" loading="lazy">
            </div>
            <div class="photo-info">
                <div class="photo-title">${image.title}</div>
                <span class="photo-badge">Complaint Photo</span>
            </div>
        `;
        
        photoGrid.appendChild(photoCard);
    });
    
    initializeLightbox();
}

function showEmptyGallery() {
    const photoGrid = document.getElementById('photoGrid');
    if (!photoGrid) return;
    
    photoGrid.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">
                <i data-lucide="image-off"></i>
            </div>
            <h3>No Images Found</h3>
            <p>Please make sure your images are named Comp1.jpg, Comp2.jpg, etc. in the Complaint folder.</p>
        </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ============================================
// LIGHTBOX FUNCTIONS
// ============================================
let currentLightboxIndex = 0;
let lightboxImages = [];

function initializeLightbox() {
    const photoCards = document.querySelectorAll('.photo-card');
    const lightbox = document.getElementById('lightbox-modal');
    
    // If no lightbox or no photos, exit
    if (!lightbox || photoCards.length === 0) return;
    
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    // Remove existing listeners to avoid duplicates
    const newCloseBtn = closeBtn.cloneNode(true);
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    
    closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

    // Attach button listeners
    newCloseBtn.addEventListener('click', closeLightbox);
    newPrevBtn.addEventListener('click', () => navigateLightbox('prev'));
    newNextBtn.addEventListener('click', () => navigateLightbox('next'));

    // Click on overlay closes lightbox
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Add click listeners to each photo card
    photoCards.forEach((card, index) => {
        // Remove old listener if any
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        newCard.addEventListener('click', () => {
            const allImages = Array.from(document.querySelectorAll('.photo-card')).map(c => ({
                src: c.getAttribute('data-src'),
                title: c.getAttribute('data-title')
            }));
            openLightbox(index, allImages);
        });
    });

    // Create icons for the buttons
    if (typeof lucide !== 'undefined') lucide.createIcons();
}



function openLightbox(index, images) {
    const lightbox = document.getElementById('lightbox-modal');
    if (!lightbox) return;
    
    currentLightboxIndex = index;
    lightboxImages = images;
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    
    lightboxImage.src = images[index].src;
    lightboxImage.alt = images[index].title;
    lightboxCaption.textContent = images[index].title;
    
    lightbox.style.display = 'flex';
    document.body.classList.add('modal-open');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

function navigateLightbox(direction) {
    if (lightboxImages.length === 0) return;
    
    if (direction === 'prev') {
        currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    } else {
        currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
    }
    
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    
    lightboxImage.src = lightboxImages[currentLightboxIndex].src;
    lightboxImage.alt = lightboxImages[currentLightboxIndex].title;
    lightboxCaption.textContent = lightboxImages[currentLightboxIndex].title;
}

// ============================================
// COMPLAINT TRACKER FUNCTIONS
// ============================================
function formatPhoneNumber(phone) {
    if (!phone) return '';
    const cleaned = phone.toString().replace(/\D/g, '');
    if (cleaned.length === 10) return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    return cleaned;
}

function showLoading() {
    if (loadingState) loadingState.style.display = 'block';
    if (errorContainer) errorContainer.style.display = 'none';
    if (noResults) noResults.style.display = 'none';
    if (resultsSection) resultsSection.style.display = 'none';
}

function showError(title, message) {
    if (loadingState) loadingState.style.display = 'none';
    if (errorContainer) {
        errorContainer.style.display = 'block';
        if (errorTitle) errorTitle.textContent = title;
        if (errorMessage) errorMessage.textContent = message;
    }
    if (noResults) noResults.style.display = 'none';
    if (resultsSection) resultsSection.style.display = 'none';
}

function showNoResults() {
    if (loadingState) loadingState.style.display = 'none';
    if (errorContainer) errorContainer.style.display = 'none';
    if (noResults) noResults.style.display = 'block';
    if (resultsSection) resultsSection.style.display = 'none';
}

function showResults(complaints, phone) {
    if (loadingState) loadingState.style.display = 'none';
    if (errorContainer) errorContainer.style.display = 'none';
    if (noResults) noResults.style.display = 'none';
    if (resultsSection) {
        resultsSection.style.display = 'block';
        // Scroll to results
        setTimeout(() => {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
    
    if (complaintCount) {
        complaintCount.textContent = `${complaints.length} complaint${complaints.length !== 1 ? 's' : ''} found for ${formatPhoneNumber(phone)}`;
    }
    
    renderComplaints(complaints);
}

function getPriorityClass(priority) {
    switch(priority) {
        case 'High': return 'priority-high';
        case 'Medium': return 'priority-medium';
        case 'Low': return 'priority-low';
        default: return 'priority-medium';
    }
}

function getStatusBadgeClass(status) {
    if (status === 'Completed') return 'resolved';
    if (status === 'In Progress') return 'in-progress';
    if (status === 'Registered') return 'registered';
    if (status === 'Not Accepted') return 'rejected';
    return 'pending';
}

function getStatusDisplay(status) {
    if (status === 'Completed') return 'Resolved';
    if (status === 'Not Accepted') return 'Rejected';
    return status;
}

function createComplaintCard(complaint) {
    const statusIcon = statusIcons[complaint.status] || 'clock';
    const priorityClass = getPriorityClass(complaint.seriousness);
    const statusBadgeClass = getStatusBadgeClass(complaint.status);
    const statusDisplay = getStatusDisplay(complaint.status);
    
    return `
        <div class="complaint-card">
            <div class="status-badge-container">
                <div class="status-badge ${statusBadgeClass}">
                    <i data-lucide="${statusIcon}"></i>
                    ${statusDisplay}
                </div>
            </div>
            <div class="complaint-header">
                <h3>${complaint.type || 'General Complaint'}</h3>
            </div>
            <div class="complaint-content">
                <div class="complaint-detail">
                    <i data-lucide="alert-triangle" class="detail-icon"></i>
                    <div class="detail-content">
                        <div class="detail-label">Priority</div>
                        <div class="detail-value"><span class="${priorityClass}">${complaint.seriousness || 'Medium'}</span></div>
                    </div>
                </div>
                <div class="complaint-detail">
                    <i data-lucide="user" class="detail-icon"></i>
                    <div class="detail-content">
                        <div class="detail-label">Submitted By</div>
                        <div class="detail-value">${complaint.name || 'Anonymous'}</div>
                    </div>
                </div>
                <div class="complaint-detail">
                    <i data-lucide="map-pin" class="detail-icon"></i>
                    <div class="detail-content">
                        <div class="detail-label">Location</div>
                        <div class="detail-value">${complaint.location || ''}, ${complaint.toleName || ''}, Ward ${complaint.ward || ''}</div>
                    </div>
                </div>
                <div class="complaint-detail issue-detail">
                    <i data-lucide="alert-circle" class="detail-icon"></i>
                    <div class="detail-content">
                        <div class="detail-label">Issue Description</div>
                        <div class="detail-value">${complaint.issue || 'No description'}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderComplaints(complaints) {
    if (!complaintsGrid) return;
    
    if (!complaints || complaints.length === 0) {
        showNoResults();
        return;
    }

    complaintsGrid.innerHTML = '';
    complaints.forEach(complaint => {
        complaintsGrid.innerHTML += createComplaintCard(complaint);
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

async function fetchComplaints(phone) {
    try {
        showLoading();
        const response = await fetch(`${API_URL}?phone=${phone}`);
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        
        if (data.success && data.complaints && data.complaints.length > 0) {
            showResults(data.complaints, phone);
        } else {
            showNoResults();
        }
    } catch (error) {
        console.error('Error fetching complaints:', error);
        showError('Connection Error', 'Unable to connect to the server. Please check your internet connection and try again.');
    }
}

// ============================================
// STATE MANAGEMENT
// ============================================
function isAnyModalOpen() {
    const isWardOpen = wardModal && wardModal.style.display === 'flex';
    const isTaxOpen = taxModal && taxModal.style.display === 'flex';
    const isMenuOpen = menuModalOverlay && menuModalOverlay.classList.contains('is-active');
    const isDonateOpen = donateModal && donateModal.style.display === 'flex';
    const isFounderOpen = founderModal && founderModal.style.display === 'flex';
    const isLightboxOpen = document.getElementById('lightbox-modal') && document.getElementById('lightbox-modal').style.display === 'flex';
    return isWardOpen || isTaxOpen || isMenuOpen || isDonateOpen || isFounderOpen || isLightboxOpen;
}

function restoreBodyState() {
    if (!isAnyModalOpen()) {
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.height = '';
    }
}

// ============================================
// WARD MODAL FUNCTIONS
// ============================================
function openWardModal(wardId) {
    if (!wardModal) return;

    const data = wardData[wardId];
    const t = translations[currentLang];

    const titleElement = document.getElementById('modal-ward-title');
    if (titleElement) titleElement.textContent = `${t.wardDetailsTitle} ${wardId}`;

    const nameElement = document.getElementById('modal-head-name');
    if (nameElement) nameElement.textContent = data.name; 
    
    const phoneElement = document.getElementById('modal-phone-number');
    if (phoneElement) phoneElement.textContent = data.phone; 
    
    wardModal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

function closeWardModal() {
    if (wardModal) {
        wardModal.style.display = 'none';
        restoreBodyState();
    }
}

function handleWardClick(event) {
    const wardCard = event.target.closest('.ward-card');
    if (wardCard) {
        const wardId = wardCard.getAttribute('data-ward-id');
        if (wardId) openWardModal(wardId);
    }
}

// ============================================
// FOUNDER CONTACT MODAL FUNCTIONS
// ============================================
function openFounderModal(founderId) {
    if (!founderModal) return;

    const data = founderData[founderId];
    if (!data) return;

    const titleElement = document.getElementById('founder-modal-title');
    const emailElement = document.getElementById('founder-email');
    const phoneElement = document.getElementById('founder-phone');
    const locationElement = document.getElementById('founder-location');

    if (titleElement) titleElement.textContent = data.name;
    if (emailElement) emailElement.textContent = data.email;
    if (phoneElement) phoneElement.textContent = data.phone;
    if (locationElement) locationElement.textContent = data.location;
    
    founderModal.style.display = 'flex';
    document.body.classList.add('modal-open');
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeFounderModal() {
    if (founderModal) {
        founderModal.style.display = 'none';
        restoreBodyState();
    }
}

// ============================================
// DONATE MODAL FUNCTIONS
// ============================================
function openDonateModal() {
    if (donateModal) {
        closeMenuModal();
        donateModal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }
}

function closeDonateModal() {
    if (donateModal) {
        donateModal.style.display = 'none';
        restoreBodyState();
    }
}

// ============================================
// MENU MODAL FUNCTIONS
// ============================================
let currentScrollY = 0;

function openMenuModal() {
    if (!menuModalOverlay) return;
    
    if (wardModal && wardModal.style.display === 'flex') closeWardModal();
    if (taxModal && taxModal.style.display === 'flex') closeTaxModal();
    if (donateModal && donateModal.style.display === 'flex') closeDonateModal();
    if (founderModal && founderModal.style.display === 'flex') closeFounderModal();
    
    currentScrollY = window.scrollY;
    document.body.style.top = `-${currentScrollY}px`;
    document.body.classList.add('modal-open');
    
    menuModalOverlay.classList.add('is-active');
}

function closeMenuModal() {
    if (menuModalOverlay) {
        menuModalOverlay.classList.remove('is-active');
    }

    if (!isAnyModalOpen()) {
        document.body.classList.remove('modal-open');
        document.body.style.top = '';
        window.scrollTo(0, currentScrollY);
    }
}

function handleMenuToggle(event) {
    const targetId = event.currentTarget.getAttribute('data-target');
    if (targetId === 'full-menu-modal') {
        event.preventDefault();
        openMenuModal();
    }
}

// ============================================
// DROPDOWN MENU TOGGLE
// ============================================
function setupVideosDropdown() {
    const toggleButton = document.getElementById('videos-menu-toggle');
    const dropdownContent = document.getElementById('videos-dropdown');

    if (toggleButton && dropdownContent) {
        // Remove any existing listeners to avoid duplicates
        const newToggle = toggleButton.cloneNode(true);
        toggleButton.parentNode.replaceChild(newToggle, toggleButton);
        
        newToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            newToggle.classList.toggle('is-open');
            if (dropdownContent.style.maxHeight) {
                dropdownContent.style.maxHeight = null;
            } else {
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
            }
        });
    }
}

// ============================================
// MENU CLOSING ON LINK CLICK
// ============================================
function setupMenuLinkClosing() {
    const menuModal = document.getElementById('full-menu-modal');
    if (!menuModal) return;
    
    const linksToCloseMenu = menuModal.querySelectorAll(
        '.menu-modal-item:not(.has-dropdown):not(.menu-calculator-btn), .menu-dropdown-item'
    );
    
    linksToCloseMenu.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMenuModal, 100);
        });
    });
}

// ============================================
// MENU EVENT LISTENERS SETUP
// ============================================
function setupMenuEventListeners() {
    // Re-attach menu toggle buttons
    document.querySelectorAll('.menu-toggle-btn').forEach(button => {
        button.removeEventListener('click', handleMenuToggle);
        button.addEventListener('click', handleMenuToggle);
    });

    // Re-attach menu close button
    const menuCloseBtn = document.querySelector('.menu-modal-close');
    if (menuCloseBtn) {
        menuCloseBtn.removeEventListener('click', closeMenuModal);
        menuCloseBtn.addEventListener('click', closeMenuModal);
    }

    // Re-attach menu overlay click
    if (menuModalOverlay) {
        menuModalOverlay.removeEventListener('click', closeMenuModal);
        menuModalOverlay.addEventListener('click', (event) => {
            if (event.target.classList.contains('menu-modal-overlay')) {
                closeMenuModal();
            }
        });
    }

    // Re-setup videos dropdown
    setupVideosDropdown();
    
    // Re-setup menu link closing
    setupMenuLinkClosing();
}

// ============================================
// GENERATE WARDS
// ============================================
function generateWards(wardLabel) {
    if (!wardsContainer) return;

    wardsContainer.innerHTML = '';
    for (let i = 1; i <= 19; i++) {
        const wardHTML = `
            <div class="ward-card" data-ward-id="${i}">
                <i data-lucide="map-pin" class="ward-icon"></i>
                <div class="ward-text">${wardLabel}</div>
                <div class="ward-number">${i}</div>
            </div>
        `;
        wardsContainer.insertAdjacentHTML('beforeend', wardHTML);
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ============================================
// ABOUT PAGE ANIMATIONS
// ============================================
function initAboutPageAnimations() {
    // Only run on about page
    if (!document.querySelector('.about-section')) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll(
        '.about-card, .goal-card, .founder-card, .story-paragraph, .highlight-box, .association-section, .democracy-note'
    );

    animatedElements.forEach(el => {
        el.classList.add('scroll-fade-in');
        observer.observe(el);
    });

    // Add click handlers for founder cards
    const suzalCard = document.getElementById('suzal-card');
    const shubhamCard = document.getElementById('shubham-card');
    
    if (suzalCard) {
        suzalCard.addEventListener('click', () => openFounderModal('suzal'));
    }
    
    if (shubhamCard) {
        shubhamCard.addEventListener('click', () => openFounderModal('shubham'));
    }
}

// ============================================
// RENDER TRANSLATION
// ============================================
function renderContent() {
    const t = translations[currentLang];

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    const dateDisplay = document.getElementById('date-display');
    if(dateDisplay) dateDisplay.textContent = t.lastUpdatedDate;
    
    if (langBtn) langBtn.textContent = currentLang === 'en' ? 'नेपाली' : 'English';
    
    localStorage.setItem('siteLang', currentLang);

    generateWards(t.navWards);
    
    const donateTitle = document.getElementById('modal-donate-title');
    const donatePara = document.getElementById('modal-donate-para');
    const donateNote = document.getElementById('modal-donate-note');

    if (donateTitle) donateTitle.textContent = t.modalDonateTitle;
    if (donatePara) donatePara.textContent = t.modalDonatePara;
    if (donateNote) donateNote.innerHTML = t.modalDonateNote;
    
    // Regenerate menu with new language
    generateUniversalMenu();
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements
    langBtn = document.getElementById('lang-toggle');
    wardsContainer = document.getElementById('wards-grid-container');
    wardModal = document.getElementById('ward-modal');
    modalCloseBtn = wardModal ? wardModal.querySelector('.close-btn') : null;
    taxModal = document.getElementById('tax-calculator-modal');
    taxCloseBtn = document.querySelector('.tax-close-btn');
    taxCalcBtn = document.getElementById('calculate-tax-btn');
    menuModalOverlay = document.getElementById('full-menu-modal');
    donateModal = document.getElementById('donate-modal-overlay');
    donateCloseBtn = donateModal ? donateModal.querySelector('#close-donate-modal') : null;
    founderModal = document.getElementById('founder-contact-modal');
    founderCloseBtn = founderModal ? founderModal.querySelector('.founder-close-btn') : null;
    
    // Complaint tracker elements
    complaintForm = document.getElementById('complaintForm');
    phoneNumberInput = document.getElementById('phoneNumber');
    loadingState = document.getElementById('loadingState');
    errorContainer = document.getElementById('errorContainer');
    errorTitle = document.getElementById('errorTitle');
    errorMessage = document.getElementById('errorMessage');
    noResults = document.getElementById('noResults');
    resultsSection = document.getElementById('resultsSection');
    complaintsGrid = document.getElementById('complaintsGrid');
    complaintCount = document.getElementById('complaintCount');

    // Generate universal menu first
    generateUniversalMenu();
    
    // Initial render
    renderContent();
    
    // Initialize components
    initializeAchievementsCarousel();
    initializeGallery();
    initAboutPageAnimations();

    // Language toggle
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ne' : 'en';
            renderContent();
        });
    }
    
    // Ward modal listeners
    if (wardsContainer) {
        wardsContainer.addEventListener('click', handleWardClick);
    }
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeWardModal);
    }
    if (wardModal) {
        window.addEventListener('click', (event) => {
            if (event.target === wardModal) closeWardModal();
        });
    }
    
    // Founder modal listeners
    if (founderCloseBtn) {
        founderCloseBtn.addEventListener('click', closeFounderModal);
    }
    if (founderModal) {
        window.addEventListener('click', (event) => {
            if (event.target === founderModal) closeFounderModal();
        });
    }
    
    // Tax calculator listeners
    if (taxModal) {
        document.querySelectorAll('.menu-calculator-btn').forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                closeMenuModal();
                openTaxModal();
            });
        });

        if (taxCloseBtn) {
            taxCloseBtn.addEventListener('click', closeTaxModal);
        }
        
        window.addEventListener('click', (event) => {
            if (event.target === taxModal) closeTaxModal();
        });

        if (taxCalcBtn) {
            taxCalcBtn.addEventListener('click', calculateIndirectTax);
        }
    }

    // Donate modal listeners
    const openDonateBtn = document.getElementById('open-donate-modal');
    
    if (openDonateBtn) {
        openDonateBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            openDonateModal();
        });
    }

    if (donateCloseBtn) {
        donateCloseBtn.addEventListener('click', closeDonateModal);
    }

    if (donateModal) {
        donateModal.addEventListener('click', function(event) {
            if (event.target === donateModal) closeDonateModal();
        });
    }
    
    
    // Complaint form listener
    if (complaintForm) {
        complaintForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const phone = phoneNumberInput.value.trim();
            if (!phone || phone.length !== 10) {
                alert('Please enter a valid 10-digit phone number');
                return;
            }
            await fetchComplaints(phone);
        });
    }

    // Phone input validation
    if (phoneNumberInput) {
        phoneNumberInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
        });
    }

    // Focus on phone input on progress page
    if (phoneNumberInput) {
        phoneNumberInput.focus();
    }
    
    // Recreate icons
    if (typeof lucide !== 'undefined') lucide.createIcons();
});

document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox && lightbox.style.display === 'flex') {
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowLeft') navigateLightbox('prev');
        else if (e.key === 'ArrowRight') navigateLightbox('next');
    }
});

