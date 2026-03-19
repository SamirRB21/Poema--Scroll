gsap.registerPlugin(ScrollTrigger);

//Variable de la sección
//variable de la mascara 

let section = document.getElementById("poem-section");
let masks = document.querySelectorAll(".poem-mask");


let timeline; //variable vacía

timeline = gsap.timeline({
    scrollTrigger:{
        trigger: section,
        start: "top top",
        end: "+=2000", //Una vez que terine de sumar 2500 se termina el trigger
        scrub:1,
        pin: true,
        markers: false,
    }
});

timeline.to(masks,{
    xPercent:102,
    stagger: 0.6, //Delay para que no se muestren laas líneas
    ease: "none"

});