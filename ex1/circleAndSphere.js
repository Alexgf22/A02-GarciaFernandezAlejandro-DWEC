function calculate() {
    let radiusInput = document.getElementById("radiusInput");
    let radiusValue = parseFloat(radiusInput.value);

    if (isNaN(radiusValue) || radiusValue <= 0) {
        alert("Please enter a valid positive number for the radius.");
        radiusInput.value = "";
        return;
    }

    let radius = radiusValue.toFixed(2);
    let diameter = (2 * radiusValue).toFixed(2);
    let circumferencePerimeter = (2 * Math.PI * radiusValue).toFixed(2);
    let circleArea = (Math.PI * radiusValue * radiusValue).toFixed(2);
    let sphereArea = (4 * Math.PI * radiusValue * radiusValue).toFixed(2);
    let sphereVolume = ((4/3) * Math.PI * radiusValue * radiusValue * radiusValue).toFixed(2);

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<br>";
    resultsDiv.innerHTML += "1. The value of the radius: " + radius + " cm <br>";
    resultsDiv.innerHTML += "2. The value of the diameter: " + diameter + " cm <br>";
    resultsDiv.innerHTML += "3. The value of the circumference perimeter: " + circumferencePerimeter + " cm <br>";
    resultsDiv.innerHTML += "4. The value of the circle area: " + circleArea + " cm² <br>";
    resultsDiv.innerHTML += "5. The value of the sphere area: " + sphereArea + " cm² <br>";
    resultsDiv.innerHTML += "6. The value of the sphere volume: " + sphereVolume + " cm³ <br>";
}
