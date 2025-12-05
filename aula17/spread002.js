//manipulando objetos (mesclando)
const p1 = {Nome: "João" , Posição: "Atacante"}
const p2 = {Nome: "Caio" , Perna: "Esquerda" }
const jogador = {...p1,...p2}

console.log(jogador)