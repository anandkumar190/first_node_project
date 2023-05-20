
let a=10;
let b=0;


let dataOfB= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        b=20;
        resolve(20);
     },2000)
});

dataOfB.then((data)=>{
    b=data;
    
console.log(`sum id ${a+b}`)
});




