// SCRIPT CAROUSEL
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const wordGroup = document.querySelector('.word-group');
    
    const cloneWords = [...wordGroup.children].map(span => span.cloneNode(true));
    cloneWords.forEach(clone => {
        wordGroup.appendChild(clone);
    });
    
    // Ajuster la vitesse de rotation
    function adjustSpeed() {
        const viewportWidth = window.innerWidth;
        // Rotation plus lente sur grands écrans, plus rapide sur petits
        const newDuration = Math.max(15, Math.min(30, 20 * (2000 / viewportWidth)));
        track.style.animationDuration = `${newDuration}s`;
    }
    
    // Initialisation
    adjustSpeed();
    
    // Adaptation lors du redimensionnement
    window.addEventListener('resize', adjustSpeed);
});

// Menu Burger
document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const navContent = document.querySelector('.nav-content');
    const body = document.body;
    
    // Créer l'overlay pour fermer le menu en cliquant en dehors
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    body.appendChild(overlay);
    
    
    // Fonction pour ouvrir/fermer le menu
    function toggleMenu() {
        navContent.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
    
    // Événement pour le burger
    burgerIcon.addEventListener('click', toggleMenu);
    
    // Fermer le menu en cliquant sur l'overlay
    overlay.addEventListener('click', toggleMenu);
    
    // Fermer le menu en cliquant sur un lien
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContent.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
    
    // Ajuster le menu si la fenêtre est redimensionnée
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && navContent.classList.contains('active')) {
            navContent.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});