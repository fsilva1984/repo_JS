



/* FAZER COM QUE CADA STRING DIGITADA SE TORNE UM ELEMENTO NO ARRAY*/


const bd = document.body

bd.innerHTML = `
<h1>ola</h1>
<input id="input"></input>
<ul class="ul">
<li class="li"></li>
</ul>

`

function fn(){
  //console.log(document.getElementById('input').value)//debug

  //get input
 let input = document.getElementById('input').value
  //a aray created
  let arr = []
  //push input in array
  arr.push(input)
  //a string void created
  let el = ''
  for(let i=0; i < arr.length; i++){
    el += `<li>${arr[i]}</li>`
  }
  document.querySelector('ul').innerHTML=el
}
  


addEventListener("keypress", (evt)=>{
  if(evt.key === 'Enter'){
    fn()
  }
})




/* 



  arr.forEach((val)=> {

    el +='<li>${val}</li>'
    
  })

*/