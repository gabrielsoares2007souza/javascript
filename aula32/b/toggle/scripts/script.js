let cursos = ['HTML' , 'CSS' , "PHP" , "MySQL" , 'JavaScript' , 'Java']
const caixa2 = document.querySelector('#caixa2')
const adicionarAntes = document.getElementById('adicionarAntes')
const adicionarDepois = document.getElementById('adicionarDepois')
const adicionar = document.getElementById('adicionar')
const remover = document.getElementById('remover')
const selecionado = document.getElementById('selecionado')
const texto = document.querySelector('#itext')
let c = 0

const retirarSelecao = ()=>{
    const cursosQueForamSelecionados = [...document.querySelectorAll('.selecionado')]

    cursosQueForamSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
    return cursosQueForamSelecionados[0]
}

const criarElement = (elemento)=>{
    const newElement = document.createElement('div')
    newElement.setAttribute('class' , 'cursos')
    newElement.innerHTML = elemento

    newElement.addEventListener('click' , (evt)=>{
        retirarSelecao()
        newElement.classList.toggle('selecionado')
    })
    return newElement
}
cursos.map((el)=>{

    const retornoCriacao = criarElement(el)
    

    caixa2.appendChild(retornoCriacao)
})


selecionado.addEventListener('click' , ()=>{
    const retornoParaAlert = retirarSelecao()
    if(retornoParaAlert!= undefined){
       alert(`Curso Selecionado: ${retornoParaAlert.innerHTML}`)
    }else{
        alert('selecione algum curso!!')
    }
})

remover.addEventListener("click" , ()=>{
    const retornoParaRemover = retirarSelecao()
    if( retornoParaRemover != undefined){
        const blocoEliminar = retornoParaRemover
        blocoEliminar.remove()
    }else{
        alert('Selecione algum curso!!')
    }
})

adicionarAntes.addEventListener('click', ()=>{
    if(texto.value != ''){
        const retornoDaCaixaTexto = criarElement(texto.value)

        const rad = retirarSelecao()
        const nodeSelecionado = rad
        if(nodeSelecionado != undefined){
            verificar(texto.value)
            if (c!=1){
                caixa2.insertBefore(retornoDaCaixaTexto , nodeSelecionado)
            }
        }else{
            alert('selecione algum curso')
        }
    }else{
        alert("Digite algo na caixa de texto para adicionar")
    }
})

adicionarDepois.addEventListener('click' , ()=>{
    if(texto.value != ''){
        const retornoDaCaixaTexto = criarElement(texto.value)

        const rad = retirarSelecao()
        const nodeSelecionado = rad
        if(nodeSelecionado != undefined){
            verificar(texto.value)
            if (c!=1){
                caixa2.insertBefore(retornoDaCaixaTexto , nodeSelecionado.nextSibling )
            }
        }else{
            alert('Selecione algum curso!')
        }
    }else{
        alert('Digite algo na caixa de texto para adicionar')
    }
})

adicionar.addEventListener('click' , ()=>{
    if(texto.value != ''){
        verificar(texto.value)
        if (c!=1){
            const retornoDaCaixaTexto = criarElement(texto.value)
            caixa2.appendChild(retornoDaCaixaTexto)
        }
    }else{
        alert('digite algo')
    }
    
})

const verificar = (cursoEscrito)=>{
    const selecao = [...document.querySelectorAll('.cursos')]

    const ret = selecao.find((el,i)=>{
       if(el.innerHTML.toUpperCase() == cursoEscrito.toUpperCase()){
        alert('Esse curso ja foi adicionado')
        c = 1
       }else{
        c = 2
       }
    })
    
}