
// creamos una funcion asincrona para listar los videos 
async function listarVideos(){
    // el metodo fetch que recibe como parametro la url de ese servidor
    const conexion = await fetch("http://localhost:3001/videos");

    const conexionConvertida = conexion.json();

    //console.log(conexionConvertida)
    /*conexionConvertida es una promesa que se resuelve a un objeto JSON. */
    return conexionConvertida;
}

/*Crear el metodo que nos ayudara o nos permitira agregar nuevo videos ok 
vamos a estar realizando una solicitud del tipo POST*/


async function enviarVideo(titulo,descripcion,url,imagen){
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion} mil visualizaciones`,
            url:url,
            imagen:imagen
        })
    })
    const conexionConvertida= conexion.json();
    // que pasaria si esa conexion de solicitud no ocurre
    if (!conexion.ok) {
        // nosotros bamos a arrojar un error
        throw new Error ("Ha ocurrido un erros al enviar el video 404")
    } 
    return conexionConvertida;
}
// Vamos a trabajar con otra funcion para hacer la busqueda
// esta funcion nos va a permitir hacer un llamados al server con un get
async function buscarVideos(palabraClave){
    // vamos a crear una contante que va estar esperando la consulta
    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    // otra constante que nos va a permitir ver el doc. jason las consulyanyes de esa consulta
    const conexionConvertida = conexion.json();
    return conexionConvertida
}

export const conexionAPI={
    listarVideos,enviarVideo,buscarVideos
}
