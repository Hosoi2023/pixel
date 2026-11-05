// film.js — small interactions for film.html

// "+ Ma liste" toggles on / off
const listButton = document.getElementById("add-to-list");

if (listButton) {
    listButton.addEventListener("click", () => {
        const added = listButton.getAttribute("aria-pressed") === "true";
        listButton.setAttribute("aria-pressed", String(!added));
        listButton.textContent = added ? "+ Ma liste" : "✓ Dans ma liste";
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
        } catch {
            copyButton.textContent = "Copie impossible";
        }

        setTimeout(() => {
            copyButton.textContent = "Copier le lien";
        }, 2000);
    });
}
