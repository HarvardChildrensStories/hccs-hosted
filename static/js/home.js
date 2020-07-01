window.addEventListener('scroll', function (event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute('data-depth');
        movement = -(topDistance * depth);
        translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
    }
});

$(function () {
    document.querySelectorAll(".book-link").forEach(function(el) {
        el.addEventListener("click", function() {
            el.nextElementSibling.click();
        })
    });

    animateCSS("#arrow", "fadeInDown");

    

    $('.carousel').carousel({
        interval: 7000
    });
    document.getElementById("previous").addEventListener("click", function() {
        $('.carousel').carousel("prev");
    });
    document.getElementById("next").addEventListener("click", function() {
        $('.carousel').carousel("next");
    });

    document.querySelector(".nav-link[href='/']").classList.add("active");

});

// setInterval( function() {
//     console.log("hi");
//     animateCSS("#arrow", "flash");
   
//     setInterval( function() {
//         console.log("boop");
//         $('#arrow').addClass("animate__animated").addClass("animate__flash");
//     }, 2000);
//     console.log("beep");
//     $('#arrow').removeClass("animate__animated").removeClass("animate__flash");
// }, 2000);