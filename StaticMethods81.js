class Animal{
    constructor(name){
        this.name = Animal.capitalize(name)
    }
    walk(){
        alert("Animal" + this.name + "is walking")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}
j = new Animal("Jackjmaa")
j.walk()
console.log(j.capitalize("this")) //this does'nt work