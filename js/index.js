"use strict";
window.addEventListener("DOMContentLoaded", () => {
    // navbar toggler with responsive
    const navbarTogglerBtn = document.querySelector(".navbar-toggler");
    const overlay = document.querySelector(".overlay");
    const navbarCollapse = document.querySelector(".collapse");
    const scrollTop = document.querySelector(".scroll-top");

    navbarTogglerBtn.addEventListener("click", () => {
        navbarCollapse.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        navbarCollapse.classList.remove("active");
    });

    // slider
    $(".owl-carousel.hotels").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4500,
        dots: true,
    });

    $(".owl-carousel.launch").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 3,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            992: {
                items: 2,
                nav: false,
            },
        },
    });

    // navbar scroller
    $(document).ready(function () {
        $(window).scroll(function () {
            if (this.scrollY > 20) {
                $(".navbar").addClass("sticky");
                scrollTop.style.display = "flex";
            } else {
                $(".navbar").removeClass("sticky");
                scrollTop.style.display = "none";
            }
        });
    });
});
