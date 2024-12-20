const navbar = document.querySelector('.navbar__wrapper');
window.addEventListener('scroll', function () {
    if (document.body.clientWidth > 580) {
        if (window.scrollY > 150) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    }
})
if (document.body.clientWidth > 580) {
    if (window.scrollY > 150) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
}



// new
import {
    toggleActive,
    addTooltipBg
} from "./module.js";
window.toggleActive = toggleActive;
window.addTooltipBg = addTooltipBg;
addTooltipBg();

document.documentElement.addEventListener('click', function(e) {
    if (e.target.classList.contains('favorites')) {
        document.querySelector('#favorites').classList.remove('active');
        document.body.style.overflowY = null;
    }
    if (e.target.classList.contains('basket')) {
        document.querySelector('#basket').classList.remove('active');
        document.body.style.overflowY = null;
    }
    if (e.target.classList.contains('navbar__mobile_wrapper')) {
        document.querySelector('.navbar__mobile_wrapper').classList.remove('active');
        document.body.style.overflowY = null;
    }
})