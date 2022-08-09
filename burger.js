const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu");

burgerBtn.addEventListener("click" , function(e) {
    document.body.classList.toggle("_lock");
    burgerBtn.classList.toggle("_active");
    burgerMenu.classList.toggle("_active");
});
    
const burgerMenulink= document.querySelector(".burger-menu-link");

burgerMenulink.addEventListener("click" , ()=>{
    if(burgerBtn.classList.contains("_active")){
        document.body.classList.remove("_lock");
        burgerBtn.classList.remove("_active");
        burgerMenu.classList.remove("_active");
    }
})

const burgerMenulink1= document.querySelector(".one");

burgerMenulink1.addEventListener("click" , ()=>{
    if(burgerBtn.classList.contains("_active")){
        document.body.classList.remove("_lock");
        burgerBtn.classList.remove("_active");
        burgerMenu.classList.remove("_active");
    }
})
const burgerMenulink2= document.querySelector(".two");

burgerMenulink2.addEventListener("click" , ()=>{
    if(burgerBtn.classList.contains("_active")){
        document.body.classList.remove("_lock");
        burgerBtn.classList.remove("_active");
        burgerMenu.classList.remove("_active");
    }
})
const burgerMenulink3= document.querySelector(".fre");

burgerMenulink3.addEventListener("click" , ()=>{
    if(burgerBtn.classList.contains("_active")){
        document.body.classList.remove("_lock");
        burgerBtn.classList.remove("_active");
        burgerMenu.classList.remove("_active");
    }
})
