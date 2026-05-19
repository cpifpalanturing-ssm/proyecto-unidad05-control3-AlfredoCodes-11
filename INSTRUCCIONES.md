
# Proyecto Unidad 05 - Creación de una API con MySQL y Node.JS

**Unidad didáctica 05:** JSON y los SGBD.

**Módulo profesional:** Lenguajes de Marcas y Sistemas de Gestión de la Información.

**RA 6.** Gestiona la información en formatos de intercambio de datos analizando y utilizando tecnologías de almacenamiento y lenguajes de consulta [abcdefghi].

## Tercera entrega de control

En esta tercera revisión se evaluará la **evolución real del proyecto con respecto a la segunda entrega de control**. El objetivo es comprobar qué cambios se han producido, justificar las decisiones tomadas y presentar una **segunda versión funcional de la aplicación**, incorporando ya un **CRUD completo** sobre la API REST propia del proyecto.

Antes de realizar ningún cambio, debéis partir del repositorio de la segunda entrega de control. Por tanto, **el primer `commit` en este nuevo repositorio contendrá todo lo que subisteis en la segunda entrega de control, excepto el fichero `.gitignore`**, ya que se encuentra incluido en este nuevo repositorio.

---

### 1. Control de cambios

En el `README.md` debéis incluir, de nuevo, un apartado llamado **Control de cambios**, donde se documente de forma clara y ordenada las modificaciones realizadas desde la segunda entrega de control.

Para evitar descripciones vagas o poco precisas, **deberéis utilizar obligatoriamente el siguiente formato**. A modo de ejemplo:

```markdown
## Control de cambios

### Añadido
- Endpoint POST /usuarios para insertar nuevos usuarios en la base de datos.
- Endpoint PUT /usuarios/:id para modificar los datos de un usuario existente.
- Endpoint DELETE /usuarios/:id para eliminar usuarios de la base de datos.
- Formulario en el frontend para añadir nuevos registros.
- ...

### Modificado
- Endpoint GET /usuarios: se ha ajustado la consulta para devolver más información.
- Interfaz principal: ahora permite visualizar, añadir, modificar y eliminar registros.
- ...

### Eliminado
- Código de prueba utilizado en la segunda entrega.
- Campos de la base de datos que ya no eran necesarios para la aplicación.
- ...

### Justificación de los cambios realizados
- Se han añadido operaciones de inserción, modificación y eliminación para completar el CRUD de la aplicación.
- ...

```

No se trata solo de indicar que ha habido cambios, sino de **documentarlos correctamente y explicar por qué se han realizado**.

---

### 2. Nueva versión de la base de datos

Se deberá entregar una versión actualizada de la base de datos en un fichero SQL.

La base de datos podrá seguir evolucionando hasta la entrega final, pero en esta entrega debe reflejar el estado actual coherente con el desarrollo presentado.

En el caso de que se mantenga respecto a la entrega de control anterior, igualmente ha de subirse el fichero SQL.

El fichero SQL deberá permitir crear de nuevo la base de datos necesaria para probar la aplicación, incluyendo las tablas y los datos iniciales que sean necesarios para comprobar su funcionamiento.


---

### 3. Segunda versión funcional del proyecto

Además de lo anterior, se deberá entregar una segunda versión operativa de la aplicación. Prestad atención al enunciado del proyecto para **seguir obligatoriamente la estructura de carpetas vista en clase**.

En el caso de que el proyecto se esté realizando de forma individual, el fichero `REPARTO.md` no debe existir.

#### Requisitos mínimos para considerar la aplicación como funcional

En esta fase, el proyecto debe cumplir obligatoriamente los siguientes puntos:

##### Backend (API REST)

- Servidor implementado con **Node.js y Express** en funcionamiento.
- Código del backend organizado de forma clara y legible dentro de un único fichero `.js`, separando lógicamente las rutas mediante comentarios o bloques diferenciados.
- Uso de **Express** para definir la API.
- Conexión operativa a la base de datos MySQL.
- Implementación de un **CRUD completo** sobre al menos una entidad principal del proyecto.

El CRUD deberá incluir, como mínimo, los siguientes endpoints:

- `GET` para obtener o listar datos desde la base de datos.
- `POST` para insertar nuevos datos en la base de datos.
- `PUT` para modificar datos existentes.
- `DELETE` para eliminar datos existentes.

Los endpoints deberán trabajar con datos reales de la base de datos y devolver respuestas en formato JSON cuando corresponda.

En esta entrega no se exige todavía un tratamiento específico de errores. Este aspecto se revisará y completará en la entrega final del proyecto.

Se valorará positivamente, **aunque no será obligatorio**, la organización del backend en varios ficheros, como por ejemplo la separación de rutas en una carpeta `routes`.

##### Frontend

- Existencia de una interfaz en HTML, CSS y JavaScript que permita interactuar con la API.
- Realización de una petición al backend mediante `fetch`.
- Visualización en pantalla de los datos obtenidos desde la API.
- Inclusión de formularios, botones u otros elementos de interacción que permitan realizar operaciones reales sobre los datos.

El frontend deberá permitir, como mínimo:

- Consultar y mostrar datos.
- Insertar nuevos registros.
- Modificar registros existentes.
- Eliminar registros existentes.

No se exige una interfaz definitiva ni completamente terminada, pero sí debe ser suficientemente funcional para probar las operaciones principales del CRUD.

##### Integración

- Correcta comunicación entre frontend y backend.
- Correcta conexión entre backend y base de datos.
- Funcionamiento completo del flujo de datos:

```text
frontend → backend → base de datos → backend → frontend
```

Es decir, el frontend debe realizar peticiones, el backend debe procesarlas, la base de datos debe actualizarse o consultarse según corresponda, y el resultado debe reflejarse en la interfaz.

---

### 4. Pruebas mínimas de funcionamiento

La entrega deberá permitir comprobar fácilmente que el proyecto funciona.

Para ello, se deberá incluir en el `README.md` una breve explicación de cómo ejecutar el proyecto, indicando al menos:

- Cómo instalar las dependencias necesarias.
- Cómo iniciar el servidor.
- Qué fichero SQL debe importarse en MySQL.
- Qué URL o archivo debe abrirse para probar el frontend.
- Qué operaciones principales pueden realizarse desde la interfaz.

También se recomienda incluir ejemplos de endpoints disponibles, por ejemplo:

```text
GET /usuarios
POST /usuarios
PUT /usuarios/:id
DELETE /usuarios/:id
```

Estos endpoints deberán adaptarse a la temática real de cada proyecto.

---

### 5. Objetivo de la entrega

El objetivo de esta entrega es comprobar que el proyecto ha evolucionado desde una primera conexión funcional entre frontend, backend y base de datos hacia una aplicación más completa, capaz de **realizar operaciones reales de consulta, inserción, modificación y eliminación**.

En esta tercera entrega de control, la aplicación debe contar ya con una **API REST propia conectada a MySQL** y con un **CRUD completo funcional** sobre al menos una entidad principal del proyecto.

Una entrega incompleta, sin CRUD operativo, sin conexión real con la base de datos o sin integración con el frontend, dificultará la evaluación y el avance hacia la entrega final del proyecto.
