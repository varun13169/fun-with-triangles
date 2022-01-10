const quizForm = document.querySelector('#form-quiz');
const quizScoreDisp = document.querySelector('#score-display');

const q1Correct = document.querySelector('#q1-90d');
const q2Correct = document.querySelector('#q2-right-angled');
const q3Correct = document.querySelector('#q3-one-right-angle');
const q4Correct = document.querySelector('#q4-is-rt-2');


const quizOnSubmitHandler = e => {
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


quizForm.addEventListener('submit', quizOnSubmitHandler)
