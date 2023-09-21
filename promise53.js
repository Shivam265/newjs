let promise  = new Promise(function(resolve,reject){
    alert("hey welcome")
    resolve(55)
})
console.log("hey")
setTimeout(function(){
    console.log("hey in to 2 sec welcome")
},2000)
console.log("welcome")
console.log(Promise)
