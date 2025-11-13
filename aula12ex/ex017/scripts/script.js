function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.querySelector('#iano')
    var res = document.querySelector('#resultado')

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
            if(idade>=0 && idade<10){
                img.setAttribute('src', '../imagens/criancaboy350.jpg')
            }
        } else{
            genero = 'Mulher'
        }
        res.innerHTML = `${genero} e ${idade}`
        res.appendChild(img)
   }
}