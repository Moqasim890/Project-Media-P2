document.querySelectorAll('.gamedownloadbutton').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation(); // Prevent the card-container click event
    });
  });