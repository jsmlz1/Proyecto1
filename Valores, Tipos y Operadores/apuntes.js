//bits

//0   0   0   0   1   1   0   1
 //128  64  32  16   8   4   2   1

//úmero binario 00001101. Sus dígitos no nulos representan 8, 4 y 1, y suman 13.

//Para números muy grandes o muy pequeños, también puedes usar notación
//científica agregando una e (de exponente), seguida del exponente del número:

2.998e8

// 2.998 × 108 = 299,800,000.

//Eso es 2.998 × 108 = 299,800,000.

//Aritmética
100 + 4 * 11

//Sumar 4 y 100, y luego multiplicar el resultado por 11
(100 + 4) * 11

//1 - 2 + 1, se aplican de izquierda a derecha: (1 - 2) + 1

//Números especiales:

//Infinity y -Infinity, representan el infinito positivo y negativo
//NaN no es un número”, aunque es un valor del tipo numérico

//Cadenas
`En el mar`
"Acostado en el océano"
'Flotando en el océano'

//se interpreta como un salto de línea
"Esta es la primera línea\nY esta es la segunda"
"Un carácter de nueva línea se escribe como \"\\n\"."
"concatenar"
"con" + "cat" + "e" + "nar"
`la mitad de 100 es ${100 / 2}`

//Operadores unarios

console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

//operadores binarios
console.log(- (10 - 2))
// → -8

//Valores booleanos
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false

console.log("Aardvark" < "Zoroaster")
// → true

console.log("Granate" != "Rubí")
// → true
console.log("Perla" == "Amatista")
// → false

console.log(NaN == NaN)
// → false

console.log(true && false)
// → false
console.log(true && true)
// → true

console.log(false || true)
// → true
console.log(false || false)
// → false

1 + 1 == 2 && 10 * 10 > 50

//operador ternario
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

//Conversión automática de tipos
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

console.log(null == undefined);
// → true
console.log(null == 0);
// → false

//Cortocircuito de operadores lógicos
console.log(null || "usuario")
// → usuario
console.log("Agnes" || "usuario")
// → Agnes

console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100
