


//forEach

const nomes = [
  'Jose', 'Joana', 'Lucas', 'Caleb', 'Bia'
]

/* a declaracao do forEach ; 
pode receber ate tres argumentos ,
 o valor(es) o inidce(s) e o proprio array*/
nomes.forEach((valor, indice, array) => {
  console.log(`${indice +1}) ${valor}`)
})

console.log('---------------------------------')


//podemos declarar uma funcao e passar
//ao forEach como uma funcao de callback

const iterable = (valor, indice, array) => {
  console.log(`${indice +1}) ${valor}`)
  //acrescentando ao indice +algum_numero vc 
  //esta dizendo , comece por esse numero
  //ou comece por esse indice
}

nomes.forEach(iterable)


console.log('---------------------------------')


//reutilizando codigo


const programLanguage = [
  'C', 'C++', 'Python', 'Java', 'Go'
].sort()

programLanguage.forEach(iterable)



