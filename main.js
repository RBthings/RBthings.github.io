// main.js
document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        // Controleer of het bestandstype .jpg of .png is
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (allowedTypes.includes(file.type)) {
            const formData = new FormData();
            formData.append('photo', file);

            try {
                // Hier zou normaal gesproken de backend-code zijn om de foto naar de server te uploaden.
                // Voor GitHub Pages gebruiken we JSONPlaceholder als een tijdelijke oplossing.
                const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Server error: ${errorText}`);
                }

                const data = await response.json();
                alert('Photo uploaded successfully!');
            } catch (error) {
                console.error('Error uploading photo:', error.message);
                alert(`Error uploading photo. ${error.message}`);
            }
        } else {
            alert('Invalid file type. Please upload a .jpg or .png file.');
        }
    }
});
