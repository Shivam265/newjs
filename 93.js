class Password{
    constructor(){
        console.log("welcome to password generator")
        this.pass = ""
    }
    gereratePassword(len){
        let chars = "abcdefghijklmnopqrstuv"
        let numbers = "123456890"
        let special = "!@#%$&^*()"
        if(len<3){
            console.log("your password should atleast 3 charecter long")
        }
        else {
            let i = 0;
                this.pass += chars[Math.floor(Math.random() *chars.length)]
                this.pass += numbers[Math.floor(Math.random()*numbers.length)]
                this.pass += special[Math.floor(Math.random()*special.length)]
                i += 3
            }
            this.pass = this.pass.substr(0,len)
            return this.pass

        }
    }

    let p = new Password()
    console.log(p.gereratePassword(7))