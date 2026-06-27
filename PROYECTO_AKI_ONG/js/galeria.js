// ══════════════════════════════════
// LÓGICA DEL LIGHTBOX (VISOR DE FOTOS)
// ══════════════════════════════════

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const btnClose = document.getElementById('lightbox-close');
const btnPrev = document.getElementById('lightbox-prev');
const btnNext = document.getElementById('lightbox-next');

// Capturamos todas las imágenes reales dentro de la galería
const photos = Array.from(document.querySelectorAll('.galeria-item img'));
let currentPhotoIndex = 0;

// 1. Abrir Lightbox al hacer clic en cualquier foto de la galería
document.querySelectorAll('.galeria-item').forEach((item, index) => {
  item.addEventListener('click', () => {
    currentPhotoIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
  });
});

// 2. Función para actualizar la imagen visible en el visor
function updateLightboxImage() {
  const currentImgSrc = photos[currentPhotoIndex].getAttribute('src');
  lightboxImg.setAttribute('src', currentImgSrc);
}

// 3. Navegación: Foto Siguiente
btnNext.addEventListener('click', () => {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  updateLightboxImage();
});

// 4. Navegación: Foto Anterior
btnPrev.addEventListener('click', () => {
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  updateLightboxImage();
});

// 5. Cerrar Lightbox con el botón "✕"
btnClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// 6. Cerrar Lightbox al hacer clic en el fondo oscuro (pero no en la imagen)
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove('active');
  }
});