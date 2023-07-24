// Inicializar EmailJS
emailjs.init('XvqXabpPfHjFY3wfD'); 
 // Reemplaza 'tu-id-de-usuario' con tu ID de usuario de EmailJS

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Recoger la información del formulario
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let postal_code = document.getElementById('postal_code').value;
  let phone = document.getElementById('phone').value;
  let interest = document.getElementById('interest').value;
  let notes = document.getElementById('notes').value;

  // Crear el objeto de datos
  let data = {
    name: name,
    email: email,
    postal_code: postal_code,
    phone: phone,
    interest: interest,
    notes: notes
  };

  // Enviar el correo electrónico a través de EmailJS
  emailjs.send('service_7pidttu', 'template_qc3ymrm', data) // Reemplaza 'template_qc3ymrm' con la ID de tu plantilla de EmailJS
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
});
