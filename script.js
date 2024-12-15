/* ===========================
   Forside, login og opret dig side
   =========================== */

/**
 * Denne funktion navigerer til en ny side ved at ændre URL'en.
 * @param {string} page - Navnet på den HTML-side, der skal åbnes.
 */
function goToPage(page) {
    // Ændrer den aktuelle side til den ønskede side ved hjælp af 'window.location.href'
    window.location.href = page;
}

/* ===========================
   EKSTRA: VALIDERING AF FORMULAR
   =========================== */

// Tilføjer event listener til formularen på login-siden
document.addEventListener("DOMContentLoaded", function () {
    // Finder alle formularer i dokumentet
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        // Tilføjer en eventlistener til formularens submit-knap
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Forhindrer siden i at reloade ved submission

            // Finder inputfelterne i formularen
            const inputs = form.querySelectorAll("input");
            let allFieldsFilled = true;

            // Tjekker, om alle inputfelter er udfyldt
            inputs.forEach((input) => {
                if (!input.value) {
                    alert(`Udfyld venligst feltet: ${input.placeholder}`);
                    allFieldsFilled = false;
                }
            });

            // Hvis alle felter er udfyldt, giver besked i konsollen
            if (allFieldsFilled) {
                alert("Formularen blev sendt!");
                console.log("Formularen blev sendt med følgende værdier:");
                inputs.forEach((input) => {
                    console.log(`${input.placeholder}: ${input.value}`);
                });
            }
        });
    });
});







// Hovedside
document.addEventListener("DOMContentLoaded", () => {
    // Referencer til elementer
    const addQuestionButton = document.getElementById("add-question-button"); // "Indsend spørgsmål"-knap
    const addQuestionPopup = document.getElementById("add-question-popup"); // Pop op-boks
    const closePopupButton = addQuestionPopup.querySelector(".close"); // Luk-knap i pop op-boksen
    const questionInput = document.getElementById("question-input"); // Tekstfelt i pop op-boksen
    const submitQuestionButton = document.getElementById("submit-question"); // "Tilføj spørgsmål"-knap
    const forumQuestionsContainer = document.getElementById("forum-questions"); // Beholder til spørgsmål

    // Åbn pop op-boksen, når "Indsend spørgsmål"-knappen klikkes
    addQuestionButton.addEventListener("click", () => {
        addQuestionPopup.classList.remove("hidden"); // Vis pop op-boksen
    });

    // Luk pop op-boksen, når man klikker på luk-knappen eller uden for boksen
    addQuestionPopup.addEventListener("click", (e) => {
        if (e.target === addQuestionPopup || e.target === closePopupButton) {
            addQuestionPopup.classList.add("hidden"); // Skjul pop op-boksen
        }
    });

    // Håndter indsendelse af spørgsmål
    submitQuestionButton.addEventListener("click", () => {
        const questionText = questionInput.value.trim(); // Hent tekstfeltets indhold
        if (questionText) {
            // Opret et nyt spørgsmål
            const newQuestion = document.createElement("div");
            newQuestion.classList.add("question");
            newQuestion.textContent = questionText;

            // Tilføj pop op-adfærd for det nye spørgsmål
            newQuestion.addEventListener("click", () => {
                const popup = document.querySelector(".popup.hidden"); // Find popup
                const popupQuestion = popup.querySelector(".popup-question");
                popupQuestion.textContent = questionText; // Sæt spørgsmålsteksten i popup'en
                popup.classList.remove("hidden"); // Vis popup
            });

            // Tilføj spørgsmålet til containeren
            forumQuestionsContainer.appendChild(newQuestion);

            // Ryd tekstfeltet og luk pop op-boksen
            questionInput.value = "";
            addQuestionPopup.classList.add("hidden");
        }
    });
});











// Javascript til din stand side.
document.addEventListener("DOMContentLoaded", () => {
    // Håndter frokostvalg (Ja/Nej)
    const frokostJa = document.getElementById("frokost-ja");
    const frokostNej = document.getElementById("frokost-nej");
    const frokostAntalContainer = document.getElementById("frokost-antal-container");

    frokostJa.addEventListener("click", () => {
        // Marker "Ja" som valgt
        frokostJa.classList.add("active");
        frokostNej.classList.remove("active");
        // Vis feltet til antal frokoster
        frokostAntalContainer.style.display = "block";
    });

    frokostNej.addEventListener("click", () => {
        // Marker "Nej" som valgt
        frokostNej.classList.add("active");
        frokostJa.classList.remove("active");
        // Skjul feltet til antal frokoster
        frokostAntalContainer.style.display = "none";
    });

// Vælg alle farveknapper. Her styres det, at når man trykker på en knap ændres farven.
    const colorButtons = document.querySelectorAll(".color-btn");

    let selectedButtons = []; // Holder styr på valgte knapper

    colorButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Hvis knappen allerede er valgt
            if (button.classList.contains("active")) {
                button.classList.remove("active"); // Fjern markeringen
                selectedButtons = selectedButtons.filter(btn => btn !== button); // Fjern fra listen
            } else {
                // Hvis der er færre end 2 valgte knapper
                if (selectedButtons.length < 2) {
                    button.classList.add("active"); // Marker knappen
                    selectedButtons.push(button); // Tilføj til listen
                }
            }
        });
    });

    // Håndter strømvalg (Ja/Nej)
    const stromJa = document.getElementById("strom-ja");
    const stromNej = document.getElementById("strom-nej");

    stromJa.addEventListener("click", () => {
        // Marker "Ja" som valgt
        stromJa.classList.add("active");
        stromNej.classList.remove("active");
    });

    stromNej.addEventListener("click", () => {
        // Marker "Nej" som valgt
        stromNej.classList.add("active");
        stromJa.classList.remove("active");
    });

    // Håndter gem-knappen
    const form = document.getElementById("tilmelding-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Forhindrer standard formularindsendelse

        // Saml alle formularens data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.selectedColors = selectedColors;

        console.log("Gemte data:", data); // Log data til konsollen

        // Redirect til forsiden
        window.location.href = "index.html";
    });
});