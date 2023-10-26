//Math functions to be used on calculator

function operate(num1, operator, num2){
    if (operator === "+"){
        return +num1 + +num2;
    } else if(operator === "-"){
        return num1 - num2;
    } else if(operator === "*"){
        return num1 * num2;
    } else if(operator === "/"){
        return num1 / num2;
    }
}

//DOM variables
let numberBtn = document.querySelectorAll('.number');
let operatorBtn = document.querySelectorAll('.operator');



//Variables to hold user inputs

let userNums = [];
let operator = [];
let tempNum = "";
let result

numberBtn.forEach(item =>{
    item.addEventListener('click', e => {
        tempNum += e.target.innerHTML;
        console.log(tempNum);
    })
})

operatorBtn.forEach(item => {
    item.addEventListener('click', e => {
        userNums.push(tempNum);
        operator.push("+");
        
    if (userNums[0] !== undefined && userNums[1] !== undefined){  
        result = operate(userNums[0], operator[0], userNums[1]);
        userNums[0] = result;
        userNums.pop();
        operator.pop();
        tempNum="";
    } else if(tempNum.length >0){
        tempNum="";
    }

    console.log(operator[0]);
    console.log(userNums[0]);
    console.log(userNums[1]);
    console.log(result);

});
 
})
