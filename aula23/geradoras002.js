function* perguntas(){
    const nome = yield 'Qual seu nome: '
    const idade = yield 'Qual sua idade: '
    return `Seu nome é ${nome} e você tem ${idade} anos de idade.`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Vitor').value)
console.log(itp.next(18).value)