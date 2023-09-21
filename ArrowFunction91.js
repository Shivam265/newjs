// Arrow function 
const sayHello = (name,greeting)=>console.log(greeting + " " + name)
const x = {
    name:"harry",
    role: "Full stack developer",
    exp: "Fresher",
    show: function(){
        //let that = this
         //console.log(this)
        setTimeout(function(){
            console.log(`the name is ${this.name}/n The role is ${this.name}`)

        },2000)

    }   

}
//sayHello("rohit")
console.log(x)
x.show()