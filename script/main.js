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