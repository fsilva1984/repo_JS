//calculadora


function App(){

/*essa propriedade pega o elemento que contem a classe display*/ 
this.display = document.querySelector(".display");

/*esse metodo pega o evento de click dos botoes */
this.getClick = ()=>{
  document.addEventListener('click', event =>{
    let element = event.target

    if(element.classList.contains('bt-num')){
      this.addNumDisplay(element)
    }

    if(element.classList.contains('bt-clear')){
      this.displayClear(element)
    }

    if(element.classList.contains('bt-del')){
      this.delElement(element)
    }

    if(element.classList.contains('bt-eq')){
      this.eqElement(element)
    }
  })
}

/*esse metodo joga no disply o que esta na variavel element */
this.addNumDisplay = (element) =>{
  this.display.value += element.innerText
  this.display.focus()
}

/*esse metodo atribuium o estado vazio ao elemento*/
this.displayClear = ()=>{
  this.display.value = " "
}


this.delElement = ()=>{
 this.display.value = this.display.value.slice(0, -1)
}

this.eqElement = ()=>{
  try{
   let total = eval(this.display.value);
   if( !total ){
    alert("Conta invalida")
    return;
   }
   this.display.value = total;
  }
  catch(err){
    alert("Conta invalida")
    return;
  }
}


this.getEnter = ()=>{
  
document.addEventListener("keypress", e =>{
    //const element = e.target element.which
    if( e.key == 'Enter' ){
      
      var bt = document.querySelector(".bt-eq")
      bt.click()
      
     
    }
    else{
      return;
    }
  })
}

this.inicia = () =>{
  this.getClick()
  this.getEnter()
}



}



const calculadora = new App()
calculadora.inicia()
