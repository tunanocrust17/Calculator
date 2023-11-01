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
let negativeBtn = document.querySelectorAll('.negative');
let percentageBtn = document.querySelectorAll('.percentage')



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

        console.log(userNums[0]);
        console.log(userNums[1]);
        console.log(operator[0]);
        console.log(result);

        if(tempNum === ""){
            operator.push("+");
            displayText.innerHTML = "+";
        } else if(tempNum.length >0){
            operator.push("+");
            userNums.push(tempNum);
            tempNum="";
        }
        
        if (userNums[0] !== undefined && userNums[1] !== undefined){
        // operator.push("+")  
        result = operate(userNums[0], operator[0], userNums[1]);
        displayText.innerHTML = result;
        userNums[0] = result;
        userNums.pop();
        operator.shift();
        tempNum="";
        } 
}); 
})

//minus method
minusBtn.forEach(item => {
    item.addEventListener('click', e => {
        console.log(userNums[0]);
        console.log(userNums[1]);
        console.log(operator[0]);
        console.log(result);

        if(tempNum === ""){
            operator.push("-");
            displayText.innerHTML = "-";
        } else if(tempNum.length >0){
            operator.push("-");
            userNums.push(tempNum);
            tempNum="";
        }
        
        if (userNums[0] !== undefined && userNums[1] !== undefined){  
        // operator.push("-")
        result = operate(userNums[0], operator[0], userNums[1]);
        displayText.innerHTML = result;
        userNums[0] = result;
        userNums.pop();
        operator.shift();
        tempNum="";
        } 
}); 
})

//multiply method
multiplyBtn.forEach(item => {
    item.addEventListener('click', e => {
        console.log(userNums[0]);
        console.log(userNums[1]);
        console.log(operator[0]);
        console.log(result);

        if(tempNum === ""){
            operator.push("*");
            displayText.innerHTML = "*";
        } else if(tempNum.length >0){
            operator.push("*");
            userNums.push(tempNum);
            tempNum="";
        }
        
        if (userNums[0] !== undefined && userNums[1] !== undefined){
        // operator.push("*")  
        result = operate(userNums[0], operator[0], userNums[1]);
        displayText.innerHTML = result;
        userNums[0] = result;
        userNums.pop();
        operator.shift();
        tempNum="";
        }
}); 
})

//divide method
divideBtn.forEach(item => {
    item.addEventListener('click', e => {
        console.log(userNums[0]);
        console.log(userNums[1]);
        console.log(operator[0]);
        console.log(result);

        if(tempNum === ""){
            operator.push("/");
            displayText.innerHTML = "/";
        } else if(tempNum.length >0){
            operator.push("/");
            userNums.push(tempNum);
            tempNum="";
        }
        
        if (userNums[0] !== undefined && userNums[1] !== undefined){
        // operator.push("/")  
        result = operate(userNums[0], operator[0], userNums[1]);
        displayText.innerHTML = result;
        userNums[0] = result;
        userNums.pop();
        operator.shift();
        tempNum="";
        }

}); 
})

//clear button method
clearBtn.forEach(item => {
    item.addEventListener('click', e => {
        userNums = [];
        operator = [];
        tempNum = "";
        displayText.innerHTML = 0;
    })
})

equalBtn.forEach(item => {
    item.addEventListener('click', e => {
        userNums.push(tempNum);
        
        if(operator.length > 1){
            operator.shift();
        }

        result = operate(userNums[0], operator[0], userNums[1]);
        displayText.innerHTML = result;
        userNums[0] = result;
        userNums.pop();
        operator.shift();
        tempNum="";

        console.log(userNums[0]);
        console.log(userNums[1]);
        console.log(operator[0]);
        console.log(result);

    });
})

//postive / negative button
negativeBtn.forEach(item => {
    item.addEventListener('click', ()=>{
        signSwitch = tempNum * -1;
        tempNum = signSwitch.toString();
        displayText.innerHTML = tempNum;
    })
})

//percentage button logic
percentageBtn.forEach(item =>{
    item.addEventListener('click', ()=>{
        numberPercentage = tempNum/100;
        tempNum = numberPercentage.toString();
        displayText.innerHTML = tempNum;
    })
})