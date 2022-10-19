const arreglo1 = [0];
arreglo1.push(1);
arreglo1.push(2);
arreglo1.push(3);
arreglo1.push(4);
arreglo1.push(5);

let arreglo2 = arreglo1;
arreglo2.push(6);

console.log(arreglo1);
console.log(arreglo2);

let arreglo3 = [...arreglo1, 7];

console.log(arreglo3);

let arreglo4 = arreglo3.map(function (num) {
  return num * 2;
});
console.log(arreglo4);
