
const openButton = document.getElementById("open-login");
const closeButton = document.getElementById("close-login");
const modal = document.getElementById("login-modal");
const emailInput = document.getElementById("login-email");

function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    modal.removeAttribute("inert");
    document.body.style.overflow = "hidden";

    emailInput.focus();
}

function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("inert", "");
    document.body.style.overflow = "";

    openButton.focus();
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        modal.classList.contains("is-open")
    ) {
        closeModal();
    }
});




const pixelArt = document.getElementById("pixel-art");

if (pixelArt) {
    const pattern = [
        "GBGB BGRG GGBBGGBGGB",
        "RKGK GGBR GGGGBGKKKG",
        "GBGB GKGK RKGKGGGBGR",
        "GGKG GKGK BGRGGBGKGG",
        "GKGK BGRB KGBGRGGBRG",
        "BGBB BBRG RGRGKKGGBG",
        "RRGB GGRK GBKGGBKGBR",
        "KRGR GGGB GGBGGRGBKG",
        "RGRG RKGK GGBGBBKGKB",
        "RGRK RRGG GRKGGBBGKG",
        "GBKG KGRB GBGGRGGBGB",
        "GKKG BKGK RRGBGRGGRG"
    ];

    const colors = {
        G: "pixel-green",
        K: "pixel-dark-green",
        B: "pixel-blue",
        R: "pixel-red",
        L: "pixel-bright"
    };

    pattern.forEach((row) => {
        row.replaceAll(" ", "").split("").forEach((pixel) => {
            const square = document.createElement("span");

            if (colors[pixel]) {
                square.classList.add(colors[pixel]);
            }

            pixelArt.appendChild(square);
        });
    });
}
