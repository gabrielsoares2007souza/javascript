//funções anônimas não tem nome, podem ser armazenadas em variaveis, e essas variaveis podem receber os parâmetros da function e repassa-las
let soma = function(...valores){
    let res=0
    for(let i of valores){
        res +=i
    }
    return res
}

console.log(soma(4,6))