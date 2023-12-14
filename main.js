// main.js
document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('photo', file);

        try {
            // Hier zou normaal gesproken de backend-code zijn om de foto naar de server te uploaden.
            // Voor GitHub Pages gebruiken we JSONPlaceholder als een tijdelijke oplossing.
            const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            alert('Photo uploaded successfully!');
        } catch (error) {
            console.error('Error uploading photo:', error);
            alert('Error uploading photo. Please try again.');
        }
    }
});