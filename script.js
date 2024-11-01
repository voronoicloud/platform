const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Bild anklicken, um es im Lightbox anzuzeigen
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src; // Setze das Bild in der Lightbox
    });
});

// Schließen der Lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Schließen der Lightbox bei Klick außerhalb des Bildes
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});
