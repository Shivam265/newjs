let arr = [3,6,7,8,9,11,34,5,6]
//let [a,b,c,d,e,f,g,h,...rest] = arr //destructering
//let a = arr[0]
//let b = arr[1]
//console.log(a,b,c,d,e,f,g,h,...rest) = arr
//console.log(a, , , , , , , , ...rest)
//let [a, b, , ...rest] = arr //dessturing are used in 3,6 value in print
//console.log(a,b,rest)
let {a,b} = {a:1 , b:8}
console.log(a,b)
//spread operator
let arr1  = [3,5,8]
let obj1 = {...arr1}
console.log(obj1)
function sum(v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(arr1))
 let obj2 = {
    name:"rohot0",
    address:"cbr",
    company:"Google",
    role:"full stack deveer"
 }
 console.log({obj2,company:"Facebook",role:"Software Engineer"})
 console.log({company:"Facebook",role:"Software Engineer",obj2})