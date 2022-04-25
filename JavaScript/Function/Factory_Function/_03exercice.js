
//calculadora imc com uma funcao criadora de objetos


function IMC(weight, height){
  return{
    weight: weight,
    height: height,
    msg: "str",
    get imc(){
      let calc = this.weight / (this.height ** 2).toFixed(2)
      if(calc <= 18.5) return "Vc esta a baixo deo peso";
      if(calc > 18.5 && calc <= 24.9) return "Peso Normal";
      if(calc > 24.9 && calc <= 29.9) return "Vc esta a cima do peso";
      if(calc > 29.9 && calc <= 34.9) return "Obesidade Grau I ";
      if(calc > 34.9 && calc <= 39.9) return "Obesidade Grau II ";
      if(calc >= 39.9 ) return "Obesidade Grau III ou obesidade morbida "
    },
   
  }
}

const Calc = IMC(155, 1.65)

console.log(Calc.imc)

















