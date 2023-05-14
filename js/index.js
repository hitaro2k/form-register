"use strict"

let listItem = document.querySelectorAll(".list-item")
let startBtn = document.querySelector(".hero__button")
let readBtn = document.querySelector(".content__button")

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

startBtn.addEventListener("click" , ()=>{
    
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