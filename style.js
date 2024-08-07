document.addEventListener('DOMContentLoaded', (event) => {
    const card = document.querySelector('.card');
    
    card.addEventListener('click', () => {
        card.classList.toggle('open');
    });

    let touchStartX = 0;
    let touchEndX = 0;

    card.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    card.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swipe left
            card.classList.add('open');
        }
        if (touchEndX > touchStartX) {
            // Swipe right
            card.classList.remove('open');
        }
    }
});