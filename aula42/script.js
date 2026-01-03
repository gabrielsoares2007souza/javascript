class pessoa{
    constructor(nome ,idade){
        this.nome = nome
        this.idade=idade
    }

    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
}

const btnAdd = document.querySelector('#btnAdd')
const answer = document.querySelector('#answer')
let pessoas = []

function addPessoa(){
    answer.innerHTML=""
    pessoas.map((p)=>{
        const newElement = document.createElement('div')
        newElement.setAttribute('class' , 'newElement')
        newElement.innerHTML = `Nome: ${p.getNome()} <br> Idade: ${p.getIdade()}`

        answer.appendChild(newElement)
    })
}

btnAdd.addEventListener('click',()=>{
    const nome = document.querySelector('#iname')
    const idade = document.querySelector('#iage')

    const p = new pessoa(nome.value,idade.value)

    pessoas.push(p)
    addPessoa()

    nome.value = ""
    idade.value = ""
})