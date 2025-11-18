var butao = document.querySelector('#butao')
var inicio = document.querySelector('#inum')
var fim = document.querySelector('#fnum')
var passo = document.querySelector('#ipasso')
var res = document.querySelector('#res')
butao.addEventListener('click', () =>{
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        alert('Atenção!, há campos que não foram preenchidos')
    }else{
        res.innerHTML = ''
        res.style.fontSize = '1.2em'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p == 0){
            alert('passo está com zero, irei considerar passo 1')
            p = 1
            if(i<f){
            for(var c = i; c<=f ; c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
            }else{
                for(var c = i; c>=f; c-=p){
                    res.innerHTML += `${c} \u{1F449}`
                }
            res.innerHTML += `\u{1F3C1}`
            }
        } else{
            if(i<f){
            for(var c = i; c<=f ; c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
            }else{
                for(var c = i; c>=f; c-=p){
                    res.innerHTML += `${c} \u{1F449}`
                }
            res.innerHTML += `\u{1F3C1}`
            }
        }
    }
})