function toggleLastServingDate(hasOffers) {
    const lastServingDateContainer = document.getElementById("lastServingDateContainer");
    const lastServingDateInput = document.getElementById("last-serving-date");

    if (hasOffers) {
        lastServingDateContainer.style.display = "block";
        lastServingDateInput.setAttribute("required", "required"); // Make it required if "Yes" is selected
    } else {
        lastServingDateContainer.style.display = "none";
        lastServingDateInput.removeAttribute("required"); // Remove requirement if "No" is selected
    }
}

function openForm() {
    document.getElementById("applyFormModal").style.display = "block";
}

function closeForm() {
    document.getElementById("applyFormModal").style.display = "none";
}

document.getElementById("applicationForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Thank you for applying! Your details have been submitted.");
    closeForm(); // Close the form after submission
};
