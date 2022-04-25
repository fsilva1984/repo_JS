
//Constructor function




function fn1(name) {
  this.name = name

  function msg() {
    return `hi ${name}`
  }
  console.log(msg())
}

fn1("Silva")


function params1(name, lastName, age) {
  this.name = name
  this.lastName = lastName
  this.age = age

  function lista() {
    return `Frist Name: ${name}|Last Name: ${lastName}|Age: ${age}`
  }

  function msg() {
    return `  ${"User Data Basic"} \n ${lista()}`
  }

  console.log(msg())


}
params1('flavio', 'Silva', 37)





