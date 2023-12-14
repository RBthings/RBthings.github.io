// gallery.js
async function fetchPhotos() {
    try {
        // Hier zou normaal gesproken de backend-code zijn om de foto's van de server op te halen.
        // Voor GitHub Pages gebruiken we JSONPlaceholder als een tijdelijke oplossing.
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await response.json();

        const photoGallery = document.getElementById('photoGallery');
        photoGallery.innerHTML = '';

        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.url;
            img.alt = photo.title;
            photoGallery.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
}

// Roep de fetchPhotos-functie aan wanneer de pagina is geladen.
window.addEventListener('load', fetchPhotos);

