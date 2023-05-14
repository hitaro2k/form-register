"use strict";

var listItem = document.querySelectorAll(".list-item");
var startBtn = document.querySelector(".hero__button");
var readBtn = document.querySelector(".content__button");
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