// film.js — small interactions for film.html

// Hidden live region: screen readers read out what we put in it
const statusMessage = document.getElementById("film-status");

function announce(message) {
    if (statusMessage) {
        statusMessage.textContent = message;
    }
}

// "+ Ma liste" toggles on / off
const listButton = document.getElementById("add-to-list");

if (listButton) {
    let added = false;

    listButton.addEventListener("click", () => {
        added = !added;
        listButton.classList.toggle("is-added", added);
        listButton.textContent = added ? "✓ Dans ma liste" : "+ Ma liste";
        announce(added ? "Film ajouté à votre liste." : "Film retiré de votre liste.");
    });
}

// Facebook share link points to the current page
const facebookLink = document.getElementById("share-facebook");

if (facebookLink) {
    facebookLink.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
}

// "Copier le lien" copies the page URL
const copyButton = document.getElementById("copy-link");

if (copyButton && navigator.clipboard) {
    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            copyButton.textContent = "Lien copié !";
            announce("Lien copié dans le presse-papiers.");
        } catch {
            copyButton.textContent = "Copie impossible";
            announce("Le lien n'a pas pu être copié.");
        }

        setTimeout(() => {
            copyButton.textContent = "Copier le lien";
        }, 2000);
    });
}
