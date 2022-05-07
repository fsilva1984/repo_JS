
//prototipo cadastro senha

//pegar o valor do input
const input = document.querySelector('input').value

//saida da function
const exit = document.querySelector('.exit')

//pegando o button
const bt = document.getElementById('bt')

//senha curta
function passwdSmall() {
  exit.innerHTML="A senha deve ter no minimo 8 caracteres"
}

function inputVoid() {
  exit.innerHTML='voce precisa preencher o campo'
}

function savePasswd() {
  exit.innerHTML = 'Senha Salva com sucesso'
}

//funcao de evento

bt.addEventListener('click', function(){
 
  switch(input.length < 8){
    case true:
      passwdSmall()
      break;
    case false:
      savePasswd()
      break;
    
      
      
  }
 
})


function refresh() {
 document.addEventListener('keypress', e => {

  let event = e.key

  if (event === 'Enter') {
    alert("Reload Page")
    setTimeout(() => {
      document.location.reload()
    }, 2000)
  }

 })
}
refresh()

/*document.addEventListener ('keypress', (event) => {
  const keyName = event.key;
  if (keyName === 'Enter') {
    console.log("Enter")
  }
});
*/


