
/* ==========================================
   AANCHAL VIJ | ACADEMIC WEBSITE
   Interactive Features
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // 2. Reveal elements when they enter the screen
    const revealElements = document.querySelectorAll(
        ".reveal, .section, .research-card, .publication-card"
    );

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        revealElements.forEach(element => {
            element.classList.add("reveal-ready");
            revealObserver.observe(element);
        });
    }

    // 3. Mobile navigation toggle
    const menuToggle = document.querySelector(
        ".menu-toggle, .nav-toggle, #menu-toggle"
    );

    const navigation = document.querySelector(
        ".nav-links, .navbar-links, nav ul"
    );

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", () => {
            navigation.classList.toggle("active");
            menuToggle.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                navigation.classList.contains("active")
            );
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 4. Animated research statistics
    const counters = document.querySelectorAll("[data-count]");

    const animateCounter = element => {
        const target = Number(element.dataset.count);
        const duration = 1600;
        const startTime = performance.now();

        const update = currentTime => {
            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            element.textContent = Math.floor(
                progress * target
            );

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        };

        requestAnimationFrame(update);
    };

    if ("IntersectionObserver" in window) {
        const counterObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // 5. Back-to-top button
    const backToTop = document.querySelector(
        "#backToTop, .back-to-top"
    );

    if (backToTop) {
        window.addEventListener("scroll", () => {
            backToTop.classList.toggle(
                "show",
                window.scrollY > 400
            );
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 6. Update footer year automatically
    const yearElement = document.querySelector("#currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 7. Highlight active navigation section
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(
        "nav a[href^='#']"
    );

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => {
                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") ===
                                "#" + entry.target.id
                            );
                        });
                    }
                });
            },
            { rootMargin: "-30% 0px -60% 0px" }
        );

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

});

