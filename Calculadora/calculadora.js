const display = document.getElementById("display");

const numbers = document.querySelectorAll(".number");
const symbols = document.querySelectorAll(".symbol");

const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const negative = document.getElementById("negative");
const percentage = document.getElementById("percentage");

let current = "0";
let previous = "";
let operator = null;
let waiting = false;

function updateDisplay() {
    display.textContent = current;
}

// Números
numbers.forEach(button => {
    button.addEventListener("click", () => {

        if(waiting){
            current = button.textContent;
            waiting = false;
        }else{
            current = current === "0"
                ? button.textContent
                : current + button.textContent;
        }

        updateDisplay();

    });
});

// Punto decimal
dot.addEventListener("click", () => {

    if(waiting){
        current = "0.";
        waiting = false;
    }else if(!current.includes(".")){
        current += ".";
    }

    updateDisplay();

});

// Operadores
symbols.forEach(button=>{

    button.addEventListener("click",()=>{

        if(operator !== null && !waiting){
            calculate();
        }

        previous = current;
        operator = button.textContent;
        waiting = true;

    });

});

function calculate(){

    let a = parseFloat(previous);
    let b = parseFloat(current);
    let result = 0;

    switch(operator){

        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "x":
            result = a * b;
            break;

        case "÷":
            result = b !== 0 ? a / b : "Error";
            break;
    }

    current = result.toString();
    operator = null;
    previous = "";

    updateDisplay();

}

// Igual
equal.addEventListener("click",()=>{

    if(operator !== null){
        calculate();
    }

});

// AC
reset.addEventListener("click",()=>{

    current = "0";
    previous = "";
    operator = null;
    waiting = false;

    updateDisplay();

});

// +/-
negative.addEventListener("click",()=>{

    current = (parseFloat(current) * -1).toString();
    updateDisplay();

});

// %
percentage.addEventListener("click",()=>{

    current = (parseFloat(current)/100).toString();
    updateDisplay();

});

updateDisplay();