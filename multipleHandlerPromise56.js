let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("hey i am not  resolved")
        resolve(1)
    },5000)
})
p1.then(()=>{
    console.log("hey rohit")
    return new Promise((resolve, reject)=>{
    resolve(4)
    })
})
p1.then(()=>{
    console.log("congralatuation this promise is resolved")
})