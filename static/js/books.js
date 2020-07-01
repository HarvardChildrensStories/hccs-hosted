$(function () {
    document.querySelectorAll(".book .back").forEach(element => {
        const options = ["#FFBC00", "#60CDEB", "#0090B8", "#C2CBFF", "#A9B6FF"];
        element.style.background = options[randint(0, options.length - 1)];
    });

    document.querySelectorAll(".book-link").forEach(function(el) {
        el.addEventListener("click", function() {
            el.nextElementSibling.click();
        })
    });

    document.querySelector(".nav-link[href$='/books.html']").classList.add("active");
});
