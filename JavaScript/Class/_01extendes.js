
//extendes

class Car {//nome da classnomeada

  constructor(brand, mod, age, color){
    this.brand = brand;
    this.mod = mod;
    this.age = age;
    this.color = color;
  }

  showCar(){
    return `${this.brand} ${this.mod} ${this.age} ${this.color}`
  };
}

class Children extends Car {
  constructor(brand, mod, age, color){//construtor
    super();//vital importancia
    this.brand = brand;
    this.mod = mod;
    this.age = age;
    this.color = color;
  }
  C2show(){
    return this.showCar()
  }
}


let C1 = new Car("ford", "mustang", "1967", "red" );

console.log(C1.brand)
console.log(C1.showCar())

//####################################################

let C2 = new Children("chevrolet", "camaro", "1969", "preto")

console.log(C2.brand)
console.log(C2.C2show())

//let exit = document.getElementById("exit")
//exit.innerHTML = C2.C2show()

//##########################################



class Root {
  constructor(param){
    this.param = param;
  }

  calc(){
    return Math.floor(Math.sqrt(this.param))
  }
}

const rooSqrt = new Root(9)

console.log(rooSqrt.calc())

class RootChield extends Root{
  constructor(param1){
     super();
    this.param1 = param1;
  }
   mult(){
    return this.param1 - this.calc() 
  }
}

const calTron = new RootChield(23, 9)

console.log(calTron.mult())