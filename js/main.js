/* ==========================================
   main.js
   РодничОК
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       PRELOADER
    ========================================== */

    const preloader = document.querySelector(".preloader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

        }, 600);

    });

    /* ==========================================
       SCROLL HEADER
    ========================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,.08)";

            header.style.background =
                "rgba(255,255,255,.98)";

        } else {

            header.style.boxShadow =
                "0 1px 15px rgba(0,0,0,.05)";

            header.style.background =
                "rgba(255,255,255,.95)";
        }

    });

    /* ==========================================
       REVEAL ANIMATION
    ========================================== */

    const sections = document.querySelectorAll(
        "section, .about-card, .direction-card, .review-card, .advantage-card"
    );

    sections.forEach(item => {

        item.classList.add("reveal");

    });

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    sections.forEach(item => {

        observer.observe(item);

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    const links = document.querySelectorAll(
        'a[href^="#"]'
    );

    links.forEach(link => {

        link.addEventListener("click", e => {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#")
                return;

            const target =
                document.querySelector(targetId);

            if (!target)
                return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

    /* ==========================================
       FORM VALIDATION
    ========================================== */

    const forms =
        document.querySelectorAll("form");

    forms.forEach(form => {

        form.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();

                const checkbox =
                    form.querySelector(
                        'input[type="checkbox"]'
                    );

                if (!checkbox.checked) {

                    alert(
                        "Необходимо согласиться на обработку персональных данных."
                    );

                    return;

                }

                const name =
                    form.querySelector(
                        'input[type="text"]'
                    );

                const phone =
                    form.querySelector(
                        'input[type="tel"]'
                    );

                if (
                    name.value.trim() === ""
                ) {

                    alert(
                        "Введите имя."
                    );

                    name.focus();

                    return;

                }

                if (
                    phone.value.trim() === ""
                ) {

                    alert(
                        "Введите телефон."
                    );

                    phone.focus();

                    return;

                }

                alert(
                    "Спасибо! Ваша заявка успешно отправлена."
                );

                form.reset();

            }
        );

    });

    /* ==========================================
       PHONE MASK
    ========================================== */

    const phoneInputs =
        document.querySelectorAll(
            'input[type="tel"]'
        );

    phoneInputs.forEach(input => {

        input.addEventListener(
            "input",
            phoneMask
        );

    });

    function phoneMask(event) {

        let value =
            event.target.value.replace(/\D/g, "");

        let result = "+7 ";

        if (value.length > 1) {

            result += "(" +
                value.substring(1, 4);

        }

        if (value.length >= 5) {

            result += ") " +
                value.substring(4, 7);

        }

        if (value.length >= 8) {

            result += "-" +
                value.substring(7, 9);

        }

        if (value.length >= 10) {

            result += "-" +
                value.substring(9, 11);

        }

        event.target.value = result;

    }

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    const counters =
        document.querySelectorAll(
            ".counter"
        );

    counters.forEach(counter => {

        counter.innerText = "0";

        const updateCounter = () => {

            const target =
                +counter.getAttribute(
                    "data-target"
                );

            const current =
                +counter.innerText;

            const increment =
                target / 80;

            if (current < target) {

                counter.innerText =
                    Math.ceil(
                        current + increment
                    );

                setTimeout(
                    updateCounter,
                    20
                );

            } else {

                counter.innerText =
                    target;

            }

        };

        const counterObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                updateCounter();

                                counterObserver.unobserve(
                                    counter
                                );

                            }

                        }
                    );

                }

            );

        counterObserver.observe(
            counter
        );

    });

    /* ==========================================
       GALLERY HOVER EFFECT
    ========================================== */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-grid img"
        );

    galleryImages.forEach(img => {

        img.addEventListener(
            "mouseenter",
            () => {

                img.style.transform =
                    "scale(1.05)";

            }
        );

        img.addEventListener(
            "mouseleave",
            () => {

                img.style.transform =
                    "scale(1)";

            }
        );

    });

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const topButton =
        document.createElement("button");

    topButton.classList.add(
        "back-to-top"
    );

    topButton.innerHTML = "↑";

    document.body.appendChild(
        topButton
    );

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                topButton.classList.add(
                    "show"
                );

            } else {

                topButton.classList.remove(
                    "show"
                );

            }

        }
    );

    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

    /* ==========================================
       WHATSAPP BUTTON
    ========================================== */

    const whatsapp =
        document.createElement("a");

    whatsapp.href =
        "https://wa.me/79601660774";

    whatsapp.target =
        "_blank";

    whatsapp.classList.add(
        "whatsapp-btn"
    );

    whatsapp.innerHTML = "💬";

    document.body.appendChild(
        whatsapp
    );

    /* ==========================================
       PAGE LOADED
    ========================================== */

    console.log(
        "РодничОК успешно загружен"
    );

});
