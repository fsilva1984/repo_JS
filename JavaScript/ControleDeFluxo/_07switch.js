
//switch





///FALTA VALIDAR O FORMULARIO !!!








const bt = document.querySelector('#bt')
const exitCode =document.querySelector(".exitCode")

const worker = {
  jhon:{
    userName: 'jhon123',
    passwd: 'jhon123'

  },
  marcus:{
    userName: 'marcus123',
    passwd: 'marcus123'

  },
  bela:{
    userName: 'bela123',
    passwd: 'bela123'

  },
  rose:{
    userName: 'rose123',
    passwd: 'rose123'

  }
}



bt.addEventListener('click', (e)=>{

  let userName = document.getElementById('userName').value
  let passwd = document.getElementById('passwd').value

 
 console.log(e.target)//so para relembrar, o meu evento alvo e o botao


  //get user & passwd

  //aqui eu pego so as chaves
  //console.log(Object.keys(worker).filter((i)=>{ arrUser.push(i)}))
  Object.values(worker).filter((i)=>{ i.userName})
  console.log(use)
  const pass = Object.values(worker).filter((i)=>{ i.passwd})
  console.log(pass)

  if(use == userName){
    releaseAcess()
    console.log('Passwd Ok')//debug
  } else if(userName == ''){

    alert('not let input void')
  console.log("input void")//debug

  } else {
    alert('Username invalid !')
    console.log('Not Fund')//debug
  }

  if(pass == passwd){
    releaseAcess()
    console.log('Passwd Ok')//debug
} else if(passwd == ''){

  alert('not let input void')
  console.log("input void")//debug

} else {
  alert('Password invalid !')
  console.log('Not Fund')//debug
}

 function releaseAcess() {
  exitCode.innerHTML ='Usuario Online'
 }
 
})




