//const { TrainTwoTone } = require("@material-ui/icons")

class RailwayForm  {7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    //method in submit()
    Submit() {
        alert("this.name is form Submited" + this.trainno)

    }
    cancel() {
             alert( this.name +"this form is cancelled" + this.trainno)
    } 
    fill(givenname,trainno){ 
        this.name  = givenname
        this.trainno = trainno
    }             
}   
//object rohitform            
    let rohitForm  = new RailwayForm()
    rohitForm.fill("rohit",12184)
    rohitForm.fill("rohit")
    let sohanForm = new RailwayForm()
    sohanForm.fill("Sohan")
    rohitForm.Submit()
    sohanForm.Submit()
    sohanForm.cancel()
