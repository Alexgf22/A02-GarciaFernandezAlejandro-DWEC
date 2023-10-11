// Create an array with different recipes
const recipes = [
  {
    name: "Meatballs in Sauce",
    explanation: "Delicious meatballs cooked in a flavorful tomato sauce."
  },
  {
    name: "Spaghetti Carbonara",
    explanation: "Classic Italian pasta dish with creamy egg and cheese sauce."
  },
  {
    name: "Potato Omelette",
    explanation: "A Spanish omelette made with potatoes, onions, and eggs."
  },
  {
    name: "Chicken and Rice",
    explanation: "A classic Latin American dish featuring tender chicken pieces cooked with flavorful rice."
  }
];

// Function to show recipes on the webpage
function displayRecipes() {
  const recipeList = document.getElementById("recipeList");

  recipes.forEach((recipe, index) => {
    // Make a new list item element
    const li = document.createElement("li");

    /* Put the inner HTML of the list item with the recipe name in bold
    and its explanation */
    li.innerHTML = `<strong>${recipe.name}</strong>: ${recipe.explanation}`;

    // Append the list item to the 'recipeList'.
    recipeList.appendChild(li);
  });
}

// Event listener for the "Delete Recipe" button
document.getElementById("deleteRecipe").addEventListener("click", () => {
  // Prompt the user for the recipe number to delete
  const recipeNumber = prompt("Enter the recipe number to delete:");

  // Convert the input to a numeric index
  const index = parseInt(recipeNumber) - 1;

  // Check if the index is valid
  if (!isNaN(index) && index >= 0 && index < recipes.length) {
    // Ask for confirmation before deleting the recipe
    const confirmDelete = confirm(`Are you sure you want to delete ${recipes[index].name}?`);

    if (confirmDelete) {
      // Remove the recipe from the 'recipes' array and the list item from the DOM
      recipes.splice(index, 1);
      const recipeList = document.getElementById("recipeList");
      recipeList.removeChild(recipeList.childNodes[index]);
    }
  } else {
    // Alert the user if the input is invalid
    alert("Invalid recipe number.");
  }
});

// Call the 'displayRecipes' function to initially show the recipes
displayRecipes();
