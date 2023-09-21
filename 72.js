let a  = [
    "initilizing Hack tool",
    "connecting to facebook",
    "connecting to server",
    "connected to sucessefully",
    "user name rohit",
    "Match not found",
    "Hack to sucessefully"
]
const sleep = (second)=>{
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(true)
    },second * 1000)
   })
    console.log(message)
}
const showHack = async(message)=>{
    await sleep(2)
    //console.log(message)
    text.innerHTML = text.innerHTML +  message  + "<br>"
}
(async()=> {// IIFE(intermidiate invoked function expression use in function )
       for(let i=0; i<a.length ;i++){
       await showHack((a[i]))
    }

})



