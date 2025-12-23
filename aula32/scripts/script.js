let cursos = ['HTML' , 'CSS' , "PHP" , "MySQL" , 'JavaScript' , 'Java']
const caixa2 = document.querySelector('#caixa2')
const adicionar = document.getElementById('adicionar')
const remover = document.getElementById('remover')
const selecionado = document.getElementById('selecionado')
const texto = document.querySelector('#itext')

const radio = ()=>{
    const inputsRadio = [...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado = inputsRadio.filter((elem)=>{
        return elem.checked
    })
    if(radioSelecionado[0] != undefined){
        const opçaoEscolhida = radioSelecionado[0]

        const cursoSelecionado = opçaoEscolhida.parentNode.previousSibling
        
        return cursoSelecionado
    }else{
        alert('Seleciona algum curso!')
    }
}

const criarElement = (elemento)=>{
    const newElement = document.createElement('div')
    newElement.setAttribute('class' , 'cursos')
    newElement.innerHTML = elemento

    //criando a caixa que irá portar o input radio
    const caixaInput = document.createElement('div')
    
    //criando o input:radio
    const rd = document.createElement('input')
    rd.setAttribute('type' , 'radio')
    rd.setAttribute('name' , 'marcador')
    
    
    caixaInput.appendChild(rd)
    newElement.appendChild(caixaInput)
    return newElement
}
cursos.map((el)=>{

    const retornoCriacao = criarElement(el)
    

    caixa2.appendChild(retornoCriacao)
})


selecionado.addEventListener('click' , ()=>{
    const retornoParaAlert = radio()
    alert(`Curso Selecionado: ${retornoParaAlert.textContent}`)
})

remover.addEventListener("click" , ()=>{
    const retornoParaRemover = radio()
    const blocoEliminar = retornoParaRemover.parentNode
    blocoEliminar.remove()
})

adicionar.addEventListener('click', ()=>{
    const retornoDaCaixaTexto = criarElement(texto.value)
    caixa2.appendChild(retornoDaCaixaTexto)
})