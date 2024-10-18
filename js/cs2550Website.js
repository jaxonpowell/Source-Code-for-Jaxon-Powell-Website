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

// Get all the menu items
const menuItems = document.querySelectorAll(".menu-items a");

// Get all the content sections
const sections = document.querySelectorAll(".container");

// Add click event listeners to each menu item
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Hide all sections
    sections.forEach((section) => {
      section.style.display = "none";
    });

    // Show the section corresponding to the clicked menu item

    const sectionId = item.getAttribute("href");
    const sectionToShow = document.querySelector(sectionId);
    sectionToShow.style.display = "flex";
  });
});

// Code below is for the mobile phone menu
// ****
// ****
// ****
// ****
// This code is used to control the modal that the image will be displayed in
const thumbnail = document.getElementById("thumbnail");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.querySelector(".close-button");

// When the user clicks the thumbnail, open the modal and
//  update the modal image source
thumbnail.addEventListener("click", () => {
  modal.style.display = "block";
  modalImage.src = thumbnail.querySelector("img").src;
});

// When the user clicks the close button, close the modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// This code is used to control the hamburger menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const nav = document.querySelector("nav");
const closeButtonNav = document.createElement("span"); // Create the close button element

// Create the close button for the the hamburger navigation
closeButtonNav.innerHTML = "&times;";
closeButtonNav.classList.add("close-button-nav");
nav.insertBefore(closeButtonNav, nav.firstChild); // Add close button as the first child of nav

// Add an event listener to the hamburger icon - When it's clicked
//  toggle the 'active' class
hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Add an event listener to the close button to hide the nav
closeButtonNav.addEventListener("click", () => {
  nav.style.display = "none";
  hamburgerIcon.classList.remove("active"); // Reset hamburger icon
});
