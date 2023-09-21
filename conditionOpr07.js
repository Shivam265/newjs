let a = prompt("hey whats your age");
a  = Number.parseInt(a);//converting string to number
console.log(typeof a);
if(a<18){
    //alert("i am valid age");
}
else if (a>25){
    //alert("hello good choice")
  }
else if(a>18 && a>=10){
    //alert("you are driving after 18 age and age 18 before is not driving a car ")
}
else{
    //alert("you can not drive in above age 18")
}
console.log("you can", (a<18? "not drvive":"drive"))


