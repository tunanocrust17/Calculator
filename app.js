//Math functions to be used on calculator

function operate(num1, operator, num2){
    if (operator === "+"){
        num1 + num2;
    } else if(operator === "-"){
        num1 - num2;
    } else if(operator === "*"){
        num1 * num2;
    } else if(operator === "/"){
        num1 / num2;
    }
}

//DOM variables
let numberBtn = document.querySelectorAll('.number');



//Variables to hold user inputs

let userNums = [];
let operator = [];
let tempNum = "";

numberBtn.forEach(item =>{
    item.addEventListener('click', e => {
        tempNum += e.target.innerHTML;
        console.log(tempNum);
    })
})