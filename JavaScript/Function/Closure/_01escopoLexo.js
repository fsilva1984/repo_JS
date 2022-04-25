

function getName(){
  let nome = "fulano";
  return nome;
}

function setName(){
  console.log(getName())
}


setName()


function revela(){
  return "e segredo"
}

function validation(entrada){
let senha = 230514
if(entrada == senha || entrada == ""){
  return revela()
}
else{
  return "senha invalida"
}
}

console.log(validation(230513))


