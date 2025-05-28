let esc=document.querySelector("#esc");
let epa=document.querySelector("#epa");
let ero=document.querySelector("#ero");

let W=document.querySelector(".win");
let L=document.querySelector(".loss");
let D=document.querySelector(".draw");

let TR=document.querySelector(".text-result")
let CR=document.querySelector(".computer-result")

win=0
loss=0
draw=0

esc.addEventListener("click", function (){
    //console.log(esc);
    let choice=["✂️","📄","🪨"];
    //console.log("todo bien");
    let ram=choice[Math.floor(Math.random()*3)];

    if (esc.textContent==="✂️"&&ram==="✂️"){
        //console.log("here");
        draw+=1;
        //console.log(draw);
        D.textContent=draw;
        TR.textContent="It's a Draw!";
        CR.textContent=ram
    }else if(esc.textContent==="✂️"&&ram==="📄"){
        //console.log("here");
        win+=1;
        //console.log(draw);
        W.textContent=win;
        TR.textContent="You've Winned!";
        CR.textContent=ram
    }else if(esc.textContent==="✂️"&&ram==="🪨"){
        //console.log("here");
        loss+=1;
        //console.log(draw);
        L.textContent=loss;
        TR.textContent="You've Lost!";
        CR.textContent=ram
    }

});
epa.addEventListener("click", function (){
    //console.log(esc);
    let choice=["✂️","📄","🪨"];
    //console.log("todo bien");
    let ram=choice[Math.floor(Math.random()*3)];

    if (epa.textContent==="📄"&&ram==="📄"){
        //console.log("here");
        draw+=1;
        //console.log(draw);
        D.textContent=draw;
        TR.textContent="It's a Draw!";
        CR.textContent=ram
    }else if(epa.textContent==="📄"&&ram==="🪨"){
        //console.log("here");
        win+=1;
        //console.log(draw);
        W.textContent=win;
        TR.textContent="You've Winned!";
        CR.textContent=ram
    }else if(epa.textContent==="📄"&&ram==="✂️"){
        //console.log("here");
        loss+=1;
        //console.log(draw);
        L.textContent=loss;
        CR.textContent=ram
        TR.textContent="You've Lost!";
    }
});
ero.addEventListener("click", function (){
    //console.log(esc);
    let choice=["✂️","📄","🪨"];
    //console.log("todo bien");
    let ram=choice[Math.floor(Math.random()*3)];

    if (ero.textContent==="🪨"&&ram==="🪨"){
        //console.log("here");
        draw+=1;
        //console.log(draw);
        D.textContent=draw;
        TR.textContent="It's a Draw!";
        CR.textContent=ram
    }else if(ero.textContent==="🪨"&&ram==="✂️"){
        //console.log("here");
        win+=1;
        //console.log(draw);
        W.textContent=win;
        TR.textContent="You've Winned!";
        CR.textContent=ram
    }else if(ero.textContent==="🪨"&&ram==="📄"){
        //console.log("here");
        loss+=1;
        //console.log(draw);
        L.textContent=loss;
        TR.textContent="You've Lost!";
        CR.textContent=ram
    }
});
