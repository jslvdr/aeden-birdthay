document.addEventListener('DOMContentLoaded', function() {
    const welcomeEffect = document.getElementById('welcome-effect');
    const welcomeSound = document.getElementById('welcome-sound');
    const playButton = document.getElementById('play-sound-button');
    
    // Jouer le son et supprimer l'élément d'introduction après 4 secondes
    welcomeSound.play();
    setTimeout(function() {
        welcomeEffect.style.display = 'none';
    }, 4000);  // Temps en millisecondes (4 secondes)

    // Sélectionner toutes les images et bulles
    const images = document.querySelectorAll('.moment img'); 
    const tooltips = document.querySelectorAll('.tooltip'); 

    images.forEach((img, index) => {
        img.addEventListener('click', function() {
            const tooltip = tooltips[index]; // La bulle associée à l'image
            const text = img.getAttribute('data-text'); // Récupère le texte de la bulle
            
            // Met à jour le texte de la bulle
            tooltip.textContent = text;

            // Si la bulle est déjà visible, on la cache
            if (tooltip.classList.contains('tooltip-show')) {
                tooltip.classList.remove('tooltip-show');
            } else {
                // Sinon, on l'affiche
                tooltip.classList.add('tooltip-show');
            }
        });
    });
});
