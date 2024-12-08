function searchGames() {
    const searchBar = document.getElementById("searchBar");
    const searchQuery = searchBar.value.toLowerCase(); // Get the input and make it lowercase for case-insensitive comparison
    const gameArticles = document.querySelectorAll(".game"); // Get all the game articles

    gameArticles.forEach((game) => {
        const gameDescription = game.querySelector("p").textContent.toLowerCase(); // Get the description text and make it lowercase
        if (gameDescription.includes(searchQuery)) {
            game.style.display = "block"; // Show the game if it matches the search
        } else {
            game.style.display = "none"; // Hide the game if it doesn't match
        }
    });
}