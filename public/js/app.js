import apiHandler from "./api.js";
import Handlebars from "handlebars";

// URL de la API
const apiUrl = "./test.json";

// Función para renderizar la plantilla Handlebars
function renderTemplate(data) {
  const template = document.getElementById("idcaracol").innerHTML;
  const compiledTemplate = Handlebars.compile(template);
  const renderedHtml = compiledTemplate(data);
  document.getElementById("idcaracol").innerHTML = renderedHtml;
}

apiHandler
  .fetchData(apiUrl)
  .then(data => {
    renderTemplate(data);
  })
  .catch(error => {
    console.error("Error al obtener datos:", error);
  });

const compiledTemplate = Handlebars.compile(template);
const renderedHtml = compiledTemplate(data);
document.body.innerHTML = renderedHtml;
