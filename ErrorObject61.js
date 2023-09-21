try {
    let age  =  prompt("enter your agr")
    age =Number.parseInt(age)
    if(age>120)
    //console.log(rohit) error handling 
    //throw new ReferenceError("rohit is not boy")//reference error
    throw new ReferenceError("probably is age ")//throw cutom error
    
} catch (error) {
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
    
}