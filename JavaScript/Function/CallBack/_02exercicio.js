
//callbacks

//oque seria uma funcao de callback
//e uma funcao que e passada por argumento para outra funcao

//ex:
const myFunction = (callback) => {
 callback(76)//o parametro armazena um valor
}

myFunction(
  newFunction => {// e uma funcao e criada dentro da 
    //invocasao da funcao pai
    console.log(newFunction)
  }
)

//para melhor entendimento

//tenho uma funcao
const falaOi = () =>{
  console.log('oiii')
}

/* e vou passar ela como parametro para 
 outra funcao */

const retornaOi = () => {
console.log('Oi :)')
}

retornaOi(falaOi())



















