let x  = function(event){//addEventlistener is used in multiple hander to an event//
    console.log(event.target)
    console.log(event.type,event.clientx,event.clienty)
   // alert("hello world1")    
}

/*let y  = function(e){
    alert("hello world2")
    
}*/
btn.addEventListener('click',x)
/*btn.addEventListener('click',y)
    
let a = prompt("what is favorite need in one color?");
if(a == "2"){
    btn.removeEventListener('click',y)
}*/