// Treinando function
function parimpar(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'ímpar'
    }
}
const r = parimpar(10)
console.log(`O valor digitado é ${r}`)