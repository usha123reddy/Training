/* console.log(10);
console.log(120);
/* setTimeout(()=>{
    console.lOg(30);//console.log(30);
},5000) */
/* setInterval(()=>{
    document.writeln('usha');
},10000) */
/* setInterval(()=>{
    console.log(30);
},5000)
console.log(1301);
console.log(910); */
/* let p1=new Promise((resolve,rejected)=>{

}) */
//console.log(p1);
let p2=new Promise((resolve,rejected)=>{
    resolve("success");
})
//console.log(p2);
p2
.then((response)=>console.log(response))
.catch((error)=>console.log(error))
.finally(()=>console.log("finally for both"));

/* let p3=new Promise((resolve,rejected)=>{
    rejected("failed");
})
//console.log(p3);
p3.then(data=>console.log(data))
p3.catch(error=>console.log(error))
p3.finally(()=>console.log("finally")) */