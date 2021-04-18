$(function () {
    document.querySelector(".nav-link[href='/about.html']").classList.add("active");
    document.querySelector("footer").style.backgroundColor = "transparent";
    document.querySelector("footer").style.color = "#FFE7A2";
    document.querySelectorAll("footer a").forEach(function(el) {
        el.style.color = "#FFE7A2"; 
        })
});
