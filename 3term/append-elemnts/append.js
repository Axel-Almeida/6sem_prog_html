function makeElements(){
    let container=document.querySelector("#container");
    
    let para=document.createElement("p")
    para.style.cssText="color:red;";
    para.textContent="Hey! I´m red.";
    container.appendChild(para);
    
    let h3=document.createElement("h3");
    h3.style.cssText="color:blue;";
    h3.textContent="Hey! I´m a blue h3.";
    container.appendChild(h3);

    let div=document.createElement("div");
    div.style.cssText="border-style:solid; border-color:black; background-color:pink;"
    container.appendChild(div);

    let h1=document.createElement("h1");
    h1.textContent="I´m in a div!"
    div.appendChild(h1);
    
    let p=document.createElement("p");
    p.textContent="Me too!";
    div.appendChild(p);
};