const add = document.querySelector("#adicionar")
const number = document.querySelector("#icont")
const lista = document.querySelector("#lista")
const limpar = document.querySelector("#limpar")
const check = document.querySelector("#check")
const res = document.querySelector('#res')
let n = []

//function de adicionar os options do select
add.addEventListener('click', () =>{
    if(number.value.length == 0){
        alert("Digite um número!")
    }else{
        let r = Number(number.value)
        let opt = document.createElement('option')
        opt.innerHTML = ` O número ${r} foi adicionado`
        lista.appendChild(opt)
        n.push(r)
    }
})

//Function para limpar o select
limpar.addEventListener('click',()=>{
    number.value = 0
    lista.innerHTML = ''
    res.innerHTML = ''
    let opt = document.createElement('option')
    opt.innerHTML = `Digite um valor acima..`
    lista.appendChild(opt)
})

//Function dos resultados
check.addEventListener('click',()=>{
    res.innerHTML = ''
    n.sort()
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
})