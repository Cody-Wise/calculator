// Set consts

const addInput1El = document.getElementById('add-input-1');
const addInput2El = document.getElementById('add-input-2');
const addResultEl = document.getElementById('add-result');
const addButtonEl = document.getElementById('add-button');

//add listener and output

addButtonEl.addEventListener('click', () => {


    const firstValue = addInput1El.valueAsNumber;
    const secondValue = addInput2El.valueAsNumber;
    

    const sum = firstValue + secondValue;

    addResultEl.textContent = sum;
});

// Set consts

const subtractInput1El = document.getElementById('subtract-input-1');
const subtractInput2El = document.getElementById('subtract-input-2');
const subtractResultEl = document.getElementById('subtract-result');
const subtractButtonEl = document.getElementById('subtract-button');

//add listener and output

subtractButtonEl.addEventListener('click', () => {

    const firstValue = subtractInput1El.valueAsNumber;

    const secondValue = subtractInput2El.valueAsNumber;
    
    
    const sum = firstValue - secondValue;
    

    subtractResultEl.textContent = sum;
});

// Set consts

const multiplyInput1El = document.getElementById('multiply-input-1');
const multiplyInput2El = document.getElementById('multiply-input-2');
const multiplyResultEl = document.getElementById('multiply-result');
const multiplyButtonEl = document.getElementById('multiply-button');

//add listener and output

multiplyButtonEl.addEventListener('click', () => {


    const firstValue = multiplyInput1El.valueAsNumber;

    const secondValue = multiplyInput2El.valueAsNumber;
    
    
    const sum = firstValue * secondValue;
    

    multiplyResultEl.textContent = sum;
});

// Set consts

const divideInput1El = document.getElementById('divide-input-1');
const divideInput2El = document.getElementById('divide-input-2');
const divideResultEl = document.getElementById('divide-result');
const divideButtonEl = document.getElementById('divide-button');

//add listener and output

divideButtonEl.addEventListener('click', () => {


    
    const firstValue = divideInput1El.valueAsNumber;

    const secondValue = divideInput2El.valueAsNumber;
    

    const sum = firstValue / secondValue;
    

    divideResultEl.textContent = sum;
});