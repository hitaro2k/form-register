"use strict"

const listItem = document.querySelectorAll(".list-item")
const startBtn = document.querySelector(".hero__button")
const readBtn = document.querySelector(".content__button")
const arrowMore = document.querySelector(".learn-more__arrow")
const loginBtn = document.getElementById("login-btn")
let popup = document.querySelector(".popup")
let popupLogin = document.querySelector(".popup__login")
let popupRegister = document.querySelector(".popup__register")
let fluencePartLogin = document.querySelector("#login-fluence")
let brandPartLogin = document.querySelector("#login-brands")
let fluencePartSign = document.querySelector("#sign-fluence")
let brandPartSign = document.querySelector("#sign-brands")
let heroContainer = document.getElementById("hero-container")
let hero = document.querySelector(".hero")
let journeyBtn = document.querySelector('.hero__button')
let journey = document.querySelector(".tell-us")

fluencePartLogin.addEventListener("click" , ()=>{
    fluencePartLogin.classList.add("active")
    brandPartLogin.classList.remove("active") 
})
brandPartLogin.addEventListener("click" , ()=>{
    brandPartLogin.classList.add("active")
    fluencePartLogin.classList.remove("active")
})

fluencePartSign.addEventListener("click" , ()=>{
    fluencePartSign.classList.add("active")
    brandPartSign.classList.remove("active") 
})
brandPartSign.addEventListener("click" , ()=>{
    brandPartSign.classList.add("active")
    fluencePartSign.classList.remove("active")
})

journeyBtn.addEventListener("click" ,()=>{
    popup.style.transform = "translateX(0%)"
    journey.style.display = "flex"
    popupLogin.style.display = "none"
    popupRegister.style.display = "none"
    heroContainer.style.display = "none"

})

// ! LOGIN
loginBtn.onmouseenter = ()=>{
    loginBtn.style.transition = '2s'
    loginBtn.style.transform  = "scale(1.1)"
}
loginBtn.onmouseleave = ()=>{
    loginBtn.style.transition = '2s'
    loginBtn.style.transform  = "scale(1)"
}
loginBtn.addEventListener("click" , ()=>{
    popup.style.transform = "translateX(0%)"
    heroContainer.style.display = "none"
    loginBtn.style.display = "none"
    hero.style.paddingTop = 600 + "px"
    journey.style.display = "none"
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


startBtn.onmouseenter = ()=>{
    startBtn.style.border = "2px solid purple" 
    startBtn.style.transition = "ease 2s"   
}
startBtn.onmouseleave = ()=>{
    startBtn.style.border = "1px solid gray" 
    startBtn.style.transition = "ease 2s"   
}

readBtn.onmouseenter = ()=>{
    readBtn.style.border = "1px solid rgb(255 0 245)"
    readBtn.style.transition = "ease 2s"   
}
readBtn.onmouseleave = ()=>{ 
    readBtn.style.border = "2px solid purple" 
    readBtn.style.transition = "ease 2s"   
}