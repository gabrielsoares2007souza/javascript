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
    const check = my_array.find((el,i)=>{
        if(Number(number.value) == el){
            answer.innerHTML = `O número ${el} está presente na posição ${i} da lista`
            return el
        }else{
            answer.innerHTML ='O número não está presente no array'
        }
    })
    console.log(check)
    number.focus()
})