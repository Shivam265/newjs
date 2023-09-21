// alert prompt confirm in js 
alert("hello world")
let a = prompt("enter user value","444") // prompt() in js
a = Number.parseInt(a)
alert("you are entered user name" + (typeof a))
let write = confirm("hey u are welcome")
if (write){
    document.write(a)
}
else{
    document.write("False")
}


