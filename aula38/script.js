const res = document.querySelector('#answer')
const btn_plus = document.getElementById('btn_plus')
const btn_minus = document.getElementById('btn_minus')
const btn_times = document.getElementById('btn_times')
const btn_divide = document.getElementById('btn_divide')

//adição
btn_plus.addEventListener("click" , ()=>{
    const v1 = document.getElementById('iv1')
    const v2 = document.getElementById('iv2')
    if(v1.value.length != 0 && v2.value.length != 0){
        const soma = Number(v1.value) + Number(v2.value)
        res.innerHTML = `${v1.value} + ${v2.value} = ${soma}`
    }else{
        alert('Digite algum número!')
    }
})

//subtração
btn_minus.addEventListener("click" , ()=>{
    const v1 = document.getElementById('iv1')
    const v2 = document.getElementById('iv2')
    if(v1.value.length != 0 && v2.value.length != 0){
        const subtracao = Number(v1.value) - Number(v2.value)
        res.innerHTML = `${v1.value} - ${v2.value} = ${subtracao}`
    }else{
        alert('Digite algum número!')
    }
})


//multipllicação
btn_times.addEventListener("click" , ()=>{
    const v1 = document.getElementById('iv1')
    const v2 = document.getElementById('iv2')
    if(v1.value.length != 0 && v2.value.length != 0){
        const multiplicacao = Number(v1.value) * Number(v2.value)
        res.innerHTML = `${v1.value} X ${v2.value} = ${multiplicacao}`
    }else{
        alert('Digite algum número!')
    }
})



//divisao
btn_divide.addEventListener("click" , ()=>{
    const v1 = document.getElementById('iv1')
    const v2 = document.getElementById('iv2')
    if(v1.value.length != 0 && v2.value.length != 0){
        if(v2.value != 0){
            const divide = Number(v1.value) / Number(v2.value)
            res.innerHTML = `${v1.value} &divide ${v2.value} = ${divide}`
        }else{
            alert('Não é possivel realizar uma divisão com denominador igual a 0')
        }
    }else{
        alert('Digite algum número!')
    }
})