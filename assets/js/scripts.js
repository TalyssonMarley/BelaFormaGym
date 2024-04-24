const viewPlansBtn = document.querySelectorAll('.viewplan-btn');
const registrationBtn = document.querySelectorAll('.registration-btn');
const menuBtn = document.getElementById('menu-btn-container');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', clickMenu);

viewPlansBtn.forEach(planViewer => {
    planViewer.addEventListener('click', showSectionPlan);
});

registrationBtn.forEach(registerViewer => {
    registerViewer.addEventListener('click', showRegister);
});

function showSectionPlan() {
    window.scrollTo(0, 1175)
};

function showRegister() {
    window.location.href = "https://www.youtube.com/shorts/b6fZzvx6osw";
};

function clickMenu() {
    if(menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block'
    }
};