document.addEventListener('DOMContentLoaded', function() {
    const products = [
        'Cheesecake', 'CookiesnCream', 'DarkChoco', 'Okinawa', 'OriginalMilktea', 'Wintermelon',
        'affogato', 'americano', 'cappuccino', 'hazelnut', 'spanishlatte', 'vanilla', 'Comboone',
        'Combotwo', 'Combothree', 'ChickenSilog', 'CornSilog', 'LumpiaSilog', 'LongSilog', 'TapSilog',
        'BreadedPorkchop', 'Buffalo', 'Burgersteak', 'FlavoredChickenwings', 'PorkSteak'
    ];

    products.forEach(product => {
        const stars = document.querySelectorAll(`#${product} .star`);

        stars.forEach(star => {
            star.addEventListener('click', () => handleStarClick(product, star));
            star.addEventListener('mouseover', () => handleStarHover(product, star));
            star.addEventListener('mouseout', () => handleStarMouseOut(product));
        });
    });

    function handleStarClick(product, clickedStar) {
        const rating = clickedStar.getAttribute('data-value');
        document.querySelector(`#${product} .rating`).setAttribute('data-rating', rating);
        highlightStars(product, rating);
    }

    function handleStarHover(product, hoveredStar) {
        const rating = hoveredStar.getAttribute('data-value');
        highlightStars(product, rating);
    }

    function handleStarMouseOut(product) {
        const currentRating = document.querySelector(`#${product} .rating`).getAttribute('data-rating');
        highlightStars(product, currentRating);
    }

    function highlightStars(product, rating) {
        const stars = document.querySelectorAll(`#${product} .star`);
        stars.forEach(star => {
            star.classList.toggle('active', star.getAttribute('data-value') <= rating);
        });
    }
});
