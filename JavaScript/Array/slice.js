
//o slice me entregara so a fatia ou as fatias
//que eu o pedir


/*se usar o zero ele me entregarar 
o(s) elemento(s) do indice que foi retirado . 
caso contrario se o zero for omitido
ele retirarar o(s) elemento(s) do indice e
entregara o resto do array */

let arrNum = [1, 2, 3, 4, 5, 6, 7]

//quando o zero e omitido, ele retira os
//indices e entrega o resto do array
let zeroOmitted = arrNum.slice(3)

console.log(arrNum)
console.log(zeroOmitted)


//removendo o primeiro indece
let firstWasRemoved = arrNum.slice(0, 1)

console.log(firstWasRemoved)


//do primeiro indice ate o terceiro
let firstToThird = arrNum.slice(0, 3)

console.log(firstToThird)


//apenas indice especifico

let index = arrNum.slice(0, 4)

console.log(index)


//trabalhando com numeros negativos

//com os numeros negativos ele retira 
//de tras para frente

let twoRemoved = arrNum.slice(-2)

console.log(twoRemoved)


//remove os tres ultimos
let removeThree = arrNum.slice(0, -3)

console.log(removeThree)


//pegando so o quarto indice do array
let getTheFuorth