// Function to filter games by name
function searchGames() {
    // Get the search query from the input field and convert it to lowercase for case-insensitive comparison
    let searchQuery = document.getElementById("name-search").value.toLowerCase();

    // Get all the game cards
    let gameCards = document.querySelectorAll(".card");

    // Loop through each game card
    gameCards.forEach(card => {
        // Get the game name from the 'data-name' attribute
        let gameName = card.getAttribute("data-name").toLowerCase();

        // If the game name includes the search query, display the card; otherwise, hide it
        if (gameName.includes(searchQuery)) {
            card.style.display = "block"; // Show the card
        } else {
            card.style.display = "none"; // Hide the card
        }
    });
}

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', searchGames);
