let p1 = new Promise((resolve,reject)=>{
    console.log("pending")
    setTimeout(() =>{
        alert("I am promise an resolve")
        //resolved(true)
        reject(new Error(" i am an error"))
    }, 3000);
})  
let p2 = new Promise((resolve,reject)=>{
    console.log("pending")
    setTimeout(() =>{
        alert("I am promise rejected")
        //resolved(true)
        reject(new Error(" i am an error"))
    }, 3000);
}) 
console.log(p1,p2) 
// To get the value 
p1.then((value)=>{
    console.log(value)
})
// To check the error 
p2.catch((Error)=>{
    console.log("sub error occur p2")
},(error)=>{
    console.log(error)
},)
/*p2.then((value)=>{`
    console.log(value)
})*/                   