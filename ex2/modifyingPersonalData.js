function displayResults() {
    let name = document.getElementById("nameInput").value;
    let surnames = document.getElementById("surnamesInput").value;

    // Check if inputs are empty
    if (name.trim() === "" || surnames.trim() === "") {
        alert("Please enter a valid name and surnames.");
        return;
    }

    // Check if inputs contain only letters
    if (!/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(name) || !/^[A-Za-zÁÉÍÓÚáéíóú\s]+$/.test(surnames.replace(/\s/g, ''))) {
        alert("Please enter only letters in the name and surnames.");
        return;
    }

    // Count lengths without blanks
    let totalSize = name.replace(/\s/g, '').length + surnames.replace(/\s/g, '').length;

    let lowercaseString = (name + " " + surnames).toLowerCase();
    let uppercaseString = (name + " " + surnames).toUpperCase();

    let separatedSurnames = surnames.split(" ");
    let stringSeparation = "Name: " + name + "<br>First surname: " + separatedSurnames[0] + "<br>Second surname: " + separatedSurnames[1];

    /* Proposal username 1: initial of the name, the first
    surname and initial of the second surname  */
    let usernameProposal1 = (name[0] + separatedSurnames[0] + separatedSurnames[1][0]).toLowerCase(); 

    /* Proposal username 2: First three letters of
    name (with the first capitalized) and first three letters of 
    each surname */
    let usernameProposal2 = name.slice(0,1).toUpperCase() + name.slice(1,3).toLowerCase() + separatedSurnames[0].slice(0,3).toLowerCase() + separatedSurnames[1].slice(0,3).toLowerCase();


    // Display the results of each part
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>1. Total size of name plus surnames (excluding spaces): ${totalSize}</p>
        <p>2. Lowercase string: ${lowercaseString}</p>
        <p>   Uppercase string: ${uppercaseString}</p>
        <p>3. Division of name and surnames:<br>${stringSeparation}</p>
        <p>4. Proposal for username 1: ${usernameProposal1}</p>
        <p>5. Proposal for username 2: ${usernameProposal2}</p>
    `;
}
