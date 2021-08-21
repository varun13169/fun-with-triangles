let quizForm = document.querySelector('#form-quiz');
let quizScoreDisp = document.querySelector('#score-display');

let q1Correct = document.querySelector('#q1-90d');
let q2Correct = document.querySelector('#q2-right-angled');
let q3Correct = document.querySelector('#q3-one-right-angle');
let q4Correct = document.querySelector('#q4-is-rt-2');

quizForm.addEventListener('submit', quizOnSubmitHandler)

function quizOnSubmitHandler(e) {
    e.preventDefault();
    
    let quizScore = 0;

    if(q1Correct.checked) {
        quizScore += 1;
    }
    if(q2Correct.checked) {
        quizScore += 1;
    }
    if(q3Correct.checked) {
        quizScore += 1;
    }
    if(q4Correct.checked) {
        quizScore += 1;
    }

    quizScoreDisp.innerHTML = "Your score is: " + quizScore;
}
