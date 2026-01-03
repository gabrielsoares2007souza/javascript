class carros{
    constructor(nome, tipo){
        this.nome = nome
        if(tipo == 1){
            this.tipo = 'Corrida'
            this.velMax = 350
        }else if(tipo == 2){
            this.tipo = 'Esportivo'
            this.velMax = 250
        }else if(tipo == 3){
            this.tipo = 'Passeio'
            this.velMax = 140
        }else{
            this.tipo = 'Militar'
            this.velMax = 180
        }
    }

    getTipo(){
        return this.tipo
    }

    getVelMax(){
        return this.velMax
    }

    info(){
        let informacoes = [ this.nome ,this.tipo , this.velMax]
        return console.log(informacoes)
    }
}

let c1 = new carros('Atlas' , 3)

console.log(`${c1.nome} | ${c1.getTipo()} | ${c1.getVelMax()}`)
c1.info()