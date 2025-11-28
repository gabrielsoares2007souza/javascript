// testando recursividade (chamada pra function dentro da propria function)
function fatorial(n){
    if(n == 1 || n == 0){
        return 1
    }else if(n<0){
        return 'A operação fatorial é restrita aos números naturais, não se aplicando aos inteiro negativos'
    }else{
        return n*fatorial(n-1)
    }
    
}
let r = fatorial(5)
console.log(r)




// 5! = 5 x 4 x 3 x 2 x 1 = 120
// 5! = 5 x 4!
// n! = n x (n-1)!
// 1! = 1
// 0! = 1
//-2! = 'A operação fatorial é restrita aos números naturais, não se aplicando aos inteiro negativos'