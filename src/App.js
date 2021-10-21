import { useState } from "react";
import "./App.css";
import BtnAddNew from "./components/BtnAddNew";
import Card from "./components/Card";
import TopNavbar from "./components/TopNavbar";
import SearchBar from "./components/SearchBar";
import RecipesData from "./RecipesData";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [recipeData, setRecipeDate] = useState(RecipesData)

  const addNewRecipe = (recipe) => {
    setRecipeDate((prevRecipes) => {
      return [recipe, ...prevRecipes]
    })

  }
  
  return (
    <div>
      <TopNavbar />
      <SearchBar search={e => {setSearchTerm(e.target.value)}}/>
      <Card input={searchTerm} recipe={recipeData}/>
      <BtnAddNew onAdd={addNewRecipe} />
    </div>
  );
}

export default App;
