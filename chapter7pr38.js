document.getElementsByTagName("nav")[0].firstElementChild.style.color= "red"
document.getElementsByTagName("nav")[1].secondElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "yellow"
Array.from(document.getElementsByTagName("li")).forEach((Element)=>{
    Element.style.background  = "green"
})