const array = document.querySelector('.array')
const search = document.querySelector('.search')
const answer = document.querySelector('.answer')
const btn = document.querySelector('#btn')
const number = document.getElementById('inum')

//criando um array
const my_array = [ 2, 5 , 7 , 12 , 15 , 19 ]

const res = document.createElement('p')
res.innerHTML = `Array = [${my_array}]`
res.setAttribute('id' , 'resposta')
array.appendChild(res)


btn.addEventListener("click" , (evt)=>{
    const check = my_array.every((el,i,array) =>{
        if(el<18){
            answer.innerHTML = 'Array conforme'
            return true
        }else{
            answer.innerHTML = 'Array não conforme'
        }
    })
})