const fs = require('fs');

const filePath = './test.json';

function loadTestData() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error al cargar test.json:', error);
    return null;
  }
}

module.exports = { loadTestData };
