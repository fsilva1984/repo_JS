
const btItem = document.querySelector('.item')
const ul = document.querySelector('[data-js="ul"]')//data e usado na criacao de um codigo personalizado

//criei uma str vazia para ajudar na iteracao e criacao das tags li do html
let templateHTML = ''

//o array da iteracao
let frutas = ['manga', 'caju', 'mamao', 'caja', 'jaca'];


//addEventLinstener para chamar a funcao
btItem.addEventListener('click', ()=> {
  /* o forEacho vai iterar o arrai e a cada laco da iteracao , a templateHTML vai receber o valor dela mais 1 , assim criando novas tag's li's  */
  frutas.forEach(i => {
      templateHTML += `<li style="color: blue">${i}</li>`
      //por fim jogo tudo na tag de saida mostrando na pagina td que foi criado
    ul.innerHTML = templateHTML
  })
    
    
})
  









