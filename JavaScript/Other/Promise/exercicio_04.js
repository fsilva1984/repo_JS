
//exercicio random image 


//fetch







//event to button

function reloader(){//função de evento
  //API a ser consumida
const url = 'https://dog.ceo/api/breeds/image/random'

const img = document.getElementById("img")//pegando a tag image


fetch(url)//fetch faz a requisição
  .then(data => data.json())//os dados recebidos passara a ser json
  .then(({message}) => {
    img.setAttribute("src", message)/** essa message é uma propriedade do objeto recebido após a requisição, depois de tranformada pelo json */
  })
  .catch(error => console.log(`${"Ouve um erro"} ${error}`))//tratando um posivel erro
}

const bt = document.getElementById("bt")

bt.addEventListener("onload", reloader)


//###############################








