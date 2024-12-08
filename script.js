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