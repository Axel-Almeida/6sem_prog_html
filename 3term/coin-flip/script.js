let coin=document.querySelector(".button-coin");
let box=document.querySelector(".coin-box")
let result=document.querySelector(".coinResult")
let select=document.querySelector(".selectHT")
let join=document.querySelector(".lost-won")


function coinFlip(){
    x=(Math.floor(Math.random()*2)==0);
    if (x){
        console.log("heads");
        box.classList.remove("coin-head");
        box.classList.add("coin-tail");
        result.textContent="Heads"
        if(select.value=="Heads"){
            console.log("won");
            join.textContent="You´ve Wonned!";
        }else{
            console.log("lost");
            join.textContent="You´ve Lost!"
        }
    }else{
        console.log("tails");
        box.classList.remove("coin-tail");
        box.classList.add("coin-head");
        result.textContent="Tails"
        if(select.value=="Tails"){
            console.log("won");
            join.textContent="You´ve Wonned!";
        }else{
            console.log("lost");
            join.textContent="You´ve Lost!"
        }
    };
};

coin.addEventListener("click", function (){
    //console.log("yes");
    coinFlip();
})