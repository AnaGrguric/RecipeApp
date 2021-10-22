import { useState } from "react";
import CloseIcon from "../icons/closeIcon.svg";

function PopupAddRecipe(props) {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDifficulty, setRecipeDifficulty] = useState("easy");
  const [recipeTime, setRecipeTime] = useState("");
  const [recipePortion, setRecipePortion] = useState("");
  const [recipeIngredient, setRecipeIngredient] = useState([]);
  const [recipeImage, setRecipeImage] = useState("");

  const handleNewInputField = (e) => {
    const ingredientInputs = document.querySelector(".ingredients-inputs");
    const html = `<input id="one" type="text" value=${recipeIngredient}></input>`;
    ingredientInputs.insertAdjacentHTML("beforeend", html);
  };

  const handleRecipeName = (e) => {
    setRecipeName(e.target.value);
  };

  const handleRecipeTime = (e) => {
    setRecipeTime(e.target.value);
  };

  const handleRecipePortion = (e) => {
    setRecipePortion(e.target.value);
  };

  const handleRecipeDifficulty = (e) => {
    setRecipeDifficulty(e.target.value);
  };

  const handleRecipeIngredient = (e) => {
    setRecipeIngredient(e.target.value.split(","));
  };

  const handleRecipeImage = (e) => {
    setRecipeImage(`./images/${e.target}`);
  };

  const handleRecipeData = (e) => {
    e.preventDefault();

    const newRecipeData = {
      name: recipeName,
      img: recipeImage ? recipeImage : "./images/image.png",
      star: 4.5,
      difficulty: recipeDifficulty,
      time: recipeTime.toString() + " min",
      portion: recipePortion,
      ingredients: recipeIngredient,
    };

    props.onAdd(newRecipeData);

    console.log(newRecipeData);

    setRecipeName("");
    setRecipeTime("");
    setRecipePortion("");
    setRecipeIngredient("");
    setRecipeImage("");
  };

  return (
    <form onSubmit={handleRecipeData} className="popup-add-recipe">
      <img src={CloseIcon} alt="close-icon" className="close-icon" onClick={props.close}></img>
      <h5>Enter recipe data:</h5>
      <div className="input-fields">
        <label>Recipe name:</label>
        <input
          type="text"
          value={recipeName}
          onChange={handleRecipeName}
          placeholder="Enter recipe name"
          required
        ></input>
      </div>
      <div className="inputs-row">
        <div className="input-fields small">
          <label>Difficulty</label>
          <select onChange={handleRecipeDifficulty}>
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
          </select>
        </div>
        <div className="input-fields small">
          <label>Time</label>
          <input
            type="number"
            value={recipeTime}
            onChange={handleRecipeTime}
            placeholder="In minutes"
          ></input>
        </div>
        <div className="input-fields small">
          <label>Portions</label>
          <input
            type="number"
            value={recipePortion}
            onChange={handleRecipePortion}
            placeholder="Persons"
          ></input>
        </div>
      </div>
      <div className="input-fields">
        <label>Ingredients:</label>
        <div className="ingredients-inputs">
          <input
            type="text"
            value={recipeIngredient}
            onChange={handleRecipeIngredient}
            placeholder="Enter ingredients seperate by comma"
          ></input>
        </div>
       {/*  <span onClick={handleNewInputField}>+ Add more</span> */}
      </div>
      <div className="input-fields">
        <label>Uploade image:</label>
        <input
        name="fff"
          type="file"
          name={recipeImage}
          onChange={handleRecipeImage}
        ></input>
      </div>
      <button type="submit" className="btn-submit">
        Add Recipe
      </button>
    </form>
  );
}

export default PopupAddRecipe;
