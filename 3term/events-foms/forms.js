const select = document.getElementById('colorSelect');
const opciones = select.options;
// Genera colores aleatorios únicos
function generarColorHex() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}
// Para almacenar colores ya usados
const coloresUsados = new Set();
function obtenerColorUnico() {
  let color;
  do {
    color = generarColorHex();
  } while (coloresUsados.has(color));
  coloresUsados.add(color);
  return color;
}
// Asignar colores únicos a cada opción
for (let i = 0; i < opciones.length; i++) {
  const color = obtenerColorUnico();
  opciones[i].style.color = color;
  // También almacena el color como data para aplicarlo luego al <select>
  opciones[i].dataset.color = color;
}
// Cambiar color del texto del <select> al elegir una opción
select.addEventListener('change', function () {
  const colorSeleccionado = select.options[select.selectedIndex].dataset.color;
  select.style.color = colorSeleccionado;
});
// Color inicial del select
select.style.color = select.options[select.selectedIndex].dataset.color;

//Exercise
let submit=document.querySelector("input[type=submit]")
let fname=document.querySelector("input[name=fn]")
let lname=document.querySelector("input[name=ln]")
let br=document.querySelector("input[name=lbr]")
let ag=document.querySelector("input[name=ag]")
let em=document.querySelector("input[name=em]")
let country=document.querySelector("input[name=country]")
let gender=document.querySelector("input[name=gender]")
let color=document.querySelector("input[name=color]")
let nwps=document.querySelector("input[name=nwps]")

submit.addEventListener("click",printInfo);

function printInfo(){
    console.log(fname.value+" "+lname.value+" "+br.value+" "+ag.value+" "+em.value+" "+country.value+" "+gender.value+" "+color.value+" "+nwps.value)
}