# Patras.io-Backend-Challenge

[Open Weather  Map API](https://openweathermap.org/current#home) es un proyecto que entrega informacion sobre el clima en una ciudad determinada. Utilizando PostgreSQL, Node.js y Express, crear un servicio REST (API) que acumule informacion sobre el clima de una ciudad. 

[ICAO Codes](https://en.wikipedia.org/wiki/List_of_airports_by_ICAO_code:_A) es la lista de codigos ICAO referenciando aeropuertos. 

El servicio REST (API) que crees, capturando informacion sobre el clima, deberia de ser capaz de recibir como parametro el codigo ICAO del aeropuerto de la ciudad, para mostrar finalmente el clima en un aeropuerto en un momento determinado. Usaremos como referencia, las ciudades de Buenos Aires (Aeropuerto Ezeiza), Mendoza (aeropuerto de la capital) y Santiago de Chile (Aeropuerto Arturo Benitez). 

Desarrollar los siguientes endpoints

## Clima en todos los aeropuertos referenciados en la descripcion

Datos de todos los aeropuertos el dia 1 de Enero del 2022, a las 9 am UCT:

`/api/v1/aeropuertos?at=2022-01-01T09:00:00`

Este endpoint deberia de retornar en formato JSON, la informacion del clima disponible para cada aeropuerto.

## Datos climaticos de un Aeropuerto en un momento determinado 

`/api/v1/aeropuertos/<codigo ICAO>?at=2022-01-01T09:00:00`

## Datos climaticos dada una frecuencia de tiempo para un aeropuerto determinado 

`/api/v1/aeropuertos/<codigo ICAO>desde=2017-11-01T11:00:00&hasta=2017-12-01T11:00:00&frecuencia=diaria`

En este caso, las frecuencias posibles son diaria y semanal

## Unit testing

* Unit testing al invocar `npm test`. Recomendamos mocha/chai.

## Hosting del proyecto

* Podes utilizar docker
* Recomendamos utilizar instancias free-tier de AWS/Digital Ocean. 
* Sistema operativo Linux como contexto donde se ejecuta tu proyecto.
* Heroku NO es aceptado como proveedor de hosting en este momento. 

 
## Criterios

Vas a ser evaluado/a bajo el siguiente conjunto de criterios

* Consistencia del codigo, idealmente a traves de eslint, soportando los mecanismos de Airbnb
* Uso correcto de promesas, incluyendo manejo de excepciones, async/await. 
* Evitar callback hell(s)
* Eficiencia en la implementacion de Sequelize, queries optimos 
* Suficiente covertura en unit testing (mocha / chai)
* Ser capaz de describir tecnicamente tu trabajo, en la presentacion oral

## Como enviarnos tu proyecto 

Crear repositorio en Github, incluyendo .gitignore. Por favor evita subir informacion sensible. Luego envianos la URL publica.

## Bonus  (si lo haces, mejor, pero no es excluyente)

* App react ofreciendo visualizar los datos que levantaste en tu servicio
* Integracion con auth0
* Cualquier otro aspecto que consideres necesario o interesante, genial!

Mucha Suerte!
