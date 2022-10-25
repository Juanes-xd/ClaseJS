
/* let nombre1 = "Juan";
let nombre2 = nombre1;

console.log(nombre1);
nombre2 = "Fredy";
console.log(nombre2); */

const valores1= {
    nombre : "Juan",
    apellido : "Olaya",
    edad : 20
}

const valores2 = valores1;

console.log(valores1.edad);

valores1.edad = 25;
console.log(valores2.edad);

console.log(valores1);
console.log(valores2);