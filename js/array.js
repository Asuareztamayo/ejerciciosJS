function analiza(array){
    let numeros = [2,4,8,-2];
    let suma = 0;
    numeros.forEach(function(a){suma += a;})
    let mayor = Math.max(2,4,8,-2); 
    let menor = Math.min(2,4,8,-2); 
    console.log(`la suma de los numeros es ${suma}, ` + `el numero mayor es ${mayor} ` + `y el menor es ${menor}.`);
}
analiza();