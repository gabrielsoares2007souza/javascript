// Funções aninhadas, são funções que são colocadas dentro de outros funções, assim como as condicionais aninhadas

const soma = (...valores)=>{
    const somar=val=>{
        let res =0
        for(let i of val){
            res+=i
        }
        return res
    }
    return somar(valores)
}

console.log(soma(2,3,5,10))