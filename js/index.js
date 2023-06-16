"use strict"
document.addEventListener("DOMContentLoaded" , function(){
const listItem = document.querySelectorAll(".list-item")
const readBtn = document.querySelector(".content__button")
const arrowMore = document.querySelector(".learn-more__arrow")
const loginBtn = document.querySelectorAll(".list-button")
console.log(loginBtn)
const popup = document.querySelector(".popup")
const popupLogin = document.querySelector(".popup__login")
const popupRegisterClose = document.querySelector(".close__button_register")
const popupLoginClose = document.querySelector(".close__button_login")
const tellUsClose = document.querySelector(".tell-us__close")
const popupRegister = document.querySelector(".popup__register")
const fluencePartLogin = document.querySelector("#login-fluence")
const brandPartLogin = document.querySelector("#login-brands")
const fluencePartSign = document.querySelector("#sign-fluence")
const brandPartSign = document.querySelector("#sign-brands")
const heroContainer = document.getElementById("hero-container")
const hero = document.querySelector(".hero")
const journeyBtn = document.querySelector('.hero__button')
const journey = document.querySelector(".tell-us")
const showReg = document.querySelector(".link")
const linkLogin = document.querySelector(".link__login")

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector(".menu--burger-list");

showReg.onclick = ()=>{
    popupLogin.style.display = "none"
    popupRegister.style.display = "flex"
}
linkLogin.onclick = () =>{
    popupLogin.style.display = "flex"
    popupRegister.style.display = "none"
}
window.addEventListener("load", function () {
    var images = [];
    document.querySelectorAll("img").forEach(function (img) {
      images.push(img.src);
    });

    var imagesLoaded = 0;
    for (var i = 0; i < images.length; i++) {
      var img = new Image();
      img.src = images[i];
      img.onload = function () {
        imagesLoaded++;
        if (imagesLoaded == images.length) {
          document.querySelector("#preloader").style.display = "none";
        }
      };
    }
});

fluencePartLogin.addEventListener("click" , ()=>{
    fluencePartLogin.classList.add("isactive")
    brandPartLogin.classList.remove("isactive") 
})
brandPartLogin.addEventListener("click" , ()=>{
    brandPartLogin.classList.add("isactive")
    fluencePartLogin.classList.remove("isactive")
})

fluencePartSign.addEventListener("click" , ()=>{
    fluencePartSign.classList.add("isactive")
    brandPartSign.classList.remove("isactive") 
})
brandPartSign.addEventListener("click" , ()=>{
    brandPartSign.classList.add("isactive")
    fluencePartSign.classList.remove("isactive")
})

journeyBtn.addEventListener("click" ,()=>{
    popup.style.transform = "translateX(0%)"
    journey.style.display = "flex"
    popupLogin.style.display = "none"
    popupRegister.style.display = "none"
    heroContainer.style.display = "none"

})

// ! LOGIN

loginBtn.forEach(item =>{
    
    item.onmouseenter = ()=>{
        item.style.transition = '2s'
        item.style.transform  = "scale(1.1)"
    }
    item.onmouseleave = ()=>{
        item.style.transition = '2s'
        item.style.transform  = "scale(1)"
    }
    item.addEventListener("click" , ()=>{
        popup.style.transform = "translateX(0%)"
        heroContainer.style.display = "none"
        item.style.display = "none"
        hero.style.paddingTop = 600 + "px"
        journey.style.display = "none"
        popupLogin.style.display = "flex"
        menuBtn.classList.remove('active-menu');
        menuBtn.classList.remove('active');
        menu.classList.remove('active-menu');
        menu.style.display = "none"
    })
    
    popupRegisterClose.addEventListener("click" , () =>{
        popup.style.transform = "translateX(-200%)"
        heroContainer.style.display = "flex"
        item.style.display = "flex"
        hero.style.paddingTop = 300 + "px"
        popupRegister.style.display = "none"
    })
    popupLoginClose.addEventListener("click" , () =>{
        popup.style.transform = "translateX(-200%)"
        heroContainer.style.display = "flex"
        item.style.display = "flex"
        hero.style.paddingTop = 300 + "px"
        popupLogin.style.display = "none"
    })
  
})

tellUsClose.addEventListener("click" , ()=>{
    popup.style.transform = "translateX(-200%)"
    heroContainer.style.display = "flex"
    hero.style.paddingTop = 300 + "px"
})
// ! ARROW
arrowMore.onmouseenter = ()=>{
    arrowMore.style.transition = '2s'
    arrowMore.style.transform  = "scale(1.1)"
}
arrowMore.onmouseleave = ()=>{
    arrowMore.style.transition = '2s'
    arrowMore.style.transform  = "scale(1)"
}
listItem.forEach(item =>{
    item.onmouseenter = () =>{
        item.style.color = "#9f41cc"
        item.style.transition = "1s"
    }
    item.onmouseleave = () =>{
        item.style.color = "#FFFFFF"
        item.style.transition = "1s"
    }
    
})


journeyBtn.onmouseenter = ()=>{
    journeyBtn.style.border = "2px solid purple" 
    journeyBtn.style.transition = "ease 2s"   
}
journeyBtn.onmouseleave = ()=>{
    journeyBtn.style.border = "1px solid gray" 
    journeyBtn.style.transition = "ease 2s"   
}

readBtn.onmouseenter = ()=>{
    readBtn.style.border = "1px solid rgb(255 0 245)"
    readBtn.style.transition = "ease 2s"   
}
readBtn.onmouseleave = ()=>{ 
    readBtn.style.border = "2px solid purple" 
    readBtn.style.transition = "ease 2s"   
}
function burgerMenu() {
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active-menu');
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active-menu');
        menu.style.display = "flex"
        popup.style.transform = "translateX(-200%)"
        popupRegister.style.display = "none"
        popupLogin.style.display = "none"
        loginBtn.forEach(item =>{
            item.style.display = "flex"
        })
        if (menuBtn.classList.contains("active")) {
            menuBtn.classList.add("active")
        } else {
            menuBtn.classList.remove("fixed")
            menuBtn.classList.remove("left")
        }
    })
}
burgerMenu()
})