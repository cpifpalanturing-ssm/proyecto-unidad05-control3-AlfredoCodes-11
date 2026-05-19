/*
    En este archivo desarrollamos el backend principal de nuestro proyecto Aelix Stream.
    Aquí nos encargamos de crear el servidor con Node.js y Express, conectar nuestra
    aplicación con la base de datos MySQL y crear las rutas de la API para poder obtener
    información de las películas. También utilizamos JSON para enviar los datos al frontend
    y conseguir que la página pueda mostrar la información de forma dinámica.
*/

// Importamos los módulos necesarios para nuestro proyecto
const express = require("express"); // Framework para crear el servidor
const mysql = require("mysql2"); // Cliente para conectarnos a MySQL
const cors = require("cors"); // Permite conectar frontend y backend
const path = require("path"); // Nos ayuda a trabajar con rutas de carpetas

// Creamos nuestra aplicación con Express
const app = express();

// Habilitamos el uso de JSON y CORS
app.use(cors());
app.use(express.json());

// Hacemos que Express pueda mostrar nuestro frontend desde src/
app.use(express.static(path.join(__dirname, "../src")));

// Definimos el puerto donde se ejecutará el servidor
const PORT = 3000;


// CONFIGURACIÓN DE LA CONEXIÓN MYSQL
const conexion = mysql.createConnection({

    host: "localhost", // Dirección del servidor MySQL
    user: "aelix", // Usuario de MySQL
    password: "aelix2026", // Contraseña de MySQL
    database: "aelix_stream" // Nombre de nuestra base de datos

});


// COMPROBAMOS LA CONEXIÓN CON MYSQL
conexion.connect((error) => {

    if(error){

        console.log("Error conectando con MySQL");
        console.log(error);

    } else {

        console.log("Conexión correcta con MySQL");

    }

});


// ------------------------------
// RUTAS GET
// ------------------------------


// Función para obtener todas las películas
function consultarPeliculas() {

    // Creamos la URL de nuestro servidor
    const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);

    ENDPOINT_SERVER_PUERTO.port = PORT;


    // Creamos la URL del endpoint de películas
    const ENDPOINT_SERVER_PELICULAS = new URL(

        ENDPOINT_OBTENER_PELICULAS,

        ENDPOINT_SERVER_PUERTO

    );


    // Hacemos la petición al backend
    fetch(ENDPOINT_SERVER_PELICULAS)

    .then(respuesta_servidor => {

        // Si hay error lanzamos mensaje
        if(!respuesta_servidor.ok){

            throw new Error("Error al obtener las películas.");

        }

        // Convertimos la respuesta a JSON
        return respuesta_servidor.json();

    })

    .then(datos_peliculas => {

        // Mostramos las películas en pantalla
        mostrarPeliculas(datos_peliculas);

    })

    .catch(error => {

        // Mostramos error en consola
        console.error("Error consultando películas:", error);

        // Mostramos mensaje de error en pantalla
        mensajeSalida.innerHTML = `

            <p><b>Error:</b> ${error}</p>

        `;

    });

}


// Función para insertar una nueva película
function insertarPelicula(pelicula) {

    // Creamos la URL del Endpoint para insertar una película
    const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);

    ENDPOINT_SERVER_PUERTO.port = PORT;


    const ENDPOINT_SERVER_INSERTAR_PELICULAS = new URL(

        ENDPOINT_INSERTAR_PELICULAS,

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

        if(!respuesta_servidor.ok){

            throw new Error("Error al insertar la película.");

        }

        return respuesta_servidor.json();

    })

    .then(datos => {

        console.log(datos);

        alert(datos.mensaje);

    })

    .catch(error => {

        console.error("Error al insertar la película:", error); // Muestro el error en la consola

        mensajesalida.innerHTML = `

            <p><b>Error</b>: ${error}</p>

        `; // Muestro mensaje de error en la interfaz

    });

}


// Función para eliminar una película
function eliminarPelicula(pelicula) {

    // Creamos la URL del Endpoint para eliminar una película
    const ENDPOINT_SERVER_PUERTO = new URL(ENDPOINT_SERVER);

    ENDPOINT_SERVER_PUERTO.port = PORT;


    const ENDPOINT_SERVER_ELIMINAR_PELICULAS = new URL(

        ENDPOINT_INSERTAR_ELIMINAR_ACTUALIZAR_PELICULAS + `/${pelicula.id}`,

        ENDPOINT_SERVER_PUERTO

    );


    fetch(ENDPOINT_SERVER_ELIMINAR_PELICULAS, {

        method: "DELETE"

    })

    .then(respuesta_servidor => {

        if(!respuesta_servidor.ok){

            throw new Error("Error al eliminar la película.");

        }

        return respuesta_servidor.json();

    })

    .then(datos => {

        console.log(datos);

        alert(datos.mensaje);

    })

    .catch(error => {

        console.error("Error al eliminar la película:", error); // Muestro el error en la consola

        mensajesalida.innerHTML = `

            <p><b>Error</b>: ${error}</p>

        `; // Muestro mensaje de error en la interfaz

    });

}


// ------------------------------
// INICIAMOS EL SERVIDOR
// ------------------------------

app.listen(PORT, () => {

    console.log(`Servidor funcionando en http://localhost:${PORT}`);

});