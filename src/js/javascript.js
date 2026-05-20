/**************************************************************/
/* Módulo profesional: Lenguajes de Marcas y Sistemas de      */
/* Gestión de Información                                     */
/* Unidad didáctica 05: JSON y los SGBD                       */
/* Proyecto Aelix Stream - Conexión frontend y backend        */
/**************************************************************/


// --------------------------------------------------
// CONSTANTES NECESARIAS
// --------------------------------------------------

// Definimos el puerto donde se ejecuta nuestro servidor
const PORT = 3000;

// Guardamos la URL base de nuestro backend
const ENDPOINT_SERVER = "http://localhost";

// Endpoint principal de películas
const ENDPOINT_PELICULAS = "peliculas";


// Esperamos a que cargue todo el HTML
document.addEventListener("DOMContentLoaded", () => {

    // --------------------------------------------------
    // REFERENCIAS HTML
    // --------------------------------------------------

    const botonMostrarPeliculas = document.getElementById("botonmostrarpeliculas");

    const botonInsertarPelicula = document.getElementById("botoninsertarpelicula");

    const botonActualizarPelicula = document.getElementById("botonactualizarpelicula");

    const botonEliminarPelicula = document.getElementById("botoneliminarpelicula");

    const mensajesalida = document.getElementById("peliculas");


    // --------------------------------------------------
    // EVENTOS
    // --------------------------------------------------

    botonMostrarPeliculas.addEventListener("click", () => {

        consultarPeliculas();

    });


    botonInsertarPelicula.addEventListener("click", () => {

        const pelicula = {

            titulo: document.getElementById("titulo").value,

            anio: document.getElementById("anio").value,

            director: document.getElementById("director").value,

            descripcion: document.getElementById("descripcion").value,

            puntuacion: document.getElementById("puntuacion").value,

            id_categoria: document.getElementById("id_categoria").value

        };

        insertarPelicula(pelicula);

    });


    botonActualizarPelicula.addEventListener("click", () => {

        const pelicula = {

            id: document.getElementById("id_actualizar").value,

            titulo: document.getElementById("titulo_actualizar").value,

            anio: document.getElementById("anio_actualizar").value,

            director: document.getElementById("director_actualizar").value,

            descripcion: document.getElementById("descripcion_actualizar").value,

            puntuacion: document.getElementById("puntuacion_actualizar").value,

            id_categoria: document.getElementById("categoria_actualizar").value

        };

        actualizarPelicula(pelicula);

    });


    botonEliminarPelicula.addEventListener("click", () => {

        const pelicula = {

            id: document.getElementById("id_eliminar").value

        };

        eliminarPelicula(pelicula);

    });


    // --------------------------------------------------
    // MOSTRAMOS LAS PELÍCULAS
    // --------------------------------------------------

    function mostrarPeliculas(peliculas) {

        mensajesalida.innerHTML = "";

        if (peliculas.length === 0) {

            mensajesalida.innerHTML = "<p>No se encontraron peliculas.</p>";

        } else {

            peliculas.forEach((pelicula, index) => {

                let div = document.createElement("div");

                div.classList.add("pelicula");

                div.innerHTML = `

                    <div class="numero-fondo">${index + 1}</div>

                    <img src="img/banner.jpg">

                    <h3>${pelicula.titulo}</h3>

                    <p><strong>Año:</strong> ${pelicula.anio}</p>

                    <p><strong>Director:</strong> ${pelicula.director}</p>

                    <p><strong>Puntuación:</strong> ${pelicula.puntuacion}</p>

                `;

                mensajesalida.appendChild(div);

            });

        }

    }


    // --------------------------------------------------
    // CONSULTAMOS PELÍCULAS
    // --------------------------------------------------

    function consultarPeliculas() {

        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);

        ENDPOINT_SERVER_PUERTO.port = PORT;

        const ENDPOINT_SERVER_PELICULAS = new URL(

            ENDPOINT_PELICULAS,
            ENDPOINT_SERVER_PUERTO

        );

        fetch(ENDPOINT_SERVER_PELICULAS)

            .then(respuesta_servidor => {

                if (!respuesta_servidor.ok) {

                    throw new Error("Error al obtener las peliculas.");

                }

                return respuesta_servidor.json();

            })

            .then(datos_peliculas => {

                mostrarPeliculas(datos_peliculas);

            })

            .catch(error => {

                console.error("Error consultando peliculas:", error);

            });

    }


    // --------------------------------------------------
    // INSERTAMOS PELÍCULA
    // --------------------------------------------------

    function insertarPelicula(pelicula) {

        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);

        ENDPOINT_SERVER_PUERTO.port = PORT;

        const ENDPOINT_SERVER_INSERTAR_PELICULAS = new URL(

            ENDPOINT_PELICULAS,
            ENDPOINT_SERVER_PUERTO

        );

        fetch(ENDPOINT_SERVER_INSERTAR_PELICULAS, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(pelicula)

        })

            .then(respuesta_servidor => {

                if (!respuesta_servidor.ok) {

                    throw new Error("Error al insertar la pelicula.");

                }

                return respuesta_servidor.json();

            })

            .then(datos => {

                console.log(datos);

                consultarPeliculas();

            })

            .catch(error => {

                console.error("Error insertando pelicula:", error);

            });

    }


    // --------------------------------------------------
    // ACTUALIZAMOS PELÍCULA
    // --------------------------------------------------

    function actualizarPelicula(pelicula) {

        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);

        ENDPOINT_SERVER_PUERTO.port = PORT;

        const ENDPOINT_SERVER_ACTUALIZAR_PELICULAS = new URL(

            ENDPOINT_PELICULAS + `/${pelicula.id}`,
            ENDPOINT_SERVER_PUERTO

        );

        fetch(ENDPOINT_SERVER_ACTUALIZAR_PELICULAS, {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(pelicula)

        })

            .then(respuesta_servidor => {

                if (!respuesta_servidor.ok) {

                    throw new Error("Error al actualizar la pelicula.");

                }

                return respuesta_servidor.json();

            })

            .then(datos => {

                console.log(datos);

                consultarPeliculas();

            })

            .catch(error => {

                console.error("Error actualizando pelicula:", error);

            });

    }


    // --------------------------------------------------
    // ELIMINAMOS PELÍCULA
    // --------------------------------------------------

    function eliminarPelicula(pelicula) {

        const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);

        ENDPOINT_SERVER_PUERTO.port = PORT;

        const ENDPOINT_SERVER_ELIMINAR_PELICULAS = new URL(

            ENDPOINT_PELICULAS + `/${pelicula.id}`,
            ENDPOINT_SERVER_PUERTO

        );

        fetch(ENDPOINT_SERVER_ELIMINAR_PELICULAS, {

            method: "DELETE"

        })

            .then(respuesta_servidor => {

                if (!respuesta_servidor.ok) {

                    throw new Error("Error al eliminar la pelicula.");

                }

                return respuesta_servidor.json();

            })

            .then(datos => {

                console.log(datos);

                consultarPeliculas();

            })

            .catch(error => {

                console.error("Error eliminando pelicula:", error);

            });

    }

});