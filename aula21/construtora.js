//function construtora são boas pra funções simples
//esse exemplo é de uma function construtora anônima

let soma = new Function('v1','v2','return v1+v2')//função construtora anônimas

console.log(soma(3,9))