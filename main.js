import "styles.css";

const activityBtn = document.querySelector(".nav-activity");
const dropdownTest = document.querySelector(".dropdown-activity-hidden");

activityBtn.addEventListener("mouseover", function () { dropdownToggleOn });
activityBtn.addEventListener("mouseout", function () { dropdownToggleOff });

const dropdownToggleOn = () => dropdownTest.style.opacity="0"
const dropdownToggleOff = () => dropdownTest.style.opacity="1"

/*
activityBtn.forEach(function(img){
  img.addEventListener("mouseover", function(){ mOverImg(img) });
  img.addEventListener("mouseout", function(){ mOutImg(img) });
});

function mOverImg(img) {
  img.style.opacity="0";
}

function mOutImg(img) {
  img.style.opacity="1";
}

*/