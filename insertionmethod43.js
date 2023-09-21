let a = document.getElementsByTagName('div')[0]

//a.innerHTML = a.innerHTML + '<h1>hello world</h1>'
let div = document.createElement('div');// create method in many element innerhtml replace in js
div.innerHTML  = '<h1> hello ok bro</h1>';
//a.appendChild(div)
document.body.appendChild(div)
//a.append(div); //append attrebutemetod in add html ellement
//a.prepend(div); child element top display
//a.before(div) child element before element
//a.after(div) child element after element
//a.replaceWith(div); replace the child element