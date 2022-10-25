const promesa = new Promise( (resolve,reject) => {
    setTimeout(() => {
        // console.log("Se cumplio el tiempo");
        resolve({nombre:"Juan",edad:20,ubicacion:{casa:31,calle:"losRosales"}})
        // reject("No se cumplio el objetivo")
    },2000);
 } )

 promesa.then( ({ubicacion:{casa,calle}}) => {
    console.log(casa,calle)
 }).catch(
    console.log
 )