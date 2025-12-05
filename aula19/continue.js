//Diferença de Break e Continue

//Continue: Usado em laços de repetição(Looping), ele não encerra a estrutura toda, mas sim a repetição ou loop atual,apos encerra ele pula pro proximo loop

let n = 1
let max = 10
let pares=0
for(let c=n;c<=max;c++){
    if(c%2!=0){
        continue
    }
    pares++
}
console.log(`${pares}`)