// Javascript til forum siderne
document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question");
    const popup = document.querySelector(".popup");
    const popupContent = document.querySelector(".popup-content");
    const popupQuestion = document.querySelector(".popup-question");
    const closeBtn = document.querySelector(".close");
    const commentInput = document.querySelector(".comment-input");
    const submitCommentBtn = document.querySelector(".submit-comment");
    const commentsContainer = document.querySelector(".popup-comments");

    // Gør at det popper frem, når man trykker på en af spørgsmålene
    questions.forEach((question) => {
        question.addEventListener("click", () => {
            popupQuestion.textContent = question.textContent;
            popup.classList.remove("hidden");
        });
    });

    // Gør at det der er poppet frem forsvinder hvis man trykker på det eller ved siden af pop op boksen
    popup.addEventListener("click", (e) => {
        if (e.target === popup || e.target === closeBtn) {
            popup.classList.add("hidden");
        }
    });

    // f
    submitCommentBtn.addEventListener("click", () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const newComment = document.createElement("p");
            newComment.textContent = `Du: ${commentText}`;
            commentsContainer.appendChild(newComment);
            commentInput.value = ""; // Clear the input
        }
    });
});


// Nedenstående gør, at pop op boksen bliver i den farve, som det spørgsmål man trykkede på er i
// Alle spørgsmål og pop op-elementer
const questions = document.querySelectorAll('.question');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');


questions.forEach(question => {
    question.addEventListener('click', () => {
        // Henter baggrundsfarven på det klikbare spørgsmål
        const questionColor = window.getComputedStyle(question).backgroundColor;

        // Sæt pop op-boksen til samme farve
        popupContent.style.backgroundColor = questionColor;

        // Vis pop op-boksen
        popup.classList.remove('hidden');
    });
});

// Luk pop op-boksen, når man klikker på "close" eller udenfor boksen
document.querySelector('.close').addEventListener('click', () => {
    popup.classList.add('hidden');
});

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.add('hidden');
    }
});


// Gør at pop up boksen popper op i den farve som spørgsmålet man trykkede på er
questions.forEach(question => {
    question.addEventListener('click', () => {
        // Henter baggrundsfarven fra det klikkede spørgsmål
        const questionColor = window.getComputedStyle(question).backgroundColor;

        // pop op-boksens farve
        popupContent.style.backgroundColor = questionColor;

        // Knappen "tilføj kommentar"s farve
        const submitCommentButton = document.querySelector('.submit-comment');
        submitCommentButton.style.backgroundColor = questionColor;

        // Vis pop op-boksen
        popup.classList.remove('hidden');
    });
});



// Laver hvid stroke/kant omkring "tilføj kommentar" knappen i pop up boksen
questions.forEach(question => {
    question.addEventListener('click', () => {
        // Henter baggrundsfarven fra spørgsmålet
        const questionColor = window.getComputedStyle(question).backgroundColor;

        // Pop op-boksens farve
        popupContent.style.backgroundColor = questionColor;

        // Sætter knappen "tilføj kommentar"s farve og hvid kant
        const submitCommentButton = document.querySelector('.submit-comment');
        submitCommentButton.style.backgroundColor = questionColor;
        submitCommentButton.style.border = '2px solid white'; // Hvid kant

        // Vis pop op-boksen
        popup.classList.remove('hidden');
    });
});