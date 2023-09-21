// chapter 5 array in js
//Q1
/*let arr = [4,5,6,7,8,93,32]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(a)*/
//Q2
/*let arr = [4,5,6,7,8,93,32]
do{
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(a)
}while (a!=0);
console.log(arr)*/
//Q3
/*let arr = [4,5,6,7,8,93,32]
let a = arr.filter((a)=>{
    return a<32
})
console.log(a)*/
//Q4
/*let arr = [4,5,6,7,8,93,32]
let a = arr.map((x)=>{
    return x*x
})
console.log(a)*/
//Q5
let arr = [4,5,6,7,8,9]
let a = arr.reduce((x1,x2)=>{
    return x1 * x2
})
console.log(a)