function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

// Function to show/hide subject popup when a semester button is clicked
function toggleSubjectsPopup(id) {
    const popup = document.getElementById(id);
    const popups = document.querySelectorAll('.dropdown-list2');

// Close all other subject popups except the one being clicked
    popups.forEach((popupElement) => {
    if (popupElement.id !== id) {
    popupElement.style.display = 'none';
}
});

// Toggle the display of the subject popup for the clicked semester
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

function closeSubjectsPopup(id) {
    const popup = document.getElementById(id);
        popup.style.display = 'none';
}

function toggleBox() {
var box = document.getElementById('box');
box.style.display = (box.style.display === 'none' || box.style.display === '') ? 'block' : 'none';
}



//     // Function to close the modal
//     function closeModal() {
//         var modal = document.getElementById("myModal");
//         modal.style.display = "none";
//     }

// // Function to close the modal
// function closeModal() {
//     var modal = document.getElementById("myModal");
//     modal.style.display = "none";
// }

// // Function to update countdown
// function updateCountdown(seconds) {
//     var countdownElement = document.getElementById("countdown");
//     countdownElement.textContent = "Closing in " + seconds + " seconds";
// }

// // Function to switch images
// function switchImages() {
//     var image1 = document.getElementById("image1");
//     var image2 = document.getElementById("image2");

//     image1.style.display = "none";
//     image2.style.display = "block";
// }

// // Countdown timer
// var countdownSeconds = 5; // Total time = 2.5s (image1) + 2.5s (image2)
// var countdownInterval = setInterval(function() {
//     updateCountdown(countdownSeconds);
//     countdownSeconds--;
//     if (countdownSeconds < 0) {
//         clearInterval(countdownInterval);
//         closeModal();
//     } else if (countdownSeconds === 2) {
//         switchImages();
//     }
// }, 1000); // Update countdown every second
