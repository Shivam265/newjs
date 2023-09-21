let key = prompt("enter key you want to set")
let value = prompt("enter value you want to set")
localStorage.setItem(key,value)//set item in store data and copy link in new tab refresh browser data is not remove data
console.log(`the value at $ {key} is ${localStorage.getItem(key)}`) //get item fetch key  value data
if (key=="red" || key == "blue"){// local storage key == "red" or blue in remove local storage 
    localStorage.removeItem(key)
}
if (key==0){
    localStorage.clear()//local storage ==0 in remove local storage

}
localStorage.key(0) //local storage key in store data and index form fetch data in key start(0)