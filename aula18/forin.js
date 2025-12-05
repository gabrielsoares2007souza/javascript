//estrutura for in
//A estrutura for in é ótima pra percorrer arrays completos, e a variavel que ira percorre ira retornar o indice de cada elemento do array
//Essa variavel não precisa assumir falor inicial e final, ela por padrão irá percorrer todos os elementos do array

let valores = [1,2,3,4,5,6,7,8,9,10]

/*
for(let c=0;c<valores.length;c++){
    console.log(valores[c])
}
*/

for(let c in valores){
    console.log(valores[c])
}