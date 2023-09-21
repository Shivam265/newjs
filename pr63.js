const loadscript = async (src) =>{
    return new Promise((resolve,reject) =>  {
    let script = document.createElement("script")
    script.src = src
    script.onload = () => {
        resolve(src+ "Done successe")
    }
    document.head.append(script)
})
}


//Problem 1 
/*let a =  await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
a.then((value)=>{
    console.log(value)
})*/


//Problem 2
/*const main2 = async () =>{
        console.log(new Date().getMilliseconds())
        let a =  await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
        console.log(a)
        console.log(new Date().getMilliseconds())
}
main2()*/

//Problem 3 
/*let p = ()=>{
        return new new Promise((resolve, reject) => {
                setTimeout(()=>{
                    reject(new error("pls this is not acceptable"))
    },3000)
})
}
let a = async()=>{
    try{
        let c = await p()
        console.log(c)

    }
    catch(err){
        console.log("this is error had been handled")

    }
    
}
a()*/

//Problem  number 4
let p1 = async () =>{
    return  new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(10)
        },2000)
        
    })
}
let p2 = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(20)
        },1000)
        
    })
}
let p3 = async () =>{
    return  new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(30)
        },3000)
        
    })
}
const run = async ()=>{
    console.time("run")
    let a1 = await(p1)
    console.log(a1)
    let a2 = await(p2)
    console.log(a2)
    let a3 = await(p3) 
    console.log(a1,a2,a3)
    console.timeEnd("end")
}
run()
