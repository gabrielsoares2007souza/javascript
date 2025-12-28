const array = document.querySelector('.array')
const search = document.querySelector('.search')
const answer = document.querySelector('.answer')
const btn = document.querySelector('#btn')
const number = document.getElementById('inum')

//criando um array
const my_array = [ 3, 5 , 7 , 17 , 12 , 15 ]

const res = document.createElement('p')
res.innerHTML = `Array = [${my_array}]`
res.setAttribute('id' , 'resposta')
array.appendChild(res)


btn.addEventListener("click" , (evt)=>{
    const check = my_array.some((el,i,array) =>{
        if(el%2 == 0){
            answer.innerHTML = `array com número par na posição ${i} do array`
            return true
        }else{
            answer.innerHTML = 'array não conforme'
        }
    })
    console.log(check)
})