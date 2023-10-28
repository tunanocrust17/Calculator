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
let plusBtn = document.querySelectorAll('.plus');
let minusBtn = document.querySelectorAll('.minus')
let multiplyBtn = document.querySelectorAll('.multiply');
let divideBtn = document.querySelectorAll('.divide');
let displayText = document.getElementById('display');
let clearBtn = document.querySelectorAll('.clear');
let equalBtn = document.querySelectorAll('.equals');



//Variables to hold user inputs

let userNums = [];
let operator = [];
let tempNum = "";
let result

numberBtn.forEach(item =>{
    item.addEventListener('click', e => {
        tempNum += e.target.innerHTML;
        displayText.innerHTML = tempNum;
        console.log(tempNum);
    })
})


// Method that will either push the plus operator to the operator array or if there are two items in the userNums array it will add them together when clicking the plus operator.
plusBtn.forEach(item => {
    item.addEventListener('click', e => {
        userNums.push(tempNum);
        operator.push("+");
        displayText.innerHTML = "+";
         
    if (userNums[0] !== undefined && userNums[1] !== undefined){  
        result = operate(userNums[0], operator[0], userNums[1]);
        displayText.innerHTML = result;
        userNums[0] = result;
        userNums.pop();
        operator.shift();
        tempNum="";
    } else if(tempNum.length >0){
        tempNum="";
    }
}); 
})

//minus method
minusBtn.forEach(item => {
    item.addEventListener('click', e => {
        userNums.push(tempNum);
        operator.push("-");
        displayText.innerHTML = "-";
        
    if (userNums[0] !== undefined && userNums[1] !== undefined){  
        result = operate(userNums[0], operator[0], userNums[1]);
        displayText.innerHTML = result;
        userNums[0] = result;
        userNums.pop();
        operator.shift();
        tempNum="";
    } else if(tempNum.length >0){
        tempNum="";
    }
}); 
})

//multiply method
multiplyBtn.forEach(item => {
    item.addEventListener('click', e => {
        userNums.push(tempNum);
        operator.push("*");
        displayText.innerHTML = "*";
        
    if (userNums[0] !== undefined && userNums[1] !== undefined){  
        result = operate(userNums[0], operator[0], userNums[1]);
        displayText.innerHTML = result;
        userNums[0] = result;
        userNums.pop();
        operator.shift();
        tempNum="";
    } else if(tempNum.length >0){
        tempNum="";
    }

}); 
})

//divide method
divideBtn.forEach(item => {
    item.addEventListener('click', e => {
        userNums.push(tempNum);
        operator.push("/");
        displayText.innerHTML = "/";
        
    if (userNums[0] !== undefined && userNums[1] !== undefined){  
        result = operate(userNums[0], operator[0], userNums[1]);
        displayText.innerHTML = result;
        userNums[0] = result;
        userNums.pop();
        operator.shift();
        tempNum="";
    } else if(tempNum.length >0){
        tempNum="";
    }
}); 
})

//clear button method
clearBtn.forEach(item => {
    item.addEventListener('click', e => {
        userNums = [];
        operator = [];
        tempNum = '';
        displayText.innerHTML = 0;
    })
})

equalBtn.forEach(item => {
    item.addEventListener('click', e => {
        userNums.push(tempNum);
        result = operate(userNums[0], operator[0], userNums[1]);
        displayText.innerHTML = result;
        userNums[0] = result;
        userNums.pop();
        operator.shift();
        tempNum="";
    })
})