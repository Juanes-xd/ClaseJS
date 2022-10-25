
const getUser = () => (
    {
        uid: 'KLH12345',
        username: 'fredyunivalle',
        ubicacion: {
            latitud: 50.132,
            longitud: 3257.1
        }
    }
)
 
/* console.log(getUser());
const { uid:ident } = getUser(); 

console.log(ident);

const { username } = getUser(); 

console.log(username);

const { ubicacion } = getUser(); 
const { ubicacion:{latitud,longitud} } = getUser(); 

console.log(latitud);
console.log(longitud); */

const arreglo = [7,"Hola",true,{nombre:"Fredy",edad:25}]

const [, , ,pos4] = arreglo;

console.log(pos4.edad);

const {edad} = pos4;

console.log(edad);