
// document.querySelector("body").addEventListener("scroll", function () {
//     console.log("scrolled");
// })
const animItems = document.querySelectorAll(".anim-items");
const animItems_two = document.querySelectorAll(".sides-anim-items");

if (animItems.length > 0) {
    document.querySelector("body").addEventListener('scroll', animOnSCroll);

    function animOnSCroll() {

        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - (window.innerHeight / animStart);


            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("active");

            }
            // else {
            //     animItem.classList.remove("active");


            // }

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // const rect = el.getBoundingClientReact(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft
        }
    }
    animOnSCroll();
}

if (animItems_two.length > 0) {
    document.querySelector("body").addEventListener('scroll', animOnSCroll__two);

    function animOnSCroll__two() {

        for (let index = 0; index < animItems_two.length; index++) {
            const animItemTwo = animItems_two[index];
            const animItemHeightTwo = animItemTwo.offsetHeight;
            const animItemOffsetTwo = offset(animItemTwo).top;
            const animStartTwo = 4;


            let animItemPointTwo = window.innerHeight - animItemHeightTwo / animStartTwo;

            if (animItemHeightTwo > window.innerHeight) {
                animItemPointTwo = window.innerHeight - (window.innerHeight / animStartTwo);


            }

            if ((pageYOffset > animItemOffsetTwo - animItemPointTwo) && pageYOffset < (animItemOffsetTwo + animItemHeightTwo)) {
                animItemTwo.classList.add("active");

            }
            // else {
            //     animItem.classList.remove("active");


            // }

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // const rect = el.getBoundingClientReact(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft
        }
    }
    animOnSCroll__two();
}

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__link, .header__body_footer, .form__search').toggleClass('active');
        $('body').toggleClass('lock');
    })

});

jQuery(document).ready(function () {

    particlesJS.load('particles-js', '/css/particles/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

});
jQuery(document).ready(function () {

    particlesJS.load('particles-js1', '/css/particles/particles.json', function () {
        console.log('callback - particles.js config loaded11');
    });

});
$(document).ready(function () {
    $('.main__container').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3500,
    });
});
$(document).ready(function () {
    $('.mob__container').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3500,
    });
});

