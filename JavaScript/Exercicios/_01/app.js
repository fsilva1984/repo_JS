/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('.videos')
let lis = ul.children
console.log({ul, lis})

Array.from(lis).forEach(li => {
  li.setAttribute('class', 'video')
})

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/


let parent_h2 = window.document.querySelector('h2')

console.log({parent_h2})
let parent = parent_h2.parentElement
console.log(parent.children)

console.log(parent_h2.parentElement)


/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/
let next_sibling_h1 = window.document.querySelector('h1')
console.log(next_sibling_h1.nextElementSibling)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

let previous_sibling_ul = window.document.querySelector('ul')
console.log(previous_sibling_ul.previousElementSibling)
/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

ul.addEventListener('click', (e) => {
 let target = e.target
 console.log(target)
 target.style.color='red'

})

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [
{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
},
 
{
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
},

{
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}

]

//peguei o botão 
const btn = document.querySelector('button')

/*
função que retorna dois parametros retirados de uma estrutura ou seja de um 'Object' e lança em uma nova tag <li>
*/
function getVideos({name, length}){
  ul.innerHTML += `<li class="video">${name} | ${length}</li>`
}

function exibVideos(){
  videos.forEach(getVideos)
 
}

btn.addEventListener('click',exibVideos) 

/*
esse codígo foi refaturado pelo codígo acima

btn.addEventListener('click', e => {
videos.forEach(video => {
  ul.innerHTML += `<li class="video">${video.name}</li>`
})

})
*/

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const h1 = document.querySelector('h1')
const body = document.querySelector('body')

h1.addEventListener('click', e => {
body.removeChild(ul)//removendo um filho do body
})


