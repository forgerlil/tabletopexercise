const activityBtn = document.querySelector(".nav-activity");
const dropdownTest = document.querySelector(".dropdown-activity");

const dropdownToggleOn = () => dropdownTest.style.visibility="visible";
const dropdownToggleOff = () => dropdownTest.style.visibility="hidden";

activityBtn.addEventListener('mouseover', dropdownToggleOn);
dropdownTest.addEventListener('mouseout', dropdownToggleOff);