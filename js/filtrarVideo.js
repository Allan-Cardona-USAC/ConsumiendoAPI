import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideo(evento){
    //para que no se ejecute el evento al iniciar la pagina
    evento.preventDefault();
   // const para capturar lista
    const lista = document.querySelector("[data-lista]");
    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);
    /*va permitir la lista inicial que contiene los elementos agregados al inicio
        */
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    busqueda.forEach(video=>lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagen)));
    // condicion de manejo de error en la busqueda
    if (busqueda.length==0) {
        lista.innerHTML=`<h2 class="mensaje__titulo">No fueron encontrados datos para ${datosDeBusqueda}</h2>`
    }
    //console.log(busqueda)
    
}
// tenemo que indicar que se ejecunte cuando hagamos click en el boton de seach
const boton = document.querySelector("[data-boton-busqueda]");
// vamos a que el boton ejecute el evento al ser click
boton.addEventListener("click",evento=>filtrarVideo(evento))
// correccio al presionar entes en el evento de busqueda
const inputEle = document.getElementById('buscar');
    inputEle.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
     if (key == 13) {
    filtrarVideo(e)
                    }
    });