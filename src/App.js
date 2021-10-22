import { useState } from "react";
import "./App.css";
import BtnAddNew from "./components/BtnAddNew";
import Card from "./components/Card";
import TopNavbar from "./components/TopNavbar";
import SearchBar from "./components/SearchBar";
import RecipesData from "./RecipesData";
import HeartPink from "./icons/heartPink.svg"

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [recipeData, setRecipeDate] = useState(RecipesData)

  const addNewRecipe = (recipe) => {
    setRecipeDate((prevRecipes) => {
      return [recipe, ...prevRecipes]
    })

  }

  const handleSave = () => {
    document.querySelector(".btn-save").innerHTML = "";
    const html = `<img src=${HeartPink} alt="heart-icon"></img>
    Liked`;
    document.querySelector(".btn-save").insertAdjacentHTML("afterbegin", html);
    document.querySelector(".btn-save").classList.add("saved");
  }
  
  return (
    <div>
      <TopNavbar />
      <SearchBar search={e => {setSearchTerm(e.target.value)}}/>
      <Card input={searchTerm} recipe={recipeData} onSave={handleSave}/>
      <BtnAddNew onAdd={addNewRecipe} />
    </div>
  );
}

export default App;
