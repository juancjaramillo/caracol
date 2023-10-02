// public/js/dataHandler.js

// Consumir datos de test.json utilizando Fetch API
fetch('./public/js/test.json') // Ruta completa al archivo JSON
  .then(response => response.json())
  .then(data => {
    // Utiliza los datos en tu aplicación
    console.log(data);

    // Aquí puedes realizar acciones adicionales con los datos, como renderizarlos en tu plantilla Handlebars.
  })
  .catch(error => {
    console.error('Error al cargar los datos', error);
  });
