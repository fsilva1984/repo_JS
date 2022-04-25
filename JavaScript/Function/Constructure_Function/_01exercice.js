
//funcao construtora// constroi objetos apartir do new



//declaracao normal
function Pessoa(cor, peso, altura, sexo){
this.cor  = cor
this.peso = peso
this.altura = altura
this.sexo = sexo
}

const p1 = new Pessoa('Braca', '69=kg', '1.65=alt', 'masculino')

function chamaP1(){
  let {cor, peso, altura, sexo } = p1

  console.log("atributos de p1"+" "+cor, peso, altura, sexo)
  console.log(p1)
 
}

chamaP1()


console.log("################################################################")
//metodos


function Car(mod, ano, cor, marca){
this.mod = mod
this.ano = ano
this.cor = cor
this.marca = marca


this.metodo = function(){
  return `
  Marca: ${this.marca}
  Modelo: ${this.mod}
  Cor: ${this.cor}
  Ano: ${this.ano}`
}
}

const C1 = new Car('Mustang', '1967', 'Preto', 'Ford')



function exibC1(){
  console.log(C1)
  console.log(C1.metodo())
}

exibC1()


console.log("################################################################")

//atributosprivados




function Estoke(ortfrut, entrada){
  //private
  let senha = "mc2022"

  this.entrada = entrada
  
  
  try{
    if(entrada == senha) {
        this.ortfrut = ortfrut = function(){
        return "Manga, mamao, kiui, uva"
      }
    }
    throw 'senha invalida'
  }
  catch(e){
 console.log(e.message)
  }
   

}
const merc = new Estoke('banana', 'mc202')

console.log(merc.ortfrut())

