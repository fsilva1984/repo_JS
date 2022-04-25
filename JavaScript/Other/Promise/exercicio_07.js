
//buscador de cep 

//link da aula https://www.youtube.com/watch?v=Pi6wkdU2vR4&t=1s


const cep = document.getElementById("cep")


cep.addEventListener("blur", () =>{

  const search = cep.value.replace("-", "")
  
  const options = {
    method: 'GET' ,
    mode: 'cors',
    cache: 'default'
  }

  const url = `https://viacep.com.br/ws/${search}/json/ ${options}`

  fetch(url)
  console.log(url)
})
















