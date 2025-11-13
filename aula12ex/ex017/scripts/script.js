function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.querySelector('#iano')
    var res = document.querySelector('#resultado')
    var body = document.querySelector('#body')

   if(nascimento.value == 0 || nascimento.value>ano){
        alert('[Erro] observe o valor digitado e tente novamente')
   }else{
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var idade = ano - Number(nascimento.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
            body.style.backgroundColor = 'blue'
            img.style.outlineColor = 'blue'
            if(idade>=0 && idade<10){
                img.setAttribute('src', 'imagens/criancaboy350.jpg')
            }else if(idade<20){
                img.setAttribute('src','imagens/adolescenteboy350.jpg')
            }else if(idade<50){
                img.setAttribute('src','imagens/adultoboy350.jpg')
            }else{
                img.setAttribute('src','imagens/idosoboy350.jpg')
            }
        } else{
            genero = 'Mulher'
            body.style.backgroundColor = 'pink'
            img.style.outlineColor = 'pink'
            if(idade>=0 && idade<10){
                img.setAttribute('src', 'imagens/criancagirl350.jpg')
            }else if(idade<20){
                img.setAttribute('src','imagens/adolescentegirl350.jpg')
            }else if(idade<50){
                img.setAttribute('src','imagens/adultogirl350.jpg')
            }else{
                img.setAttribute('src','imagens/idosogirl350.jpg')
            }
        }
        res.innerHTML = `Detectamos uma pessoa com gênero ${genero} e ${idade} anos de idade`
        res.appendChild(img)
   }
}