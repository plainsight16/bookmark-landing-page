const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const mobileMenu = document.querySelector(".mobileMenu");
const overlay = document.querySelector(".overlay");
const body = document.getElementsByTagName("body");

const dropdownBtn = document.querySelectorAll(".dropdown-btn");


const displayCloseIcon = () =>{
    menuIcon.classList.remove("block");
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    closeIcon.classList.add("block");
}

const displayMenuIcon = () =>{
    menuIcon.classList.remove("hidden");
    menuIcon.classList.add("block");
    closeIcon.classList.remove("block");
    closeIcon.classList.add("hidden");
}

const displayMenu = () =>{
    mobileMenu.classList.add("block");
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("animate-fadeIn");
    mobileMenu.classList.remove("animate-fadeOut");
    overlay.classList.add("block");
    overlay.classList.remove("hidden");
    overlay.classList.add("animate-fadeIn");
    overlay.classList.remove("animate-fadeOut");
}

const hideMenu = () =>{
    mobileMenu.classList.remove("block");
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("animate-fadeIn");
    mobileMenu.classList.add("animate-fadeOut");
    overlay.classList.remove("block");
    overlay.classList.add("hidden");
    overlay.classList.remove("animate-fadeIn");
    overlay.classList.add("animate-fadeOut");
}


const showMobileMenu =()=>{
   
    displayCloseIcon();
   
    displayMenu();
     
    body[0].classList.add("overflow-hidden");

}



const closeMobileMenu = () =>{

    displayMenuIcon();
   
    hideMenu();
    
    body[0].classList.remove("overflow-hidden");

}


menuIcon.addEventListener("click", showMobileMenu);

closeIcon.addEventListener("click", closeMobileMenu);



dropdownBtn.forEach(item =>{
    item.addEventListener("click",()=>{
        
        if(item.nextElementSibling.classList.contains("h-0")){
            item.nextElementSibling.classList.remove("h-0");
            item.nextElementSibling.classList.add("animate-heightGrow");
        }
        else{
            item.nextElementSibling.classList.remove("animate-heightGrow");
            item.nextElementSibling.classList.add("h-0");
        }
        
    })
})