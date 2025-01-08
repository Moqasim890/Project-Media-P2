let isPageLoaded = false;

// Set a timeout for 3 seconds to check if the page hasn't loaded
setTimeout(function () {
    if (!isPageLoaded) {
       
        window.location.href = "404 page not found";
    }
}, 3000);

// If the page loads successfully, set the flag to true
window.onload = function () {
    isPageLoaded = true;
    console.log('Page loaded successfully within 3 seconds.');
};

function sendMail() {
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check for empty fields and invalid email format
    if (!name) {
        alert("Name is required.");
        return;
    }
    if (!email) {
        alert("Email is required.");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!message) {
        alert("Message is required.");
        return;
    }

    // Parameters for email
    let params = { name, email, message };
    const serviceID = "service_6pi95gx";
    const templateID = "template_ll7qt9d";

    // Send email using emailjs
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Clear the form
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully.");
        })
        .catch(err => {
            console.log(err);
            alert("Failed to send the message. Please try again.");
        });
}



document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq h3');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const answer = faq.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});

const forms = document.querySelector("#forms");
const validQueries = [
    {
        "vraag": "What do I need to start gaming on a PC",
        "antwoord": "You’ll need a PC with good hardware (CPU, GPU, RAM), a monitor, peripherals (keyboard, mouse, headset), and a stable internet connection. Additionally, ensure you have the appropriate gaming platform installed, like Steam, Epic Games, or Xbox Game Pass for PC."
    },
    {
        "vraag": "What’s the difference between consoles and PC gaming",
        "antwoord": "Console gaming offers a plug-and-play experience with optimized performance for specific games, while PC gaming provides flexibility, better graphics (depending on hardware), and access to mods."
    },
    {
        "vraag": "Which gaming console should I buy",
        "antwoord": "It depends on your preferences, budget, and desired exclusives. The PlayStation 5 and Xbox Series X/S are popular for high-quality games, while the Nintendo Switch is great for portability and exclusive Nintendo titles."
    },
    {  
        "vraag": "How can I improve my gaming performance on a PC",
        "antwoord": "Lower the in-game graphics settings, ensure your GPU drivers are updated, close unnecessary background applications, and consider upgrading your hardware (e.g., add RAM or upgrade your GPU)."
    },
    {
        "vraag": "My game is lagging. What can I do",
        "antwoord": "Check your internet connection, lower graphics settings, and ensure your device meets the game’s system requirements. For online games, use a wired connection or move closer to the router for better performance."
    },
    {
        "vraag": "How can I fix a game that keeps crashing",
        "antwoord": "Verify game files via the platform (e.g., Steam), update your drivers, ensure your hardware isn’t overheating, and check for patches or updates from the game developer."
    },
    {
        "vraag": "How can I protect myself from hackers in online games",
        "antwoord": "Use strong, unique passwords for your accounts, enable two-factor authentication, and avoid sharing personal information in games or on public forums."
    },
    {
        "vraag": "What is cross-play",
        "antwoord": "Cross-play allows players on different platforms (e.g., Xbox, PlayStation, PC) to play together in the same game."
    },
    {
        "vraag": "How can I reduce ping in online games",
        "antwoord": "Use a wired internet connection, close bandwidth-heavy applications, connect to the nearest game server, and ensure no other devices are consuming bandwidth on your network."
    },
    {
        "vraag": "What are “DLCs” and “expansions”",
        "antwoord": "DLCs (Downloadable Content) and expansions are additional content for a game, such as new levels, characters, or storylines, that can be purchased separately."
    },
    {
        "vraag": "How do I unlock achievements in games",
        "antwoord": "Achievements are unlocked by completing specific tasks or challenges within a game. Check the game’s achievement list for details."
    },
    {
        "vraag": "What are in-game microtransactions",
        "antwoord": "Microtransactions are small payments players can make within a game to purchase cosmetic items, currency, or gameplay advantages."
    },
    {
        "vraag": "How can I monitor my child’s gaming activity",
        "antwoord": "Use parental control features available on most consoles and gaming platforms, set time limits, and discuss appropriate content with your child."
    },
    {
        "vraag": "What does a game’s rating mean (e.g., ESRB, PEGI)",
        "antwoord": "Game ratings indicate the appropriate age group for a game based on its content. For example, PEGI 12 means the game is suitable for players aged 12 and up."
    },
    {
        "vraag": "How do I prevent excessive gaming",
        "antwoord": "Set time limits, encourage breaks, and promote a balanced schedule that includes other activities like sports and studying."
    }
    
];

const addContainer = document.querySelector(".add-container");

forms.addEventListener("submit", function (e) {
    e.preventDefault();
    const queryValue = forms.elements.query.value.toLowerCase(); // Convert to lowercase for case-insensitive matching
    
    forms.elements.query.value = "";


    // Search for matching queries
        // Search for matching queries
        const results = validQueries.filter(obj => {
            return obj.vraag.toLowerCase().includes(queryValue); // Match the query to the "vraag" field (case-insensitive)
        });
    
    // If results are found, show them in the add-container
    if (results.length > 0) {
        addContainer.innerHTML = ""; // Clear any previous results
        results.forEach(result => {
            // Create a new <div> with the class 'faq' to apply the same CSS
            let newFaqDiv = document.createElement("div");
            newFaqDiv.classList.add("faq");

            // Create a new <h3> element for the question
            let newH3 = document.createElement("h3");
            newH3.textContent = result.vraag;

            // Create a new <p> element for the answer
            let newP = document.createElement("p");
            newP.textContent = result.antwoord;

            // Add an event listener to toggle the visibility of the <p> element
            newH3.addEventListener("click", function() {
                if (newP.style.display === "block") {
                    newP.style.display = "none"; // Hide answer if already shown
                } else {
                    newP.style.display = "block"; // Show answer if hidden
                }
            });

            newP.style.display = "none";

            // Append the new elements to the new faq div
            newFaqDiv.appendChild(newH3);
            newFaqDiv.appendChild(newP);

            // Append the new faq div to the add-container
            addContainer.appendChild(newFaqDiv);

            if (queryValue === "") {
                addContainer.innerHTML = ""; // Clear add-container
            }
        });
    } else {
        addContainer.innerHTML = ""; // Clear add-container
        window.location = "contact.html";
    }
});
