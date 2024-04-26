let myBo = document.querySelector("body");
myBo.style.cssText = `
    height:1056px;
    background-color:#DDDDDD;
    margin:0;
    padding:0;
`;
let myH = document.createElement("nav");
myH.setAttribute("class", "my-Nav");
myBo.appendChild(myH);
let logo = document.createElement("h1");
logo.innerHTML = "Elzero";
logo.style.cssText = `
    color:green;
    font-size:50px;
`;
logo.setAttribute("Class", "my-Logo");
myH.appendChild(logo);
let myList = document.createElement("ul");
myList.setAttribute("class", "my-List")
myH.appendChild(myList);
let myElements = ["Home", "About", "Service", "Contact"];
for(let i = 0; i < myElements.length; i++){
    let myLilo = document.createElement("li");
    myLilo.style.cssText = `font-size:30px;`;
    myLilo.className = "my-Item";
    myLilo.textContent = myElements[i];
    myList.appendChild(myLilo);
}
myH.style.cssText = `
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:70px;
    background-color:white;
    margin-bottom:30px;
    padding:5px 20px;
`;
myList.style.cssText = "list-style:none;display:flex;justify-content:space-around; gap:0px 20px";
let myRoll = document.createElement("div");
myRoll.setAttribute("class", "my-Outer");
myBo.appendChild(myRoll);
for(let i = 0; i < 15; i++){
    let innerRoll = document.createElement("div");
    innerRoll.setAttribute("Class", "my-Inner");
    let myFirstP = document.createElement("p");
    myFirstP.textContent = i + 1;
    myFirstP.className = "my-P1";
    myFirstP.style.cssText = `
        font-size:40px;
        margin:5px
    `;
    innerRoll.appendChild(myFirstP);
    let mySecondP = document.createElement("p");
    mySecondP.className = "my-P2";
    mySecondP.textContent = "Product";
    mySecondP.style.cssText = `
        color:gold;
        font-size:30px;
    `;
    innerRoll.appendChild(mySecondP);
    innerRoll.style.cssText = `
            background-color:white;
            text-align:center;
    `;
    myRoll.appendChild(innerRoll);
}
myRoll.style.cssText = `
    margin-bottom:30px;
    padding:0 20px;
    display:grid;
    grid-template-rows:repeat(5, 150px);
    grid-template-columns:repeat(3, auto);
    gap:20px;
`;
let myFooter = document.createElement("footer");
myFooter.className = "my-Footer";
myFooter.style.cssText = `
font-size:30px;
    color:white;
    background-color:green;
    text-align:center;
    height:80px;
    padding:3px 0px;
`;
myBo.appendChild(myFooter);
let myP = document.createElement("p");
myP.textContent = "Copyright 2021";
myFooter.appendChild(myP);