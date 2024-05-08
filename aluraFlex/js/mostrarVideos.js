import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")
// cada vez que se ejecute la data-lista se estara creando un li 
export default function crearCard(titulo,descripcion,url,imagen){
    const video = document.createElement("li");
    // modificando la clase del video 
    video.className="videos__item";
    //Indicamos cual va hacer la estructura que va segir este video 
    video.innerHTML=`<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src="${imagen}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
    </div>`;

    return video;
}
// tiene que ser asincrono ya que la funcion que estamos llamando es asincrona
async function listarVideos(){
    try {
        const listaAPI = await conexionAPI.listarVideos()
        listaAPI.forEach(video=>lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagen)))
    } catch (error) {
        lista.innerHTML=`<h2 class="mensaje__titulo">Ha oxurrido un problema con la conexion :(</h2>`
    }
      
   
}

listarVideos()
