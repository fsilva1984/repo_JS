

//simulando um requere

function rand(min=1000, max=5000){
  let Random = Math.floor(Math.random() * (max - min) + min)
  return Random;
}

function f1(){ console.log("f1") };
function f2(){ console.log("f2") };
function f3(){ console.log("f3") };
//console.log("Ola Mundo")



setTimeout(function(){
   f1(callback);
  if(callback) callback()
  return f2()
  
}, rand())

setTimeout(function(){
 f2(callback)
 if(callback) callback()
 return f3()
}, rand())

setTimeout(function(){
 f3(callback)
 if(callback) callback()
 console.log("hello world")
}, rand())















