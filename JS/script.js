// document.getElementById('informatieknop').addEventListener('click', function(event) {
//     // Voorkom de standaard actie als we willen controleren of de pagina bereikbaar is
//     event.preventDefault();
    
//     // Simuleer een netwerkfout of controleer of de pagina kan worden geladen
//     fetch('pages/games.html')
//         .then(response => {
//             // Als de server een foutstatus teruggeeft, gooien we een error
//             if (!response.ok) {
//                 throw new Error('De pagina kan niet worden geladen.');
//             }
//             // Als alles goed is, kan de pagina normaal worden geladen
//             window.location.href = 'pages/games.html'; // Laat de gebruiker naar de pagina gaan
//         })
//         .catch(error => {
//             // Toon alleen de foutmelding als er een fout optreedt
//             let foutmelding = "Fout: " + error.message;
//             let informatieDiv = document.createElement('div');
//             informatieDiv.style.color = 'red';
//             informatieDiv.style.padding = '10px';
//             informatieDiv.style.backgroundColor = '#f8d7da';
//             informatieDiv.textContent = foutmelding;
//             document.body.prepend(informatieDiv); // Voeg de foutmelding bovenaan de pagina toe
//         });
// });

// Selecteer de Games link en voeg een event listener toe
document.getElementById('informatieknop').addEventListener('click', function(event) {
    // Voorkom dat de pagina daadwerkelijk wordt geladen
    event.preventDefault();

    // Simuleer een fout (bijvoorbeeld een serverprobleem)
    let foutmelding = "Fout: De pagina kan niet worden geladen. Probeer het later opnieuw.";

    // Toon de foutmelding ergens op de pagina (bijvoorbeeld in een div)
    let informatieDiv = document.createElement('div');
    informatieDiv.style.color = 'red';
    informatieDiv.style.padding = '10px';
    informatieDiv.style.backgroundColor = '#f8d7da';
    informatieDiv.textContent = foutmelding;
    document.body.prepend(informatieDiv); // Voeg de foutmelding bovenaan de pagina toe
});

