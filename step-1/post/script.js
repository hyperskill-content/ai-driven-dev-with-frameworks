// Select all elements with the class 'read-more'
const readMoreButtons = document.querySelectorAll('.read-more');

// Add a click event listener to each button
readMoreButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Show an alert when the button is clicked
        alert('This article is available for subscribers only.');
    });
}); 