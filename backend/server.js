/**************************************************************/
/* Módulo profesional: Lenguajes de Marcas y Sistemas de      */
/* Gestión de Información                                     */
/* Unidad didáctica 05: JSON y los SGBD                       */
/* Proyecto Aelix Stream - Backend API REST                   */
/**************************************************************/


// --------------------------------------------------
// IMPORTAMOS LOS MÓDULOS NECESARIOS
// --------------------------------------------------

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");


// --------------------------------------------------
// CREAMOS LA INSTANCIA DE EXPRESS
// --------------------------------------------------

const app = express();


// --------------------------------------------------
// HABILITAMOS MIDDLEWARES
// --------------------------------------------------

app.use(cors());

app.use(express.json());


// --------------------------------------------------
// SERVIMOS EL FRONTEND
// --------------------------------------------------

app.use(express.static(path.join(__dirname, "../src")));


// --------------------------------------------------
// CONSTANTES NECESARIAS
// --------------------------------------------------

const PORT = 3000;


// --------------------------------------------------
// POOL DE CONEXIONES MYSQL
// --------------------------------------------------

const pool_mysql = mysql.createPool({

    host: "localhost",
    user: "aelix",
    password: "aelix2026",
    database: "aelix_stream",

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

});


// --------------------------------------------------
// FUNCIÓN PARA INICIAR EL SERVIDOR
// --------------------------------------------------

function iniciarServidor() {

    // Compruebo conexión con MySQL
    pool_mysql.getConnection((error, connection) => {

        if (error) {

            console.error("Error conectando a MySQL:", error);

            process.exit(1);

        }

        connection.release();

        // Inicio servidor
        app.listen(PORT, () => {

            console.log(`

                Conectado a MySQL.
                Servidor funcionando en http://localhost:${PORT}

            `);

        });

    });

}


// --------------------------------------------------
// GET → OBTENER TODAS LAS PELÍCULAS
// --------------------------------------------------

app.get("/peliculas", (req, res) => {

    const sql = "SELECT * FROM peliculas";

    pool_mysql.query(sql, (error, resultados) => {

        if (error) {

            console.error("Error en la consulta:", error);

            return res.status(500).json({ error });

        }

        res.json(resultados);

    });

});


// --------------------------------------------------
// POST → INSERTAR PELÍCULA
// --------------------------------------------------

app.post("/peliculas", (req, res) => {

    // Recupero los datos enviados desde el frontend
    const {

        titulo,
        anio,
        director,
        descripcion,
        puntuacion,
        id_categoria

    } = req.body;


    const sql = `

        INSERT INTO peliculas
        (
            titulo,
            anio,
            director,
            descripcion,
            puntuacion,
            id_categoria
        )

        VALUES (?, ?, ?, ?, ?, ?)

    `;


    pool_mysql.query(

        sql,

        [
            titulo,
            anio,
            director,
            descripcion,
            puntuacion,
            id_categoria
        ],

        (error, resultado) => {

            if (error) {

                console.error("Error en INSERT:", error);

                return res.status(500).json({ error });

            }

            res.json({

                mensaje: "Película insertada correctamente",

                datos: {

                    titulo,
                    anio,
                    director,
                    descripcion,
                    puntuacion,
                    id_categoria

                }

            });

        }

    );

});


// --------------------------------------------------
// PUT → ACTUALIZAR PELÍCULA
// --------------------------------------------------

app.put("/peliculas/:id", (req, res) => {

    // Recupero id enviado por URL
    const id = req.params.id;

    // Recupero datos enviados desde frontend
    const {

        titulo,
        anio,
        director,
        descripcion,
        puntuacion,
        id_categoria

    } = req.body;


    const sql = `

        UPDATE peliculas

        SET
            titulo = ?,
            anio = ?,
            director = ?,
            descripcion = ?,
            puntuacion = ?,
            id_categoria = ?

        WHERE id = ?

    `;


    pool_mysql.query(

        sql,

        [
            titulo,
            anio,
            director,
            descripcion,
            puntuacion,
            id_categoria,
            id
        ],

        (error, resultado) => {

            if (error) {

                console.error("Error en UPDATE:", error);

                return res.status(500).json({ error });

            }

            res.json({

                mensaje: "Película actualizada correctamente"

            });

        }

    );

});


// --------------------------------------------------
// DELETE → ELIMINAR PELÍCULA
// --------------------------------------------------

app.delete("/peliculas/:id", (req, res) => {

    // Recupero id enviado por URL
    const id = req.params.id;


    const sql = "DELETE FROM peliculas WHERE id = ?";


    pool_mysql.query(sql, [id], (error) => {

        if (error) {

            console.error("Error en DELETE:", error);

            return res.status(500).json({ error });

        }

        res.json({

            mensaje: "Película eliminada correctamente"

        });

    });

});


// --------------------------------------------------
// INICIAMOS EL SERVIDOR
// --------------------------------------------------

iniciarServidor();