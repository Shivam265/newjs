class Employee{
    constructor(name){
        this.name = name
        console.log(`${name} employee constructor is here`);
    }
    logout(){
        console.log(`employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`employee has request  ${leaves}leaves`)
    }

}
class Programmer extends Employee{
    constructor(name){//constructor is automatically return value and overriding value in use super keyword 
        //this.name
        super(name)
        console.log(`this is a newly written constructor`)
    }
    //constructor(...args){--> if there is no constructor in the child class,this is created construtor automatically}
    //super (...args)
    //}
    requestCoffe(){
        console.log(`employee  has request ${x} coffees`)
    }
    requestLeaves(leaves) {
        super.requestLeaves(6)
        console.log("one extra is granted")
        //console.log(`Employee has requested  ${leaves+1} leaves(one extra)`)

    }
}
let e = new Programmer()
e.login()
e.requestLeaves(5)
e.logout()