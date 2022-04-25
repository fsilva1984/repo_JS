
//promise

const promises = new Promise((resolve, reject)=>{
    const logUser = 'online';

    if (!logUser) resolve("online");
    else { reject(logUser)};
});

promises
    .then((data)=> data)
    .then((data)=> console.log(data.toUpperCase()))
    .catch((err)=> console.log(err))


// ######################################################################



