// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('pesquisa');
    const searchButton = document.getElementById('buscar-btn');
    const recipeCards = document.querySelectorAll('.cartao-receita');

    const filterRecipes = () => {
        const query = searchInput.value.toLowerCase();
        recipeCards.forEach(card => {
            const tags = card.getAttribute('data-tags').toLowerCase();
            if (tags.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    searchButton.addEventListener('click', filterRecipes);

   // Para permitir que a tecla Enter acione a pesquisa (fica mais intuitivo para o usuario)
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterRecipes();
        }
    });
});
