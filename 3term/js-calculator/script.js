let num1Input=document.querySelector("#num1");
console.log(num1.value);

let num2Input=document.querySelector("#num2");
console.log(num2.value);

let plusB=document.querySelector("#plus");
let minusB=document.querySelector("#minus");
let multB=document.querySelector("#mult");
let divdB=document.querySelector("#divd");

let resultDiv=document.querySelector("#result");
console.log(resultDiv.value);

function addition(x, y){
    console.log(x+y);
    return x+y;
}
function resting(x,y){
    console.log(x-y);
    return x-y;
}
function multiplying(x,y){
    console.log(x*y);
    return x*y;
}
function dividing(x,y){
    console.log(x/y);
    return x/y;
}

plusB.addEventListener("click", function (){
    //console.log(num1.value);
    let num1=parseFloat(num1Input.value);
    let num2=parseFloat(num2Input.value);
    resultDiv.textContent=addition(num1, num2);

})

minusB.addEventListener("click", function (){
    //console.log(num1.value);
    let num1=parseFloat(num1Input.value);
    let num2=parseFloat(num2Input.value);
    resultDiv.textContent=resting(num1, num2);

})

multB.addEventListener("click", function (){
    //console.log(num1.value);
    let num1=parseFloat(num1Input.value);
    let num2=parseFloat(num2Input.value);
    resultDiv.textContent=multiplying(num1, num2);

})

divdB.addEventListener("click", function (){
    //console.log(num1.value);
    let num1=parseFloat(num1Input.value);
    let num2=parseFloat(num2Input.value);
    resultDiv.textContent=dividing(num1, num2);

})
