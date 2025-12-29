const numbers = [4 , 6, 7 , 9]

const iterator = numbers[Symbol.iterator]()
let c=0
while(c < numbers.length+1){
    console.log(iterator.next())
    c++
}

//Quando o iterator com a propriedade done retorna true significa que a coleção chegou ao fim