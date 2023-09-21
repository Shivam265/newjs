let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response)=>{
    console.log(response.status)//browser response 
    console.log(response.ok)//true or false
    console.log(response.headers)//response headers
    return response.json()
    
}).then((value2)=>{
    console.log(value2)

})