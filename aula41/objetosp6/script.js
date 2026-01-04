const btnAdd = document.querySelector('#btnAdd')
const answer = document.querySelector('#answer')

const pessoas = {
    setPessoa: (nome , idade)=>{
        const element = document.createElement('div')
        element.setAttribute('class' , 'newElement')
        element.innerHTML = `Nome: ${nome} <br> Idade: ${idade}`
        answer.appendChild(element)
    }
}




btnAdd.addEventListener('click' , ()=>{
    const n = document.querySelector('#iname')
    const i = document.querySelector('#iage')

    pessoas.setPessoa(n.value , i.value)

    n.value = ""
    i.value = ""
    n.focus()
})