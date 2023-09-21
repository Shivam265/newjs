// Synchronous programming 
//let a = prompt("what is your name");
//let b = prompt("whats is your age");
//let c = prompt("what is your favurite color");
//console.log(a)
// Asynchronous programming
//console.log("start")
//setTimeout(function(){
    //console.log("hey i am godd ");
//},3000)
//console.log("End")
// Callbacks
function loadScript(src){
    var script = document.createElement("script")
    script.src = src;
    document.body.appendChild(script)      
}
loadScript("https://cdn.shivam@265.com")