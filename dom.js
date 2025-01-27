//console.log(window);
//console.log(document);
/* let element =document.getElementById("demo");
element.innerText="G+";
console.log(element); */
/* let element =document.getElementById("test");
element.innerHtml="<h1>Header</h1>";
console.log(element); */
/* let element =document.getElementsByClassName("test");
console.log(element);
console.log(Array.isArray(element));
element[0].innerText="hello";
element[0].style.backgroundColor="tomato";
//!spread operator:it will take out each and every value from the orginal array and store it inside one more new array(pure array).
//?syntax:-[...variable];
let x=[...element];
console.log(x,Array.isArray(x));
x.map(element=>{
    element.style.backgroundColor="green";
}) */
/* let ele=document.getElementById("formdata");
console.log(ele,Array.isArray(ele));
[...ele].map(inp=>{
    console.log(inp,value);
}) */
/* let elem=document.querySelector("#mru");
    console.log(elem);
let ele=document.querySelectorAll(".test");
console.log(ele); */

/* let btn=document.querySelector("#btn"); */
//!addEventListener(:event",()=>{})
/*     btn.addEventListener("click",()=>{
    console.log("button clicked")
    alert("hi");
    btn.style.backgroundColor="green"
}); */
/* btn.addEventListener("dbclick",()=>{
    console.log("double clicked");


}) */
/* let divBlock=document.getElementById("divBlock");
divBlock.addEventListener("mouseover",()=>{
    document.style.backgroundColor="green";
    divBlock.style.backgroundColor="pink";
}) */
/* let bgColor=document.querySelectorAll(".bgColor");
console.log(bgColor);
[...bgColor].map((element)=>{
    element.addEventListener("mouseover",()=>{
       
        element.style.backgroundColor="element.innerText";
    })
})
 */
/* let ele=document.createElement("hi");
ele.innerText="why";
ele.setAttribute("id","demo");
//ele.id="demo";
//ele.removeAttribute("id");
console.log(ele);
let image=document.createElement("img");
image.src="https://th.bing.com/th/id/OIP.uHaqRdiMzWSMCR2LzsmhtQHaEZ?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
console.log(image);
document.body.appendChild(ele);
document.body.appendChild(image);
 */
/* let form=document.querySelector("form");
let username=document.getElementById("uname");
let mail=document.getElementById("umail");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    //console.log("form sub");
    let uName=username.value;
    console.log(uName);
    let uEmail=mail.value;
    console.log(uEmail);
    let userDetails={
        uName,uEmail
    }
    console.log(userDetails);
    localStorage.setItem("userData",JSON.stringify(userDetails));
}) */

/* let vd=document.createElement("video");
vd.setAttribute("src",".https://www.bing.com/videos/riverview/relatedvideo?&q=viedio+links+shots+below+20+seconds&&mid=53C3D78714AD4CA1487B53C3D78714AD4CA1487B&&FORM=VRDGAR");
vd.setAttribute("contols","controls");
    console.log(vd);

document.body.appendChild(vd); */
/* let h1=document.createElement("h1");
h1.setAttribute("id","demo");
h1.innerText="hello";
console.log(h1); */

let mainElel=document.createElement("div");
mainElel.setAttribute("id","mainBlock");
mainElel.style.border="2px solid red";
mainElel.style.width="550px";
mainElel.style.height="550px";

console.log(mainElel);

let topElel=document.createElement("div");
topElel.setAttribute("class","topElel");
//console.log(topElel);

let image=document.createElement("img");
image.src="https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwHaE7?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7";
image.style.width="550px";


let BottomElel=document.createElement("div");
BottomElel.setAttribute("class","BottomElel");
//console.log(BottomElel);

let h1=document.createElement("h1");
h1.innerText="nature";
h1.style.textAlign="center";

let btn=document.createElement("botton");
btn.innerText="viewmore";
btn.style.border="none";
btn.style.padding="20px";
btn.style.backgroundColor="dodgerblue";
btn.style.color="white";

BottomElel.appendChild(h1);
BottomElel.appendChild(btn);

topElel.appendChild(image)
mainElel.appendChild(topElel);
mainElel.appendChild(BottomElel);
document.body.appendChild(mainElel)


