

// lesson 1
function nonesense(){
    console.log( "What the func is this nonsense?")
}

nonesense();

//  lesson 2
function fullName(fName, lName){
    console.log(`Hello ${fName} ${lName}, how u doin?`);
}
fullName(`Fred`, `Saint`);

// lesson 3
function multy(num1, num2){


    if (typeof num1 === 'number' && typeof num2 === 'number'){

        console.log(`you have typed ${num1} and ${num2}`);
        const result = num1 * num2;
        return result;

    } else {

        console.warn(`Please provide 2 numbers`);

    }
}
let multyResult = multy(5, 10);

console.log(multyResult);


// lesson 4

function addNumb(in1, in2, in3){
    let num1 = parseInt(in1);
    let num2 = parseInt(in2);
    let num3 = parseInt(in3);

    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number'){
        let result = num1 + num2 + num3;
        return result;
    } else {
        console.warn("Invalid argument types");
    }
}

const addResult = addNumb(21, 30, 5);
console.log(addResult);

// lesson 5
const headButton = document.querySelector(".heading").addEventListener("click", hButton);

function hButton(){
    document.title = "I've been updated";
}

// lesson 6
const titleButton = document.querySelector(".tite");

function newTitle(){
    document.title = "I've been updated";
   let updateTitle = document.querySelector("title");
    updateTitle.title = "helllll no";
}

titleButton.addEventListener("click") = newTitle;


