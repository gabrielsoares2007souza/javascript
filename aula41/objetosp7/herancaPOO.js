class carros{
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
    }

    setCor = function(cor){
        this.cor = cor
    }

    setLigado = function(){
        this.ligado = true
    }

    setDesligado = function(){
        this.ligado = false
    }
}


class Militar extends carros{
    constructor(nome , portas , blidagem , municao){
        super(nome, portas)
        this.blindagem = blidagem
        this.municao = municao
    }

    setMunicao = function(){
        this.municao--
    }
}

const c1 = new carros('Normal' , 4)
c1.setLigado()
c1.setCor('Prata')

console.log("--------------------------")
console.log("---  Class Pai / Base  ---")
console.log("--------------------------")
console.log(c1.nome)
console.log(c1.portas)
console.log(c1.ligado?'Sim':'Não')
console.log(c1.vel)
console.log(c1.cor)


console.log("--------------------------")
console.log("---     Class Filho    ---")
console.log("--------------------------")

const c2 = new Militar('Atlas' , 1 , 100 , 50)
c2.setMunicao()

console.log(c2.nome)
console.log(c2.municao)
console.log(c2.blindagem)

