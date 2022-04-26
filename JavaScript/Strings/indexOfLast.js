
//atribuindo u, valor a string
let email = "laraCroft@fsilva.com.br"

//usando o metodo lastIndexOf 
let getLatter = email.lastIndexOf('a')

//imprimir no console
console.log(getLatter)

//pegando o comprimento da string
let getLenght = email.length

//imprimir no console
console.log(getLenght)

//pegando o elemento pela sua posicao
//eu quero o elemento 'a' e quero que 
//seja procurado apartir da posicao 15
let getPosition = email.includes('a', 15)

//imprimir no console true ou false
console.log(getPosition)//true nesse caso

