const inputEl = document.querySelector("#input");
const searchButton = document.querySelector("#search");
const resultEl = document.querySelector("#result");
const recipeImage = document.querySelector("#recipe-img");
const recipeName = document.querySelector("#recipe-name");
const recipeArea = document.querySelector("#recipe-area");
const ingredientsEl = document.querySelector(".ingredients");
const viewRecipeBtn = document.querySelector("#view-recipe-btn");
const wrapperEl = document.querySelector(".wrapper");

// recipe-dev
const recipeDiv = document.createElement("div");
recipeDiv.classList.add("recipe-div");
document.body.appendChild(recipeDiv);

inputEl.focus();

if (inputEl.value === "") {
  resultEl.style.display = "none";
  recipeDiv.style.display = "none";
}

// display ingredients
function displayIngredients(recipe) {
  let ingredientsList = "";
  let i = 1;
  Object.entries(recipe).forEach(([key, value]) => {
    if (key.startsWith("strIngredient") && value) {
      const measureKey = `strMeasure${key.slice(13)}`;
      const measure = recipe[measureKey];
      ingredientsList += `<li>${measure} ${value}</li>`;
      i++;
    }
  });
  return ingredientsList;
}

// display recipe
function displayRecipe(recipe) {
  wrapperEl.style.display = "none";
  recipeDiv.style.display = "block";

  let content = `
    <div class="head">
        <i class="fa-solid fa-xmark close" id="back-${recipe.idMeal}"></i>
    </div>
    <div class="instruction-section">
        <p class="instructions">${recipe.strInstructions}</p>
        <p class="youtube">Youtube : <a href="${recipe.strYoutube}" target="_blank">${recipe.strYoutube}</a></p>
    </div>
  `;

  recipeDiv.innerHTML = content;

  document
    .querySelector("#back-" + recipe.idMeal)
    .addEventListener("click", () => {
      recipeDiv.style.display = "none";
      wrapperEl.style.display = "block";
    });
}

// main function
async function showRecipe() {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputEl.value}`;

  const response = await fetch(url);

  const recipeData = await response.json();

  // Check if the recipe data is empty or not
  if (!recipeData.meals) {
    alert("No recipe found for the input item.");
    return;
  }

  const recipe = recipeData.meals[0];

  console.log(recipeData);

  recipeImage.src = recipe.strMealThumb;
  recipeName.textContent = inputEl.value.toUpperCase();
  recipeArea.textContent = recipe.strArea;
  ingredientsEl.innerHTML = displayIngredients(recipe);

  viewRecipeBtn.addEventListener("click", () => {
    displayRecipe(recipe);
  });

  resultEl.style.display = "block";
  inputEl.value = "";
}

// function displayRecipe

searchButton.addEventListener("click", () => {
  showRecipe();
});
