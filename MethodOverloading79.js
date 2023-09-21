//const { emphasize } = require("@material-ui/core");

class Employee{
    login(){
        console.log(`employee has logged in`);
    }
    logout(){
        console.log(`employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`employee has request  ${leaves}leaves`)
    }

}
class Programmer extends Employee{
    requestCoffe(){
        console.log(`employee  has request ${x} coffees`)
    }
    requestLeaves(leaves) {
        super.requestLeaves(6)
        console.log("one extra is granted")
        //console.log(`Employee has requested  ${leaves+1} leaves(one extra)`)

    }
}
let e = new Employee()
e.login()
e.requestLeaves(5)
e.logout()