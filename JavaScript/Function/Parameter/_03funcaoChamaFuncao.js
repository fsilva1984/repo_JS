

// funcao chama funcao

function fn1(y, x){
  return y + x
}


function fn2(y, x){
  return y - x
}


function fn3(y, x){
  return y * x
}


function fn4(y, x){
  return y / x
}


function valores( op, y, x){
  if(op === '+'){
  return fn1(y, x)
  };
  if(op === '-'){
    return fn2(y, x)
  };
  if(op === '*'){
    return fn3(y, x)
  };
  if(op === '/'){
    return fn4(y, x)
  };
}
console.log(valores('*', 5, 3))


