import "styles.css";

const activityBtn = document.querySelector(".nav-activity");
const dropdownTest = document.querySelector(".dropdown-activity");

activityBtn.addEventListener('onmouseenter', function () {
    if (dropdownTest.style.visibility === 'hidden') {
      dropdownTest.style.visibility = 'visible'
    } else {
      dropdownTest.style.visibility = 'hidden'
    }
});