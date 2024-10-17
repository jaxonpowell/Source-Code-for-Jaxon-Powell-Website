// Get elements
const thumbnail = document.getElementById("thumbnail");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");
const overlay = document.querySelector(".modal-overlay");

// Function to open modal
const openModal = () => {
    modal.style.display = "block";
    document.body.classList.add("modal-active");
};

// Function to close modal
const closeModal = () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-active");
};

// Event listeners
thumbnail.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Close modal if clicking outside of the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});