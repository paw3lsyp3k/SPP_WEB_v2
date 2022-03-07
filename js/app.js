/* Showing answers in about coop section  */

const items = document.querySelectorAll('.dropdown-item');

items.forEach((e) => e.addEventListener("click", () => {
    if(e.classList.contains("active")){
        e.classList.remove("active")
    } else{
        items.forEach((e) => e.classList.remove("active"));
        e.classList.add("active");
    }   
}));

/* Showing contact section at offer page */

const contactSectionToShow = document.querySelector(".contact-wrapper");

function showContactButton() {
    contactSectionToShow.classList.add('active');
    
}

/* Animated go up button  */

var tl = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

tl.from("#goUp-button", 1, { right: "-9vmax" });

const scene = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: "onLeave",
  duration: "10%",
})
  .setTween(tl)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
}