

let hypForm = document.querySelector('#form-calc-hype');
let hypotenus = document.querySelector('#hypotenuse');

let base = document.querySelector('#hyp-base');
let height = document.querySelector('#hyp-height');


function hypOnSubmitHandler(e) {
    e.preventDefault();

    let calHyp = Math.sqrt(Math.pow(parseInt(base.value), 2) + Math.pow(parseInt(height.value), 2));
    hypotenus.innerHTML = "The length of hypotenuse is " + calHyp;
}


hypForm.addEventListener('submit', hypOnSubmitHandler)