
//o arguments esta dsponivel  so nas funcoes declaradas ou nomeadas com o function ( Recurso nao mais usado)

const fn = function(){//funcao nomeada
  for(let i = 0; i < arguments.length; i++){//um for para iterar
    console.log(arguments[i])
  }
} 

fn("sweet", 1230, true)//qualquer argumento

console.log(/*##########################################*/)

function fn2(){//function expression
  let total = 0;//variavel acumuladora
  for(let i of arguments){//operador for ...of para varrer a list a de argumentos
  total += i//o 'i' e o acumulador iteravel, 
  };

  console.log(total)
}
fn2(2, 3, 5)


