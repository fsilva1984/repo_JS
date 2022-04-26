
const num = [16, 19, 46, 02, 13, 23, 56, 32, 59, 52]


let novo = num.filter(e => e >= 50)

console.log(novo)

console.log(" ")
console.log("################################")
console.log(" ")


const student = [
  {name: "Maria", age: 32, notas: [6.5, 4.8, 7.9, 8.7, 6.7]},
  {name: "Joana", age: 28, notas: [7.5, 4.6, 5.9, 8.3, 7.2]},
  {name: "Lucia", age: 38, notas: [8.5, 5.3, 7.2, 9.2, 5.6]},
  {name: "Joao", age: 36, notas: [6.7, 4.2, 8.3, 7.7, 5.9]}
]
//console.log(alunos[0].name)


//estudantes com nome maior que 5 letras
let studentWithBiggerName = student.filter(
  (valor) => valor.name.length >= 5 ? valor:false)
console.log(studentWithBiggerName)


//estudantes com idade maior que 30
let studentWithBiggerAge = student.filter(
  valor => valor.age >= 30 ? valor:false)
console.log(studentWithBiggerAge)


//estudantes que tem a letra 'a' no final do nome
let studentWithNameEndA = student.filter(
  valor => valor.name.toLowerCase().endsWith('a'))
console.log(studentWithNameEndA)


/* Media Aritimetica simples . e a soma dos numeros ou valores 
dividido pelo quantidade de elementos.*/
let studentWithBiggerPont = student.filter(valor => {
  let total = valor.notas + valor.notas.length
 let final = total / valor.notas.length
 return final
})

console.log(studentWithBiggerPont)