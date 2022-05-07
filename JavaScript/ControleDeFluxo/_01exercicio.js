
console.log('Controle de fluxo')

console.log('----------------------------------')

//loop for 
for (let i = 0; i <= 5; i++){
  console.log(i)
}

console.log('----------------------------------')


let nomes = ['luiz', 'dores', 'gil', 'neto']


for (let i = 0 ; i < nomes.length; i++) {
  console.log(`<p> ${nomes[i]} <\p>`)
}
console.log('----------------------------------')

let root = document.querySelector('[data-js="div"]')


let templateHTML = ''
  for (let i = 0 ; i < nomes.length; i++) {
   console.log(nomes[i])
   templateHTML += `
   <h3 style="color:orange;">${nomes[i]}</h3>
   
   `
  }
root.innerHTML = templateHTML
  


