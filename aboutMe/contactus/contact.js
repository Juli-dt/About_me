document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe por defecto
  
    const name = document.getElementById('name').value.trim();
    const reason = document.getElementById('reason').value;
    const email = document.getElementById('email').value.trim();
    const messagesDiv = document.getElementById('form-messages');
  
    let errors = [];
    
    if (name.length < 3) {
      errors.push("El nombre debe tener al menos 3 caracteres.");
    }
  
    if (!reason) {
      errors.push("Debes seleccionar un motivo de contacto.");
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón básico para validar correos
    if (!emailPattern.test(email)) {
      errors.push("El correo electrónico no es válido.");
    }
  
    // Mostrar errores o éxito
    if (errors.length > 0) {
      messagesDiv.innerHTML = errors.join("<br>");
    } else {
      messagesDiv.style.color = "green";
      messagesDiv.innerHTML = "Formulario enviado exitosamente.";
  
      // Aquí podrías enviar los datos a un servidor usando fetch/axios si lo deseas
      // Por ahora, reseteamos el formulario:
      e.target.reset();
    }
  });
  