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

// --- FULL TRANSLATION DICTIONARY (Updated) ---
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
        navVideos: 'Videos', navImages: 'Images', navLifeline: 'Local Lifeline',
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
        navVideos: 'भिडियोहरू', navImages: 'तस्विरहरू', navLifeline: 'स्थानीय हेल्पलाइन',
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
        taxCalcInfo: 'नेपालमा तपाईंले तिर्नुभएको अप्रत्यक्ष कर (जस्तै VAT) को अनुमान लगाउन कुल मासिक खर्च (भाडा, बचत, र लगानी बाहेक) प्रविष्ट गर्नुहोस्।',
        expenditureLabel: 'कुल मासिक खर्च (NPR):',
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

// --- MODIFIED WARD DATA (Only name and phone) ---
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

// --- ACHIEVEMENTS CAROUSEL VARIABLES ---
let carouselInterval;
let currentAchievementIndex = 0;
const TOTAL_ACHIEVEMENTS = 4; // Original achievements (duplicates are for looping)

// --- 1. TAX CALCULATOR FUNCTIONS ---
const ESTIMATED_INDIRECT_TAX_RATE = 0.070; 

function calculateIndirectTax() {
    const expenditureInput = document.getElementById('expenditure-input');
    const resultOutput = document.getElementById('tax-result-output');
    const expenditure = parseFloat(expenditureInput.value);

    if (isNaN(expenditure) || expenditure < 0) {
        resultOutput.textContent = currentLang === 'en' ? "Please enter a valid amount." : "कृपया वैध रकम प्रविष्ट गर्नुहोस्।";
        return;
    }

    const estimatedTax = expenditure * ESTIMATED_INDIRECT_TAX_RATE;
    
    // Format the output with commas
    resultOutput.textContent = `NPR ${estimatedTax.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function openTaxModal() {
    if (taxModal) {
        taxModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open'); 
    }
}

function closeTaxModal() {
    if (taxModal) {
        taxModal.style.display = 'none';
        
        // Reset the calculator input and output when closing
        const expenditureInput = document.getElementById('expenditure-input');
        const resultOutput = document.getElementById('tax-result-output');
        if (expenditureInput) expenditureInput.value = '';
        if (resultOutput) resultOutput.textContent = 'NPR 0';
        
        restoreBodyState();
    }
}

// --- ACHIEVEMENTS CAROUSEL FUNCTIONS ---
function initializeAchievementsCarousel() {
    const carousel = document.getElementById('achievements-carousel');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (!carousel) return;
    
    // Set initial position
    updateCarouselPosition();
    updateActiveDot();
    
    // Auto-scroll interval (5 seconds)
    startAutoScroll();
    
    // Event Listeners
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
    
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoScroll();
            const index = parseInt(dot.getAttribute('data-index'));
            goToAchievement(index);
            startAutoScroll();
        });
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopAutoScroll();
    });
    
    carousel.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', () => {
        const threshold = 50; // Minimum swipe distance
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - next
                showNextAchievement();
            } else {
                // Swipe right - previous
                showPreviousAchievement();
            }
        }
        
        startAutoScroll();
    });
    
    // Pause auto-scroll on hover
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
    
    // Calculate position based on current index
    const cardWidth = 100; // Each card takes 100% width on mobile
    const translateX = -currentAchievementIndex * cardWidth;
    carousel.style.transform = `translateX(${translateX}%)`;
}

function updateActiveDot() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        if (index === currentAchievementIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function startAutoScroll() {
    stopAutoScroll(); // Clear any existing interval
    carouselInterval = setInterval(showNextAchievement, 5000); // Change every 5 seconds
}

function stopAutoScroll() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

// --- STATE & ELEMENTS ---
let currentLang = localStorage.getItem('siteLang') || 'en'; 
const langBtn = document.getElementById('lang-toggle');
const wardsContainer = document.getElementById('wards-grid-container');

// Ward Modal Elements
const wardModal = document.getElementById('ward-modal');
const modalCloseBtn = wardModal ? wardModal.querySelector('.close-btn') : null;

// Tax Calculator Modal Elements
const taxModal = document.getElementById('tax-calculator-modal'); 
const taxCloseBtn = document.querySelector('.tax-close-btn');
const taxCalcBtn = document.getElementById('calculate-tax-btn');

const menuModalOverlay = document.getElementById('full-menu-modal');

// Donate Modal Elements
const donateModal = document.getElementById('donate-modal-overlay');
const donateCloseBtn = donateModal ? donateModal.querySelector('#close-donate-modal') : null;

// --- UTILITY FUNCTION FOR BODY STATE ---
function isAnyModalOpen() {
    const isWardOpen = wardModal && wardModal.style.display === 'flex';
    const isTaxOpen = taxModal && taxModal.style.display === 'flex';
    const isMenuOpen = menuModalOverlay && menuModalOverlay.classList.contains('is-active');
    const isDonateOpen = donateModal && donateModal.style.display === 'flex'; 
    return isWardOpen || isTaxOpen || isMenuOpen || isDonateOpen;
}

function restoreBodyState() {
    if (!isAnyModalOpen()) {
        document.body.classList.remove('modal-open');
    }
}

// --- DONATE MODAL FUNCTIONS ---
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

// --- INITIALIZE & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial setup
    renderContent();
    
    // Initialize achievements carousel
    initializeAchievementsCarousel();

    // --- Language Toggle Listener ---
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ne' : 'en';
            renderContent();
        });
    }
    
    // --- Ward Modal Listeners (for wards.html only) ---
    if (wardsContainer) {
        wardsContainer.addEventListener('click', handleWardClick);
    }
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal); // Closes Ward Modal
    }
    // Close Ward Modal when clicking the dark backdrop
    if (wardModal) {
        window.addEventListener('click', (event) => {
            if (event.target === wardModal) {
                closeModal();
            }
        });
    }
    
    // --- Tax Calculator Modal Listeners ---
    if (taxModal) {
        // Open the Tax Calculator Modal
        document.querySelectorAll('.menu-calculator-btn').forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                closeMenuModal(); // Close the main menu first
                openTaxModal();
            });
        });

        // Close Tax Calculator Modal
        if (taxCloseBtn) {
            taxCloseBtn.addEventListener('click', closeTaxModal);
        }
        
        // Close Tax Modal when clicking the dark backdrop
        window.addEventListener('click', (event) => {
            if (event.target === taxModal) {
                closeTaxModal();
            }
        });

        // Calculate Tax Button
        if (taxCalcBtn) {
            taxCalcBtn.addEventListener('click', calculateIndirectTax);
        }
    }

    // --- Donate Modal Listeners ---
    const openDonateBtn = document.getElementById('open-donate-modal');
    
    // 1. Open on "Donate Us" menu click
    if (openDonateBtn) {
        openDonateBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            openDonateModal();
        });
    }

    // 2. Close on 'X' button click
    if (donateCloseBtn) {
        donateCloseBtn.addEventListener('click', closeDonateModal);
    }

    // 3. Close on clicking the backdrop
    if (donateModal) {
        donateModal.addEventListener('click', function(event) {
            if (event.target === donateModal) {
                closeDonateModal();
            }
        });
    }
    
    // --- Full-Screen Menu Modal Listeners ---
    // 1. Open on Menu Button Click
    document.querySelectorAll('.menu-toggle-btn').forEach(button => {
        button.addEventListener('click', handleMenuToggle);
    });

    if (menuModalOverlay) {
        // 2. Close on 'X' Button Click
        const closeBtn = menuModalOverlay.querySelector('.menu-modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeMenuModal);
        }

        // 3. Close on clicking the backdrop (the overlay div outside the sliding content)
        menuModalOverlay.addEventListener('click', (event) => {
            // Check if the click occurred on the overlay itself, not the content panel
            if (event.target.classList.contains('menu-modal-overlay')) {
                closeMenuModal();
            }
        });
    }

    setupVideosDropdown();
    setupMenuLinkClosing(); 
    
    // Rerun icon creation
    if (typeof lucide !== 'undefined') {
        lucide.createIcons(); 
    }
});

// --- 2. GENERATE WARDS (If on Wards Page) ---
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
    if (typeof lucide !== 'undefined') {
        lucide.createIcons(); 
    }
}

// --- 3. WARD MODAL FUNCTIONS ---
function openModal(wardId) {
    if (!wardModal) return;

    const data = wardData[wardId];
    const t = translations[currentLang];

    // Update Modal Title
    const titleElement = document.getElementById('modal-ward-title');
    if (titleElement) titleElement.textContent = `${t.wardDetailsTitle} ${wardId}`;

    // Populate the rest of the modal content
    const nameElement = document.getElementById('modal-head-name');
    if (nameElement) nameElement.textContent = data.name; 
    
    const phoneElement = document.getElementById('modal-phone-number');
    if (phoneElement) phoneElement.textContent = data.phone; 
    
    // Set display to show modal
    wardModal.style.display = 'flex';
    document.body.classList.add('modal-open'); 
}

function closeModal() {
    if (wardModal) {
        wardModal.style.display = 'none';
        restoreBodyState();
    }
}

function handleWardClick(event) {
    const wardCard = event.target.closest('.ward-card');
    if (wardCard) {
        const wardId = wardCard.getAttribute('data-ward-id');
        if (wardId) {
            openModal(wardId);
        }
    }
}

// --- 4. RENDER TRANSLATION ---
function renderContent() {
    const t = translations[currentLang];

    // Update simple text elements using data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // Update Date & Button text
    const dateDisplay = document.getElementById('date-display');
    if(dateDisplay) dateDisplay.textContent = t.lastUpdatedDate;
    
    langBtn.textContent = currentLang === 'en' ? 'नेपाली' : 'English';
    
    // Save language preference
    localStorage.setItem('siteLang', currentLang);

    // Re-generate wards with current language label (if on wards page)
    generateWards(t.navWards); 
    
    // **Update Donate Modal Content**
    const donateTitle = document.getElementById('modal-donate-title');
    const donatePara = document.getElementById('modal-donate-para');
    const donateNote = document.getElementById('modal-donate-note');

    if (donateTitle) donateTitle.textContent = t.modalDonateTitle;
    if (donatePara) donatePara.textContent = t.modalDonatePara;
    if (donateNote) donateNote.innerHTML = t.modalDonateNote; 
    
    // Update the Menu Link text 
    const donateMenuLink = document.getElementById('open-donate-modal');
    if(donateMenuLink) donateMenuLink.textContent = t.menuDonate;
}

// --- Global variable to store scroll position ---
let currentScrollY = 0;

// --- 5. SIDEBAR MENU MODAL FUNCTIONS ---
function openMenuModal() {
    if (!menuModalOverlay) return;
    
    // 1. Close any other open modals
    if (wardModal && wardModal.style.display === 'flex') {
        closeModal();
    }
    if (taxModal && taxModal.style.display === 'flex') {
        closeTaxModal();
    }
    if (donateModal && donateModal.style.display === 'flex') {
        closeDonateModal();
    }
    
    // 2. Save current scroll position and apply fixed position
    currentScrollY = window.scrollY;
    document.body.style.top = `-${currentScrollY}px`; // Move page up by scroll amount
    document.body.classList.add('modal-open');
    
    // 3. Open the menu
    menuModalOverlay.classList.add('is-active');
}

function closeMenuModal() {
    if (menuModalOverlay) {
        menuModalOverlay.classList.remove('is-active');
    }

    // Restore scroll only if NO other modal is open
    if (!isAnyModalOpen()) {
        document.body.classList.remove('modal-open');
        document.body.style.top = ''; // Remove top property
        window.scrollTo(0, currentScrollY); // Restore scroll position
    }
}

function handleMenuToggle(event) {
    const targetId = event.currentTarget.getAttribute('data-target');
    if (targetId === 'full-menu-modal') {
        event.preventDefault(); 
        openMenuModal();
    }
}

/* --- New Dropdown Menu Toggle Function --- */
function setupVideosDropdown() {
    const toggleButton = document.getElementById('videos-menu-toggle');
    const dropdownContent = document.getElementById('videos-dropdown');

    if (toggleButton && dropdownContent) {
        toggleButton.addEventListener('click', () => {
            // Toggle the 'is-open' class on the button
            toggleButton.classList.toggle('is-open');

            // Toggle the height of the dropdown content
            if (dropdownContent.style.maxHeight) {
                dropdownContent.style.maxHeight = null; // Collapse
            } else {
                // Set max-height to scroll height to expand fully 
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
            }
        });
    }
}

// --- Menu Closing on Link Click ---
function setupMenuLinkClosing() {
    const menuModal = document.getElementById('full-menu-modal');
    
    const linksToCloseMenu = menuModal.querySelectorAll(
        '.menu-modal-item:not(.has-dropdown):not(.menu-calculator-btn), .menu-dropdown-item'
    );
    
    const closeButton = menuModal.querySelector('.menu-modal-close');

    function closeMenu() {
        menuModal.classList.remove('is-active');
        restoreBodyState(); 
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', closeMenu);
    }
    
    linksToCloseMenu.forEach(link => {
        if (link.id !== 'open-donate-modal' && !link.classList.contains('menu-calculator-btn')) {
            link.addEventListener('click', () => {
                setTimeout(closeMenu, 100); 
            });
        }
    });

    menuModal.addEventListener('click', (event) => {
        if (event.target === menuModal) {
            closeMenu();
        }
    });
}