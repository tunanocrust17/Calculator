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
let multiplyBtn = document.querySelectorAll('.multiply')



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


// Method that will either push the plus operator to the operator array or if there are two items in the userNums array it will add them together when clicking the plus operator.
plusBtn.forEach(item => {
    item.addEventListener('click', e => {
        userNums.push(tempNum);
        operator.push("+");
         
    if (userNums[0] !== undefined && userNums[1] !== undefined){  
        result = operate(userNums[0], operator[0], userNums[1]);
        userNums[0] = result;
        userNums.pop();
        operator.shift();
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

minusBtn.forEach(item => {
    item.addEventListener('click', e => {
        userNums.push(tempNum);
        operator.push("-");
        
    if (userNums[0] !== undefined && userNums[1] !== undefined){  
        result = operate(userNums[0], operator[0], userNums[1]);
        userNums[0] = result;
        userNums.pop();
        operator.shift();
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