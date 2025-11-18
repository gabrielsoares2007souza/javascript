var butao = document.querySelector('#butao')
var numero = document.querySelector('#inum')
var res = document.querySelector('#mult')

butao.addEventListener('click', () =>{
    if(numero.value.length == 0){
        alert('Digite um número!!')
    }else{
        var n = Number(numero.value)
        res.innerHTML = ''
        for(var c = 1; c<=10; c++){
            var opt = document.createElement('option')
            opt.setAttribute('class', 'opcao')
            opt.innerHTML = ` ${n}x${c}=${n*c}`
            res.appendChild(opt)
        }
    }
})