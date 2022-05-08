## Alkemy Challenge Backend Disney 🐱‍🏍🐱‍🏍
<br>

*API creada para explorar el mundo de Disney.* <br>
*Que te permitirá listar, buscar, crear, modificar y eliminar personajes, películas y generos.*

<hr>


### Desarrollado en:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)

---

<br>

## Instalación

1) Clonar el repositorio

```bash
git clone https://github.com/Franckfer/Alkemy_challenge_backend_NodeJs
cd server
   ```
<br>


## Configuracion para poder levantar el proyecto

1) Ejecutar el script (backend_disney_db.sql) que se encuentra en la carpeta data dentro de src.
2) Iniciar el programa XAMPP
3) Instalar las dependencias del proyecto con : 
``` bash 
npm install 
```
<br>

##

### Requisitos previos

- MySql
  - Siga estos [pasos de la instalación](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).
  - Cargar la base de datos ya mencionada en la carpeta data.
  
3) Crear el archivo `.env` en la carpeta raiz dentro de server
4) Configura el archivo `.env` con las siguientes variables de entorno

```js
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=backend_disney_db
DB_HOST=localhost
DB_DIALECT=mysql
PORT=5000
SECRET_JWT=genius1
```

<br>

## Iniciar el Servidor con algunos de los siguientes comandos 🚀🚀🚀:

``` bash
npm start
```
``` bash
nodemon
```

---

<br>

## Test 🧪🧪🧪

``` bash
npm run test
```

---

<br>

## Documentación

Para obtener una explicación detallada sobre cómo funciona la API, puede consultar la _[Documentación](https://documenter.getpostman.com/view/17720724/UyxdKU7Y)_

<br>
<hr>

## Nota

Para acceder a los endpoints de Characters, Movies y Genres se debe registrar un usuario y loguearse enviando el token generado por Headers donde la clave es x-token y el valor es el token generado.

<br>



<p align="right">(<a href="#top">back to top</a>)</p>
