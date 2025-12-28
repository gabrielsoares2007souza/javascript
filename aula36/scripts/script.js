const array = document.querySelector('.array')
const search = document.querySelector('.search')
const answer = document.querySelector('.answer')
const btn = document.querySelector('#btn')
const number = document.getElementById('inum')

//criando um array
const my_array = [ 3, 5 , 7 ]

const res = document.createElement('p')
res.innerHTML = `Array = [${my_array}]`
res.setAttribute('id' , 'resposta')
array.appendChild(res)


btn.addEventListener("click" , (evt)=>{
    const reduzir = my_array.reduce((retornoAnterior,el,i,arr)=>{
        return el+retornoAnterior
    })
    console.log(reduzir)
})