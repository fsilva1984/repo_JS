
//scopo de bloco


if (true) {
  let nome = 'Osvaldo'
  var idade = 35
  const sexo = 'Masculino'
}

//console.log(nome)
//console.log(idade)
//console.log(sexo)



//scopo de funcao ou scopo lexco
let variavel0 = 'scopo 0'
const myFunction = () => {
  let variavel1 = 'scopo 1'

  const fn = () => {
    let variavel2 = 'scopo 2'

    const myFn = () => {
      let variavel3 = 'scopo 3'

      console.log(
        variavel0, variavel1, variavel2, variavel3,)
    }
    myFn()
  }
  fn()
}

myFunction()















