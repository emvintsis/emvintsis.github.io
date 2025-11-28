document.addEventListener('DOMContentLoaded', () => {
    
    // --- Effet Machine à Écrire ---
    const textToType = "Welcome to M26_";
    const typingElement = document.getElementById('typing-text');
    let index = 0;

    function typeWriter() {
        if (index < textToType.length) {
            typingElement.innerHTML += textToType.charAt(index);
            index++;
            // Vitesse de frappe aléatoire pour faire plus "humain"
            setTimeout(typeWriter, Math.random() * 100 + 50);
        } else {
            // Ajout du curseur clignotant à la fin
            typingElement.innerHTML += '<span class="cursor">|</span>';
            blinkCursor();
        }
    }

    // Fonction pour faire clignoter le curseur
    function blinkCursor() {
        const cursor = document.querySelector('.cursor');
        setInterval(() => {
            cursor.style.opacity = (cursor.style.opacity === '0' ? '1' : '0');
        }, 500);
    }

    // Lancer l'animation
    setTimeout(typeWriter, 500);


    // --- Effet d'apparition au scroll (Fade In) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Appliquer l'observateur aux cartes
    document.querySelectorAll('.card, .article-item').forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

});
