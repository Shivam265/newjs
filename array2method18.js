/*array method2 in js
let num =  [3,4,56,7,8]// delete operator
let num2 = [11,223,344,56,67] 
//delete num[0]
//console.log(num.length)
let num1  = [5,6,78,90,8] // concat method in js
let num3 = num.concat(num1,num2)
console.log(num2)
console.log(num)
console.log(num3);*/
// array sort method in js
//let compare = (a,b)=>{ //Accending order
    //return a-b
//}
/*let compare = (a,b)=>{ //dccending order
    return 
    b-a
}

let num = [12,23,34,4,5,45]
num.sort(compare)
num.reverse() // Decending order 
console.log(num)*/
// Splice and slice method
//let num = [12,23,34,4,5,45]
//num.splice(1,2,54,55,56)// Splice method (1,2) original array delete element 
//console.log(num)
let num = [12,23,34,4,5,45] //Slice method
let newnum = num.slice(2,4)//slice method (2,4) original array print element
console.log(newnum)