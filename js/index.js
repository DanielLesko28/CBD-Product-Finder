//Button declarations
const sleepButton = document.getElementById('sleep');
const imunityButton = document.getElementById('imunity');
const painButton = document.getElementById('pain');
const brainButton = document.getElementById('brain');

const backButton = document.getElementById('back-btn');

//SLEEP
sleepButton.addEventListener('click', sleepOption);
function sleepOption() {
    document.getElementById("question-container1").style.display = 'inline-flex';
    document.getElementById("question-container").style.display = 'none';
}

//IMUNITY
imunityButton.addEventListener('click', imunityOption);
function imunityOption() {
    document.getElementById("question-container2").style.display = 'inline-flex';
    document.getElementById("question-container").style.display = 'none';
}


//PAIN
painButton.addEventListener('click', painOption);
function painOption() {
    document.getElementById("question-container3").style.display = 'inline-flex';
    document.getElementById("question-container").style.display = 'none';
}

//BRAIN
brainButton.addEventListener('click', brainOption);
function brainOption() {
    document.getElementById("question-container4").style.display = 'inline-flex';
    document.getElementById("question-container").style.display = 'none';
}

//OnClick functions for buttons (It is just for the first layer of all 4 icons)
//Sleep buttons
function sleepWeight1() {
    document.getElementById("question-container1-1").style.display = 'inline-flex';
    document.getElementById("question-container1").style.display = 'none';
}

function sleepWeight2() {
    document.getElementById("question-container1-2").style.display = 'inline-flex';
    document.getElementById("question-container1").style.display = 'none';
}

//Imunity buttons
function imuneWeight1() {
    document.getElementById("question-container2-1").style.display = 'inline-flex';
    document.getElementById("question-container2").style.display = 'none';
}

function imuneWeight2() {
    document.getElementById("question-container2-2").style.display = 'inline-flex';
    document.getElementById("question-container2").style.display = 'none';
}

//Pain buttons
function painLevel1() {
    document.getElementById("question-container3-1").style.display = 'inline-flex';
    document.getElementById("question-container3").style.display = 'none';
}

function painLevel2() {
    document.getElementById("question-container3-2").style.display = 'inline-flex';
    document.getElementById("question-container3").style.display = 'none';
}

//Brain buttons
function brainWeight1() {
    document.getElementById("question-container4-1").style.display = 'inline-flex';
    document.getElementById("question-container4").style.display = 'none';
}

function brainWeight2() {
    document.getElementById("question-container4-2").style.display = 'inline-flex';
    document.getElementById("question-container4").style.display = 'none';
}