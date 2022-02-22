function analiza(array) {
    let suma = 0;
    array.forEach(function (a) {
        suma += a;
    });
    let mayor = Math.max(...array);
    let menor = Math.min(...array);
    return(`la suma de los numeros es ${suma}, ` + `el numero mayor es ${mayor} ` + `y el menor es ${menor}.`);
    }
console.log(analiza([2,4,8,-2]));
