
let body = document.querySelector('[data-js="body"]')

document.body.style.margin="15px"

body.innerHTML = `
<header>

<ul class="nav nav-pills">
  <li class="nav-item">
    <button class="bt btn btn-primary" onclick="repet()">Button</button>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>

</header>
<p class="display-1"><strong> Hours: </strong></p>

<div class="exit" style="border: 1px solid; text-align: center; height:15vh; align-content: center;"></div>

<p class="exit2 display-2"> <strong>...</strong> </p>


`
const exit = document.querySelector('.exit')
const exit2 = document.querySelector('.exit2')

const bt = document.querySelector('.bt')

const repet = ()=>{
setInterval(()=>{
  let H = new Date().toLocaleTimeString();
  exit.innerHTML = `<h1 style='color: red'>${H}</h1>`
  })
}

const salutation = () => {
let h = new Date().getHours()

if(h < 12 && h > 00){
  console.log('bom dia')
  exit2.innerHTML = 'Bom Dia !!'

} else if(h >= 12 && h <= 18){
  console.log('boa tarde')
  exit2.innerHTML = 'Boa Tarde ;)'

} else if(h > 18 && h <= 23){
  console.log('boa noite')
  exit2.innerHTML = 'Boa Noite :)'
}
 

}

bt.addEventListener('click', e =>{
  
 repet()
  salutation()
  

})

/*
case h < 12 && h > 23:
  exit.innerHTML = "Bom Dia"
  break;
case h > 12 && h < 16:
  exit.innerHTML = 'Boa Tarde'
  break;
case h > 16 && h < 23:
  exit.innerHTML = 'Boa Noite'*/






















