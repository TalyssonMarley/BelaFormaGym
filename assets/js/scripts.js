const viewPlansBtn = document.querySelectorAll('.viewplan-btn');
const registrationBtn = document.querySelectorAll('.registration-btn');

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