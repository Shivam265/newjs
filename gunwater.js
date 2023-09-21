let user = prompt("enter S, W or G")
let cpuI = math.floor(math.random() *2 )
let cpu = ["S","W","G"][cpuI]
const  match = (cpu,user)=>{
    if (cpu === user){
        return "No buddy "
    }
    else if(cpu === "S" && user=== "W"){
        return "cpu"
    }
    else if(cpu === "S" && user=== "G"){
        return "user"
    }
    else if(cpu === "G" && user=== "W"){
        return "user"
    }
    else if(cpu === "G" && user=== "S"){
        return "cpu"
    }
    else if(cpu === "W" && user=== "S"){
        return "user"
    }
    else if(cpu === "W" && user=== "G"){
        return "cpu"
    }


}
match(cpu,user)
console.log("The winner is ")
