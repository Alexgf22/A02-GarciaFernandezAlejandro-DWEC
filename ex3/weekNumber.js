function isValidDate(dateString) {
    // Regular expression (YYYY-MM-DD) format
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    // Returns true if the date string matches the format 
    return regex.test(dateString); 
}


function getWeekNumber(dateString) {
    
    if (!isValidDate(dateString)) {
        return "Invalid date format. The date need to be in: YYYY-MM-DD format."; 
    }

    // Extract year, month, and day from the date string and transform to numbers
    const [year, month, day] = dateString.split('-').map(Number);

    // Calculate the date of the first day of the year
    const firstDayOfYear = new Date(year, 0, 1);

    // Define the day of the week for the first day of the year 
    const dayOfWeek = firstDayOfYear.getDay();

    // Calculate the number of days needed to reach the first Thursday of the year
    const daysToThursday = (11 - dayOfWeek) % 7;

    const firstThursday = new Date(year, 0, 1 + daysToThursday);

    /* Calculate the difference in days between the provided date and
    the first Thursday of the year
    */
    const diffInDays = Math.floor((new Date(dateString) - firstThursday) / (1000 * 60 * 60 * 24));

    /* If the difference is negative, it means the date belongs to
    the last week of the previous year
    */
    if (diffInDays < 0) {
        const lastYear = new Date(year - 1, 11, 31);
        // Recursively call getWeekNumber for the last day of the previous year
        return getWeekNumber(`${year - 1}-12-31`); 
    }

    // Calculate the week number based on the variance in days
    const weekNumber = Math.ceil((diffInDays + 1) / 7);

    // Return the week number or regulate if it is the last week of the year
    return (weekNumber === 0) ? 1 : weekNumber;
}

// Function to manage the button click event
function showWeekNumber() {
    const dateInput = document.getElementById("dateInput"); 
    const resultElement = document.getElementById("result");
    const date = dateInput.value.trim(); 

    // Verify if the date input is empty
    if (date === "") {
        resultElement.innerText = "Please enter a date."; 
        return; 
    }

    const weekNumber = getWeekNumber(date);

    // If the result is a string (error message), display it
    if (typeof weekNumber === 'string') {
        resultElement.innerText = weekNumber;
        return;
    }

    // Display the result with the date and week number
    resultElement.innerText = `The date ${date} belongs to week number ${weekNumber}`;
}
