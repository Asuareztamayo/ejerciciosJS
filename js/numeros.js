// function par(x){
//   if (x%2===0){
//   return "par";
//   }else{
//   return "impar";
//   }
//   }
//   //probamos la función
//   respuesta = par(23);
//   console.log(respuesta);

//forma de hacerlo utilizando operadores ternarios, para tener un código mas limpio y con menos lineas, sin tanto if o else.
function par(numero) {
  const esPar = numero % 2 === 0 ? 'es par' : 'no es par '
  console.log(esPar)
}
par(10);

//funcion numero mayor
function mayor(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
numeros = mayor(3, 9);
console.log(numeros);

//otra forma de hacerla, utilizando un método de JS
// function numMayor(numero1, numero2){
//   let mayor = Math.max(numero1,numero2)
//   console.log(mayor);
// }
// numMayor(3,5)

//funcion datos
function datos(x){
  const numEsPar = x % 2 === 0 ? 'es par, ' : 'no es par, '
  //es la misma que la primera, pero para que me aparezca en la misma linea debo repetir código.
  const divisible3 = x % 3 === 0 ? 'es divisible por 3, ' : 'no es divisible por 3, ';
  const divisible5 = x % 5 === 0 ? 'es divisible por 5, ' : 'no es divisible por 5, ';
  const divisible7 = x % 7 === 0 ? 'es divisible por 7 ' : 'no es divisible por 7';
  console.log(numEsPar, divisible3, divisible5, divisible7);
}
datos(1240);

//funcion sumar valores
function sumaValores(array) {
    let suma = 0;
    array.forEach (function (numero){
        suma += numero;
    });
    return suma
}
let nombres = [1,3,9,2,3];
let suma = sumaValores(nombres);
console.log(suma);

//funcion factorial
function factorial(numero){
    let total = 1;
    for(i=1; i <= numero; i++){
        total = total * i;
    }
    return total;
}
console.log(factorial(10));

//funcion numero primo
function primo(x){
    if(x == 0 || x == 1 || x == 4)
    return "no es primo";
    for (let i = 2; i < x / 2; i++) {
        if (x % i == 0)
        return "no es primo"
    }
    return "es primo"
}
console.log(primo(13))

//funcion sistema fibonacci
function fibonacci(x) {
    let fibo =[0,1];
    for (i = 2; i <= x; i++){
        fibo[i] = fibo [i - 2] + fibo[i - 1];
    }
    return String(fibo);
}
console.log(fibonacci(10));

//funcion 5 cifras de numeros primos, NO ME RECONOCE EL BREAK
// function primoCifras(x){
//     for (i = (10 ** (x - 1)); i <= ((10 ** x) - 1); i++);
//     contador = 0;
//     for(j = 1; j <= i; j++){
//         if (i % j === 0){
//             contador = contador + 1
//         }
//     }if (contador > 2) {
//     }else {
//         break
//     }
//     return (`El primer numero de ${x} cifras es: ${i}`)
// }
// respuesta = primoCifras(5);
// console.log(respuesta);


