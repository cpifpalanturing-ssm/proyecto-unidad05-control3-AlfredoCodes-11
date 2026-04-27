
# Proyecto Unidad 05 - Creación de una API con MySQL y Node.JS

**Unidad didáctica 05:** JSON y los SGBD.

**Módulo profesional:** Lenguajes de Marcas y Sistemas de Gestión de la Información.

**RA 6.** Gestiona la información en formatos de intercambio de datos analizando y utilizando tecnologías de almacenamiento y lenguajes de consulta [abcdefghi].

## Segunda entrega de control

En esta segunda revisión se evaluará la **evolución real del proyecto con respecto a la planificación inicial**. El objetivo es comprobar qué cambios se han producido, justificar las decisiones tomadas y presentar una **primera versión funcional de la API y su integración con el frontend**.

Antes de realizar ningún cambio, debéis partir del repositorio de la primera entrega de control. Por tanto, **el primer `commit` en este nuevo repositorio contendrá todo lo que subisteis en la primera entrega de control, incluido el fichero `.gitignore`**.

---

### 1. Control de cambios

En el `README.md` debéis incluir un nuevo apartado llamado **Control de cambios**, donde se documente de forma clara y ordenada las modificaciones realizadas desde la primera entrega de control.

Para evitar descripciones vagas o poco precisas, **deberéis utilizar obligatoriamente el siguiente formato**. A modo de ejemplo:

```markdown
## Control de cambios

### Añadido
- Endpoint GET /usuarios para listar usuarios desde la base de datos.

### Modificado
- Tabla usuarios: añadido campo email.
- Estructura del proyecto: separación entre frontend y backend.

### Eliminado
- Tabla temporaltest, ya que no era necesaria para el funcionamiento del proyecto.

### Justificación de los cambios realizados
Se han realizado estos cambios para adaptar la base de datos a las necesidades reales de la aplicación y comenzar la conexión entre frontend, backend y MySQL.

```

No se trata solo de indicar que ha habido cambios, sino de **documentarlos correctamente y explicar por qué se han realizado**.

---

### 2. Nueva versión de la base de datos

Se deberá entregar una versión actualizada de la base de datos en un fichero SQL.

La base de datos podrá seguir evolucionando en futuras fases, pero en esta entrega debe reflejar el estado actual coherente con el desarrollo presentado.

En el caso de que se mantenga respecto a la entrega de control anterior, igualmente ha de subirse el fichero SQL.

---

### 3. Primera versión funcional del proyecto

Además de lo anterior, se deberá entregar una primera versión operativa de la aplicación. Prestad atención al enunciado del proyecto para **seguir obligatoriamente la estructura de carpetas vista en clase**.

En el caso de que el proyecto se esté realizando de forma individual, el fichero REPARTO.md no debe existir.

#### Requisitos mínimos para considerar la aplicación como funcional

En esta fase, el proyecto debe cumplir obligatoriamente los siguientes puntos:

##### Backend (API REST)

- Servidor implementado con **Node.js y Express** en funcionamiento.
- Código del backend organizado de forma clara y legible dentro de un único fichero, separando lógicamente las rutas mediante comentarios o bloques diferenciados.
- Conexión operativa a la base de datos MySQL.
- **Implementación de al menos un endpoint** funcional de tipo:
  - `GET` para obtener/listar datos desde la base de datos.
- El endpoint debe devolver datos reales procedentes de la base de datos en **formato JSON**.

##### Frontend

- Existencia de una interfaz básica en HTML, CSS y JavaScript.
- Realización de una petición al backend mediante `fetch`.
- Visualización en pantalla de los datos obtenidos desde la API.

##### Integración

- Correcta comunicación entre frontend y backend.
- El flujo completo debe funcionar:
  - El frontend realiza la petición → el backend consulta la base de datos → se devuelven datos → el frontend los muestra.

---

### Objetivo de la entrega

El objetivo de esta entrega es comprobar que el proyecto no solo está planificado, sino que ya se encuentra en desarrollo activo, con una **base técnica funcional real**.

Una entrega incompleta, sin conexión entre las partes o sin datos reales provenientes de la base de datos, dificultará la evaluación y el avance hacia la siguiente fase del proyecto.
