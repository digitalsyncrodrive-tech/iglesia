const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mainNav');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open'));

// Envío HTML estándar mediante FormSubmit: no necesita una aplicación de correo local.
const contactForm = document.querySelector('#contactForm');
contactForm?.addEventListener('submit', (event) => {
  if (!contactForm.reportValidity()) { event.preventDefault(); return; }
  const status = document.querySelector('#contactStatus');
  if (status) status.textContent = 'Enviando al servicio de formularios…';
});

// Copia la dirección registrada para donaciones con Zelle.
const copyZelleButton = document.getElementById('copyZelleEmail');
if (copyZelleButton) {
  copyZelleButton.addEventListener('click', async () => {
    const email = 'iglesiapenielocalafl@gmail.com';
    const status = document.getElementById('zelleCopyStatus');
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText(email);
      status.textContent = 'Correo copiado. Pégalo en Zelle desde tu banco y verifica el destinatario.';
    } catch (error) {
      status.textContent = 'Copia manualmente el correo mostrado arriba para utilizarlo en Zelle.';
    }
  });
}
