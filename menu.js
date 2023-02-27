$(function () {
    $(".header__logo, .header__nav-list a, .header__btn-login, .header__btn-signUp").on(
        "click",
        function (e) {
            e.Default();
        }
    );
    setInterval(() => {
        if (
            $(window).scrollTop() > 0 &&
            $(".header__top").hasClass("header__top--open") === false
        ) {
            $(".burger").addClass("burger--follow");
        } else {
            $(".burger").removeClass("burger--follow");
        }
    }, 0);
    $(".burger, .overlay, .header__top a").on("click", function (e) {
        e.preventDefault();
        $(".header__top").toggleClass("header__top--open");
        $(".overlay").toggleClass("overlay--show");
    });
});