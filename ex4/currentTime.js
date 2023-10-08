function updateClock() {
    // Obtain the current date and time
    const now = new Date();

    // Obtain the hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Check if it is AM or PM format
    const ampm = hours >= 12 ? 'pm' : 'am';

    // Transform hours to 12(hour) format
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Add a zero to the left to minutes and seconds if they are single digits
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Establish a formatted time string
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    const clockElement = document.getElementById('clock');

    // Make sure if the element with the id 'clock' exists
    if (clockElement) {
        // Update the content of the element with the new time
        clockElement.innerText = timeString;
    } else {
        console.error("Element with id 'clock' not found");
    }
}

// Call the 'updateClock' function each second
setInterval(updateClock, 1000);
