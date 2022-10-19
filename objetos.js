const datosPersonales = {
  nombre: "Juan",
  apellido: "Ortiz",
  edad: 20,
  address: {
    ciudad: "Cali",
    zip: 23.55,
    lat: 31321,
    ing: 121,
  },
};

//const datosPersonales2 = datosPersonales;
const datosPersonales2 = { ...datosPersonales };

datosPersonales.edad = 21;
console.log(datosPersonales.edad);
// console.log(datosPersonales.edad);

// console.log(datosPersonales["nombre"]);
// console.log(datosPersonales.address);

// datosPersonales.address.ciudad = "Londres";
// console.log(datosPersonales.address);

console.log(datosPersonales2.edad);
