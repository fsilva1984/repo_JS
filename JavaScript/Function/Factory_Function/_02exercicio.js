
//funcao fabrica

function person(){//function not parameter
  return{
    nome: 'flavio',
    idade: "37",
    funcao: "programador",
    fullPerson(){
      return`Nome:${this.nome} |\nidade:${this.idade} |\nprofi:${this.funcao}|`
    }
  }
}

const p1 = person()

console.log(p1.fullPerson())


console.log(/*#######################################################*/)


function getAge(){

}








