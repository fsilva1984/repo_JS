
function criaCalculadora(){
  return{
    display: document.querySelector(".d-splay"),//selecionei o display
    

    inicia(){
      this.clickBt()
    },

    enter(e){
      this.display.addEventListener('keypress', e =>{
       if( e.which == "Enter" || e.which == 13){
         this.total()
       }
      })//
    },

    btClear(){//funcao que substitue um elemento por nada
      this.display.value = " "
    },

    btDelete(){
      this.display.value = this.display.value.slice(0, -1)
    },

    total(){ 
      let conta = String(this.display.value)
      let result = eval(conta)
     return this.display.value = result
    },
      
    clickBt(){
      document.addEventListener("click", e =>{/*esse evento captura todos os clicks  em qualquer lugar da tela*/
        let el = e.target
        if(el.classList.contains("bt-num")){/*aqui eu faco o controle , pergunto o que o target traz ou seja onde foi tocado na tela contem a class 'bt-num'?*/
          this.btParaDisplay(el.innerText)/*e continuo , se a resposta do if e true, entao eu quero o texto que esta no elemento dessa class*/
        }
        
        if(el.classList.contains("bt-clear")){/* aqui digo algo parecido com o if a cima, se o target falo que o lugar da tela  clicada foi no elemento da class bt-clear*/
          this.btClear()//entao chame este metodo
        }

        if(el.classList.contains("bt-del")){
          this.btDelete()
        }

        if(el.classList.contains("bt-eq")){
          this.total()
        }
      })
    },

    btParaDisplay(valor){//no parametro esta o valor do target
      this.display.value += valor/*concateno o valor do target com o valor do display */ 
    }
  }
}

const calculadora = criaCalculadora()

calculadora.inicia()


/*

function inicia(){
  let total = String(input.value)
  let result = eval(total)
  exit.innerHTML = result;
  }


  function enter(event){
 
    let x = event.key
    if(x == "Enter"){
      verifica();
      inicia()
    }
  }
  enter()*/