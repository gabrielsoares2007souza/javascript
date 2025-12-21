const caixa1 = document.getElementById('caixa1')

const cursos = ["HTML" , "CSS" , "JAVASCRIPT" , "PHP" , "REACT" , "MySQL"]


cursos.map((el)=>{
    const newElement = document.createElement('div')
    newElement.innerHTML = el
    newElement.setAttribute('class' , 'cursos')
    caixa1.appendChild(newElement)
})
