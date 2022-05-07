

//while

const nomes = ['nino', 'mario', 'lilo', 'spith', 'brenda']

let i = 0;

while (i < 5) {
  console.log(nomes[i])
  if (nomes[i] == 'mario') {
    break
  }
  
  i ++
  console.log('parei')
}

//funcao setup o while a cada 1 min e meio
function setGo () {

  setInterval(function(){

  let i = 0;
  while (i < nomes.length) {
    console.log(nomes[i])
    i++
  }

  }, 2500)


}
setGo()





