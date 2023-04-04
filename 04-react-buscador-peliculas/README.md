## Enunciado

Crea una aplicación para buscar películas

API a usar:

- https://www.omdbapi.com/
- API_KEY: 4287ad07

// https://www.omdbapi.com/?apikey=4287ad07&s=Avengers

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.
✅ Lista las películas encontradas y muestra el título, año y poster.
✅ Que el formulario funcione
✅ Haz que las películas se muestren en un grid responsive.
✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas. -> useRef 🤓
✅ Haz que la búsqueda se haga automáticamente al escribir.
- Evita que se haga la búsqueda continuamente al escribir (debounce -> mientras el usuario escribe, no vamos a hacer nada y vamos a esperar a que deje de escribir un tiempo para que la ultima llamada que ha hecho el usuario sea la que realmente vamos a disparar)