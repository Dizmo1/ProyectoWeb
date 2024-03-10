document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario por su clase
    var form = document.querySelector('.form');
  
    // Función para validar el formulario
    function validateForm(event) {
      var nombre = document.getElementById('nombre').value;
      var email = document.getElementById('email').value;
      var telefono = document.getElementById('telefono').value;
      var mensaje = document.getElementById('mensaje').value;
      var acepto = document.getElementById('acepto').checked;
  
      // Validación del nombre
      if(nombre.length === 0) {
        alert('Por favor, introduce tu nombre.');
        event.preventDefault(); // Previene el envío del formulario
        return false;
      }
  
      // Validación del email
      if(!email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
        alert('Por favor, introduce un correo electrónico válido.');
        event.preventDefault(); // Previene el envío del formulario
        return false;
      }
  
      // Validación del teléfono (opcional)
      if(telefono.length > 0 && !telefono.match(/\d{9}/)) {
        alert('Por favor, introduce un número de teléfono válido.');
        event.preventDefault(); // Previene el envío del formulario
        return false;
      }
  
      // Validación del mensaje
      if(mensaje.length === 0) {
        alert('Por favor, escribe tu mensaje.');
        event.preventDefault(); // Previene el envío del formulario
        return false;
      }
  
      // Validación del checkbox
      if(!acepto) {
        alert('Debes aceptar la política de privacidad para continuar.');
        event.preventDefault(); // Previene el envío del formulario
        return false;
      }
  
      // Si todo está correcto, el formulario se enviará
      return true;
    }
  
    // Añade un 'listener' para el evento 'submit' del formulario
    form.addEventListener('submit', validateForm);
  });
  