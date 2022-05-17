/* O MEU SENHOR VIVE E TEM TODO O PODER*/


//exit code
//container principal
let root = document.querySelector('[data-js="root"]')


//declaracao literal de object

const user = {
  name: 'flavio f silva',
  age: 37,
  email: 'fsilva916@hotmail.com',
  nickName: 'fsilva',
  createdAcc: '07/05/2022'
}

//pegando uma propriedade do obj com a notacao de ponto
console.log(user.age)//37

console.log('-------------------------------')

//pegando uma proppriedade do obj com a notacao de cochetes
console.log(user['name'])

console.log('-------------------------------')

//desestruturando o obj

//criei um array com as propriedades do obj, para ser possivel iteralo
const iterableObj = [
  user.name,
   user.nickName,
    user.age,
     user.email,
    user.createdAcc 
]

//montando uma template HTML
root.innerHTML = `
<!--MENSAGEM-->
<p class="display-5"><strong>To view info user, press enter</strong></p>

<!--div container-->
<div>
<h3>
<!--saida do codigo-->
<ul class="exit-code"></ul>
</h3>
</div>

`
//caminho de saida do codigo
const exit = document.querySelector('.exit-code')

//str vazia que vai receber os itens da iteracao
let tmpHTML = ''
addEventListener('keypress', (evt)=>{
  if(evt.key == 'Enter'){

  //iterando o array das propriedades do obj
  iterableObj.forEach( values => {
    tmpHTML += `<li>${values}</li>`

  })

  //saida do codigo
  exit.innerHTML = tmpHTML

  }
})





