

//factory function

//Link da aula https://www.youtube.com/watch?v=lDitBfa-d2c



//declaracao

const thisName = name => ({
  name,
  setName: () => name
})

const myName = thisName('flavio')

console.log(myName.name)


//############################################################



const carro = (mod, mark, cor, ano) => ({
 
})

let novoCarro = carro('seda', 'corsa', 'vermelho', '1997')
console.log(novoCarro)

//############################################################

function carroVelho(mark, cor, ano, mod){
  return {
    mark: mark,
    cor: cor,
    ano: ano,
    mod: mod,
    setCarroVelho(){
    return `${mark} ${cor} ${ano} ${mod}`}
  }
}//console.log(mark, cor, ano , mod)

let carroV = carroVelho('corsa','vermelho','1997', 'seda')

console.log(carroV.setCarroVelho())


//################################################################


const person1 = {
  name: "flavio",
  age: 37,
  sex: "masculino",
  profession: "programador",
  fullPerson: function(){
    return `${this.name} ${this.age} ${this.sex} ${this.profession}`}
}
const person2 = {
  name: 'deborah',
  age: 3,
  sex: 'feminino',
  profession: 'estudante',
  fullPerson: function(){
    return `${this.name} ${this.age} ${this.sex} ${this.profession}`}
}
const person3 = {
  name: 'caleb',
  age: 0.3,
  sex: 'masculino',
  profession: 'bebe fofinho',
  fullPerson: function(){
    return `${this.name} ${this.age} ${this.sex} ${this.profession}`}

}

function setPerson(obj1, obj2, obj3){
  return{
    obj1: obj1,
    obj2: obj2,
    obj3: obj3,
  }
}


let persons = setPerson(person1, person2, person3) 


console.log(persons)

console.log(person1.fullPerson())