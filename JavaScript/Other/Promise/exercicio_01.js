
//Promise


//Link da aula   https://www.youtube.com/watch?v=wTGPhsGJ0sw

//construindo a promise
const promise = new Promise((resolve, reject)=>{
    //objeto da avaliacao
    const user = "onlines"

    //testando o objeto
    if (user == "online") resolve("Aqui foi concluida")
    else { reject("Aqui foi rejeitada")}

})

promise//o then recebe a resposta da promise
    .then((value) => value.toUpperCase())
    .then((data)=> console.log(data))
    //para nao levantar uma simples execao usamos o catch que retorna o reject
    .catch((err)=> console.log( err))


