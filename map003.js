const nomes = [...document.querySelectorAll('div')]
nomes = Array.prototype.map.call(({innerHTML})=>innerHTML)