const aluno = function(nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimos = function(){
        setTimeout(()=>{
            console.log(`nome: ${this.nome} e nota: ${this.nota}`)
           } ,2000   )
    }
}

const al1 = new aluno('vitor', 100)
al1.dados_anonimos()