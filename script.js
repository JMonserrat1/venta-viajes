
import{barcelona, roma, paris, londres} from './ciudades.js'

//                      OBTENER LOS DOCUMENTOS DEL DOM

let enlaces = document.querySelectorAll(' a ')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')


//                  AGREGAR UN EVENTO CLICK A CADA ENLACE

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function( ){
        //Remover la clase active de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        //Agregar la clase active en el enlace actual
        this.classList.add('active')
        //Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML =contenido.precio
        //MOSTRAR EL CONTENIDO EN EL DOM
    })
});

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE CIUDADES.JS

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'Paris' : paris,
        'Londres' : londres
    };
    return contenido[enlace]
}
