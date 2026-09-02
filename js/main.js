/* ============================================================
   MAIN.JS

   Internet Communication
   Advertising Agency Website

   Handles:
   - Mobile navigation
   - Smooth scrolling
   - Active navigation
   - Navbar scroll effect
   - Scroll reveal animations
   - FAQ accordion
   - Scroll-to-top button
   - Loading screen
   - Contact information
   - Dynamic phone number dropdown
   - Current year
   - Accessibility / reduced motion
   - Language switcher (English & Bengali only)
   ============================================================ */


/* ============================================================
   ═══════════════════════════════════════════════════════════════
   CONFIGURATION - CHANGE THESE VALUES ONLY
   ═══════════════════════════════════════════════════════════════
   ============================================================ */

const CONFIG = {

    /* --------------------------------------------------------
       PHONE NUMBERS
       Add or remove numbers here.
       label  = Description
       number = Display number
       tel    = Actual dialing number
    -------------------------------------------------------- */
    phoneNumbers: [
        {
            label: "Primary Contact",
            number: "+91 98300 86004",
            tel: "+919830086004"
        },
        {
            label: "Secondary Contact",
            number: "+91 91230 37075",
            tel: "+919123037075"
        }
    ],

    /* --------------------------------------------------------
        MEDIA PARTNERS / CLIENTS
        
        Just add the image filename. Example: "times-of-india.png"
        Images should be in: assets/media-logos/
     -------------------------------------------------------- */
    partners: [
        "abp.png",
        "ajkaal.png",
        "bartaman.png",
        "eisamay.png",
        "eoi.png",
        "lipi.png",
        "pratidin.png",
        "stateman.png",
        "sukhbor.png",
        "telegraph.png",
        "toi.png",
        "ekdin.png",
        "vishwamitra.png",
        "dainiksambad.png",
        "ie.png",
        "fe.png",
        "jannasatta.png",
        "durantabarta.png"
    ],

    /* --------------------------------------------------------
   ORGANIZATIONS / CLIENTS WE HAVE WORKED WITH

   Just add the image filename.
   Images should be in:
   assets/client-logos/
-------------------------------------------------------- */
    clientsServed: [
        { name: "A.P.C. College" },
        { name: "Adhata Gram Panchayat" },
        { name: "Akaipur Gram Panchayat" },
        { name: "Amta Gram Panchayat" },
        { name: "Amdanga Gram Panchayat" },
        { name: "Amdanga Panchayat Samiti" },
        { name: "Baduria Municipality" },
        { name: "Bairampur Gram Panchayat" },
        { name: "Bandipur Gram Panchayat" },
        { name: "Bansberia Municipality" },
        { name: "Barasat Municipality" },
        { name: "Barasat-I Block Development Office" },
        { name: "Baruipur Municipality" },
        { name: "Basanti Gram Panchayat" },
        { name: "Basantipur Gram Panchayat" },
        { name: "Basirhat Municipality" },
        { name: "Beraberi Gram Panchayat" },
        { name: "Beraberia Gram Panchayat" },
        { name: "Bergoom-I Gram Panchayat" },
        { name: "Bergoom-II Gram Panchayat" },
        { name: "Bhatpara Municipality" },
        { name: "Bilkanda-II Gram Panchayat" },
        { name: "Bishpur Gram Panchayat" },
        { name: "Bodai Gram Panchayat" },
        { name: "Bongaon Municipality" },
        { name: "Budge Budge Municipality" },
        { name: "Chandigarh-Rohanda Gram Panchayat" },
        { name: "Chandpara Gram Panchayat" },
        { name: "Cooper's Camp Notified Area Authority" },
        { name: "Daihat Municipality" },
        { name: "Dakshin Jhapardah Gram Panchayat" },
        { name: "Dankuni Municipality" },
        { name: "Dharmmapukuria Gram Panchayat" },
        { name: "Dharmapur-II Gram Panchayat" },
        { name: "Diamond Harbour Municipality" },
        { name: "Dighari Gram Panchayat" },
        { name: "Dum Dum Municipality" },
        { name: "Duma Gram Panchayat" },
        { name: "Fulsara Gram Panchayat" },
        { name: "Garulia Municipality" },
        { name: "Gobardanga Hindu College" },
        { name: "Gopalnagar-I Gram Panchayat" },
        { name: "Ghoraberia Chitnan Gram Panchayat" },
        { name: "Hasnabad Gram Panchayat" },
        { name: "Hasnabad Panchayat Samiti" },
        { name: "Ichapur-I Gram Panchayat" },
        { name: "Ichapur Nilgunj Gram Panchayat" },
        { name: "Jaleswar-II Gram Panchayat" },
        { name: "Jaynagar Majilpur Municipality" },
        { name: "Jetia Gram Panchayat" },
        { name: "Jhowdanga Gram Panchayat" },
        { name: "Jyangra Hatiara-II Gram Panchayat" },
        { name: "Kalupur Gram Panchayat" },
        { name: "Kanchrapara Municipality" },
        { name: "Kashimpur Gram Panchayat" },
        { name: "Khardaha Municipality" },
        { name: "Kowgachi-I Gram Panchayat" },
        { name: "Krishnanagar Municipality" },
        { name: "Kumra Gram Panchayat" },
        { name: "Lalupur Gram Panchayat" },
        { name: "Malipoto Gram Panchayat" },
        { name: "Mamudpur Gram Panchayat" },
        { name: "Maricha Gram Panchayat" },
        { name: "Mohanpur Gram Panchayat" },
        { name: "Murshidabad Municipality" },
        { name: "Nabadwip Municipality" },
        { name: "Naihati Municipality" },
        { name: "New Barrackpur Municipality" },
        { name: "North Barrackpore Municipality" },
        { name: "Palla Gram Panchayat" },
        { name: "Panihati Municipality" },
        { name: "Panpur Keutia Gram Panchayat" },
        { name: "Paschim Khilkapur Gram Panchayat" },
        { name: "Pathar Ghata Gram Panchayat" },
        { name: "Pujali Municipality" },
        { name: "Purba Khilkapur Gram Panchayat" },
        { name: "Rajibpur Bira Gram Panchayat" },
        { name: "Rajpur Sonarpur Municipality" },
        { name: "Ranaghat Municipality" },
        { name: "Rupamari Gram Panchayat" },
        { name: "Santipur Municipality" },
        { name: "Sankchura Begundi Gram Panchayat" },
        { name: "Shasan Gram Panchayat" },
        { name: "Sirajbati Gram Panchayat" },
        { name: "Sripat Singh College" },
        { name: "Taki Municipality" },
        { name: "Taraberia Gram Panchayat" },
        { name: "Titagarh Municipality" },
        { name: "Uttarpara Kotrung Municipality" }
    ],


    /* --------------------------------------------------------
       NAVBAR SCROLL
       px to trigger scroll effect
    -------------------------------------------------------- */
    navbarScrollOffset: 50,

    /* --------------------------------------------------------
       SCROLL REVEAL
       threshold  = 0-1 (0 = start, 1 = fully visible)
       rootMargin = offset for triggering
    -------------------------------------------------------- */
    scrollRevealThreshold: 0.12,
    scrollRevealRootMargin: "0px 0px -40px 0px",

    /* --------------------------------------------------------
       ACTIVE NAVIGATION
       rootMargin for detecting which section is active
    -------------------------------------------------------- */
    activeNavRootMargin: "-35% 0px -55% 0px",

    /* --------------------------------------------------------
       BACK TO TOP BUTTON
       px to show/hide button
    -------------------------------------------------------- */
    backToTopOffset: 400,

    /* --------------------------------------------------------
       LOADING SCREEN
       ms delay after page load before hiding
    -------------------------------------------------------- */
    loaderDelay: 300,

    /* --------------------------------------------------------
       MOBILE BREAKPOINT
       px - below this width, mobile menu is active
    -------------------------------------------------------- */
    mobileBreakpoint: 767,

    /* --------------------------------------------------------
       FAQ
       Set to true to have first FAQ open by default
    -------------------------------------------------------- */
    faqAutoOpenFirst: false
};

/* ============================================================
   1. GLOBAL VARIABLES
   ============================================================ */

const body = document.body;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============================================================
   2. DOM READY
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initMobileNavigation();
    initSmoothScrolling();
    initNavbarScroll();
    initActiveNavigation();
    initScrollReveal();
    initFAQ();
    initScrollToTop();
    initBackToTopVisibility();
    initLoadingScreen();
    initCurrentYear();
    initCallButton();
    initCallDropdown();
    initExternalLinks();
    fixMobileMenuButtons();
    initMediaPartners();
    initClientsServed();
    initLanguageSwitcher(); // Initialize language switcher
    initMapTracking();
});

/* ============================================================
   3. MOBILE NAVIGATION

   Matches current HTML:

   .nav-toggle
   .nav-menu
   ============================================================ */

function initMobileNavigation() {
    const menuToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!menuToggle || !navMenu) {
        return;
    }

    /* --------------------------------------------------------
       Toggle menu
    -------------------------------------------------------- */

    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = navMenu.classList.contains("active");

        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    /* --------------------------------------------------------
       Close menu after clicking navigation link
    -------------------------------------------------------- */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMobileMenu();
        });
    });

    /* --------------------------------------------------------
       Close when clicking outside
    -------------------------------------------------------- */

    document.addEventListener("click", event => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMobileMenu();
        }
    });

    /* --------------------------------------------------------
       Close with Escape
    -------------------------------------------------------- */

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMobileMenu();
        }
    });

    /* --------------------------------------------------------
       Close when switching to desktop
    -------------------------------------------------------- */

    window.addEventListener("resize", () => {
        if (window.innerWidth > CONFIG.mobileBreakpoint) {
            closeMobileMenu();
        }
    });

    /* --------------------------------------------------------
       Open menu
    -------------------------------------------------------- */

    function openMobileMenu() {
        navMenu.classList.add("active");
        menuToggle.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");
        body.classList.add("menu-open");
    }

    /* --------------------------------------------------------
       Close menu
    -------------------------------------------------------- */

    function closeMobileMenu() {
        navMenu.classList.remove("active");
        navMenu.classList.remove("open");
        navMenu.classList.remove("show");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        body.classList.remove("menu-open");
    }
}

/* ============================================================
   MOBILE MENU CTA VISIBILITY

   Ensures "Call Now" and "Contact Now" remain visible
   inside the mobile burger menu.
   ============================================================ */

function fixMobileMenuButtons() {
    const navMenu = document.querySelector(".nav-menu");

    if (!navMenu) {
        return;
    }

    const buttons = navMenu.querySelectorAll(".nav-cta");

    if (buttons.length === 0) {
        return;
    }

    const updateButtons = () => {
        if (window.innerWidth <= CONFIG.mobileBreakpoint) {
            buttons.forEach(button => {
                button.style.display = "flex";
                button.style.alignItems = "center";
                button.style.justifyContent = "center";
                button.style.backgroundColor = "#12355b";
                button.style.color = "#ffffff";
                button.style.border = "1px solid #12355b";
                button.style.opacity = "1";
                button.style.visibility = "visible";
                button.style.width = "100%";
                button.style.marginTop = "8px";
                button.style.padding = "12px 20px";
                button.style.position = "relative";
                button.style.zIndex = "10";
            });
        } else {
            buttons.forEach(button => {
                button.style.display = "";
                button.style.alignItems = "";
                button.style.justifyContent = "";
                button.style.backgroundColor = "";
                button.style.color = "";
                button.style.border = "";
                button.style.opacity = "";
                button.style.visibility = "";
                button.style.width = "";
                button.style.marginTop = "";
                button.style.padding = "";
                button.style.position = "";
                button.style.zIndex = "";
            });
        }
    };

    updateButtons();
    window.addEventListener("resize", updateButtons);
}

/* ============================================================
   4. SMOOTH SCROLLING
   ============================================================ */

function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#" || targetId === "#!") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header = document.querySelector(".header");
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

            if (prefersReducedMotion) {
                window.scrollTo(0, targetPosition);
            } else {
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }

            history.replaceState(null, "", targetId);
        });
    });
}

/* ============================================================
   5. NAVBAR SCROLL EFFECT
   ============================================================ */

function initNavbarScroll() {
    const header = document.querySelector(".header");

    if (!header) {
        return;
    }

    function updateNavbar() {
        if (window.scrollY > CONFIG.navbarScrollOffset) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
}

/* ============================================================
   6. ACTIVE NAVIGATION
   ============================================================ */

function initActiveNavigation() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) {
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            const id = entry.target.getAttribute("id");

            navLinks.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        });
    }, {
        rootMargin: CONFIG.activeNavRootMargin
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

/* ============================================================
   7. SCROLL REVEAL ANIMATIONS
   ============================================================ */

function initScrollReveal() {
    const elements = document.querySelectorAll(
        ".reveal, " +
        ".service-card, " +
        ".feature-card, " +
        ".stat-card, " +
        ".client-card, " +
        ".step, " +
        ".why-copy, " +
        ".check-list, " +
        ".faq-item"
    );

    if (elements.length === 0) {
        return;
    }

    if (prefersReducedMotion) {
        elements.forEach(element => {
            element.classList.add("visible");
            element.classList.add("scroll-visible");
        });
        return;
    }

    elements.forEach(element => {
        element.classList.add("scroll-hidden");
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("scroll-visible");
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: CONFIG.scrollRevealThreshold,
        rootMargin: CONFIG.scrollRevealRootMargin
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

/* ============================================================
   8. FAQ ACCORDION
   ============================================================ */

function initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");

    if (faqItems.length === 0) {
        return;
    }

    faqItems.forEach((item, index) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!question || !answer) {
            return;
        }

        question.setAttribute("aria-expanded", "false");

        /* Check if this should be auto-opened */
        const initiallyOpen = item.classList.contains("active") ||
            item.classList.contains("open") ||
            (CONFIG.faqAutoOpenFirst && index === 0);

        if (initiallyOpen) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
            question.setAttribute("aria-expanded", "true");
        }

        question.addEventListener("click", () => {
            toggleFAQ(item, question, answer);
        });

        question.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleFAQ(item, question, answer);
            }
        });
    });

    function toggleFAQ(item, question, answer) {
        const isOpen = item.classList.contains("active");

        /* Close all other FAQs */
        faqItems.forEach(otherItem => {
            if (otherItem === item) {
                return;
            }

            const otherQuestion = otherItem.querySelector(".faq-question");
            const otherAnswer = otherItem.querySelector(".faq-answer");

            otherItem.classList.remove("active");
            otherItem.classList.remove("open");

            if (otherAnswer) {
                otherAnswer.style.maxHeight = null;
            }

            if (otherQuestion) {
                otherQuestion.setAttribute("aria-expanded", "false");
            }
        });

        /* Toggle current FAQ */
        if (isOpen) {
            item.classList.remove("active");
            item.classList.remove("open");
            answer.style.maxHeight = null;
            question.setAttribute("aria-expanded", "false");
        } else {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
            question.setAttribute("aria-expanded", "true");
        }
    }
}

/* ============================================================
   9. SCROLL TO TOP
   ============================================================ */

function initScrollToTop() {
    const button = document.querySelector(".scroll-top");

    if (!button) {
        return;
    }

    button.addEventListener("click", event => {
        event.preventDefault();

        if (prefersReducedMotion) {
            window.scrollTo(0, 0);
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });
}

/* ============================================================
   10. SCROLL-TO-TOP VISIBILITY
   ============================================================ */

function initBackToTopVisibility() {
    const button = document.querySelector(".scroll-top");

    if (!button) {
        return;
    }

    function updateButton() {
        if (window.scrollY > CONFIG.backToTopOffset) {
            button.classList.add("visible");
            button.classList.add("show");
        } else {
            button.classList.remove("visible");
            button.classList.remove("show");
        }
    }

    updateButton();
    window.addEventListener("scroll", updateButton, { passive: true });
}

/* ============================================================
   11. LOADING SCREEN
   ============================================================ */

function initLoadingScreen() {
    const loader = document.querySelector("#loader");

    if (!loader) {
        return;
    }

    function hideLoader() {
        loader.classList.add("loaded");
        loader.classList.add("hidden");

        setTimeout(() => {
            loader.style.display = "none";
        }, 700);
    }

    if (document.readyState === "complete") {
        setTimeout(hideLoader, CONFIG.loaderDelay);
    } else {
        window.addEventListener("load", () => {
            setTimeout(hideLoader, CONFIG.loaderDelay);
        }, {
            once: true
        });
    }
}

/* ============================================================
   12. CURRENT YEAR

   Matches:

   <span id="year"></span>
   ============================================================ */

function initCurrentYear() {
    const yearElement = document.querySelector("#year");

    if (!yearElement) {
        return;
    }

    yearElement.textContent = new Date().getFullYear();
}

/* ============================================================
   13. FLOATING CALL BUTTON
   ============================================================ */

function initCallButton() {
    const callButton = document.querySelector(".floating-contact");

    if (!callButton) {
        return;
    }

    const href = callButton.getAttribute("href");

    /* If HTML already contains tel: don't change it */
    if (href && href.startsWith("tel:")) {
        return;
    }

    /* Use first phone number from config if available */
    if (CONFIG.phoneNumbers.length > 0) {
        callButton.setAttribute("href", `tel:${CONFIG.phoneNumbers[0].tel}`);
    }
}

/* ============================================================
   14. DYNAMIC CALL NUMBER DROPDOWN
   ============================================================ */

function initCallDropdown() {
    const wrapper = document.querySelector("#callDropdownWrapper");
    const button = document.querySelector("#callDropdownButton");
    const dropdown = document.querySelector("#callDropdown");
    const list = document.querySelector("#callDropdownList");

    if (!wrapper || !button || !dropdown || !list) {
        return;
    }

    /* ========================================================
       RENDER PHONE NUMBERS FROM CONFIG
    ======================================================== */

    function renderPhoneNumbers() {
        list.innerHTML = "";

        CONFIG.phoneNumbers.forEach(phone => {
            const phoneLink = document.createElement("a");
            phoneLink.href = `tel:${phone.tel}`;
            phoneLink.className = "call-number-item";

            const icon = document.createElement("span");
            icon.className = "call-number-icon";
            icon.textContent = "☎";

            const textContainer = document.createElement("span");
            textContainer.className = "call-number-text";

            const label = document.createElement("span");
            label.className = "call-number-label";
            label.textContent = phone.label;

            const number = document.createElement("span");
            number.className = "call-number-value";
            number.textContent = phone.number;

            textContainer.appendChild(label);
            textContainer.appendChild(number);
            phoneLink.appendChild(icon);
            phoneLink.appendChild(textContainer);
            list.appendChild(phoneLink);
        });
    }

    /* ========================================================
       OPEN DROPDOWN
    ======================================================== */

    function openDropdown() {
        wrapper.classList.add("active");
        button.setAttribute("aria-expanded", "true");
        dropdown.setAttribute("aria-hidden", "false");
    }

    /* ========================================================
       CLOSE DROPDOWN
    ======================================================== */

    function closeDropdown() {
        wrapper.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
        dropdown.setAttribute("aria-hidden", "true");
    }

    /* ========================================================
       BUTTON CLICK
    ======================================================== */

    button.addEventListener("click", event => {
        event.stopPropagation();
        const isOpen = wrapper.classList.contains("active");

        if (isOpen) {
            closeDropdown();
        } else {
            openDropdown();
        }
    });

    /* ========================================================
       CLICK OUTSIDE
    ======================================================== */

    document.addEventListener("click", event => {
        if (!wrapper.contains(event.target)) {
            closeDropdown();
        }
    });

    /* ========================================================
       ESCAPE KEY
    ======================================================== */

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeDropdown();
        }
    });

    /* ========================================================
       RENDER NUMBERS
    ======================================================== */

    renderPhoneNumbers();
}

/* ============================================================
   15. KEYBOARD SUPPORT

   Ctrl + Home = Scroll to top
   ============================================================ */

document.addEventListener("keydown", event => {
    if (event.key === "Home" && event.ctrlKey) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth"
        });
    }
});

/* ============================================================
   16. HANDLE WINDOW RESIZE

   Recalculate open FAQ height.
   ============================================================ */

let resizeTimer;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        const openFAQs = document.querySelectorAll(".faq-item.active .faq-answer");

        openFAQs.forEach(answer => {
            answer.style.maxHeight = answer.scrollHeight + "px";
        });
    }, 150);
});

/* ============================================================
   17. IMAGE LOAD FALLBACK
   ============================================================ */

document.addEventListener("error", event => {
    const element = event.target;

    if (element.tagName !== "IMG") {
        return;
    }

    element.classList.add("image-error");
}, true);

/* ============================================================
   18. EXTERNAL LINKS
   ============================================================ */

function initExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');

    links.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }
    });
}

/* ============================================================
   19. PAGE VISIBILITY
   ============================================================ */

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.documentElement.classList.add("page-hidden");
    } else {
        document.documentElement.classList.remove("page-hidden");
    }
});

/* ============================================================
   20. CONSOLE INFORMATION
   ============================================================ */

if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    console.log("Internet Communication website loaded successfully.");
}

/* ============================================================
   21. MEDIA PARTNERS - FULLY DYNAMIC RENDER (FIXED - NO LAZY LOAD)
   ============================================================ */

function initMediaPartners() {
    const track = document.getElementById('partnerTrack');

    if (!track) {
        return;
    }

    const partners = CONFIG.partners || [];

    // If no partners, show a message
    if (partners.length === 0) {
        const wrapper = document.querySelector('.partners-track-wrapper');
        if (wrapper) {
            wrapper.innerHTML = `
                <div class="no-partners-message">
                    <span>📰</span>
                    Adding media partners soon...
                </div>
            `;
            wrapper.style.padding = '40px 0';
        }
        return;
    }

    // Create items - NO DUPLICATES
    const itemsHTML = createPartnerItems(partners);
    track.innerHTML = itemsHTML;

    // Initially pause the animation
    track.style.animationPlayState = 'paused';

    // Get all images
    const images = track.querySelectorAll('img');
    const totalImages = images.length;

    // Preload images and track loading
    let loadedCount = 0;
    let imagesLoaded = false;

    function checkAllLoaded() {
        loadedCount++;
        if (loadedCount >= totalImages && !imagesLoaded) {
            imagesLoaded = true;
            // All images loaded, start animation
            startAnimation();
        }
    }

    function startAnimation() {
        // Calculate and start animation
        updateAnimationSettings();
        track.style.animationPlayState = 'running';
        console.log(`✅ All ${totalImages} partner logos loaded! Animation started.`);
    }

    // If no images, start immediately
    if (totalImages === 0) {
        startAnimation();
        return;
    }

    // Force load each image
    images.forEach(img => {
        // Remove lazy loading to ensure immediate load
        img.removeAttribute('loading');

        // If image already loaded
        if (img.complete && img.naturalHeight !== 0) {
            checkAllLoaded();
        } else {
            // Set up load event
            img.addEventListener('load', checkAllLoaded);
            img.addEventListener('error', checkAllLoaded);

            // Force reload if already in cache but not complete
            if (img.complete && img.naturalHeight === 0) {
                // Image failed to load
                checkAllLoaded();
            }
        }
    });

    // Fallback: Start after max 3 seconds regardless
    const fallbackTimer = setTimeout(() => {
        if (!imagesLoaded) {
            console.warn(`⚠️ ${totalImages - loadedCount} images not loaded after 3s. Starting animation anyway.`);
            startAnimation();
        }
    }, 3000);

    // Override startAnimation to clear fallback
    const originalStart = startAnimation;
    startAnimation = function () {
        clearTimeout(fallbackTimer);
        originalStart();
    };

    // Recalculate on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (track.style.animationPlayState !== 'paused') {
                updateAnimationSettings();
            }
        }, 250);
    });

    // Pause animation on hover
    const wrapper = document.querySelector('.partners-track-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        wrapper.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    }
}

/* ============================================================
   UPDATE ANIMATION SETTINGS
   ============================================================ */

function updateAnimationSettings() {
    const track = document.getElementById('partnerTrack');
    if (!track) return;

    const partners = CONFIG.partners || [];
    if (partners.length === 0) return;

    // Get actual track width
    const trackWidth = track.scrollWidth;
    const viewportWidth = track.parentElement.clientWidth;

    // Calculate how much to scroll to show all logos
    let scrollPercentage = 0;
    if (trackWidth > viewportWidth) {
        scrollPercentage = ((trackWidth - viewportWidth) / trackWidth) * 100;
        // Add a small buffer so last logos are fully visible
        scrollPercentage = Math.min(scrollPercentage + 5, 85);
    }

    // Set the scroll distance as CSS variable
    track.style.setProperty('--scroll-distance', `-${scrollPercentage}%`);

    // Calculate animation duration based on number of logos
    const baseDuration = Math.max(20, partners.length * 2.5);
    track.style.setProperty('--animation-duration', `${baseDuration}s`);

    console.log(`📊 Partners: ${partners.length} | Scroll: ${scrollPercentage.toFixed(1)}% | Duration: ${baseDuration}s`);
}

/* ============================================================
   CREATE PARTNER ITEMS HTML - REMOVED LAZY LOADING
   ============================================================ */

function createPartnerItems(partners) {
    return partners.map(filename => {
        const name = filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
        const imagePath = `assets/media-logos/${filename}`;

        return `
            <div class="partner-item">
                <img 
                    src="${imagePath}" 
                    alt="${name}"
                    title="${name}"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'partner-name\\'>${name}</span>';"
                >
            </div>
        `;
    }).join('');
}


/* ============================================================
   22. CLIENTS / ORGANIZATIONS SERVED - FULLY DYNAMIC RENDER
============================================================ */
function initClientsServed() {
    const track = document.getElementById('clientTrack');
    if (!track) return;
    const clients = CONFIG.clientsServed || [];
    if (clients.length === 0) {
        const wrapper = document.querySelector('.clients-track-wrapper');
        if (wrapper) {
            wrapper.innerHTML = `
                <div class="no-clients-message">
                    <span>🏢</span>
                    Adding client organizations soon...
                </div>
            `;
            wrapper.style.padding = '40px 0';
        }
        return;
    }
    const itemsHTML = createClientItems(clients);
    track.innerHTML = itemsHTML;
    track.style.animationPlayState = 'paused';
    const images = track.querySelectorAll('img');
    const totalImages = images.length;
    let loadedCount = 0;
    let imagesLoaded = false;
    function checkAllLoaded() {
        loadedCount++;
        if (loadedCount >= totalImages && !imagesLoaded) {
            imagesLoaded = true;
            startAnimation();
        }
    }
    function startAnimation() {
        updateClientAnimationSettings();
        track.style.animationPlayState = 'running';
        console.log(`✅ All ${totalImages} client logos loaded! Animation started.`);
    }
    if (totalImages === 0) {
        startAnimation();
        return;
    }
    images.forEach(img => {
        img.removeAttribute('loading');
        if (img.complete && img.naturalHeight !== 0) {
            checkAllLoaded();
        } else {
            img.addEventListener('load', checkAllLoaded);
            img.addEventListener('error', checkAllLoaded);
            if (img.complete && img.naturalHeight === 0) {
                checkAllLoaded();
            }
        }
    });
    const fallbackTimer = setTimeout(() => {
        if (!imagesLoaded) {
            console.warn(`⚠️ ${totalImages - loadedCount} client images not loaded after 3s. Starting animation anyway.`);
            startAnimation();
        }
    }, 3000);
    const originalStart = startAnimation;
    startAnimation = function () {
        clearTimeout(fallbackTimer);
        originalStart();
    };
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (track.style.animationPlayState !== 'paused') {
                updateClientAnimationSettings();
            }
        }, 250);
    });
    const wrapper = document.querySelector('.clients-track-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        wrapper.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    }
}
function updateClientAnimationSettings() {
    const track = document.getElementById('clientTrack');
    if (!track) return;
    const clients = CONFIG.clientsServed || [];
    if (clients.length === 0) return;
    const trackWidth = track.scrollWidth;
    const viewportWidth = track.parentElement.clientWidth;
    let scrollPercentage = 0;
    if (trackWidth > viewportWidth) {
        scrollPercentage = ((trackWidth - viewportWidth) / trackWidth) * 100;
        scrollPercentage = Math.min(scrollPercentage + 5, 85);
    }
    track.style.setProperty('--scroll-distance', `-${scrollPercentage}%`);
    const baseDuration = Math.max(20, clients.length * 2.5);
    track.style.setProperty('--animation-duration', `${baseDuration}s`);
    console.log(`📊 Clients: ${clients.length} | Scroll: ${scrollPercentage.toFixed(1)}% | Duration: ${baseDuration}s`);
}
function createClientItems(clients) {
    return clients.map(client => {
        const name = client.name || "Organization";
        const imagePath = client.logo ? `assets/client-logos/${client.logo}` : "";
        if (!client.logo) {
            return `
                <div class="client-item no-logo">
                    <span class="client-name">${name}</span>
                </div>
            `;
        }
        return `
            <div class="client-item">
                <div class="client-logo">
                    <img src="${imagePath}" alt="${name}" title="${name}" onerror="this.style.display='none';this.parentElement.classList.add('logo-error');this.closest('.client-item').classList.add('no-logo');">
                </div>
                <span class="client-name">${name}</span>
            </div>
        `;
    }).join('');
}

/* ============================================================
   23. LANGUAGE SWITCHER (English & Bengali only)
   ============================================================ */

function initLanguageSwitcher() {
    // =====================================================
    // LANGUAGE TRANSLATIONS (English & Bengali only)
    // =====================================================
    const translations = {
        en: {
            nav: {
                home: 'Home',
                about: 'About Us',
                services: 'Services',
                whyUs: 'Why Choose Us',
                process: 'How It Works',
                callNow: 'Call Now',
                contactNow: 'Contact Now'
            },
            hero: {
                eyebrow: 'PROFESSIONAL MEDIA PUBLICATION SERVICES',
                title: 'Your Trusted Partner for <span>Newspaper & Media Advertising</span>',
                text: 'We help government organizations, businesses, institutions, and individuals publish advertisements, notices, announcements, tenders, and other important information through trusted newspaper and media channels.',
                exploreServices: 'Explore Services →',
                contactUs: 'Contact Us',
                trust1: 'Professional',
                trust1Label: 'Guidance',
                trust2: 'Reliable',
                trust2Label: 'Assistance',
                trust3: 'Wide',
                trust3Label: 'Media Reach',
                badge1: '✓ Trusted Service',
                badge2: '📢 Wide Reach'
            },
            about: {
                eyebrow: 'ABOUT OUR AGENCY',
                title: 'Reliable Support for Every <span>Publication Requirement</span>',
                text1: 'We are a professional advertising and media publication agency providing reliable assistance for publishing advertisements and important notices in newspapers and other media platforms.',
                text2: 'We work with government organizations, private companies, institutions, businesses, and individuals to help ensure their advertisements reach the appropriate audience through suitable publication channels.',
                cta: 'Discuss Your Requirement →',
                stat1: '+ Years Experience',
                stat2: '+ Clients Served',
                stat3: '+ Publication Options',
                feature1Title: 'Trusted Service',
                feature1Desc: 'Professional assistance focused on reliability and clear communication.',
                feature2Title: 'Professional Support',
                feature2Desc: 'Guidance throughout the advertisement and publication process.',
                feature3Title: 'Wide Media Reach',
                feature3Desc: 'Support in identifying suitable newspaper and media options.'
            },
            services: {
                eyebrow: 'WHAT WE OFFER',
                title: 'Advertising & Publication <span>Services</span>',
                subtitle: 'Our services are structured to support different publication requirements.',
                learnMore: 'Learn More →',
                s1: {
                    title: 'Government Advertising',
                    desc: 'We help government departments, municipalities, panchayats, government offices, educational institutions, and other public organizations publish official advertisements in newspapers. Our services include tenders, recruitment advertisements, public notices, government notifications, quotations, auction notices, corrigenda, scheme announcements, departmental notices, and other official communications that need to reach the public through newspapers.'
                },
                s2: {
                    title: 'Business Advertising',
                    desc: 'We help businesses, companies, shops, brands, institutions, and organizations promote their products, services, offers, and business activities through newspaper advertisements. This includes product promotions, new business announcements, corporate advertisements, dealership opportunities, service promotions, special offers, events, and other commercial advertisements.'
                },
                s3: {
                    title: 'Legal & Public Notices',
                    desc: 'We assist individuals, businesses, organizations, and institutions with publishing legal and public notices in newspapers. This can include name change notices, property-related notices, lost document notices, ownership notices, public announcements, legal notifications, partnership notices, court-related publications, and other notices that need to be publicly communicated through newspapers.'
                },
                s4: {
                    title: 'Recruitment Advertising',
                    desc: 'We help government bodies, private companies, educational institutions, organizations, and other employers publish recruitment and job advertisements in newspapers. This includes job vacancies, recruitment drives, walk-in interviews, application invitations, employment opportunities, and other hiring announcements. We help arrange the required information for newspaper publication and suitable audience reach.'
                },
                s5: {
                    title: 'Newspaper Ad Booking',
                    desc: 'We provide complete assistance with booking advertisements in newspapers according to the client\'s requirements. We help clients understand newspaper advertising options, select suitable publications, provide advertisement details, choose appropriate publication requirements, and coordinate the booking process. Our service makes newspaper advertisement booking simple, organized, and convenient.'
                },
                s6: {
                    title: 'Media Consultation',
                    desc: 'We provide practical guidance to help clients choose suitable newspapers and advertising options for their requirements. We help explain different types of advertisements, publication options, target audiences, advertisement formats, and basic placement considerations. Our goal is to make it easier for clients to understand where and how their advertisement can be published.'
                },
                s7: {
                    title: 'Classified Advertising',
                    desc: 'We assist with publishing classified advertisements in newspapers for a wide range of personal, business, and organizational requirements. Classified advertisements can include job opportunities, property requirements, property sale or rental, matrimonial advertisements, business opportunities, lost and found notices, name changes, public announcements, and other small-format advertisements. We help clients prepare the required information and arrange publication in suitable newspapers.'
                },
                s8: {
                    title: 'Tender & Auction Advertising',
                    desc: 'We assist government departments, municipalities, panchayats, companies, institutions, and organizations with publishing tender and auction advertisements in newspapers. This includes tender invitations, e-tender announcements, quotation notices, auction notices, sale notices, procurement advertisements, and related public notifications. We help coordinate the advertisement details and newspaper publication requirements.'
                },
                s9: {
                    title: 'Property Advertising',
                    desc: 'We help individuals, businesses, developers, institutions, and organizations publish property-related advertisements in newspapers. This can include property sale, purchase, rental, commercial property, land-related advertisements, property announcements, acquisition notices, and other property-related public communications. We help clients arrange the required information and select suitable newspaper publication options.'
                },
                s10: {
                    title: 'Public Announcement Advertising',
                    desc: 'We help government bodies, organizations, institutions, businesses, and individuals publish important announcements intended for the general public. These may include public information, meetings, organizational announcements, event information, awareness campaigns, important notifications, changes, invitations, and other messages that need to be communicated publicly through newspapers.'
                },
                s11: {
                    title: 'Educational Advertising',
                    desc: 'We assist schools, colleges, universities, coaching institutes, training centers, and other educational organizations with newspaper advertising. Services can include admission announcements, course promotions, recruitment notices, examination-related announcements, educational events, application invitations, institutional advertisements, and other education-related communications intended for students, parents, teachers, and the general public.'
                },
                s12: {
                    title: 'Event & Promotional Advertising',
                    desc: 'We help businesses, organizations, institutions, and individuals promote events, programs, campaigns, exhibitions, launches, special offers, cultural activities, public programs, and other important occasions through newspaper advertisements. We assist with organizing the advertisement information and selecting suitable publication options so the message can reach the intended audience.'
                },
                s13: {
                    title: 'Personal & Individual Advertising',
                    desc: 'We assist individuals with different types of personal newspaper advertisements and public notices. These may include name change advertisements, lost document notices, matrimonial advertisements, public announcements, congratulations, obituaries, remembrance notices, and other personal communications. We help individuals understand the publication requirements and arrange their advertisements in suitable newspapers.'
                },
                s14: {
                    title: 'Advertisement Design & Formatting',
                    desc: 'We help clients organize and prepare their advertisement information in a clear and newspaper-friendly format before publication. This can include arranging text, important details, headings, contact information, and other required content according to the advertisement requirements. We help ensure that the advertisement information is presented clearly and is ready for the newspaper publication process.'
                }
            },
            partners: {
                eyebrow: 'TRUSTED MEDIA HOUSES',
                title: 'Our <span>Media Partners</span>',
                subtitle: 'We work with leading newspapers and media publications'
            },
            clients: {
                eyebrow: 'WHO WE SERVE',
                title: 'Solutions for Different <span>Types of Clients</span>',
                c1: 'Government Organizations',
                c1Desc: 'Government departments and public institutions.',
                c2: 'Businesses & Companies',
                c2Desc: 'Private companies, startups, and established businesses.',
                c3: 'Organizations & Institutions',
                c3Desc: 'Educational institutions, NGOs, associations, and other organizations.',
                c4: 'Individuals',
                c4Desc: 'Individuals needing personal, legal, or public notices.'
            },
            served: {
                eyebrow: 'OUR EXPERIENCE',
                title: 'Organizations We\'ve <span>Worked With</span>',
                subtitle: 'Supporting organizations, institutions, businesses, and clients with their advertising and publication requirements.'
            },
            process: {
                eyebrow: 'SIMPLE & TRANSPARENT',
                title: 'How <span>It Works</span>',
                subtitle: 'From your first enquiry to publication, we help guide the process.',
                step1: 'Contact Us',
                step1Desc: 'Contact our team and explain your advertising or publication requirement.',
                step2: 'Share Requirement',
                step2Desc: 'Provide advertisement content, notice details, or publication requirements.',
                step3: 'Choose Options',
                step3Desc: 'We help identify suitable newspaper or media publication options.',
                step4: 'Processing',
                step4Desc: 'The advertisement is prepared and processed according to selected requirements.',
                step5: 'Publication',
                step5Desc: 'The advertisement or notice is published through the appropriate media channel.'
            },
            why: {
                eyebrow: 'WHY CHOOSE US',
                title: 'A Professional Partner for <span>Important Publications</span>',
                text: 'We focus on making communication straightforward and helping clients understand their available publication options.',
                cta: 'Talk to Our Team',
                b1: '✓ Professional Service',
                b2: '✓ Reliable Assistance',
                b3: '✓ Government & Private Client Support',
                b4: '✓ Media Publication Expertise',
                b5: '✓ Easy Communication',
                b6: '✓ Personalized Guidance',
                b7: '✓ Transparent Process',
                b8: '✓ Wide Range of Services'
            },
            cta: {
                eyebrow: 'LET\'S GET STARTED',
                title: 'Need to Publish an Advertisement or Notice?',
                text: 'Contact our team today to discuss your newspaper and media publication requirements.',
                callNow: '☎ Call Us Now',
                contactUs: 'Contact Us',
                selectNumber: 'Select a number'
            },
            faq: {
                eyebrow: 'FREQUENTLY ASKED QUESTIONS',
                title: 'Questions? <span>We Can Help.</span>',
                subtitle: 'Find quick answers to common questions about our services.',
                q1: 'What types of advertisements can you help publish?',
                a1: 'We can assist with various advertisement, notice, announcement, recruitment, tender, business, and public publication requirements.',
                q2: 'Do you provide services for government organizations?',
                a2: 'Yes. The agency can support government departments and public institutions with applicable publication requirements.',
                q3: 'Can individuals publish public or legal notices?',
                a3: 'Yes. Individuals can contact the agency to discuss personal, public, or legal notice requirements.',
                q4: 'How can I contact your team?',
                a4: 'You can call, email, or use WhatsApp to contact our team regarding your advertisement or publication requirements.',
                q5: 'How long does the publication process take?',
                a5: 'The timeline depends on the publication type, newspaper or media selection, approval requirements, and submission deadlines.'
            },
            contact: {
                eyebrow: 'CONTACT US',
                title: 'Let\'s Discuss Your <span>Requirement</span>',
                subtitle: 'Tell us what you need to publish and our team can guide you.',
                introLabel: 'GET IN TOUCH',
                introTitle: 'We\'re Here to Help',
                introText: 'Whether you need a newspaper advertisement, government notice, business advertisement, legal notice, or any other publication service, contact our team and we\'ll guide you through the process.',
                emailLabel: 'EMAIL',
                addressLabel: 'OFFICE ADDRESS',
                address: 'Panihati, Kolkata, West Bengal, India',
                hoursLabel: 'Business Hours',
                hours: 'Monday – Sunday: 10:00 AM – 7:00 PM',
                emailBtn: '✉ Send Email',
                backBtn: 'Back to Home'
            },
            footer: {
                tagline: 'Professional assistance for newspaper advertising and media publication requirements.',
                quickLinks: 'Quick Links',
                about: 'About Us',
                services: 'Services',
                whyUs: 'Why Choose Us',
                process: 'How It Works',
                servicesTitle: 'Services',
                s1: 'Government Advertising',
                s2: 'Business Advertising',
                s3: 'Legal & Public Notices',
                s4: 'Recruitment Advertising',
                s5: 'Newspaper Ad Booking',
                s6: 'Media Consultation',
                s7: 'Classified Advertising',
                s8: 'Tender & Auction Advertising',
                s9: 'Property Advertising',
                s10: 'Public Announcement Advertising',
                s11: 'Educational Advertising',
                s12: 'Event & Promotional Advertising',
                s13: 'Personal & Individual Advertising',
                s14: 'Advertisement Design & Formatting',
                contactTitle: 'Contact',
                address: 'Panihati, Kolkata, West Bengal, India',
                rights: 'All Rights Reserved.'
            }
        },
        bn: {
            nav: {
                home: 'হোম',
                about: 'আমাদের সম্পর্কে',
                services: 'সেবাসমূহ',
                whyUs: 'কেন আমাদের বেছে নেবেন',
                process: 'কিভাবে কাজ করে',
                callNow: 'এখন কল করুন',
                contactNow: 'এখন যোগাযোগ করুন'
            },
            hero: {
                eyebrow: 'পেশাদার মিডিয়া প্রকাশনা সেবা',
                title: 'সংবাদপত্র ও মিডিয়া বিজ্ঞাপনের জন্য <span>আপনার বিশ্বস্ত সঙ্গী</span>',
                text: 'আমরা সরকারি সংস্থা, ব্যবসা, প্রতিষ্ঠান ও ব্যক্তিদের বিজ্ঞাপন, বিজ্ঞপ্তি, ঘোষণা, দরপত্র এবং অন্যান্য গুরুত্বপূর্ণ তথ্য নির্ভরযোগ্য সংবাদপত্র ও মিডিয়া চ্যানেলের মাধ্যমে প্রকাশ করতে সহায়তা করি।',
                exploreServices: 'সেবা দেখুন →',
                contactUs: 'যোগাযোগ করুন',
                trust1: 'পেশাদার',
                trust1Label: 'পরামর্শ',
                trust2: 'নির্ভরযোগ্য',
                trust2Label: 'সহায়তা',
                trust3: 'ব্যাপক',
                trust3Label: 'মিডিয়া পৌঁছানো',
                badge1: '✓ বিশ্বস্ত সেবা',
                badge2: '📢 ব্যাপক পৌঁছানো'
            },
            about: {
                eyebrow: 'আমাদের সংস্থা সম্পর্কে',
                title: 'প্রত্যেক <span>প্রকাশনা প্রয়োজন</span> এর জন্য নির্ভরযোগ্য সহায়তা',
                text1: 'আমরা একটি পেশাদার বিজ্ঞাপন ও মিডিয়া প্রকাশনা সংস্থা যা সংবাদপত্র এবং অন্যান্য মিডিয়া প্ল্যাটফর্মে বিজ্ঞাপন ও গুরুত্বপূর্ণ বিজ্ঞপ্তি প্রকাশের জন্য নির্ভরযোগ্য সহায়তা প্রদান করে।',
                text2: 'আমরা সরকারি সংস্থা, বেসরকারি কোম্পানি, প্রতিষ্ঠান, ব্যবসা এবং ব্যক্তিদের সাথে কাজ করি যাতে তাদের বিজ্ঞাপন উপযুক্ত প্রকাশনা চ্যানেলের মাধ্যমে সঠিক দর্শকদের কাছে পৌঁছায়।',
                cta: 'আপনার প্রয়োজন নিয়ে আলোচনা করুন →',
                stat1: '+ বছর অভিজ্ঞতা',
                stat2: '+ ক্লায়েন্ট সেবা',
                stat3: '+ প্রকাশনা বিকল্প',
                feature1Title: 'বিশ্বস্ত সেবা',
                feature1Desc: 'নির্ভরযোগ্যতা এবং স্পষ্ট যোগাযোগের উপর দৃষ্টি নিবদ্ধ পেশাদার সহায়তা।',
                feature2Title: 'পেশাদার সহায়তা',
                feature2Desc: 'বিজ্ঞাপন ও প্রকাশনা প্রক্রিয়ার সময় নির্দেশনা।',
                feature3Title: 'ব্যাপক মিডিয়া পৌঁছানো',
                feature3Desc: 'উপযুক্ত সংবাদপত্র ও মিডিয়া বিকল্প সনাক্ত করতে সহায়তা।'
            },
            services: {
                eyebrow: 'আমরা যা অফার করি',
                title: 'বিজ্ঞাপন ও প্রকাশনা <span>সেবাসমূহ</span>',
                subtitle: 'আমাদের সেবাসমূহ বিভিন্ন প্রকাশনা প্রয়োজনের জন্য কাঠামোবদ্ধ।',
                learnMore: 'আরও জানুন →',
                s1: {
                    title: 'সরকারি বিজ্ঞাপন',
                    desc: 'আমরা সরকারি বিভাগ, পৌরসভা, পঞ্চায়েত, সরকারি অফিস, শিক্ষা প্রতিষ্ঠান এবং অন্যান্য সরকারি সংস্থাকে সংবাদপত্রে সরকারি বিজ্ঞাপন প্রকাশে সহায়তা করি। আমাদের সেবার মধ্যে রয়েছে দরপত্র, নিয়োগ বিজ্ঞপ্তি, জনসাধারণের বিজ্ঞপ্তি, সরকারি ঘোষণা, কোটেশন, নিলাম বিজ্ঞপ্তি, সংশোধনী, প্রকল্প ঘোষণা, বিভাগীয় বিজ্ঞপ্তি এবং অন্যান্য সরকারি যোগাযোগ যা জনসাধারণের কাছে সংবাদপত্রের মাধ্যমে পৌঁছাতে হবে।'
                },
                s2: {
                    title: 'ব্যবসায়িক বিজ্ঞাপন',
                    desc: 'আমরা ব্যবসা, কোম্পানি, দোকান, ব্র্যান্ড, প্রতিষ্ঠান এবং সংগঠনগুলিকে সংবাদপত্রের বিজ্ঞাপনের মাধ্যমে তাদের পণ্য, সেবা, অফার এবং ব্যবসায়িক কার্যক্রম প্রচারে সহায়তা করি। এর মধ্যে রয়েছে পণ্য প্রচারণা, নতুন ব্যবসা ঘোষণা, কর্পোরেট বিজ্ঞাপন, ডিলারশিপ সুযোগ, সেবা প্রচারণা, বিশেষ অফার, ইভেন্ট এবং অন্যান্য বাণিজ্যিক বিজ্ঞাপন।'
                },
                s3: {
                    title: 'আইনি ও জনসাধারণের বিজ্ঞপ্তি',
                    desc: 'আমরা ব্যক্তি, ব্যবসা, সংগঠন এবং প্রতিষ্ঠানগুলিকে সংবাদপত্রে আইনি ও জনসাধারণের বিজ্ঞপ্তি প্রকাশে সহায়তা করি। এর মধ্যে নাম পরিবর্তন বিজ্ঞপ্তি, সম্পত্তি-সম্পর্কিত বিজ্ঞপ্তি, হারানো দলিল বিজ্ঞপ্তি, মালিকানা বিজ্ঞপ্তি, জনসাধারণের ঘোষণা, আইনি নোটিফিকেশন, অংশীদারিত্ব বিজ্ঞপ্তি, আদালত-সম্পর্কিত প্রকাশনা এবং অন্যান্য বিজ্ঞপ্তি যা সংবাদপত্রের মাধ্যমে জনসাধারণকে জানাতে হবে।'
                },
                s4: {
                    title: 'নিয়োগ বিজ্ঞাপন',
                    desc: 'আমরা সরকারি সংস্থা, বেসরকারি কোম্পানি, শিক্ষা প্রতিষ্ঠান, সংগঠন এবং অন্যান্য নিয়োগকর্তাদের সংবাদপত্রে নিয়োগ ও চাকরির বিজ্ঞাপন প্রকাশে সহায়তা করি। এর মধ্যে রয়েছে চাকরির শূন্যপদ, নিয়োগ ড্রাইভ, ওয়াক-ইন ইন্টারভিউ, আবেদন আমন্ত্রণ, কর্মসংস্থানের সুযোগ এবং অন্যান্য নিয়োগ ঘোষণা। আমরা সংবাদপত্র প্রকাশের জন্য প্রয়োজনীয় তথ্য এবং উপযুক্ত দর্শকদের কাছে পৌঁছানোর ব্যবস্থা করতে সহায়তা করি।'
                },
                s5: {
                    title: 'সংবাদপত্রে বিজ্ঞাপন বুকিং',
                    desc: 'আমরা ক্লায়েন্টের প্রয়োজন অনুযায়ী সংবাদপত্রে বিজ্ঞাপন বুকিংয়ে সম্পূর্ণ সহায়তা প্রদান করি। আমরা ক্লায়েন্টদের সংবাদপত্রের বিজ্ঞাপনের বিকল্পগুলি বুঝতে, উপযুক্ত প্রকাশনা নির্বাচন করতে, বিজ্ঞাপনের বিবরণ প্রদান করতে, উপযুক্ত প্রকাশনার প্রয়োজনীয়তা নির্বাচন করতে এবং বুকিং প্রক্রিয়া সমন্বয় করতে সহায়তা করি। আমাদের সেবা সংবাদপত্রে বিজ্ঞাপন বুকিং সহজ, সংগঠিত এবং সুবিধাজনক করে তোলে।'
                },
                s6: {
                    title: 'মিডিয়া পরামর্শ',
                    desc: 'আমরা ক্লায়েন্টদের তাদের প্রয়োজন অনুযায়ী উপযুক্ত সংবাদপত্র এবং বিজ্ঞাপনের বিকল্প নির্বাচন করতে ব্যবহারিক নির্দেশনা প্রদান করি। আমরা বিভিন্ন ধরনের বিজ্ঞাপন, প্রকাশনার বিকল্প, লক্ষ্য দর্শক, বিজ্ঞাপনের ফরম্যাট এবং মৌলিক স্থান নির্ধারণের বিষয়গুলি ব্যাখ্যা করতে সহায়তা করি। আমাদের লক্ষ্য হল ক্লায়েন্টদের জন্য তাদের বিজ্ঞাপন কোথায় এবং কীভাবে প্রকাশিত হতে পারে তা বোঝা সহজ করা।'
                },
                s7: {
                    title: 'শ্রেণীবদ্ধ বিজ্ঞাপন',
                    desc: 'আমরা ব্যক্তিগত, ব্যবসায়িক এবং সংগঠনগত প্রয়োজনের বিস্তৃত পরিসরের জন্য সংবাদপত্রে শ্রেণীবদ্ধ বিজ্ঞাপন প্রকাশে সহায়তা করি। শ্রেণীবদ্ধ বিজ্ঞাপনের মধ্যে চাকরির সুযোগ, সম্পত্তির প্রয়োজনীয়তা, সম্পত্তি বিক্রয় বা ভাড়া, বিবাহের বিজ্ঞাপন, ব্যবসার সুযোগ, হারানো-পাওয়া বিজ্ঞপ্তি, নাম পরিবর্তন, জনসাধারণের ঘোষণা এবং অন্যান্য ছোট-ফরম্যাটের বিজ্ঞাপন অন্তর্ভুক্ত থাকতে পারে। আমরা ক্লায়েন্টদের প্রয়োজনীয় তথ্য প্রস্তুত করতে এবং উপযুক্ত সংবাদপত্রে প্রকাশের ব্যবস্থা করতে সহায়তা করি।'
                },
                s8: {
                    title: 'দরপত্র ও নিলাম বিজ্ঞাপন',
                    desc: 'আমরা সরকারি বিভাগ, পৌরসভা, পঞ্চায়েত, কোম্পানি, প্রতিষ্ঠান এবং সংগঠনগুলিকে সংবাদপত্রে দরপত্র ও নিলাম বিজ্ঞাপন প্রকাশে সহায়তা করি। এর মধ্যে রয়েছে দরপত্র আমন্ত্রণ, ই-টেন্ডার ঘোষণা, কোটেশন বিজ্ঞপ্তি, নিলাম বিজ্ঞপ্তি, বিক্রয় বিজ্ঞপ্তি, ক্রয় বিজ্ঞাপন এবং সম্পর্কিত জনসাধারণের নোটিফিকেশন। আমরা বিজ্ঞাপনের বিবরণ এবং সংবাদপত্র প্রকাশের প্রয়োজনীয়তা সমন্বয় করতে সহায়তা করি।'
                },
                s9: {
                    title: 'সম্পত্তি বিজ্ঞাপন',
                    desc: 'আমরা ব্যক্তি, ব্যবসা, ডেভেলপার, প্রতিষ্ঠান এবং সংগঠনগুলিকে সংবাদপত্রে সম্পত্তি-সম্পর্কিত বিজ্ঞাপন প্রকাশে সহায়তা করি। এর মধ্যে সম্পত্তি বিক্রয়, ক্রয়, ভাড়া, বাণিজ্যিক সম্পত্তি, জমি-সম্পর্কিত বিজ্ঞাপন, সম্পত্তি ঘোষণা, অধিগ্রহণ বিজ্ঞপ্তি এবং অন্যান্য সম্পত্তি-সম্পর্কিত জনসাধারণের যোগাযোগ অন্তর্ভুক্ত থাকতে পারে। আমরা ক্লায়েন্টদের প্রয়োজনীয় তথ্য সাজাতে এবং উপযুক্ত সংবাদপত্র প্রকাশের বিকল্প নির্বাচন করতে সহায়তা করি।'
                },
                s10: {
                    title: 'জনসাধারণের ঘোষণা বিজ্ঞাপন',
                    desc: 'আমরা সরকারি সংস্থা, সংগঠন, প্রতিষ্ঠান, ব্যবসা এবং ব্যক্তিদের জনসাধারণের জন্য গুরুত্বপূর্ণ ঘোষণা প্রকাশে সহায়তা করি। এর মধ্যে জনসাধারণের তথ্য, সভা, সংগঠনগত ঘোষণা, ইভেন্ট তথ্য, সচেতনতা প্রচারণা, গুরুত্বপূর্ণ নোটিফিকেশন, পরিবর্তন, আমন্ত্রণ এবং অন্যান্য বার্তা অন্তর্ভুক্ত থাকতে পারে যা সংবাদপত্রের মাধ্যমে জনসাধারণকে জানাতে হবে।'
                },
                s11: {
                    title: 'শিক্ষা বিজ্ঞাপন',
                    desc: 'আমরা স্কুল, কলেজ, বিশ্ববিদ্যালয়, কোচিং ইনস্টিটিউট, প্রশিক্ষণ কেন্দ্র এবং অন্যান্য শিক্ষা প্রতিষ্ঠানকে সংবাদপত্রের বিজ্ঞাপনে সহায়তা করি। সেবার মধ্যে ভর্তি ঘোষণা, কোর্স প্রচারণা, নিয়োগ বিজ্ঞপ্তি, পরীক্ষা-সম্পর্কিত ঘোষণা, শিক্ষা ইভেন্ট, আবেদন আমন্ত্রণ, প্রতিষ্ঠানিক বিজ্ঞাপন এবং অন্যান্য শিক্ষা-সম্পর্কিত যোগাযোগ অন্তর্ভুক্ত থাকতে পারে যা ছাত্র, অভিভাবক, শিক্ষক এবং জনসাধারণের জন্য উদ্দেশ্যে করা হয়।'
                },
                s12: {
                    title: 'ইভেন্ট ও প্রমোশনাল বিজ্ঞাপন',
                    desc: 'আমরা ব্যবসা, সংগঠন, প্রতিষ্ঠান এবং ব্যক্তিদের সংবাদপত্রের বিজ্ঞাপনের মাধ্যমে ইভেন্ট, প্রোগ্রাম, প্রচারণা, প্রদর্শনী, উদ্বোধন, বিশেষ অফার, সাংস্কৃতিক কার্যক্রম, জনসাধারণের প্রোগ্রাম এবং অন্যান্য গুরুত্বপূর্ণ অনুষ্ঠান প্রচারে সহায়তা করি। আমরা বিজ্ঞাপনের তথ্য সংগঠিত করতে এবং উপযুক্ত প্রকাশনার বিকল্প নির্বাচন করতে সহায়তা করি যাতে বার্তাটি লক্ষ্য দর্শকদের কাছে পৌঁছাতে পারে।'
                },
                s13: {
                    title: 'ব্যক্তিগত ও স্বতন্ত্র বিজ্ঞাপন',
                    desc: 'আমরা ব্যক্তিদের বিভিন্ন ধরনের ব্যক্তিগত সংবাদপত্রের বিজ্ঞাপন এবং জনসাধারণের বিজ্ঞপ্তিতে সহায়তা করি। এর মধ্যে নাম পরিবর্তন বিজ্ঞাপন, হারানো দলিল বিজ্ঞপ্তি, বিবাহের বিজ্ঞাপন, জনসাধারণের ঘোষণা, অভিনন্দন, শোকবার্তা, স্মরণ বিজ্ঞপ্তি এবং অন্যান্য ব্যক্তিগত যোগাযোগ অন্তর্ভুক্ত থাকতে পারে। আমরা ব্যক্তিদের প্রকাশনার প্রয়োজনীয়তা বুঝতে এবং উপযুক্ত সংবাদপত্রে তাদের বিজ্ঞাপন সাজাতে সহায়তা করি।'
                },
                s14: {
                    title: 'বিজ্ঞাপন ডিজাইন ও ফরম্যাটিং',
                    desc: 'আমরা ক্লায়েন্টদের তাদের বিজ্ঞাপনের তথ্য প্রকাশের আগে একটি পরিষ্কার এবং সংবাদপত্র-বান্ধব ফরম্যাটে সংগঠিত ও প্রস্তুত করতে সহায়তা করি। এর মধ্যে বিজ্ঞাপনের প্রয়োজনীয়তা অনুযায়ী পাঠ্য, গুরুত্বপূর্ণ বিবরণ, শিরোনাম, যোগাযোগের তথ্য এবং অন্যান্য প্রয়োজনীয় বিষয়বস্তু সাজানো অন্তর্ভুক্ত থাকতে পারে। আমরা নিশ্চিত করতে সহায়তা করি যে বিজ্ঞাপনের তথ্য স্পষ্টভাবে উপস্থাপিত হয় এবং সংবাদপত্র প্রকাশনার প্রক্রিয়ার জন্য প্রস্তুত থাকে।'
                }
            },
            partners: {
                eyebrow: 'বিশ্বস্ত মিডিয়া হাউস',
                title: 'আমাদের <span>মিডিয়া পার্টনার</span>',
                subtitle: 'আমরা শীর্ষস্থানীয় সংবাদপত্র ও মিডিয়া প্রকাশনার সাথে কাজ করি'
            },
            clients: {
                eyebrow: 'আমরা যাদের সেবা করি',
                title: 'বিভিন্ন ধরনের <span>ক্লায়েন্টের</span> জন্য সমাধান',
                c1: 'সরকারি সংস্থা',
                c1Desc: 'সরকারি বিভাগ ও জনসেবা প্রতিষ্ঠান।',
                c2: 'ব্যবসা ও কোম্পানি',
                c2Desc: 'বেসরকারি কোম্পানি, স্টার্টআপ এবং প্রতিষ্ঠিত ব্যবসা।',
                c3: 'সংগঠন ও প্রতিষ্ঠান',
                c3Desc: 'শিক্ষা প্রতিষ্ঠান, এনজিও, অ্যাসোসিয়েশন এবং অন্যান্য সংগঠন।',
                c4: 'ব্যক্তি',
                c4Desc: 'ব্যক্তিগত, আইনি বা জনসাধারণের বিজ্ঞপ্তি প্রয়োজন এমন ব্যক্তি।'
            },
            served: {
                eyebrow: 'আমাদের অভিজ্ঞতা',
                title: 'আমরা যাদের সাথে <span>কাজ করেছি</span>',
                subtitle: 'সংগঠন, প্রতিষ্ঠান, ব্যবসা এবং ক্লায়েন্টদের তাদের বিজ্ঞাপন ও প্রকাশনার প্রয়োজনীয়তায় সহায়তা করা।'
            },
            process: {
                eyebrow: 'সরল ও স্বচ্ছ',
                title: 'কিভাবে <span>কাজ করে</span>',
                subtitle: 'আপনার প্রথম অনুসন্ধান থেকে প্রকাশনা পর্যন্ত, আমরা প্রক্রিয়াটি নির্দেশনা দিতে সাহায্য করি।',
                step1: 'যোগাযোগ করুন',
                step1Desc: 'আমাদের টিমের সাথে যোগাযোগ করুন এবং আপনার বিজ্ঞাপন বা প্রকাশনার প্রয়োজনীয়তা ব্যাখ্যা করুন।',
                step2: 'প্রয়োজনীয়তা শেয়ার করুন',
                step2Desc: 'বিজ্ঞাপনের বিষয়বস্তু, বিজ্ঞপ্তির বিবরণ বা প্রকাশনার প্রয়োজনীয়তা প্রদান করুন।',
                step3: 'বিকল্প নির্বাচন করুন',
                step3Desc: 'আমরা উপযুক্ত সংবাদপত্র বা মিডিয়া প্রকাশনার বিকল্প সনাক্ত করতে সাহায্য করি।',
                step4: 'প্রক্রিয়াকরণ',
                step4Desc: 'বিজ্ঞাপন নির্বাচিত প্রয়োজনীয়তা অনুযায়ী প্রস্তুত এবং প্রক্রিয়াকরণ করা হয়।',
                step5: 'প্রকাশনা',
                step5Desc: 'বিজ্ঞাপন বা বিজ্ঞপ্তি উপযুক্ত মিডিয়া চ্যানেলের মাধ্যমে প্রকাশিত হয়।'
            },
            why: {
                eyebrow: 'কেন আমাদের বেছে নেবেন',
                title: 'গুরুত্বপূর্ণ প্রকাশনার জন্য <span>একটি পেশাদার অংশীদার</span>',
                text: 'আমরা যোগাযোগ সহজবোধ্য করতে এবং ক্লায়েন্টদের তাদের উপলব্ধ প্রকাশনার বিকল্পগুলি বুঝতে সাহায্য করার উপর দৃষ্টি নিবদ্ধ করি।',
                cta: 'আমাদের টিমের সাথে কথা বলুন',
                b1: '✓ পেশাদার সেবা',
                b2: '✓ নির্ভরযোগ্য সহায়তা',
                b3: '✓ সরকারি ও বেসরকারি ক্লায়েন্ট সহায়তা',
                b4: '✓ মিডিয়া প্রকাশনা দক্ষতা',
                b5: '✓ সহজ যোগাযোগ',
                b6: '✓ ব্যক্তিগতকৃত নির্দেশনা',
                b7: '✓ স্বচ্ছ প্রক্রিয়া',
                b8: '✓ বিস্তৃত পরিসরের সেবা'
            },
            cta: {
                eyebrow: 'চলুন শুরু করি',
                title: 'একটি বিজ্ঞাপন বা বিজ্ঞপ্তি প্রকাশ করতে হবে?',
                text: 'আপনার সংবাদপত্র ও মিডিয়া প্রকাশনার প্রয়োজনীয়তা নিয়ে আলোচনা করতে আজই আমাদের টিমের সাথে যোগাযোগ করুন।',
                callNow: '☎ এখন কল করুন',
                contactUs: 'যোগাযোগ করুন',
                selectNumber: 'একটি নম্বর নির্বাচন করুন'
            },
            faq: {
                eyebrow: 'ঘনঘন জিজ্ঞাসিত প্রশ্ন',
                title: 'প্রশ্ন? <span>আমরা সাহায্য করতে পারি।</span>',
                subtitle: 'আমাদের সেবা সম্পর্কে সাধারণ প্রশ্নের দ্রুত উত্তর খুঁজুন।',
                q1: 'আপনারা কী ধরনের বিজ্ঞাপন প্রকাশ করতে সাহায্য করতে পারেন?',
                a1: 'আমরা বিভিন্ন বিজ্ঞাপন, বিজ্ঞপ্তি, ঘোষণা, নিয়োগ, দরপত্র, ব্যবসা এবং জনসাধারণের প্রকাশনার প্রয়োজনীয়তায় সহায়তা করতে পারি।',
                q2: 'আপনারা কি সরকারি সংস্থার জন্য সেবা প্রদান করেন?',
                a2: 'হ্যাঁ। সংস্থাটি সরকারি বিভাগ এবং জনসেবা প্রতিষ্ঠানকে প্রযোজ্য প্রকাশনার প্রয়োজনীয়তায় সহায়তা করতে পারে।',
                q3: 'ব্যক্তি কি জনসাধারণ বা আইনি বিজ্ঞপ্তি প্রকাশ করতে পারেন?',
                a3: 'হ্যাঁ। ব্যক্তিরা ব্যক্তিগত, জনসাধারণ বা আইনি বিজ্ঞপ্তির প্রয়োজনীয়তা নিয়ে আলোচনা করতে সংস্থার সাথে যোগাযোগ করতে পারেন।',
                q4: 'আমি কীভাবে আপনার টিমের সাথে যোগাযোগ করতে পারি?',
                a4: 'আপনি আপনার বিজ্ঞাপন বা প্রকাশনার প্রয়োজনীয়তা সম্পর্কে আমাদের টিমের সাথে যোগাযোগ করতে কল, ইমেল বা হোয়াটসঅ্যাপ ব্যবহার করতে পারেন।',
                q5: 'প্রকাশনা প্রক্রিয়ায় কত সময় লাগে?',
                a5: 'সময়সীমা প্রকাশনার ধরন, সংবাদপত্র বা মিডিয়া নির্বাচন, অনুমোদনের প্রয়োজনীয়তা এবং জমা দেওয়ার শেষ তারিখের উপর নির্ভর করে।'
            },
            contact: {
                eyebrow: 'যোগাযোগ করুন',
                title: 'আপনার <span>প্রয়োজনীয়তা</span> নিয়ে আলোচনা করুন',
                subtitle: 'আপনার কী প্রকাশ করতে হবে তা আমাদের বলুন এবং আমাদের টিম আপনাকে নির্দেশনা দিতে পারে।',
                introLabel: 'যোগাযোগ করুন',
                introTitle: 'আমরা সাহায্য করতে এখানে আছি',
                introText: 'আপনার একটি সংবাদপত্রের বিজ্ঞাপন, সরকারি বিজ্ঞপ্তি, ব্যবসায়িক বিজ্ঞাপন, আইনি বিজ্ঞপ্তি বা অন্য কোনো প্রকাশনা সেবার প্রয়োজন হোক না কেন, আমাদের টিমের সাথে যোগাযোগ করুন এবং আমরা আপনাকে প্রক্রিয়াটির মাধ্যমে নির্দেশনা দেব।',
                emailLabel: 'ইমেইল',
                addressLabel: 'অফিস ঠিকানা',
                address: 'পানিহাটি, কলকাতা, পশ্চিমবঙ্গ, ভারত',
                hoursLabel: 'কার্যকাল',
                hours: 'সোমবার – রবিবার: সকাল ১০:০০ – রাত ৭:০০',
                emailBtn: '✉ ইমেইল পাঠান',
                backBtn: 'হোমে ফিরে যান'
            },
            footer: {
                tagline: 'সংবাদপত্রের বিজ্ঞাপন এবং মিডিয়া প্রকাশনার প্রয়োজনীয়তার জন্য পেশাদার সহায়তা।',
                quickLinks: 'দ্রুত লিঙ্ক',
                about: 'আমাদের সম্পর্কে',
                services: 'সেবাসমূহ',
                whyUs: 'কেন আমাদের বেছে নেবেন',
                process: 'কিভাবে কাজ করে',
                servicesTitle: 'সেবাসমূহ',
                s1: 'সরকারি বিজ্ঞাপন',
                s2: 'ব্যবসায়িক বিজ্ঞাপন',
                s3: 'আইনি ও জনসাধারণের বিজ্ঞপ্তি',
                s4: 'নিয়োগ বিজ্ঞাপন',
                s5: 'সংবাদপত্রে বিজ্ঞাপন বুকিং',
                s6: 'মিডিয়া পরামর্শ',
                s7: 'শ্রেণীবদ্ধ বিজ্ঞাপন',
                s8: 'দরপত্র ও নিলাম বিজ্ঞাপন',
                s9: 'সম্পত্তি বিজ্ঞাপন',
                s10: 'জনসাধারণের ঘোষণা বিজ্ঞাপন',
                s11: 'শিক্ষা বিজ্ঞাপন',
                s12: 'ইভেন্ট ও প্রমোশনাল বিজ্ঞাপন',
                s13: 'ব্যক্তিগত ও স্বতন্ত্র বিজ্ঞাপন',
                s14: 'বিজ্ঞাপন ডিজাইন ও ফরম্যাটিং',
                contactTitle: 'যোগাযোগ',
                address: 'পানিহাটি, কলকাতা, পশ্চিমবঙ্গ, ভারত',
                rights: 'সকল অধিকার সংরক্ষিত।'
            }
        }
    };

    // =====================================================
    // LANGUAGE SWITCHER DOM ELEMENTS
    // =====================================================
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangDisplay = document.getElementById('currentLang');

    // If language switcher elements don't exist, exit
    if (!langToggle || !langDropdown || !currentLangDisplay) {
        return;
    }

    // =====================================================
    // TOGGLE DROPDOWN
    // =====================================================
    langToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const expanded = this.getAttribute('aria-expanded') === 'true' ? false : true;
        this.setAttribute('aria-expanded', expanded);
        langDropdown.classList.toggle('visible');
    });

    // =====================================================
    // CLOSE DROPDOWN ON OUTSIDE CLICK
    // =====================================================
    document.addEventListener('click', function() {
        langDropdown.classList.remove('visible');
        if (langToggle) {
            langToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // =====================================================
    // LANGUAGE SELECTION
    // =====================================================
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();

            // Remove active from all
            langOptions.forEach(opt => opt.classList.remove('active'));

            // Add active to clicked
            this.classList.add('active');

            // Update current language display
            const langCode = this.getAttribute('data-lang');
            const langDisplay = this.getAttribute('data-code');
            currentLangDisplay.textContent = langDisplay;

            // Close dropdown
            langDropdown.classList.remove('visible');
            langToggle.setAttribute('aria-expanded', 'false');

            // Change website content
            changeLanguage(langCode);
        });
    });

    // =====================================================
    // CHANGE LANGUAGE FUNCTION
    // =====================================================
    function changeLanguage(langCode) {
        const t = translations[langCode];
        if (!t) return;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = t;
            for (const k of keys) {
                if (value && value[k] !== undefined) {
                    value = value[k];
                } else {
                    value = null;
                    break;
                }
            }
            if (value !== null && value !== undefined) {
                // Handle HTML content - preserve span structure
                if (typeof value === 'string' && value.includes('<span>')) {
                    el.innerHTML = value;
                } else {
                    el.textContent = value;
                }
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = langCode;

        // Save preference to localStorage
        localStorage.setItem('preferredLanguage', langCode);

        console.log(`🌐 Language changed to: ${langCode.toUpperCase()}`);
    }

    // =====================================================
    // LOAD SAVED LANGUAGE PREFERENCE
    // =====================================================
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        // Find and activate the matching language option
        langOptions.forEach(opt => {
            const lang = opt.getAttribute('data-lang');
            if (lang === savedLanguage) {
                opt.classList.add('active');
                currentLangDisplay.textContent = opt.getAttribute('data-code');
            } else {
                opt.classList.remove('active');
            }
        });
        changeLanguage(savedLanguage);
    }

    console.log('🌐 Language Switcher ready! (English & Bengali)');
}

/* ============================================================
   MAP CLICK TRACKING
   ============================================================ */

function initMapTracking() {
    const mapIframe = document.querySelector('.map-container iframe');
    
    if (mapIframe) {
        // When user clicks on the map, track it
        mapIframe.addEventListener('load', function() {
            console.log('🗺️ Map loaded successfully');
        });
    }
}
/* ============================================================
   END OF MAIN.JS
   ============================================================ */