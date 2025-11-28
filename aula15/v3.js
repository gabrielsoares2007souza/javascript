let num = [2, 3 ,5]
num.sort()
if(num.indexOf(0) == -1){
    console.log(`O valor não está presente neste array`)
}else{
    console.log(`O valor procurado se encontra no índice ${num.indexOf(0)}`)
}