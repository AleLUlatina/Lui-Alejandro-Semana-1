document.addEventListener('DOMContentLoaded', () => {
    const featuredProducts = document.getElementById('featured-products');
    const previousButton = document.getElementById('featured-prev');
    const nextButton = document.getElementById('featured-next');

    if (!featuredProducts || !previousButton || !nextButton) return;

    function scrollFeaturedProducts(direction) {
        const card = featuredProducts.querySelector('.tarjeta-producto');
        const distance = card ? card.getBoundingClientRect().width + 32 : 320;
        featuredProducts.scrollBy({ left: direction * distance, behavior: 'smooth' });
    }

    previousButton.addEventListener('click', () => scrollFeaturedProducts(-1));
    nextButton.addEventListener('click', () => scrollFeaturedProducts(1));
});
