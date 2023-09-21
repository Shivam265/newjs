/*let url = "https://kontests.net/v1/all"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((contests)=>{
    console.log(contests)
    ihtml += ""
    for(item in contests ){
        console.log(contests[item])
        ihtml += '
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${contests[item].name} </h5>
                <p class="card-text" 
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    }

})
cardContainer.innerHTML = "allcards"*/
let b  = localStorage.getItem("note")
alert("hello freinds is as well as "+ b)
/*let a = prompt("Enter your note")//setItem in store data   
localStorage.setItem("note",a)*/


