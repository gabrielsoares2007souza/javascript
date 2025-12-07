//parâmetro REST em funções em Javascript

function soma(...valores){
    let tam = valores.length
    let s = 0
    for(let i of valores){
        s+=i
    }
    return s
}

console.log(soma(5,2,10))