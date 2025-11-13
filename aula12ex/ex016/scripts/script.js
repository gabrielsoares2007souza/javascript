function carregar(){
    var mensagem = document.querySelector('#msg')
    var img = document.querySelector('#foto')
    var dia = new Date()
    var hora = dia.getHours()
    var minuto = dia.getMinutes()
    var body = document.querySelector('#body')

    mensagem.innerHTML = `Agora são ${hora}:${minuto} horas`
    if (hora>=0 && hora<12){
        img.src = 'imagens/manha250.jpg'
        body.style.backgroundColor = '#C7D7D2'
    }else if(hora>=12 && hora<18){
        img.src = 'imagens/tarde250.jpg'
        body.style.backgroundColor = '#a95809'
    }else{
        img.src = 'imagens/noite250.jpg'
        body.style.backgroundColor = '#C0615D'
    }

}