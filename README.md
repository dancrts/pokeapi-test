# Proyecto PokeAPI

## Instalaciones necesarias

Para poder correr este proyecto es necesario tener instalado lo siguiente: 
- NodeJS 
- Docker

## Comandos Necesarios

Para poder inicializar el proyecto es necesario lo siguiente:
1. Abrir la carpeta en una tres terminales
2. En la primera terminal correr el comando `docker compose up --detach`
3. En la segunda terminal, acceder a la carpeta backend mediante terminal e instalar las dependencias necesarias de la API mediante `npm install` o `npm i` e inicializar el servicio con `npm start`
4. En la tercera terminal, acceder a la carpeta frontend mediante terminal e instalar las dependencias necesarias de la API mediante `npm install` o `npm i` e inicializar el servicio con `npm start`

En caso de querer corroborar el guardado de los registros en la base de datos directamente en la imagen de mongo: 
1. Correr el comando en la terminal libre `docker exec -it pokeapi-database-1 mongosh -u PokeApiAdmin -p 123PokeApi`
2. Una vez en la mongoShell: `use pokeapi`
3. finalmente `db.trainers.find()`