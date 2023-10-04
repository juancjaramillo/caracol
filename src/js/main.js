import { loadTestData } from './api';

// main.js

const { harden } = require('ses');

// Aquí puedes utilizar la función harden para endurecer objetos en main.js
//const miObjetoEndurecido = harden({ key: 'value' });
//

document.addEventListener('DOMContentLoaded', async () => {
  const testData = await loadTestData();
  
  if (testData) {
    const source = document.getElementById('template').innerHTML;
    const template = Handlebars.compile(source);
    const html = template(testData);
  
    document.getElementById('content').innerHTML = html;
  }
});
