
//  Senha forte


const body = document.querySelector('body')

body.innerHTML = `

<div id="container-form" class="container row mt-5">

<form class="col ">
<div class="col">
<label for="staticEmail2" class="visually-hidden">Email</label>
<input type="text" readonly class=" text-light form-control-plaintext" id="staticEmail2" class="email@example.com">
</div>
  <div class="col">
    <input id="input" type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <div class="col-sm-1 mt-1">
    <button type="submit" class="btn btn-primary mb-3">
    Enviar
    </button>
  </div>
</form>

</div>


`
const input = document.querySelector('#input')

input.addEventListener('keyup', event =>  {
  console.log(event.target.value)
  if(event.target.value){
    
  }
})


