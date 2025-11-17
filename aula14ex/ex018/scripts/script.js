var butao = document.querySelector('#butao')
var inicio = document.querySelector('#inum')
var fim = document.querySelector('#fnum')
var passo = document.querySelector('#ipasso')
var res = document.querySelector('#res')

butao.addEventListener('click', () =>{
    if(passo.value == 0){
        res.innerHTML = ''
        res.style.fontSize = '28px'
        passo.value = 1
        alert('O valor no campo PASSO está zero, irei considerar como passo 1')
        for( var c = inicio.value; c<= fim.value; c++){
            res.innerHTML += `${c} &#x1F449 `
        }
    }
    if(passo.value > 0){
        res.innerHTML = ` passo vale ${passo.value}, inicio vale ${inicio.value}, e fim vale ${fim.value}`
        res.style.fontSize = '28px'
        for(var  i= inicio.value; i<=fim.value; i++){
            res.innerHTML += `${i} `
        }
    }
})