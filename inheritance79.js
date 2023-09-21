class Animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + "is running")
    }
    shout(){
        console.log(this.name + "is running")
    }
}
class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + "is eating")
    }
    hide(){
        console.log(`${this.name} + is hiding`)
        
    }
}
    let ani  = new Animal("Bruno","white")
    let m = new Monkey("chhipt","orange")
    ani.shout()
    m.eatBanana()
    //ani.hide()


