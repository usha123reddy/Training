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
let form=document.querySelector("form");
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
})
