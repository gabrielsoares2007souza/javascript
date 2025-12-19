const cursos = [...document.getElementsByClassName('cursos')]
const copiar = document.querySelector('.button-copy')
const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')


cursos.map((el) =>{
    el.addEventListener('click', (evt)=>{
        const curso = evt.target
        curso.classList.toggle('selecionado')
    })
})

copiar.addEventListener('click', ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    const cursosNaoSelecionados = [...document.querySelectorAll('.cursos:not(.selecionado)')]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })

    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})