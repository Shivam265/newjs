//let a;
// following two lines will run successefully due to javascript hoisting 
console.log(a)
greet()
let greet = function greet (){
    console.log("Goog Morning")
}
var  a = 89;// Declaration hoisted in the top but initilization is not 
console.log(a)
