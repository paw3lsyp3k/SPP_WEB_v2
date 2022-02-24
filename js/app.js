const items = document.querySelectorAll('.dropdown-item');
const title = document.querySelector(".dropdown-title");



items.forEach((e) => e.addEventListener("click", () => {
    if(e.classList.contains("active")){
        e.classList.remove("active")
    } else{
        items.forEach((e) => e.classList.remove("active"));
        e.classList.add("active");
    }   
}));

const contactSectionToShow = document.querySelector(".contact-wrapper");

function showContactButton() {
    contactSectionToShow.classList.add('active');
    
}