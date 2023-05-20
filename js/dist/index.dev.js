"use strict";

var listItem = document.querySelectorAll(".list-item");
var startBtn = document.querySelector(".hero__button");
var readBtn = document.querySelector(".content__button");
var arrowMore = document.querySelector(".learn-more__arrow");
var loginBtn = document.getElementById("login-btn");
var popup = document.querySelector(".popup");
var popupLogin = document.querySelector(".popup__login");
var popupRegister = document.querySelector(".popup__register");
var fluencePartLogin = document.querySelector("#login-fluence");
var brandPartLogin = document.querySelector("#login-brands");
var fluencePartSign = document.querySelector("#sign-fluence");
var brandPartSign = document.querySelector("#sign-brands");
var heroContainer = document.getElementById("hero-container");
var hero = document.querySelector(".hero");
var journeyBtn = document.querySelector('.hero__button');
var journey = document.querySelector(".tell-us");
fluencePartLogin.addEventListener("click", function () {
  fluencePartLogin.classList.add("active");
  brandPartLogin.classList.remove("active");
});
brandPartLogin.addEventListener("click", function () {
  brandPartLogin.classList.add("active");
  fluencePartLogin.classList.remove("active");
});
fluencePartSign.addEventListener("click", function () {
  fluencePartSign.classList.add("active");
  brandPartSign.classList.remove("active");
});
brandPartSign.addEventListener("click", function () {
  brandPartSign.classList.add("active");
  fluencePartSign.classList.remove("active");
});
journeyBtn.addEventListener("click", function () {
  popup.style.transform = "translateX(0%)";
  journey.style.display = "flex";
  popupLogin.style.display = "none";
  popupRegister.style.display = "none";
  heroContainer.style.display = "none";
}); // ! LOGIN

loginBtn.onmouseenter = function () {
  loginBtn.style.transition = '2s';
  loginBtn.style.transform = "scale(1.1)";
};

loginBtn.onmouseleave = function () {
  loginBtn.style.transition = '2s';
  loginBtn.style.transform = "scale(1)";
};

loginBtn.addEventListener("click", function () {
  popup.style.transform = "translateX(0%)";
  heroContainer.style.display = "none";
  loginBtn.style.display = "none";
  hero.style.paddingTop = 600 + "px";
  journey.style.display = "none";
}); // ! ARROW

arrowMore.onmouseenter = function () {
  arrowMore.style.transition = '2s';
  arrowMore.style.transform = "scale(1.1)";
};

arrowMore.onmouseleave = function () {
  arrowMore.style.transition = '2s';
  arrowMore.style.transform = "scale(1)";
};

listItem.forEach(function (item) {
  item.onmouseenter = function () {
    item.style.color = "#9f41cc";
    item.style.transition = "1s";
  };

  item.onmouseleave = function () {
    item.style.color = "#FFFFFF";
    item.style.transition = "1s";
  };
});
startBtn.addEventListener("click", function () {});

startBtn.onmouseenter = function () {
  startBtn.style.border = "2px solid purple";
  startBtn.style.transition = "ease 2s";
};

startBtn.onmouseleave = function () {
  startBtn.style.border = "1px solid gray";
  startBtn.style.transition = "ease 2s";
};

readBtn.onmouseenter = function () {
  readBtn.style.border = "1px solid rgb(255 0 245)";
  readBtn.style.transition = "ease 2s";
};

readBtn.onmouseleave = function () {
  readBtn.style.border = "2px solid purple";
  readBtn.style.transition = "ease 2s";
};