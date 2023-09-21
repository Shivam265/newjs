async function rohit(){
let delhiWeather = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("35 deg")
    },1000)//only one time resolve async
})

let bangloreWeather = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("30 deg")
    },4000)
})
//delhiWeather.then(alert)
//bangloreWeather.then(alert)
console.log("fetching delhi weather please wait.....")
let  delhiW = await delhiWeather
console.log("fetching delhi:"+delhiW)
console.log("fetching banglore weather please wait...")
let bangloreW = await bangloreWeather
console.log("fetching banglore weather:"+ bangloreW)
return[delhiW,bangloreW]
}
const mohit = ()=>{
    console.log("hey i am mohit and not working ")

}
const main1   = async()=>{
    console.log("welcome to weather control")

let a = await rohit()
let b = await mohit()
}
main1()

rohit()





