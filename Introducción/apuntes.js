//programa para sumar los números del 1 al 10 y mostrar el resultado: 1 + 2 + ... + 10 = 55

//00110001 00000000 00000000
//00110001 00000001 00000001
//00110011 00000001 00000010
//01010001 00001011 00000010
//00100010 00000010 00001000
//01000011 00000001 00000000
//01000001 00000001 00000001
//00010000 00000010 00000000
//01100010 00000000 00000000

//Almacena el número 0 en la ubicación de memoria 0.

//Almacena el número 1 en la ubicación de memoria 1.

//Almacena el valor de la ubicación de memoria 1 en la ubicación de memoria 2.

//Resta el número 11 al valor en la ubicación de memoria 2.

//Si el valor en la ubicación de memoria 2 es el número 0, continúa con la instrucción 9.

//Suma el valor de la ubicación de memoria 1 a la ubicación de memoria 0.

//Añade el número 1 al valor de la ubicación de memoria 1.

//Continúa con la instrucción 3.

//Muestra el valor de la ubicación de memoria 0.

// Establecer “total” en 0.
//Establecer “count” en 1.
//[bucle]
//Establecer “compare” en “count”.
//Restar 11 de “compare”.
//Si “compare” es cero, continuar en [fin].
//Sumar “count” a “total”.
//Añadir 1 a “count”.
//Continuar en [bucle].
//[fin]
//Mostrar “total”.

let total = 0, count = 1; //declarar variables
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
// → 55

console.log(suma(rango(1, 10)));
// → 55

//Convenciones tipográficas

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log(factorial(8));
// → 40320