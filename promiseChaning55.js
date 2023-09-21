/*let p1 = new promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 2 second")
        resolve(56)
    },2000)
})
p1.then((value)=>{
    console.log(value)
    let p2 = new promise((resolve,reject)=>{
        setTimeout(()=> {resolve("promise 2") },2000)
        })
        return p2k
}).then((value)=>{
    console.log("we are doing")
    return p2
}).then((value)=>{
    console.log("Now we are doing")
})*/
const loadScript = (src)=>{
    return new Promise((resolve, reject) =>{
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload = ()=>{
        resolve(1)
    }
    script.onerror = ()=>{reject(2)}
    })
}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("second script loaded")
}).catch((error)=>{
    console.log("resolved in error")
})
