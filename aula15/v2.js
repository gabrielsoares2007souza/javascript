let num = [2,4,6,1,4,6]
num.sort()
/*
for(let c=0; c< num.length ; c++ ){
    console.log(`O valor na posição ${c} é ${num[c]}`)
}*/

for(let c in num){
    console.log(`O valor na posição ${c} é ${num[c]}`)
}