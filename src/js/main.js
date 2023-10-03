const Handlebars = require('handlebars');
const { loadTestData } = require('./api');

document.addEventListener('DOMContentLoaded', () => {
  const testData = loadTestData();
  
  if (testData) {
    const source = document.getElementById('template').innerHTML;
    const template = Handlebars.compile(source);
    const html = template(testData);
  
    document.getElementById('content').innerHTML = html;
  }
});
