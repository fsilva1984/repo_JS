
//a funcao geradora tras um objeto ja pronto 
// o yield sempre vai ser a chave para acessar o valor


const hora = new Date().toLocaleTimeString();
const data = new Date().toLocaleDateString();

//declarando uma funcao geradora
function* geradora1(){
yield "valor 1"

yield "valor 2"

yield "valor 3"
  //...
yield data;

//...
yield hora;
}

const g1 = geradora1()

//console.log(g1)

//console.log(g1.next())

//console.log(g1.next().value)


for(let i of g1){
  console.log(i)
}


