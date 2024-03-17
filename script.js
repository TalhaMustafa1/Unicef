
function changePlayer(source, name, description,subdescription) {
    document.getElementById('audio-player').src = source + '.mp3';
    document.getElementById('player-name').textContent = name;
    document.getElementById('player-description').textContent = description;
    document.getElementById('subdescription').textContent=subdescription;
}

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
