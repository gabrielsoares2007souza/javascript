const add = document.querySelector("#adicionar")
const number = document.querySelector("#icont")
const lista = document.querySelector("#lista")
const limpar = document.querySelector("#limpar")
const check = document.querySelector("#check")
const res = document.querySelector('#res')
let n = []

//function de adicionar os options do select

function validacao(s){
    if(Number(s)<=0 || Number(s)>100){
        return false
    }else{
        return true
    }
}

function nalista(s,vetor){
    if(vetor.indexOf(Number(s)) == -1){
        return true
    }else{
        return false
    }
}
add.addEventListener('click', () =>{
    if(number.value.length == 0){
        alert("Digite um número!")
    }else{
        if(validacao(number.value) && nalista(number.value,n)){
            let r = Number(number.value)
            let opt = document.createElement('option')
            opt.innerHTML = `O número ${r} foi adicionado`
            lista.appendChild(opt)
            n.push(r)
        }else{
            alert("Atenção! O número não pode ser adicionado novamente e deve estar entre 1 e 100")
        }
        number.value = ''
        number.focus()
    }
})

//Function para limpar o select
limpar.addEventListener('click',()=>{
    number.value = ''
    lista.innerHTML = ''
    res.innerHTML = ''
    number.focus()
    n = []
    let opt = document.createElement('option')
    lista.appendChild(opt)
})

//Function dos resultados
check.addEventListener('click',()=>{
    if( n.length == 0){
        alert("Adicione algum número")
    }else{
        res.innerHTML = ''
        n.sort((a,b) => a-b)
        res.innerHTML = `Ao todo foram digitados ${n.length} números <br>`
        res.innerHTML += `O menor valor digitado é ${n[0]}<br>` 
        res.innerHTML += `O maior valor digitado é ${n[n.length-1]} <br>`
        let soma = 0
        for(let c = 0; c<n.length;c++){
            soma += n[c]
        }
        res.innerHTML += `A soma de todos os números digitados é ${soma} <br>`
        let media = soma/n.length
        res.innerHTML += `A média de todos os números informados é ${media}`
    }
})

