function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i>10)
            break
    }
}

const itc = contador()
for(let c=0;c<10;c++){
    console.log(itc.next().value)
}
