let esc=document.querySelector("#esc");
let epa=document.querySelector("#epa");
let ero=document.querySelector("#ero");

let W=document.querySelector(".win");
let L=document.querySelector(".loss");
let D=document.querySelector(".draw");

let TR=document.querySelector(".text-result")

win=0
loss=0
draw=0

function gameStart(){
    console.log("todo bien")
}

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
    }else if(esc.textContent==="✂️"&&ram==="📄"){
        //console.log("here");
        win+=1;
        //console.log(draw);
        W.textContent=win;
        TR.textContent="You've Wined!";
    }else if(esc.textContent==="✂️"&&ram==="🪨"){
        //console.log("here");
        loss+=1;
        //console.log(draw);
        L.textContent=loss;
        TR.textContent="You've Lost!";
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
    }else if(epa.textContent==="📄"&&ram==="🪨"){
        //console.log("here");
        win+=1;
        //console.log(draw);
        W.textContent=win;
        TR.textContent="You've Wined!";
    }else if(epa.textContent==="📄"&&ram==="✂️"){
        //console.log("here");
        loss+=1;
        //console.log(draw);
        L.textContent=loss;
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
    }else if(ero.textContent==="🪨"&&ram==="✂️"){
        //console.log("here");
        win+=1;
        //console.log(draw);
        W.textContent=win;
        TR.textContent="You've Wined!";
    }else if(ero.textContent==="🪨"&&ram==="📄"){
        //console.log("here");
        loss+=1;
        //console.log(draw);
        L.textContent=loss;
        TR.textContent="You've Lost!";
    }
});
