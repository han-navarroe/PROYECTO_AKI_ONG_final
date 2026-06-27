// ══════════════════════════════════
// VALIDADOR INDEPENDIENTE DE FORMULARIOS
// ══════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

  // 1. VALIDACIÓN FORMULARIO DE CONTACTO GENERAL
  const formContacto = document.getElementById('formContacto');
  const boxExitoContacto = document.getElementById('formExito');

  formContacto.addEventListener('submit', (e) => {
    e.preventDefault(); // Detiene la recarga de página

    const nombre = document.getElementById('cNombre').value.trim();
    const correo = document.getElementById('cCorreo').value.trim();
    const asunto = document.getElementById('cAsunto').value;
    const mensaje = document.getElementById('cMensaje').value.trim();

    if (nombre === "" || correo === "" || asunto === "" || mensaje === "") {
      alert("Por favor, completa todos los campos del formulario de contacto.");
      return;
    }

    // Estado exitoso
    boxExitoContacto.classList.add('is-visible');
    formContacto.reset(); // Limpia los inputs

    setTimeout(() => {
      boxExitoContacto.classList.remove('is-visible');
    }, 4000);
  });

  // 2. VALIDACIÓN FORMULARIO DE RECLUTAMIENTO DE VOLUNTARIOS
  const formVoluntario = document.getElementById('formVoluntario');
  const boxExitoVoluntario = document.getElementById('formVolExito');

  formVoluntario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('vNombre').value.trim();
    const correo = document.getElementById('vCorreo').value.trim();
    const celular = document.getElementById('vCelular').value.trim();
    const edad = document.getElementById('vEdad').value;
    const proyecto = document.getElementById('vProyecto').value;
    const motivo = document.getElementById('vMotivo').value.trim();

    if (nombre === "" || correo === "" || celular === "" || edad === "" || proyecto === "" || motivo === "") {
      alert("Por favor, completa todos los campos para procesar tu postulación.");
      return;
    }

    if (parseInt(edad) < 15) {
      alert("La edad mínima reglamentaria para participar en las brigadas es de 15 años.");
      return;
    }

    // Estado exitoso de postulación
    boxExitoVoluntario.classList.add('is-visible');
    formVoluntario.reset();

    setTimeout(() => {
      boxExitoVoluntario.classList.remove('is-visible');
    }, 4000);
  });

});
