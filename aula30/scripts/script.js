const caixa = document.getElementById('caixa1')
const cursos = ['HTML' , 'CSS' , "JavaScript" , "PHP" , 'Java' , "MySQL"]

const addTrash = (elem)=>{
    const trash = document.createElement('div')
    trash.setAttribute('id' , 'trash')
    trash.innerHTML = '&#x1F5D1'
    elem.appendChild(trash)
    trash.addEventListener('click' , (evt)=>{
        caixa.removeChild(evt.target.parentElement)
    })
}

    cursos.map((el)=>{
    const newElement = document.createElement('div')
    newElement.setAttribute('class' , 'cursos')
    newElement.innerHTML = el
    addTrash(newElement)
    caixa.appendChild(newElement)
})

