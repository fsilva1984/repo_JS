
//declaracao literal e com o contrutor
console.log(" ")

let arr = ['flavio', 'deborah', 'jaqueline', 'caleb']; //literal

console.log(arr)
  console.log("##################################")

arr[2] = 'vovos'; // atribuicao por indice, substituindo um valor por outro

console.log(arr)

 console.log("######################################")
console.log(" ")

delete(arr[0]); //deletendo um valor por seu indice

console.log(arr)

  console.log("#################################")
console.log(" ")


arr.slice(-3)

console.log(arr)

  console.log("##################################")


  //atravez do contructor

  const nomes = new Array('flavio', 'deborah','jaqueline', 'caleb')

    //add mais um no final do array
    let maisUm = nomes.push('maria')
    console.log(nomes)

    console.log("##################################")

      //retira um do final do array
    nomes.pop()
    console.log(nomes)

    console.log("##################################")

    //retira um do inicio do array
    nomes.shift()
    console.log(nomes)

    console.log("##################################")

    //add um no inicio do array
    nomes.unshift("marinete")
    console.log(nomes)



















