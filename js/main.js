/* =========================================
   CLYRA INNOVATIONS — MAIN JAVASCRIPT
========================================= */


/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {

    let preloader =
    document.getElementById("preloader");

    preloader.style.opacity = "0";

    preloader.style.visibility = "hidden";

});


/* =========================
   CURSOR GLOW
========================= */

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";

});


/* =========================
   SCROLL REVEAL
========================= */

const reveals =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    reveals.forEach((section) => {

        let top =
        section.getBoundingClientRect().top;

        let windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            section.classList.add("active");

        }

    });

});

reveals.forEach((section) => {

    section.classList.add("reveal");

});


/* =========================
   OCULTAR HEADER
========================= */

let lastScroll = 0;

const header =
document.querySelector("header");

window.addEventListener("scroll", () => {

    let current =
    window.pageYOffset;

    if(current > lastScroll){

        header.style.transform =
        "translateY(-100%)";

    }else{

        header.style.transform =
        "translateY(0)";

    }

    lastScroll = current;

});


/* =========================
   BOTON MUSICA
========================= */

let musica =
document.getElementById("musica");

let icono =
document.querySelector(".music-btn i");

function toggleMusic(){

    if(musica.paused){

        musica.play();

        icono.className =
        "fa-solid fa-volume-high";

    }else{

        musica.pause();

        icono.className =
        "fa-solid fa-volume-xmark";

    }

}


/* =========================
   SCROLL CONTACTO
========================= */

function scrollToContacto(){

    document
    .getElementById("contacto")
    .scrollIntoView({

        behavior:"smooth"

    });

}