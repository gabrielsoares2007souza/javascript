function* nomes(){
    yield 'Maria'
    yield 'Caio'
    yield 'Beatriz'
}

const iterable = nomes()
console.log(iterable.next().value)
console.log(iterable.next().value)
console.log(iterable.next().value)