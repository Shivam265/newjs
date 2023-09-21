//const { ContactSupportOutlined } = require("@material-ui/icons")

let a = {
    name:"rohit",
    language:"Javascript",
    city:"kanpur",

}
console.log(a)
let p  = {
    run:()=>{
        alert("run")
    }
}
p.__proto__ = {
    name: "rohit"
}

a.__proto__ = p
a.run()
Console.log(a.name)
