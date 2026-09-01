/* ============================================================
   MAIN.JS
   Advertising Agency Website
   ============================================================

   Handles:
   - Mobile navigation
   - Smooth scrolling
   - Active navigation links
   - Navbar scroll behavior
   - Scroll reveal animations
   - Animated statistics counters
   - FAQ accordion
   - Scroll-to-top button
   - Floating call button
   - Loading screen
   - Contact form validation
   - Form feedback
   - Current year
   - Accessibility / reduced motion
   ============================================================ */


/* ============================================================
   1. DOM READY
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    initMobileNavigation();
    initSmoothScrolling();
    initNavbarScroll();
    initScrollReveal();
    initCounters();
    initFAQ();
    initScrollToTop();
    initLoadingScreen();
    initContactForm();
    initCurrentYear();
    initCallButton();
    initBackToTopVisibility();
    initCallDropdown();

});


/* ============================================================
   2. GLOBAL VARIABLES
   ============================================================ */

const body = document.body;

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


/* ============================================================
   3. MOBILE NAVIGATION
   ============================================================ */

function initMobileNavigation() {

    const menuToggle =
        document.querySelector(".menu-toggle") ||
        document.querySelector(".mobile-menu-toggle") ||
        document.querySelector(".hamburger");

    const navLinks =
        document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        return;
    }


    /* ---------- Toggle menu ---------- */

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.contains("active") ||
            navLinks.classList.contains("open") ||
            navLinks.classList.contains("show");

        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }

    });


    /* ---------- Close menu after clicking link ---------- */

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {
            closeMobileMenu();
        });

    });


    /* ---------- Close when clicking outside ---------- */

    document.addEventListener("click", event => {

        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            navLinks.classList.contains("active")
        ) {
            closeMobileMenu();
        }

    });


    /* ---------- Close with Escape ---------- */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMobileMenu();
        }

    });


    /* ---------- Close when resizing to desktop ---------- */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 767) {
            closeMobileMenu();
        }

    });


    function openMobileMenu() {

        navLinks.classList.add("active");

        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        body.classList.add("menu-open");

    }


    function closeMobileMenu() {

        navLinks.classList.remove("active");
        navLinks.classList.remove("open");
        navLinks.classList.remove("show");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        body.classList.remove("menu-open");

    }

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

            const navbar =
                document.querySelector(".navbar") ||
                document.querySelector(".header");

            const navbarHeight =
                navbar ? navbar.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

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

    const navbar =
        document.querySelector(".navbar") ||
        document.querySelector(".header");

    if (!navbar) {
        return;
    }

    const updateNavbar = () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    };

    updateNavbar();

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

}


/* ============================================================
   6. ACTIVE NAVIGATION LINK
   ============================================================ */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(
            '.nav-links a[href^="#"]'
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
                        entry.target.getAttribute("id");

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${id}`
                        ) {
                            link.classList.add("active");
                        }

                    });

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px"
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

    const elements = document.querySelectorAll(
        ".reveal, " +
        ".fade-in, " +
        ".service-card, " +
        ".feature-card, " +
        ".stat-card, " +
        ".client-card, " +
        ".process-item, " +
        ".why-feature, " +
        ".faq-item"
    );

    if (
        elements.length === 0 ||
        prefersReducedMotion
    ) {
        elements.forEach(element => {
            element.classList.add("visible");
        });

        return;
    }


    /* ---------- Initial state ---------- */

    elements.forEach(element => {

        element.classList.add("scroll-hidden");

    });


    /* ---------- Observer ---------- */

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

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    elements.forEach(element => {
        observer.observe(element);
    });

}


/* ============================================================
   8. ANIMATED STATISTICS COUNTERS
   ============================================================ */

function initCounters() {

    const counters =
        document.querySelectorAll(
            "[data-count]"
        );

    if (counters.length === 0) {
        return;
    }


    const animateCounter = counter => {

        const target =
            parseFloat(
                counter.dataset.count
            );

        if (Number.isNaN(target)) {
            return;
        }

        const duration =
            parseInt(
                counter.dataset.duration || "1800",
                10
            );

        const suffix =
            counter.dataset.suffix || "";

        const prefix =
            counter.dataset.prefix || "";

        const decimals =
            target % 1 !== 0
                ? 1
                : 0;


        if (prefersReducedMotion) {

            counter.textContent =
                prefix +
                target.toFixed(decimals) +
                suffix;

            return;

        }


        const startTime =
            performance.now();


        function updateCounter(currentTime) {

            const elapsed =
                currentTime - startTime;

            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            /* Ease-out effect */

            const easedProgress =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const currentValue =
                target * easedProgress;


            counter.textContent =
                prefix +
                currentValue.toFixed(decimals) +
                suffix;


            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.textContent =
                    prefix +
                    target.toFixed(decimals) +
                    suffix;

            }

        }


        requestAnimationFrame(
            updateCounter
        );

    };


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const counter =
                        entry.target;

                    if (
                        counter.dataset.animated ===
                        "true"
                    ) {
                        return;
                    }

                    counter.dataset.animated =
                        "true";

                    animateCounter(counter);

                    observer.unobserve(counter);

                });

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(counter => {
        observer.observe(counter);
    });

}


/* ============================================================
   9. FAQ ACCORDION
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


        /* ---------- Accessibility ---------- */

        question.setAttribute(
            "role",
            "button"
        );

        question.setAttribute(
            "tabindex",
            "0"
        );


        /* ---------- Initial state ---------- */

        const initiallyOpen =
            item.classList.contains("active") ||
            item.classList.contains("open");

        if (initiallyOpen) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

            question.setAttribute(
                "aria-expanded",
                "true"
            );

        } else {

            question.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        /* ---------- Click ---------- */

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


        /* ---------- Keyboard ---------- */

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


    function toggleFAQ(
        item,
        question,
        answer
    ) {

        const isOpen =
            item.classList.contains("active");


        /* ---------- Close all other items ---------- */

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


        /* ---------- Toggle current item ---------- */

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
   10. SCROLL TO TOP
   ============================================================ */

function initScrollToTop() {

    const button =
        document.querySelector(
            ".scroll-top"
        ) ||
        document.querySelector(
            ".scroll-to-top"
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
   11. SCROLL-TO-TOP VISIBILITY
   ============================================================ */

function initBackToTopVisibility() {

    const button =
        document.querySelector(
            ".scroll-top"
        ) ||
        document.querySelector(
            ".scroll-to-top"
        );

    if (!button) {
        return;
    }


    const updateButton = () => {

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

    };


    updateButton();

    window.addEventListener(
        "scroll",
        updateButton,
        { passive: true }
    );

}


/* ============================================================
   12. LOADING SCREEN
   ============================================================ */

function initLoadingScreen() {

    const loader =
        document.querySelector(
            ".loader"
        ) ||
        document.querySelector(
            ".loading-screen"
        ) ||
        document.querySelector(
            "#loader"
        ) ||
        document.querySelector(
            "#loading-screen"
        );

    if (!loader) {
        return;
    }


    const hideLoader = () => {

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

    };


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
   13. CONTACT FORM
   ============================================================ */

function initContactForm() {

    const form =
        document.querySelector(
            "#contact-form"
        ) ||
        document.querySelector(
            ".contact-form"
        ) ||
        document.querySelector(
            'form[data-contact-form]'
        );

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            clearFormErrors(form);


            const formData =
                new FormData(form);


            const name =
                getFieldValue(
                    formData,
                    [
                        "name",
                        "fullName"
                    ]
                );

            const email =
                getFieldValue(
                    formData,
                    [
                        "email",
                        "emailAddress"
                    ]
                );

            const phone =
                getFieldValue(
                    formData,
                    [
                        "phone",
                        "mobile"
                    ]
                );

            const message =
                getFieldValue(
                    formData,
                    [
                        "message",
                        "description"
                    ]
                );


            let isValid = true;


            /* ---------- Name ---------- */

            if (
                name &&
                name.length < 2
            ) {

                showFieldError(
                    form,
                    [
                        "name",
                        "fullName"
                    ],
                    "Please enter your name."
                );

                isValid = false;

            }


            /* ---------- Email ---------- */

            if (
                email &&
                !isValidEmail(email)
            ) {

                showFieldError(
                    form,
                    [
                        "email",
                        "emailAddress"
                    ],
                    "Please enter a valid email address."
                );

                isValid = false;

            }


            /* ---------- Phone ---------- */

            if (phone) {

                const cleanPhone =
                    phone.replace(
                        /[\s()+-]/g,
                        ""
                    );

                if (
                    cleanPhone.length < 7 ||
                    !/^\d+$/.test(
                        cleanPhone
                    )
                ) {

                    showFieldError(
                        form,
                        [
                            "phone",
                            "mobile"
                        ],
                        "Please enter a valid phone number."
                    );

                    isValid = false;

                }

            }


            /* ---------- Message ---------- */

            if (
                message &&
                message.length < 10
            ) {

                showFieldError(
                    form,
                    [
                        "message",
                        "description"
                    ],
                    "Please provide a little more information."
                );

                isValid = false;

            }


            if (!isValid) {

                showFormMessage(
                    form,
                    "Please correct the highlighted fields.",
                    "error"
                );

                return;

            }


            /*
             * This is a static website.
             *
             * No backend is included here.
             * The form therefore displays a success message
             * instead of pretending that the message was sent.
             *
             * Replace this section later with:
             * - Formspree
             * - Web3Forms
             * - EmailJS
             * - Your own backend/API
             */

            showFormMessage(
                form,
                "Thank you! Your enquiry has been received. We will contact you shortly.",
                "success"
            );


            form.classList.add(
                "submitted"
            );


            /*
             * Reset the form after a short delay.
             */

            setTimeout(() => {

                form.reset();

                form.classList.remove(
                    "submitted"
                );

            }, 1500);

        }
    );

}


/* ============================================================
   14. FORM VALIDATION HELPERS
   ============================================================ */

function getFieldValue(
    formData,
    possibleNames
) {

    for (
        const name of possibleNames
    ) {

        const value =
            formData.get(name);

        if (
            value !== null &&
            String(value).trim() !== ""
        ) {

            return String(
                value
            ).trim();

        }

    }

    return "";

}


function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


function showFieldError(
    form,
    fieldNames,
    message
) {

    let field = null;

    for (
        const fieldName of fieldNames
    ) {

        field =
            form.querySelector(
                `[name="${fieldName}"]`
            );

        if (field) {
            break;
        }

    }

    if (!field) {
        return;
    }


    field.classList.add(
        "error"
    );

    field.setAttribute(
        "aria-invalid",
        "true"
    );


    let errorElement =
        field.parentElement.querySelector(
            ".field-error"
        );


    if (!errorElement) {

        errorElement =
            document.createElement(
                "small"
            );

        errorElement.className =
            "field-error";

        field.parentElement.appendChild(
            errorElement
        );

    }


    errorElement.textContent =
        message;

}


function clearFormErrors(form) {

    const fields =
        form.querySelectorAll(
            ".error"
        );

    fields.forEach(field => {

        field.classList.remove(
            "error"
        );

        field.removeAttribute(
            "aria-invalid"
        );

    });


    const errors =
        form.querySelectorAll(
            ".field-error"
        );

    errors.forEach(error => {

        error.remove();

    });


    const messages =
        form.querySelectorAll(
            ".form-message"
        );

    messages.forEach(message => {

        message.remove();

    });

}


function showFormMessage(
    form,
    message,
    type
) {

    let messageElement =
        form.querySelector(
            ".form-message"
        );


    if (!messageElement) {

        messageElement =
            document.createElement(
                "div"
            );

        messageElement.className =
            "form-message";

        form.prepend(
            messageElement
        );

    }


    messageElement.textContent =
        message;

    messageElement.classList.remove(
        "success",
        "error"
    );

    messageElement.classList.add(
        type
    );

}


/* ============================================================
   15. FLOATING CALL BUTTON
   ============================================================ */

function initCallButton() {

    const callButton =
        document.querySelector(
            ".floating-call"
        ) ||
        document.querySelector(
            ".call-button"
        );

    if (!callButton) {
        return;
    }


    /*
     * If the button already has a phone href,
     * don't modify it.
     */

    const href =
        callButton.getAttribute(
            "href"
        );


    if (
        href &&
        href.startsWith("tel:")
    ) {
        return;
    }


    /*
     * Phone number can be configured in HTML:
     *
     * <a
     *   class="floating-call"
     *   data-phone="+919876543210">
     * </a>
     */

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
   16. CURRENT YEAR
   ============================================================ */

function initCurrentYear() {

    const yearElements =
        document.querySelectorAll(
            "#current-year, " +
            ".current-year, " +
            "[data-current-year]"
        );

    if (
        yearElements.length === 0
    ) {
        return;
    }


    const currentYear =
        new Date().getFullYear();


    yearElements.forEach(element => {

        element.textContent =
            currentYear;

    });

}


/* ============================================================
   17. BACK TO TOP KEYBOARD SUPPORT
   ============================================================ */

document.addEventListener(
    "keydown",
    event => {

        /*
         * Home key + Ctrl
         * scrolls to top.
         */

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
   18. HANDLE RESIZE
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

                /*
                 * Recalculate open FAQ height
                 * after screen rotation/resizing.
                 */

                const openFAQs =
                    document.querySelectorAll(
                        ".faq-item.active .faq-answer"
                    );

                openFAQs.forEach(answer => {

                    answer.style.maxHeight =
                        answer.scrollHeight +
                        "px";

                });

            }, 150);

    }
);


/* ============================================================
   19. IMAGE LOAD FALLBACK
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


        /*
         * Add a class so CSS can provide
         * a graceful fallback.
         */

        element.classList.add(
            "image-error"
        );

    },
    true
);


/* ============================================================
   20. EXTERNAL LINKS
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

initExternalLinks();


/* ============================================================
   21. INITIALIZE ACTIVE NAVIGATION
   ============================================================ */

initActiveNavigation();


/* ============================================================
   22. PAGE VISIBILITY
   ============================================================ */

document.addEventListener(
    "visibilitychange",
    () => {

        /*
         * Pause expensive animation work when
         * the browser tab is hidden.
         *
         * This is mainly useful for future
         * animation additions.
         */

        if (
            document.hidden
        ) {

            document.documentElement
                .classList.add(
                    "page-hidden"
                );

        } else {

            document.documentElement
                .classList.remove(
                    "page-hidden"
                );

        }

    }
);


/* ============================================================
   23. CONSOLE INFORMATION
   ============================================================ */

if (
    window.location.hostname ===
    "localhost" ||
    window.location.hostname ===
    "127.0.0.1"
) {

    console.log(
        "Advertising Agency Website loaded successfully."
    );

}





/* ============================================================
   24. PHONE NUMBERS CONFIGURATION

   Add as many numbers as required here.

   label   = Optional description
   number  = Display number
   tel     = Number used by the phone dialer
============================================================ */

const PHONE_NUMBERS = [

    {
        label: "Primary Contact",
        number: "+91 98300 86004 ",
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
   DYNAMIC CALL NUMBER DROPDOWN
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
       GENERATE PHONE NUMBERS
    ======================================================== */

    function renderPhoneNumbers() {

        /* Clear existing numbers */

        list.innerHTML = "";


        PHONE_NUMBERS.forEach(phone => {

            /* Create phone link */

            const phoneLink =
                document.createElement("a");


            phoneLink.href =
                `tel:${phone.tel}`;


            phoneLink.className =
                "call-number-item";


            /* Phone Icon */

            const icon =
                document.createElement("span");

            icon.className =
                "call-number-icon";

            icon.textContent =
                "☎";


            /* Text Container */

            const textContainer =
                document.createElement("span");

            textContainer.className =
                "call-number-text";


            /* Label */

            const label =
                document.createElement("span");

            label.className =
                "call-number-label";

            label.textContent =
                phone.label;


            /* Number */

            const number =
                document.createElement("span");

            number.className =
                "call-number-value";

            number.textContent =
                phone.number;


            /* Assemble */

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
       TOGGLE DROPDOWN
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

       Clicking anywhere outside the dropdown
       automatically closes it.
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
   END OF MAIN.JS
   ============================================================ */

