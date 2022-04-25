

//desestruturacao dos parametros da funcao



function fn({nome, sexo, idade}){
  let dados = { nome, sexo, idade}
  
    console.log(dados)
}

fn({nome: 'flavio',sexo: 'masculino',idade: '37'})

console.log(/* ########################################################### */)


function fn2([ num1, num2, num3, num4  ]){
  let  arr = [num1, num2, num3, num4].forEach(e=>{
    console.log(e)
  })

}
fn2(['one', 'two', 'three', 'fuor'])

console.log(/* ########################################################### */)

//funcao executando outra funcao

function getRest(param1, param2, ...param3 ){//funcao que recebe os argumentos no parametro
console.log(param1, param2, ...param3)
}

function executarFun(){//funcao que executa  
  return getRest("flavio", "Silva", "sexo:Masculino", "idade:37", "profi:programador")
}

executarFun()

console.log(/* ########################################################### */)

//funcao calculadora


function calcular(op, acc, ...nums){
  for(let i of nums){
    if( op == '-'){ acc -= nums}
    if( op == '+'){ acc += nums}
    if( op == '*'){ acc *= nums}
    if( op == '/'){ acc /= nums}
  }
  console.log(acc)
}

calcular('/', 5, 3)

console.log(/* ########################################################### */)


//aqui a funcao cria outrta funcao e a retorna

//para melhor racicinio, quando atribuimos  um parametro ou chamamos a funcao pai na verdade chamamos a funcao filha 

function criaMultiplicador(multiplicador){
  return function(n){//essa funcao retorna o parametro da funcao pai * seu proprio parametro
    return n * multiplicador
  }
}
//aqui armazenamos a funcao em uma constant dando a ela o valor do multiplicador
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)
const quintoplica = criaMultiplicador(5)

//aqui damos o valor a ser multiplicado pela funcao
console.log(duplica(12))
console.log(triplica(6))
console.log(quadriplica(2))
console.log(quintoplica(10))

