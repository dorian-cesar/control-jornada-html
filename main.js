//Documento para control de vistas 
// Desactiva todas las paginas cuyo ID comienza con "page"
function blankPage() {
    // Selecciona todos los elementos cuyo ID comienza con "page"
    var paginas = document.querySelectorAll('[id^=page]');
  
    // Itera sobre cada página y las oculta cambiando su estilo de visualización a "none"
    paginas.forEach(page => {
      page.style.display = 'none';
    });
}

function switchside(prefix) {
  // Selecciona todos los elementos cuyo ID comienza con "page"
  var elementos = document.querySelectorAll(`[id^=${prefix}]`);

  // Itera sobre cada elemento y verifica si está visible o no.
  elementos.forEach(page => {
    var computedStyle = window.getComputedStyle(page);
    if (computedStyle.getPropertyValue('display') === 'none') {
      page.style.display = 'block'; // Si está oculto, mostrarlo
    } else {
      page.style.display = 'none'; // Si está visible, ocultarlo
    }
  });
 }

/*/ Función para restaurar el estado de visibilidad de los elementos al cargar la página
function restoreVisibility() {
  var elementos = document.querySelectorAll('[id^=page]');
  elementos.forEach(page => {
    var prefix = page.id.split('-')[0];
    var visibility = localStorage.getItem(prefix + '_visibility');
    if (visibility) {
      page.style.display = visibility;
    }
  });
}

// Ocultar las páginas al cargar el script por primera vez y cada vez que se recargue la página
window.addEventListener('load', function() {
  blankPage();
  restoreVisibility();
});*/


function openModal(modal){
  // Muestra el overlay y el modal correspondiente cambiando su estilo de visualización a "block"
  document.getElementById(modal+'-overlay').style.display = 'block';
  document.getElementById(modal+'-modal').style.display = 'block';
}
function closeModal(modal){
  // Oculta el overlay y el modal correspondiente cambiando su estilo de visualización a "none"
  document.getElementById(modal+'-overlay').style.display = 'none';
  document.getElementById(modal+'-modal').style.display = 'none';
}



function panelControl(){
    blankPage();// Oculta todas las páginas
    document.getElementById('pageControl').style.display = 'block';
}
function estado(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageEstado').style.display = 'block';
}
function notificaciones(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageNotificaciones').style.display = 'block';
}
function perfilConductor(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pagePerfilConductor').style.display = 'block';
}
function tarjetas(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageTarjetas').style.display = 'block';
}
function historialAct(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageHistorialActividades').style.display = 'block';
}
function tiempoReal(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageTiempoReal').style.display = 'block';
}
function historialInfo(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageHistorialInformes').style.display = 'block';
}
function alertasNot(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageAlertas').style.display = 'block';
}
function infoGeneral(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageInfoGeneral').style.display = 'block';
}
function velocidad(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageVelocidad').style.display = 'block';
}
function marcacion(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageInfoMarcacion').style.display = 'block';
}
function mapa(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageMapa').style.display = 'block';
}
//funciones de menu usuario 

function mapaInteractivo(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageMapaInteractivo').style.display = 'block';
}
function vehiculo(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageVehiculos').style.display = 'block';
}
function empresas(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageEmpresas').style.display = 'block';
}
function usuarios(){
  blankPage();// Oculta todas las páginas
  document.getElementById('pageUsuarios').style.display = 'block';
}



document.addEventListener("DOMContentLoaded", function() {
  var level = parseInt(localStorage.getItem('level'));
  if(level < 10){
    var csUsuarioElement = document.getElementById('csUsuario');

    if(csUsuarioElement) csUsuarioElement.remove();

  }
});


