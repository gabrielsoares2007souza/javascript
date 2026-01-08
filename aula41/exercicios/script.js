const btnAdd = document.querySelector('#btnAdd')
const res = document.querySelector('#res')
const rdNormal = document.querySelector('#inormal')
const rdMilitar = document.querySelector('#imilitar')
const blindagem = document.querySelector('#iblindagem')
const municao = document.querySelector('#imunicao')
class carros{
    constructor(nome , portas){
        this.nome = nome
        this.portas = portas
    }
}

class militar extends carros{
    constructor(nome ,portas ,blindagem , municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
    }
}

class normal extends carros{
    constructor(nome,portas){
        super(nome,portas)
    }
}



const opcTrocou = function(opc){
    if(opc == true){
        municao.setAttribute('disabled' , true)
        blindagem.setAttribute('disabled' , true)
    }else{
        municao.removeAttribute('disabled' , true)
        blindagem.removeAttribute('disabled' , true)
    }
}

opcTrocou(rdNormal.checked)

rdMilitar.addEventListener('click', ()=>{
    opcTrocou(rdNormal.checked)
})

rdNormal.addEventListener('click', ()=>{
    opcTrocou(rdNormal.checked)
})

btnAdd.addEventListener('click' , ()=>{
    const nome = document.querySelector('#inome')
    const portas = document.querySelector('#iportas')
    if(nome.value == '' || portas.value == ''){
        alert('Preencha os Campos Abaixo')
    }else{
        if(rdNormal.checked == true){
            const cN = new normal(nome.value , portas.value)
            const newBox = document.createElement('div')
            const ans = document.createElement('p')
            newBox.setAttribute('class' , 'confRes')
            ans.innerHTML = `Tipo: Normal <br> Nome: ${cN.nome} <br> Portas: ${cN.portas}`
            newBox.appendChild(ans)
            res.appendChild(newBox)
        }else{
            const cM = new militar(nome.value , portas.value , blindagem.value , municao.value)
            const newBox = document.createElement('div')
            const ans = document.createElement('p')
            newBox.setAttribute('class' , 'confRes')
            ans.innerHTML = `Tipo: Militar <br> Nome: ${cM.nome} <br> Portas: ${cM.portas} <br> Blindagem: ${cM.blindagem} <br> Munição: ${cM.municao}`
            newBox.appendChild(ans)
            res.appendChild(newBox)
        }

        nome.value = ''
        portas.value = ''
        blindagem.value = 0
        municao.value = 0
        nome.focus()
    }
})