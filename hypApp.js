

const hypForm = document.querySelector('#form-calc-hype');
const hypotenus = document.querySelector('#hypotenuse');

const base = document.querySelector('#hyp-base');
const height = document.querySelector('#hyp-height');


const hypOnSubmitHandler = e => {
    e.preventDefault();

    const calHyp = Math.sqrt(Math.pow(parseInt(base.value), 2) + Math.pow(parseInt(height.value), 2));
    hypotenus.innerHTML = "The length of hypotenuse is " + calHyp;
}


hypForm.addEventListener('submit', hypOnSubmitHandler)
