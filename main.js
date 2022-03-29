import "./styles.css";

const activityBtn = document.querySelector(".nav-activity");
const dropdownTest = document.querySelector(".dropdown-activity");

const dropdownToggleOn = () => dropdownTest.style.visibility="visible";
const dropdownToggleOff = () => dropdownTest.style.visibility="hidden";

activityBtn.addEventListener('mouseover', dropdownToggleOn);
activityBtn.addEventListener('mouseout', dropdownToggleOff);

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