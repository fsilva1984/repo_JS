// o splice domina as funcoe do pop push slice shift unshift  e delete

const nomes = ['joao', 'marcos', 'julia', 'ana', 'gabriel', 'luiz'];
console.log(" ")
// ### splice substituindo o pop

//primeiro argumento e o indice
//segundo argumento sao quantos valores
//vao ser retirados
let removed = nomes.splice(5, 1)/*a partir do quinto 'indice'*/
console.log(nomes, removed)/*retira um*/


console.log(" ")
console.log("#####################################")
console.log(" ")

// ### splice substituindo o push

let addName = nomes.splice(5, 1, "mateus")//a aprtir do quinto indice
console.log(nomes, addName)//add um

console.log(" ")
console.log("#####################################")
console.log(" ")


// ### splice substituindo o slice


let sliced = nomes.splice(2, 3)//a partir do segundo indice
console.log(nomes, sliced)// retira tres elementos


console.log(" ")
console.log("#####################################")
console.log(" ")


// ### splice substituindo o shift


let shifting = nomes.splice(0, 1)//a partir do primeiro indice
console.log(nomes, shifting)//retira um



console.log(" ")
console.log("#####################################")
console.log(" ")


// ### splice substituindo o unshift

let Unshift = nomes.splice(0, 0, "rodrigo")//a parttir do primeiro indice
console.log(nomes, Unshift)//add um



console.log(" ")
console.log("#####################################")
console.log(" ")


// ### splice substituindo o delete

let delectad = nomes.splice(0, 0, "rodrigo")//a parttir do primeiro indice
console.log(nomes, Unshift)//add um