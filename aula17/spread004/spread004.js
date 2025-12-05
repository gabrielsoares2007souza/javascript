// HTML colections e Arrays

const obj1 = document.getElementsByTagName("div")
const obj2 = [...obj1]
console.log(obj1)
console.log(obj2)

//forEach é uma propriedade nova do js para arrays
obj2.forEach( element =>{
    element.style.color = 'red'
})
