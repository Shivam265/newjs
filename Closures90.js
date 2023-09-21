// closure is a function in environment6
/*message ="Good global"
function hello(){
let message = "Good Morning"
console.log('hello'+ message) 
let c = function hello() {
    console.log("hello i am c0" + message)
}
 return c   
}
c  = hello()
c()*/
/*function init() {
  var name = "mozila"; // name is a locsl variable created by init
  function displayName() {
    // fisplayname() is the inner function a closure
    console.log(name); //use variable declared  in the parent function
  }
  name = "rohit";
  return displayName;
}*/function returnFunc(){ //closure which is used in function in lexical function inside 

}

const x = () => {
  let a = 1;
  console.log(a)
  const y = () => {
    let a  = 2;
    console.log(a)
    const z = () => {
      let a = 3;
      console.log(a)
    };
    z()
}
a = 999
y()
}
return x

let a = returnFunc()
a()