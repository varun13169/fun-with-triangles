

let angleForm = document.querySelector('#form-is-it-a-trangle');
let angleScoreDisp = document.querySelector('#itat-score-display');

let angle1 = document.querySelector('#itat-angle1');
let angle2 = document.querySelector('#itat-angle2');
let angle3 = document.querySelector('#itat-angle3');


function angleOnSubmitHandler(e) {
    e.preventDefault();

    let sumOfAngles = parseInt(angle1.value) + parseInt(angle2.value) + parseInt(angle3.value);
    if(sumOfAngles === 180) {
        angleScoreDisp.innerHTML = "Correct";
    }
    else {
        angleScoreDisp.innerHTML = "Incorrect";
    }
}


angleForm.addEventListener('submit', angleOnSubmitHandler)