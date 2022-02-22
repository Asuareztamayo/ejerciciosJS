// funcion para poner solo la primera letra mayuscula, las demás en minusculas
function capitaliza() {
  let input = document.getElementById("input").value;
  let palabra = input.toLowerCase().split(' ');
  let modificacion = document.getElementById("modificacion");
  for(i=0; i < palabra.length; i++){
    palabra[i] = palabra[i].charAt(0).toUpperCase() + palabra[i].substring(1);
    modificacion.innerHTML = palabra;
    console.log(palabra);
  }
  return palabra;
}
capitaliza();

//funcion para saber cuantas letras tiene un palabra
function palabra(word) {
  let numLetras = word.length;
  const esPar =
    numLetras % 2 === 0 ? "es un número par" : "no es un número par";
  const vocales = ["a", "e", "i", "o", "u"];
  const consonantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let separador = word.split("");
  console.log(separador);

  let cantidadVocales = 0;
  let cantidadConsonantes = 0;
  for (i = 0; i < separador.length; i++) {
    if (vocales.includes(separador[i])) {
      cantidadVocales++;
    } else {
      cantidadConsonantes++;
    }
  }
  console.log(
    word + " tiene " + numLetras + " letras,",
    esPar +
      `, la cantidad de vocales es ${cantidadVocales}, ` +
      `, la cantidad de consonantes es ${cantidadConsonantes}`
  );
}
palabra("barcelona");
