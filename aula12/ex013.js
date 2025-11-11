var idade = 66
console.log(`A sua idade é ${idade} anos`)
if(idade<16){
    console.log("Não vota")
}else{ 
    if(idade<18 || idade>65){
        console.log("voto opcional")
    }else{
        console.log("voto obrigatório")
    }
}
