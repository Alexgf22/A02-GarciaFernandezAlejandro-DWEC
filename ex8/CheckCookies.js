// Event listener to ensure the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Getting references to HTML elements
    const output = document.getElementById('output');
    const checkCookiesBtn = document.getElementById('checkCookies');
    const checkLocalStorageBtn = document.getElementById('checkLocalStorage');

    // Function to check if cookies exist and display data if available
    function checkCookies() {
        const name = getCookieValue('name');
        const address = getCookieValue('address');
        const age = getCookieValue('age');
        const profession = getCookieValue('profession');

        // If all required data exists in cookies
        if (name && address && age && profession) {
            // Displaying data in HTML
            output.innerHTML = `
                <h2>Person's Data (Cookies)</h2>
                <p>Name: ${name}</p>
                <p>Address: ${address}</p>
                <p>Age: ${age}</p>
                <p>Profession: ${profession}</p>
            `;
            // Deleting cookies after displaying data
            deleteCookies();
        } else {
            // If any required data is missing, prompt the user
            promptData('Cookies');
        }
    }

    // Function to check if local storage data exists and display it
    function checkLocalStorage() {
        const name = localStorage.getItem('name');
        const address = localStorage.getItem('address');
        const age = localStorage.getItem('age');
        const profession = localStorage.getItem('profession');

        // If all required data exists in local storage
        if (name && address && age && profession) {
            // Displaying data in HTML
            output.innerHTML = `
                <h2>Person's Data (Local Storage)</h2>
                <p>Name: ${name}</p>
                <p>Address: ${address}</p>
                <p>Age: ${age}</p>
                <p>Profession: ${profession}</p>
            `;
        } else {
            // If any required data is missing, prompt the user
            promptData('Local Storage');
        }
    }

    // Function to get the value of a cookie by its name
    function getCookieValue(cookieName) {
        const cookie = document.cookie.split(';').find((item) => item.trim().startsWith(cookieName + '='));
        if (cookie) {
            return cookie.split('=')[1];
        }
        return null;
    }

    // Function to delete cookies
    function deleteCookies() {
        document.cookie = "name=; expires=Fri, 10 Oct 1992 10:20:00 UTC; path=/;";
        document.cookie = "address=; expires=Fri, 10 Oct 1992 10:20:00 UTC; path=/;";
        document.cookie = "age=; expires=Fri, 10 Oct 1992 10:20:00 UTC; path=/;";
        document.cookie = "profession=; expires=Fri, 10 Oct 1992 10:20:00 UTC; path=/;";
    }

    // Function to prompt user for data and store it in cookies or local storage
    function promptData(storageType) {
        let name, address, age, profession;

        // Prompting user for data and validating it
        do {
            name = prompt(`Enter your name (${storageType}):`);
        } while (!name);

        do {
            address = prompt(`Enter your address (${storageType}):`);
        } while (!address);

        do {
            age = parseInt(prompt(`Enter your age (${storageType}):`));
        } while (isNaN(age));

        do {
            profession = prompt(`Enter your profession (${storageType}):`);
        } while (!profession);

        // Storing data in cookies or local storage based on the storageType
        if (storageType === 'Cookies') {
            setCookie('name', name);
            setCookie('address', address);
            setCookie('age', age.toString());
            setCookie('profession', profession);
        } else if (storageType === 'Local Storage') {
            localStorage.setItem('name', name);
            localStorage.setItem('address', address);
            localStorage.setItem('age', age.toString());
            localStorage.setItem('profession', profession);
        }
    }

    // Function to set a cookie with a specified name and value
    function setCookie(name, value) {
        document.cookie = `${name}=${value}; expires=Mon, 20 Feb 2026 23:59:59 GMT; path=/`;
    }

    // Adding event listeners to the buttons
    checkCookiesBtn.addEventListener('click', checkCookies);
    checkLocalStorageBtn.addEventListener('click', checkLocalStorage);
});
