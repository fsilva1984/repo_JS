
//switch





///FALTA VALIDAR O FORMULARIO !!!








const bt = document.querySelector('#bt')
const exitCode =document.querySelector(".exitCode")

 export const worker = {
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

  let username = document.getElementById('userName').value
  let password = document.getElementById('passwd').value

 
 console.log(e.target)//so para relembrar, o meu evento alvo e o botao


  //get user & passwd

  //aqui eu pego so as chaves
  //console.log(Object.keys(worker).filter((i)=>{ arrUser.push(i)}))
  let user = []
  Object.values(worker).filter((i)=>{ user.push(i.userName)})
 
  let pass = []
  Object.values(worker).filter((i)=>{ pass.push(i.passwd) })
  

  if(user.includes(username) && pass.includes(password)){
    exitCode.innerHTML ='Usuario Online'
    console.log('User Ok')//debug
  } else if(username == ''){

    alert('not let input void')
   console.log("input void")//debug

  } else {
    alert('Username or Password invalid !')
    console.log('Not Fund')//debug
  }

 
 if(password == ''){

  alert('not let input void')

  console.log("input void")//debug

}

 
})




