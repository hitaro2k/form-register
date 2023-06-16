"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var listItem = document.querySelectorAll(".list-item");
  var readBtn = document.querySelector(".content__button");
  var arrowMore = document.querySelector(".learn-more__arrow");
  var loginBtn = document.querySelectorAll(".list-button");
  console.log(loginBtn);
  var popup = document.querySelector(".popup");
  var popupLogin = document.querySelector(".popup__login");
  var popupRegisterClose = document.querySelector(".close__button_register");
  var popupLoginClose = document.querySelector(".close__button_login");
  var tellUsClose = document.querySelector(".tell-us__close");
  var popupRegister = document.querySelector(".popup__register");
  var fluencePartLogin = document.querySelector("#login-fluence");
  var brandPartLogin = document.querySelector("#login-brands");
  var fluencePartSign = document.querySelector("#sign-fluence");
  var brandPartSign = document.querySelector("#sign-brands");
  var heroContainer = document.getElementById("hero-container");
  var hero = document.querySelector(".hero");
  var journeyBtn = document.querySelector('.hero__button');
  var journey = document.querySelector(".tell-us");
  var showReg = document.querySelector(".link");
  var linkLogin = document.querySelector(".link__login");
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.querySelector(".menu--burger-list");

  showReg.onclick = function () {
    popupLogin.style.display = "none";
    popupRegister.style.display = "flex";
  };

  linkLogin.onclick = function () {
    popupLogin.style.display = "flex";
    popupRegister.style.display = "none";
  };

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
  fluencePartLogin.addEventListener("click", function () {
    fluencePartLogin.classList.add("isactive");
    brandPartLogin.classList.remove("isactive");
  });
  brandPartLogin.addEventListener("click", function () {
    brandPartLogin.classList.add("isactive");
    fluencePartLogin.classList.remove("isactive");
  });
  fluencePartSign.addEventListener("click", function () {
    fluencePartSign.classList.add("isactive");
    brandPartSign.classList.remove("isactive");
  });
  brandPartSign.addEventListener("click", function () {
    brandPartSign.classList.add("isactive");
    fluencePartSign.classList.remove("isactive");
  });
  journeyBtn.addEventListener("click", function () {
    popup.style.transform = "translateX(0%)";
    journey.style.display = "flex";
    popupLogin.style.display = "none";
    popupRegister.style.display = "none";
    heroContainer.style.display = "none";
  }); // ! LOGIN

  loginBtn.forEach(function (item) {
    item.onmouseenter = function () {
      item.style.transition = '2s';
      item.style.transform = "scale(1.1)";
    };

    item.onmouseleave = function () {
      item.style.transition = '2s';
      item.style.transform = "scale(1)";
    };

    item.addEventListener("click", function () {
      popup.style.transform = "translateX(0%)";
      heroContainer.style.display = "none";
      item.style.display = "none";
      hero.style.paddingTop = 600 + "px";
      journey.style.display = "none";
      popupLogin.style.display = "flex";
      menuBtn.classList.remove('active-menu');
      menuBtn.classList.remove('active');
      menu.classList.remove('active-menu');
      menu.style.display = "none";
    });
    popupRegisterClose.addEventListener("click", function () {
      popup.style.transform = "translateX(-200%)";
      heroContainer.style.display = "flex";
      item.style.display = "flex";
      hero.style.paddingTop = 300 + "px";
      popupRegister.style.display = "none";
    });
    popupLoginClose.addEventListener("click", function () {
      popup.style.transform = "translateX(-200%)";
      heroContainer.style.display = "flex";
      item.style.display = "flex";
      hero.style.paddingTop = 300 + "px";
      popupLogin.style.display = "none";
    });
  });
  tellUsClose.addEventListener("click", function () {
    popup.style.transform = "translateX(-200%)";
    heroContainer.style.display = "flex";
    hero.style.paddingTop = 300 + "px";
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

  journeyBtn.onmouseenter = function () {
    journeyBtn.style.border = "2px solid purple";
    journeyBtn.style.transition = "ease 2s";
  };

  journeyBtn.onmouseleave = function () {
    journeyBtn.style.border = "1px solid gray";
    journeyBtn.style.transition = "ease 2s";
  };

  readBtn.onmouseenter = function () {
    readBtn.style.border = "1px solid rgb(255 0 245)";
    readBtn.style.transition = "ease 2s";
  };

  readBtn.onmouseleave = function () {
    readBtn.style.border = "2px solid purple";
    readBtn.style.transition = "ease 2s";
  };

  function burgerMenu() {
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('active-menu');
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active-menu');
      menu.style.display = "flex";
      popup.style.transform = "translateX(-200%)";
      popupRegister.style.display = "none";
      popupLogin.style.display = "none";
      loginBtn.forEach(function (item) {
        item.style.display = "flex";
      });

      if (menuBtn.classList.contains("active")) {
        menuBtn.classList.add("active");
      } else {
        menuBtn.classList.remove("fixed");
        menuBtn.classList.remove("left");
      }
    });
  }

  burgerMenu();
});