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
   END OF MAIN.JS
   ============================================================ */