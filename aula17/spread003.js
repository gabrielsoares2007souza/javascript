//Usando spread com funções
const soma = (v1,v2,v3) =>{
    return v1+v2+v3
}

let valores = [2,4,4]
console.log(soma(...valores))