const pessoa = {
    nome:"Vitor",
    idade: 18,
    
    setPessoa : function(nome , idade){
        this.nome = nome
        this.idade = idade
    }
}

const p  = pessoa
p.setPessoa('João' , 15)
console.log(p.nome , p.idade)


//Formas de alterar o conteudo das propriedade
// p.nome = 'Vitor'
//p["nome"] = "Vitor"
//A outra forma é usando o set acima , lembrando que nos objetos eu posso personalizar os metodos quanto aos nomes