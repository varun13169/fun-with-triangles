

const angleForm = document.querySelector('#form-is-it-a-trangle');
const angleScoreDisp = document.querySelector('#itat-score-display');

const angle1 = document.querySelector('#itat-angle1');
const angle2 = document.querySelector('#itat-angle2');
const angle3 = document.querySelector('#itat-angle3');

const angleOnSubmitHandler = e => {
    e.preventDefault();

    const sumOfAngles = parseInt(angle1.value) + parseInt(angle2.value) + parseInt(angle3.value);
    if(sumOfAngles === 180) {
        angleScoreDisp.innerHTML = "Correct";
    }
    else {
        angleScoreDisp.innerHTML = "Incorrect";
    }
}

angleForm.addEventListener('submit', angleOnSubmitHandler)
