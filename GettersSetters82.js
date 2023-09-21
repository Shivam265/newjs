class Animal{
    constructor(){
        this._name = name
    }
    fly(){
        alert(" i am flying")
    }
    get name(){
        return this._name
    }

    set name(newName){
         this._name = newName
    }

}
class Rabbit extends Animal{
    eatCarrot(){
        console.log("Eating Carrot")
    }
}
let a = new Animal("Bruno")
a.fly()
console.log(a.name)
a.name = "jack"
console.log(a.name)
let c = 56
console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(a instanceof Animal)