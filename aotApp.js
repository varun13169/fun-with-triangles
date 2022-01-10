

const aotForm = document.querySelector('#form-area-of-triangle');
const aotDisp = document.querySelector('#aot-disp');

const side1 = document.querySelector('#aot-side-1');
const side2 = document.querySelector('#aot-side-2');
const side3 = document.querySelector('#aot-side-3');

const aotOnSubmitHandler = e => {
    e.preventDefault();

    a = parseInt(side1.value);
    b = parseInt(side1.value);
    c = parseInt(side1.value);
    sp = (a+b+c) / 2;

    area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));

    aotDisp.innerHTML = "Area of Triangle is " + area;
}


aotForm.addEventListener('submit', aotOnSubmitHandler)
