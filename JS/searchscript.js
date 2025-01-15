 // Function to filter games by name
 function searchGames() {
    // Get the search query from the input field and convert it to lowercase for case-insensitive comparison
    let searchQuery = document.getElementById("name-search").value.toLowerCase();

    // Get all the game cards
    let gameCards = document.querySelectorAll(".card");
    let foundResults = false;

    // Loop through each game card
    gameCards.forEach(card => {
        // Get the game name from the 'data-name' attribute
        let gameName = card.getAttribute("data-name").toLowerCase();

        // If the game name includes the search query, display the card; otherwise, hide it
        if (gameName.includes(searchQuery)) {
            foundResults = true;
            card.parentNode.classList.remove('hidden');
            card.classList.remove('hidden');
        } else {
            card.parentNode.classList.add('hidden');
            card.classList.add('hidden');
        }
    });

    // Show "No results found" message if no cards are displayed
    const noResultMessage = document.getElementById("no-result-message");
    if (!foundResults && searchQuery !== "") {
        noResultMessage.style.display = "block";
    } else {
        noResultMessage.style.display = "none";
    }
}

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', searchGames);

// Optional: Event listener to trigger the search when the user presses "Enter" inside the input field
document.getElementById('name-search').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchGames();
    }
});
