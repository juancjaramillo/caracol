// api.js

function loadTestData(callback) {
  const filePath = './test.json';

  

  fetch(filePath)
      .then(response => response.json())
      .then(data => {
          callback(null, data);
      })
      .catch(error => {
          callback(error, null);
      });
}

module.exports = { loadTestData };
