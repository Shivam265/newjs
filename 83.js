/*class complex{
    constructor(real,imaginary){
        this.real = real
        this.imaginary = imaginary

    }
    add(num){
        let r = this.real + num.real
        let i = this.imaginary + num.imaginary        
        return new complex()

    }

}
let a = new complex(2,4)
let b = new complex(6,4)
console.log(a.add(b))
console.log(b.add(b))
console.log(`$(a.real) +  $(a.imaginary)`)*/
class human{
    constructor(name,favfood){
        this.name = name
        this.favfood = favfood
    }
}
Walk(){
    console.log(this.name +  "human is walking")
}
console.log("rohit")

           

class student extends human{

}