import { useState } from "react";

function PopupAddRecipe(props) {

  const [recipeName, setRecipeName] = useState("");
  const [recipeDifficulty, setRecipeDifficulty] = useState("easy");
  const [recipeTime, setRecipeTime] = useState("");
  const [recipePortion, setRecipePortion] = useState("");
  const [recipeIngredient, setRecipeIngredient] = useState("");

 /*  const handleNewInputField = (e) => {
    const ingredientInputs = document.querySelector(".ingredients-inputs");
    const html =  `<input id="one" type="text" value="${recipeIngredient}"></input>`
    ingredientInputs.insertAdjacentHTML("beforeend", html);
  } */
  
  const handleRecipeName = (e) => {
    setRecipeName(e.target.value);
  }

  const handleRecipeTime = (e) => {
    setRecipeTime(e.target.value);
  }

  const handleRecipePortion = (e) => {
    setRecipePortion(e.target.value);
  }

  const handleRecipeDifficulty = (e) => {
    setRecipeDifficulty(e.target.value);
  }

  const handleRecipeIngredient = (e) => {
    setRecipeIngredient(e.target.value)
  }

  const handleRecipeData = (e) => {
    e.preventDefault();

    const newRecipeData = {
      name: recipeName,
      img: "./images/recipe1.jpeg",
      star: 4.5,
      difficulty: recipeDifficulty,
      time: recipeTime,
      portion: recipePortion,
      ingredients: [recipeIngredient],
    }

    props.onAdd(newRecipeData);

    console.log(newRecipeData);

    setRecipeName("");
    setRecipeTime("");
    setRecipePortion("");
    setRecipeIngredient("");

  }

  return (
    <form onSubmit={handleRecipeData} className="popup-add-recipe">
      <h5>Enter recipe data:</h5>
      <div className="input-fields">
        <label>Recipe name:</label>
        <input type="text" value={recipeName} onChange={handleRecipeName} required></input>
      </div>
      <div className="inputs-row">
        <div className="input-fields small">
        <label>Difficulty</label>
        <select onChange={handleRecipeDifficulty}>
          <option>easy</option>
          <option>meddium</option>
          <option>hard</option>
        </select>
        </div>
      <div className="input-fields small">
        <label>Time</label>
        <input type="number" value={recipeTime} onChange={handleRecipeTime}></input>
      </div>
      <div className="input-fields small">
        <label>Portions</label>
        <input type="number" value={recipePortion} onChange={handleRecipePortion}></input>
      </div>
      </div>
      <div className="input-fields">
        <label>Ingredients:</label>
        <div className="ingredients-inputs">
        <input type="text" value={recipeIngredient} onChange={handleRecipeIngredient}></input>
        </div>
        {/* <span onClick={handleNewInputField}>+</span> */}
      </div>
      <button type="submit" className="btn-submit">Add Recipe</button>
    </form>
  );
}

export default PopupAddRecipe;
