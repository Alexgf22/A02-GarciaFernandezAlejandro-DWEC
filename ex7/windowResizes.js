// Listen for a click event on the element with the id 'openWindow'
document.getElementById('openWindow').addEventListener('click', function() {
    // Open a new window with a blank page, set dimensions to 400x400 pixels
    var ventana = window.open('', '', 'width=400,height=400');

    // Set an interval that runs every second
    var interval = setInterval(function() {
        // Check if the window is closed or its dimensions are 160x160 pixels or smaller
        if (ventana === null || ventana.innerWidth <= 160 || ventana.innerHeight <= 160) {
            // If so, stop the current interval
            clearInterval(interval);

            // Set another interval that will run every second
            setInterval(function() {
                // Check if the window is open and if its dimensions are less than 400 pixels
                if (ventana !== null && (ventana.innerWidth < 400 || ventana.innerHeight < 400)) {
                    // If so, increase the size of the window by 40 pixels in both dimensions
                    ventana.resizeBy(40, 40);
                }
            }, 1000);
        } else {
            // If the window's dimensions are not 160x160 pixels or smaller
            // Move the window to a random position within the screen's margins
            ventana.moveBy(
                Math.floor(Math.random() * (window.innerWidth - 400)),
                Math.floor(Math.random() * (window.innerHeight - 400))
            );

            // Decrease the size of the window by 40 pixels in both dimensions
            ventana.resizeBy(-40, -40);
        }
    }, 1000);
});
