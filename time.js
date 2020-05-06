//alert('Pagina en mantenimiento, avisaré cuando tengan tareas');
var etiqueta = document.getElementById("counter-in");
var hoy = new Date();
var fecha = hoy.getDate() + "-" +(hoy.getMonth()+1) +"-"+hoy.getFullYear();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
var fechaYHora = fecha + ' ' + hora;
console.log(hoy);
console.log(fecha);
console.log(hora);
console.log(fechaYHora);
var fechaActual= (hoy.getDate()+1);
var fechaFinal=(hoy.getDate()+2);
var fli = fechaFinal-fechaActual;

if ( fli < fechaFinal&& fli !=0){
  etiqueta.innerHTML = 'Dias restantes ' + fli;
}else
{
  etiqueta.innerHTML = 'Entrega finalizada';
}
