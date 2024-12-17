// Har fået hjælp af chat GPT til størstedelen af javascripten

/**
 * Denne funktion navigerer til en ny side ved at ændre URL'en.
 * @param {string} page - Navnet på den HTML-side, der skal åbnes.
 */
function goToPage(page) {
    // Ændrer den aktuelle side til den ønskede side ved hjælp af 'window.location.href'
    window.location.href = page;
}



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







// Forumside
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


document.addEventListener("DOMContentLoaded", () => {
    // Referencer til elementer
    const addQuestionButton = document.getElementById("add-question-button"); // "Indsend spørgsmål"-knap
    const addQuestionPopup = document.getElementById("add-question-popup"); // Pop op-boks
    const closePopupButton = addQuestionPopup.querySelector(".close"); // Luk-knap i pop op-boksen
    const questionInput = document.getElementById("question-input"); // Tekstfelt i pop op-boksen
    const submitQuestionButton = document.getElementById("submit-question"); // "Tilføj spørgsmål"-knap
    const forumQuestionsContainer = document.getElementById("forum-questions-container"); // Beholder til spørgsmål

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
                const popup = document.createElement("div");
                popup.classList.add("popup");
                const popupContent = document.createElement("div");
                popupContent.classList.add("popup-content");

                const closeButton = document.createElement("span");
                closeButton.classList.add("close");
                closeButton.textContent = "×";

                const popupQuestion = document.createElement("div");
                popupQuestion.classList.add("popup-question");
                popupQuestion.textContent = questionText;

                const popupComments = document.createElement("div");
                popupComments.classList.add("popup-comments");
                popupComments.innerHTML = `
                    <p>Alice: Ja, Campus+ sørger for både mad og drikke :)</p>
                    <p>Jens: Jeps</p>
                    <p>Emma-sofie: Jeg undrede mig faktisk om det samme</p>
                `;

                const commentInput = document.createElement("textarea");
                commentInput.classList.add("comment-input");
                commentInput.placeholder = "Skriv en kommentar...";

                const submitCommentButton = document.createElement("button");
                submitCommentButton.classList.add("submit-comment");
                submitCommentButton.textContent = "Tilføj kommentar";

                popupContent.appendChild(closeButton);
                popupContent.appendChild(popupQuestion);
                popupContent.appendChild(popupComments);
                popupContent.appendChild(commentInput);
                popupContent.appendChild(submitCommentButton);

                popup.appendChild(popupContent);
                document.body.appendChild(popup); // Tilføj popup til dokumentet

                // Luk popup, når der klikkes på lukkeknappen
                closeButton.addEventListener("click", () => {
                    document.body.removeChild(popup); // Fjern popup fra dokumentet
                });

                // Skjul popup, hvis man klikker udenfor popup-content
                popup.addEventListener("click", (e) => {
                    if (e.target === popup) {
                        document.body.removeChild(popup); // Fjern popup fra dokumentet
                    }
                });
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

















// Javascript til evalueringssiden
// Funktion til at markere en valgt knap
function selectOption4(button) {
    const parent = button.parentElement;
    const buttons = parent.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
}

// Funktion til automatisk ændring af tekstfelt-størrelse
function resizeTextarea4(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}

// Funktion til at opdatere sliderens værdi
function updateSliderValue4() {
    const slider = document.getElementById("slider4");
    const sliderValue = document.getElementById("slider-value4");
    sliderValue.textContent = slider.value;
}

// Funktion til at gemme og omdirigere
function saveAndRedirect4() {
    alert("Tak for din feedback!");
    window.location.href = "hovedside.html";
}










// Stempler siden
// Funktion til at vise popup
function showPopup(id) {
    document.getElementById(id).style.display = "block";
}

// Funktion til at lukke popup
function closePopup(id) {
    document.getElementById(id).style.display = "none";
}
