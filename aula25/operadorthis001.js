//O operador this é muito útil para criar novos objetos e eles serem armazenados em memória
//Por exemplo ao tem um parametro e uma variavel dentro da função e ambos estão com mesmo nome, ao usar this em frente da variavel será distinguido do parâmentro , pois o this faz meição que aquele é um objeto novo daquela função 


const aluna = {nome: 'Maria',
    dizerOi: function(){
        console.log(`Oi ${this.nome}`)
    }
}

