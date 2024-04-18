
function changePlayer(source, name, description, subdescription) { 
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = source + '.mp3';
    audioPlayer.play(); // Play the audio directly
    document.getElementById('player-name').textContent = name;
    document.getElementById('player-description').innerHTML = description;
    document.getElementById('subdescription').textContent = subdescription;
}    

document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0; // Variable to keep track of the current button index
    
    // Get all buttons in the playlist
    var buttons = document.querySelectorAll('.playList button');

    // Function to handle button click
    function moveToNextButton() {
        if (currentIndex < buttons.length - 1) {
            currentIndex++; // Move to the next button index
            buttons[currentIndex].click(); // Simulate a click on the next button
        } else {
            // If currentIndex is already at the last button, do something else or reset to the first button
            // For example:
            // currentIndex = 0;
            // buttons[currentIndex].click();
            console.log("Reached the last button.");
        }
    }

    // Add click event listener to the "move-to-next-button" button
    document.getElementById('move-to-next-button').addEventListener('click', moveToNextButton);
});



function toggleDescription() {
    var description = document.querySelector('.description');
    var toggleButton = document.getElementById('toggle-description');
    var hideDescription=document.getElementById('hide-description');
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
        toggleButton.style.display = 'none';
        hideDescription.style.display='block'; // Hide the toggle button
    }
    description.focus();
}

function hideDescription() {
    var description = document.querySelector('.description');
    var toggleButton = document.getElementById('toggle-description');
    var hideDescription=document.getElementById('hide-description');
    description.style.display = 'none';
    hideDescription.style.display='none';
    toggleButton.style.display = 'block';
    // Show the toggle button
    toggleButton.focus();
}
