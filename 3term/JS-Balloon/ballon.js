let balloon=document.querySelector("p");
let size= 1;

document. addEventListener("keydown", function(event){
    if (size<=10){
        if (event.key==="ArrowUp"){
        console.log("Up");
        inflate();
        } else if(event.key==="ArrowDown"){
        console.log("Down")
        deflate();
        };
    }else{
        balloon.textContent="💥"
    }
    
});

function inflate(){
    size+=0.1;
    balloon.style.fontSize=size+"rem";
    console.log(size);
};

function deflate(){
    size-=0.1;
    balloon.style.fontSize=size+"rem";
    console.log(size);
}


