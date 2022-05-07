



let div = document.querySelector('[data-js="div"]')

div.innerHTML = `
<input type='number' class='input'></input>
<button class='bt'>Ok</button>
<div class='exit'></div>
<div id='exit'></div>

`
let bt = document.querySelector('.bt')
let input = document.querySelector('.input')
let exit0 = document.querySelector('.exit')
let exit1 = document.querySelector('#exit')

//relogio de ponto dos funcionarios
let worker = [
  'Julio batista ',
   'Pedro gonsalves',
    'Romulo nogueira',
     'Bruno dias'
]

let H = new Date().toLocaleTimeString()
const time = () =>{
  setInterval(()=>{
   exit0.innerHTML = H
  }, 1000)
}
time()

bt.addEventListener('click', e => {

  let num = Number(input.value)
  if(input.value == '013'){
    console.log(H)

  } else if(input.value == '014'){
    console.log(H, worker[0])

  } else if(input.value == '015'){
    console.log(H, worker[1])

  } else if(input.value == '016'){
    console.log(H, worker[2])

  } else if(!num || num == ''){
    alert('Preecha o Campo Ok.  :)')
    console.log('incorreto')

  }



  //exit0.innerHTML = H;
exit1.innerHTML = `<h4 style='text-align:center;'>${H}</h4><h2 style='text-align:center;'>${worker[0]}</H2>`
//console.log(input.value)

//console.log(worker[0]) 

})











