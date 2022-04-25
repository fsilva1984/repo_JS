
//link da aula https://www.youtube.com/watch?v=wTGPhsGJ0sw

//fatch

//API da dog.ceo
const url = 'https://dog.ceo/api/breeds/image/random'

//pegando a tag img pelo id
const img = document.getElementById("img")

//funcao que ira verificar o status com o '.ok' que retorna um boolean,
//toda via se o status estiver entre 200 e 299
const validateHTTPdogData = dogData => {

    if (!dogData.ok) throw new Error(dogData.status)//menssagem personalizada de um posivel erro
    return dogData.json()/* a funcao vai retornar um objeto , dai convertemos para json 
    assim podemos usar as propriedades retornadas */
}

/* uma das propriedades, olhando a partir  do console e a 'message' usaremos ela para setar no src a tag 'image' */
const setImageDog = ({ message })=> img.setAttribute('src', message)

//essa function levara a msg de erro personalizada do throw
const error = (err) => { console.log(err) }

fetch(url)
    .then( validateHTTPdogData )
    .then( setImageDog )
    .catch( error )
    

