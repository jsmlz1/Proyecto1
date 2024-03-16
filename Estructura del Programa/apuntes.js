//Expresiones y declaraciones

1;
!false;

//Bindings

let caught = 5 * 5;

let ten = 10;
console.log(ten * ten);
// → 100

let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

let one = 1, two = 2;
console.log(one + two);
// → 3

var name = "Ayda";
const greeting = "¡Hola ";
console.log(greeting + name);
// → ¡Hola Ayda

//Funciones

prompt("Ingrese el código de acceso");

//palabras clave y palabras reservadas

"break case catch class const continue debugger default"
"delete do else enum export extends false finally for"
"function if implements import interface in instanceof let"
"new package private protected public return static super"
"switch this throw true try typeof var void while with yield"

//La función console.log

let x = 30;
console.log("el valor de x es", x);
// → el valor de x es 30

//Valores de retorno

console.log(Math.max(2, 4));
// → 4

console.log(Math.min(2, 4) + 100);
// → 102

//Control de flujo

let elNumero = Number(prompt("Elige un número"));
console.log("Tu número es la raíz cuadrada de " +
            elNumero * elNumero);

//Ejecución condicional

let elnumer= Number(prompt("Elige un número"));
if (!Number.isNaN(elNumero)) {
  console.log("Tu número es la raíz cuadrada de " +
              elNumero * elNumero);
}

if (1 + 1 == 2) console.log("Es verdad");
// → Es verdad

let elnumero = Number(prompt("Elige un número"));
if (!Number.isNaN(elNumero)) {
  console.log("Tu número es la raíz cuadrada de " +
              elNumero * elNumero);
} else {
  console.log("Oye. ¿Por qué no me diste un número?");
}

let num = Number(prompt("Escoge un número"));

if (num < 10) {
  console.log("Pequeño");
} else if (num < 100) {
  console.log("Mediano");
} else {
  console.log("Grande");
}

//Bucles while y do

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

let numero = 0;
while (numero <= 12) {
  console.log(numero);
  numero = numero + 2;
}
// → 0
// → 2
//   … etcétera

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024

let tuNombre;
do {
  tuNombre = prompt("¿Quién eres?");
} while (!tuNombre);
console.log("Hola " + tuNombre);

//Sangrado de Código

if (false != true) {
    console.log("Tiene sentido.");
    if (1 < 2) {
      console.log("No hay sorpresas ahí.");
    }
  }

  //bucles for

  for (let numero = 0; numero <= 12; numero = numero + 2) {
    console.log(numero);
  }
  // → 0
  // → 2
  //   … etcétera

  let resultado = 1;
for (let contador = 0; contador < 10; contador = contador + 1) {
  resultado = resultado * 2;
}
console.log(resultado);
// → 1024

//Saliendo de un bucle

for (let actual = 20; ; actual = actual + 1) {
    if (actual % 7 == 0) {
      console.log(actual);
      break;
    }
  }
  // → 21

  //Actualización concisa de enlaces

  for (let number = 0; number <= 12; number += 2) {
    console.log(number);
  }

  //Despachar un valor con switch

  if (x == "valor1") accion1();
else if (x == "valor2") accion2();
else if (x == "valor3") accion3();
else accionPredeterminada();

switch (prompt("¿Cómo está el clima?")) {
    case "lluvioso":
      console.log("Recuerda llevar un paraguas.");
      break;
    case "soleado":
      console.log("Vístete ligero.");
    case "nublado":
      console.log("Sal al exterior.");
      break;
    default:
      console.log("¡Tipo de clima desconocido!");
      break;
  }

  //Capitalización

  fuzzylittleturtle
fuzzy_little_turtle
FuzzyLittleTurtle
fuzzyLittleTurtle

//Comentarios

let saldoCuenta = calcularSaldo(cuenta);
// Es un hueco verde donde canta un río
saldoCuenta.ajustar();
// Atrapando locamente pedazos blancos en la hierba.
let informe = new Informe();
// Donde el sol en la orgullosa montaña resuena:
agregarAInforme(saldoCuenta, informe);
// Es un valle pequeño, espumoso como la luz en un vaso.

/*
  Encontré este número por primera vez garabateado en la parte posterior de un viejo
  cuaderno. Desde entonces, a menudo ha aparecido, mostrándose en
  números de teléfono y números de serie de productos que he
  comprado. Obviamente le gusto, así que he decidido quedármelo.
*/
const miNumero = 11213;

//Resumen
"declaraciones condicionales (if, else y switch) y bucles (while, do y for)."

//Haciendo un triángulo con bucles
/*
#
##
###
####
#####
######
#######
*/

//Puede ser útil saber que puedes encontrar la longitud de una cadena escribiendo .length después de ella.

let abc = "abc";
console.log(abc.length);
// → 3

/* Tablero de ajedrez 8x8.

# # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/