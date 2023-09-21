//Cookie which is used to stored data key value pair
console.log(document.cookie)//stored data
document.cookie = "name=Rohit647567876"
document.cookie = "name1=Sohit647567877"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie  = `${encodeURIcomponent(key)} = ${encodeURIcomponent(value)}`
console.log(document.cookie)
