function hoy(){
    let fecha = new Date();
    let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    console.log(fecha.toLocaleDateString ("es-ES" , options));
}
hoy()
function navidad(){
    let hoy = new Date();
    let navidad = new Date(2022,11,24);
    let segundos = 1000*60*60*24;
    let contador = Math.round(navidad.getTime() - hoy.getTime()) / (segundos);
    let total = Math.floor(contador);
    console.log(`Faltan ${total} días para navidad`);
}
navidad();