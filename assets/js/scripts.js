const viewPlansBtn = document.querySelectorAll('.viewplan-btn')[0];
const registrationBtn = document.querySelectorAll('.registration-btn')[0];

viewPlansBtn.addEventListener('click', showSectionPlan);
registrationBtn.addEventListener('click', showRegister);

function showSectionPlan() {
    window.scrollTo(0, 1175)
};

function showRegister() {
    console.log('certo')
    window.location.href = "https://www.youtube.com/shorts/b6fZzvx6osw";
};