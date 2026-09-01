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
   1. GLOBAL VARIABLES
============================================================ */

const body = document.body;

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


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

        const isOpen =
            navMenu.classList.contains("active");

        if (isOpen) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }

    });


    /* --------------------------------------------------------
       Close menu after clicking navigation link

       This includes:
       - Home
       - About Us
       - Services
       - Why Choose Us
       - How It Works
       - Call Now
       - Contact Now
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

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

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

        if (window.innerWidth > 767) {

            closeMobileMenu();

        }

    });


    /* --------------------------------------------------------
       Open menu
    -------------------------------------------------------- */

    function openMobileMenu() {

        navMenu.classList.add("active");

        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

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

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

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

    const buttons = navMenu.querySelectorAll(
        ".nav-cta"
    );

    if (buttons.length === 0) {
        return;
    }

    const updateButtons = () => {

        if (window.innerWidth <= 767) {

            buttons.forEach(button => {

                /* Make button visible */
                button.style.display = "flex";

                button.style.alignItems = "center";

                button.style.justifyContent = "center";

                /* Button appearance */
                button.style.backgroundColor = "#12355b";

                button.style.color = "#ffffff";

                button.style.border = "1px solid #12355b";

                button.style.opacity = "1";

                button.style.visibility = "visible";

                /* Spacing */
                button.style.width = "100%";

                button.style.marginTop = "8px";

                button.style.padding = "12px 20px";

                button.style.position = "relative";

                button.style.zIndex = "10";

            });

        } else {

            /* Return control to CSS on desktop */

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

    window.addEventListener(
        "resize",
        updateButtons
    );

}


/* ============================================================
   4. SMOOTH SCROLLING
============================================================ */

function initSmoothScrolling() {

    const links = document.querySelectorAll(
        'a[href^="#"]'
    );

    links.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId === "#!"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();


            /* ------------------------------------------------
               Header height
            ------------------------------------------------ */

            const header =
                document.querySelector(".header");

            const headerHeight =
                header ? header.offsetHeight : 0;


            /* ------------------------------------------------
               Calculate target position
            ------------------------------------------------ */

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;


            /* ------------------------------------------------
               Scroll
            ------------------------------------------------ */

            if (prefersReducedMotion) {

                window.scrollTo(
                    0,
                    targetPosition
                );

            } else {

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }


            /* ------------------------------------------------
               Update URL
            ------------------------------------------------ */

            history.replaceState(
                null,
                "",
                targetId
            );

        });

    });

}


/* ============================================================
   5. NAVBAR SCROLL EFFECT
============================================================ */

function initNavbarScroll() {

    const header =
        document.querySelector(".header");

    if (!header) {
        return;
    }


    function updateNavbar() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    updateNavbar();


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

}


/* ============================================================
   6. ACTIVE NAVIGATION
============================================================ */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            '.nav-menu a[href^="#"]'
        );

    if (
        sections.length === 0 ||
        navLinks.length === 0
    ) {
        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const id =
                        entry.target.getAttribute(
                            "id"
                        );


                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute("href") ===
                            `#${id}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });

}


/* ============================================================
   7. SCROLL REVEAL ANIMATIONS
============================================================ */

function initScrollReveal() {

    const elements =
        document.querySelectorAll(
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


    /* --------------------------------------------------------
       Reduced motion

       Immediately show everything.
    -------------------------------------------------------- */

    if (prefersReducedMotion) {

        elements.forEach(element => {

            element.classList.add(
                "visible"
            );

            element.classList.add(
                "scroll-visible"
            );

        });

        return;
    }


    /* --------------------------------------------------------
       Initial hidden state
    -------------------------------------------------------- */

    elements.forEach(element => {

        element.classList.add(
            "scroll-hidden"
        );

    });


    /* --------------------------------------------------------
       Intersection Observer
    -------------------------------------------------------- */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "scroll-visible"
                    );


                    entry.target.classList.add(
                        "visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* ============================================================
   8. FAQ ACCORDION
============================================================ */

function initFAQ() {

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    if (faqItems.length === 0) {
        return;
    }


    faqItems.forEach(item => {

        const question =
            item.querySelector(
                ".faq-question"
            );

        const answer =
            item.querySelector(
                ".faq-answer"
            );


        if (!question || !answer) {
            return;
        }


        /* ----------------------------------------------------
           Accessibility
        ---------------------------------------------------- */

        question.setAttribute(
            "aria-expanded",
            "false"
        );


        /* ----------------------------------------------------
           Check initially open FAQ
        ---------------------------------------------------- */

        const initiallyOpen =
            item.classList.contains("active") ||
            item.classList.contains("open");


        if (initiallyOpen) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

            question.setAttribute(
                "aria-expanded",
                "true"
            );

        }


        /* ----------------------------------------------------
           Click
        ---------------------------------------------------- */

        question.addEventListener(
            "click",
            () => {

                toggleFAQ(
                    item,
                    question,
                    answer
                );

            }
        );


        /* ----------------------------------------------------
           Keyboard support
        ---------------------------------------------------- */

        question.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    toggleFAQ(
                        item,
                        question,
                        answer
                    );

                }

            }
        );

    });


    /* --------------------------------------------------------
       Toggle FAQ
    -------------------------------------------------------- */

    function toggleFAQ(
        item,
        question,
        answer
    ) {

        const isOpen =
            item.classList.contains(
                "active"
            );


        /* ----------------------------------------------------
           Close all other FAQs
        ---------------------------------------------------- */

        faqItems.forEach(otherItem => {

            if (otherItem === item) {
                return;
            }


            const otherQuestion =
                otherItem.querySelector(
                    ".faq-question"
                );

            const otherAnswer =
                otherItem.querySelector(
                    ".faq-answer"
                );


            otherItem.classList.remove(
                "active"
            );

            otherItem.classList.remove(
                "open"
            );


            if (otherAnswer) {

                otherAnswer.style.maxHeight =
                    null;

            }


            if (otherQuestion) {

                otherQuestion.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        /* ----------------------------------------------------
           Toggle current FAQ
        ---------------------------------------------------- */

        if (isOpen) {

            item.classList.remove(
                "active"
            );

            item.classList.remove(
                "open"
            );

            answer.style.maxHeight =
                null;

            question.setAttribute(
                "aria-expanded",
                "false"
            );

        } else {

            item.classList.add(
                "active"
            );

            answer.style.maxHeight =
                answer.scrollHeight + "px";

            question.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    }

}


/* ============================================================
   9. SCROLL TO TOP
============================================================ */

function initScrollToTop() {

    const button =
        document.querySelector(
            ".scroll-top"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        event => {

            event.preventDefault();


            if (prefersReducedMotion) {

                window.scrollTo(
                    0,
                    0
                );

            } else {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }

        }
    );

}


/* ============================================================
   10. SCROLL-TO-TOP VISIBILITY
============================================================ */

function initBackToTopVisibility() {

    const button =
        document.querySelector(
            ".scroll-top"
        );


    if (!button) {
        return;
    }


    function updateButton() {

        if (window.scrollY > 400) {

            button.classList.add(
                "visible"
            );

            button.classList.add(
                "show"
            );

        } else {

            button.classList.remove(
                "visible"
            );

            button.classList.remove(
                "show"
            );

        }

    }


    updateButton();


    window.addEventListener(
        "scroll",
        updateButton,
        { passive: true }
    );

}


/* ============================================================
   11. LOADING SCREEN
============================================================ */

function initLoadingScreen() {

    const loader =
        document.querySelector(
            "#loader"
        );


    if (!loader) {
        return;
    }


    function hideLoader() {

        loader.classList.add(
            "loaded"
        );

        loader.classList.add(
            "hidden"
        );


        setTimeout(() => {

            loader.style.display =
                "none";

        }, 700);

    }


    if (
        document.readyState ===
        "complete"
    ) {

        setTimeout(
            hideLoader,
            300
        );

    } else {

        window.addEventListener(
            "load",
            () => {

                setTimeout(
                    hideLoader,
                    300
                );

            },
            {
                once: true
            }
        );

    }

}


/* ============================================================
   12. CURRENT YEAR

   Matches:

   <span id="year"></span>
============================================================ */

function initCurrentYear() {

    const yearElement =
        document.querySelector(
            "#year"
        );


    if (!yearElement) {
        return;
    }


    yearElement.textContent =
        new Date().getFullYear();

}


/* ============================================================
   13. FLOATING CALL BUTTON
============================================================ */

function initCallButton() {

    const callButton =
        document.querySelector(
            ".floating-contact"
        );


    if (!callButton) {
        return;
    }


    const href =
        callButton.getAttribute(
            "href"
        );


    /* --------------------------------------------------------
       If HTML already contains tel:
       don't change it.
    -------------------------------------------------------- */

    if (
        href &&
        href.startsWith("tel:")
    ) {

        return;

    }


    const phone =
        callButton.dataset.phone;


    if (phone) {

        callButton.setAttribute(
            "href",
            `tel:${phone}`
        );

    }

}


/* ============================================================
   14. PHONE NUMBERS CONFIGURATION

   Add or remove numbers here.

   label  = Description
   number = Display number
   tel    = Actual dialing number
============================================================ */

const PHONE_NUMBERS = [

    {
        label: "Primary Contact",
        number: "+91 98300 86004",
        tel: "+919830086004"
    },

    {
        label: "Office Contact",
        number: "+91 98765 43211",
        tel: "+919876543211"
    },

    {
        label: "Advertising Enquiries",
        number: "+91 98765 43212",
        tel: "+919876543212"
    },

    {
        label: "Media Services",
        number: "+91 98765 43213",
        tel: "+919876543213"
    },

    {
        label: "Customer Support",
        number: "+91 98765 43214",
        tel: "+919876543214"
    }

];


/* ============================================================
   15. DYNAMIC CALL NUMBER DROPDOWN
============================================================ */

function initCallDropdown() {

    const wrapper =
        document.querySelector(
            "#callDropdownWrapper"
        );

    const button =
        document.querySelector(
            "#callDropdownButton"
        );

    const dropdown =
        document.querySelector(
            "#callDropdown"
        );

    const list =
        document.querySelector(
            "#callDropdownList"
        );


    if (
        !wrapper ||
        !button ||
        !dropdown ||
        !list
    ) {
        return;
    }


    /* ========================================================
       RENDER PHONE NUMBERS
    ======================================================== */

    function renderPhoneNumbers() {

        list.innerHTML = "";


        PHONE_NUMBERS.forEach(phone => {

            const phoneLink =
                document.createElement(
                    "a"
                );


            phoneLink.href =
                `tel:${phone.tel}`;


            phoneLink.className =
                "call-number-item";


            /* ------------------------------------------------
               Icon
            ------------------------------------------------ */

            const icon =
                document.createElement(
                    "span"
                );


            icon.className =
                "call-number-icon";


            icon.textContent =
                "☎";


            /* ------------------------------------------------
               Text container
            ------------------------------------------------ */

            const textContainer =
                document.createElement(
                    "span"
                );


            textContainer.className =
                "call-number-text";


            /* ------------------------------------------------
               Label
            ------------------------------------------------ */

            const label =
                document.createElement(
                    "span"
                );


            label.className =
                "call-number-label";


            label.textContent =
                phone.label;


            /* ------------------------------------------------
               Number
            ------------------------------------------------ */

            const number =
                document.createElement(
                    "span"
                );


            number.className =
                "call-number-value";


            number.textContent =
                phone.number;


            /* ------------------------------------------------
               Assemble
            ------------------------------------------------ */

            textContainer.appendChild(
                label
            );

            textContainer.appendChild(
                number
            );


            phoneLink.appendChild(
                icon
            );

            phoneLink.appendChild(
                textContainer
            );


            list.appendChild(
                phoneLink
            );

        });

    }


    /* ========================================================
       OPEN DROPDOWN
    ======================================================== */

    function openDropdown() {

        wrapper.classList.add(
            "active"
        );


        button.setAttribute(
            "aria-expanded",
            "true"
        );


        dropdown.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    /* ========================================================
       CLOSE DROPDOWN
    ======================================================== */

    function closeDropdown() {

        wrapper.classList.remove(
            "active"
        );


        button.setAttribute(
            "aria-expanded",
            "false"
        );


        dropdown.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    /* ========================================================
       BUTTON CLICK
    ======================================================== */

    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const isOpen =
                wrapper.classList.contains(
                    "active"
                );


            if (isOpen) {

                closeDropdown();

            } else {

                openDropdown();

            }

        }
    );


    /* ========================================================
       CLICK OUTSIDE
    ======================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                !wrapper.contains(
                    event.target
                )
            ) {

                closeDropdown();

            }

        }
    );


    /* ========================================================
       ESCAPE KEY
    ======================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeDropdown();

            }

        }
    );


    /* ========================================================
       RENDER NUMBERS
    ======================================================== */

    renderPhoneNumbers();

}


/* ============================================================
   16. KEYBOARD SUPPORT

   Ctrl + Home = Scroll to top
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Home" &&
            event.ctrlKey
        ) {

            event.preventDefault();


            window.scrollTo({

                top: 0,

                behavior:
                    prefersReducedMotion
                        ? "auto"
                        : "smooth"

            });

        }

    }
);


/* ============================================================
   17. HANDLE WINDOW RESIZE

   Recalculate open FAQ height.
============================================================ */

let resizeTimer;


window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(() => {

                const openFAQs =
                    document.querySelectorAll(
                        ".faq-item.active .faq-answer"
                    );


                openFAQs.forEach(
                    answer => {

                        answer.style.maxHeight =
                            answer.scrollHeight +
                            "px";

                    }
                );

            }, 150);

    }
);


/* ============================================================
   18. IMAGE LOAD FALLBACK
============================================================ */

document.addEventListener(
    "error",
    event => {

        const element =
            event.target;


        if (
            element.tagName !==
            "IMG"
        ) {

            return;

        }


        element.classList.add(
            "image-error"
        );

    },
    true
);


/* ============================================================
   19. EXTERNAL LINKS
============================================================ */

function initExternalLinks() {

    const links =
        document.querySelectorAll(
            'a[href^="http"]'
        );


    links.forEach(link => {

        if (
            link.hostname !==
            window.location.hostname
        ) {

            link.setAttribute(
                "target",
                "_blank"
            );


            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        }

    });

}


/* ============================================================
   20. PAGE VISIBILITY
============================================================ */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            document.documentElement.classList.add(
                "page-hidden"
            );

        } else {

            document.documentElement.classList.remove(
                "page-hidden"
            );

        }

    }
);


/* ============================================================
   21. CONSOLE INFORMATION
============================================================ */

if (
    window.location.hostname ===
    "localhost" ||

    window.location.hostname ===
    "127.0.0.1"
) {

    console.log(
        "Internet Communication website loaded successfully."
    );

}


/* ============================================================
   END OF MAIN.JS
============================================================ */