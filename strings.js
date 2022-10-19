const nombre = "Juan";
const apellido = "Ortiz";
const fullName = `${nombre} ${apellido}`;
console.log(fullName);

function getHi(fullName) {
  return `Hello ${fullName}`;
}
console.log(getHi(fullName));

const saludando = getHi("Fredy Ballesteros");
console.log(saludando);
