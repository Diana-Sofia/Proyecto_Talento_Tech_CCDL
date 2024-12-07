function openModal(imageSrc, description) {
    // Get modal elements
    var popupImage = document.getElementById("popupImage");
    var popupDescription = document.getElementById("popupDescription");

    // Check if modal elements exist
    if (popupImage && popupDescription) {
        popupImage.src = imageSrc;  // Set the image source
        popupDescription.textContent = description;  // Set the description
    }

    // Show the modal (if it's hidden by default)
    var popupModal = document.getElementById("popupModal");
    if (popupModal) {
        popupModal.style.display = "block";  // Make the modal visible
    }
}

// Function to close the modal
function closeModal() {
    var popupModal = document.getElementById("popupModal");
    if (popupModal) {
        popupModal.style.display = "none";  // Hide the modal
    }
}
