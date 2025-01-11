/* const users=["usha","sai","sreeja","ashwika"];
/* console.log(users);
console.log(users[0]);
for(let i=0;i<users.length;i++){
    console.log(users[i]);
} */
/* let x=users.map((users)=>{
    /* console.log(users); */
    /* return users; */
/* });
console.log(x);
let y=users.forEach((user)=>{
    return user;
})
console.log(y);  */
const users=["usha","sai","sreeja","ashwika"];
/* users.push("ram");//add last
console.log(users);
users.pop();//remove last
console.log(users);
users.unshift("krishna");//add first
console.log(users);

users.shift();//remove first
console.log(users);
users.unshift("krishna");
console.log(users.reverse()); */
let x=users.join()
console.log(x,typeof(x));

let frontend=["html","css","js","reactjs","angular","vue"];
let backend=["nodejs","expressjs","java","php","golang"];
let db=["Mongodb","mysql","oracle","couchdb","mariadb"];
let fullstack=frontend.concat(backend,db);
console.log(fullstack);