
function validarDatos(datos) {
   
    if (!datos || !Array.isArray(datos.breadcrumbs)) {
      throw new Error('Los datos no son válidos');
    }
  }
  
  module.exports = {
    validarDatos,
  };
  