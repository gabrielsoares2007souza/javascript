// calculando um fatorial
function fatorial(n){
    let fat = 1
    for(let c = n; c>1 ; c--){
        fat *= c
    }
    return fat
}
let r = fatorial(3)
console.log(r)