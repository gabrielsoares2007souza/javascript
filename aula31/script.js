const numeros = [32 , 12 , 4 , 76 , 15 , 17]

const maiorDeIdade = numeros.filter((valor , indice , array)=>{
    if(valor<18){
        return valor
    }
})

console.log(numeros)
console.log(maiorDeIdade)