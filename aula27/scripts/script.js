const caixa1 = document.getElementById('caixa1')
const c1 = document.querySelector(".c1")
const cursos = [...document.querySelectorAll('.cursos')]

caixa1.addEventListener('click', ()=>{
    console.log('clicou')
})

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        evt.stopPropagation()
    })
})

