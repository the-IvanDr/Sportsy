$(document).ready(function () {
    $(".hamburger").on("click", function (event) {
        $(".hamburger").toggleClass("hamburger_active");
        $(".header__nav").toggleClass("header__nav_active");
    });
});