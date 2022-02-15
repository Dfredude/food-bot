import "./recipe-finder.css"
import { SearchBar } from "../GUI/basics";
import React, { useState, useEffect } from 'react';

const Recipe = ({props}) => {
  let {label, image, url} = props; 
  if (image.search("svg")==-1) return <article className="recipe">
    <a href={url}><img src={image} alt="Oops! image not found"></img></a>
    <h4>{label}</h4>
  </article>;
  return null
};

const RecipeFinder = () => {
    async function loadRecipes(URL_endpoint) {
      const response = await fetch(URL_endpoint)
      const json_data = await response.json()
      setIsLoading(false)
      setRecipe(json_data.hits)
    }

    const searchRecipes = (e) => {
      e.preventDefault();
      const query = document.getElementsByClassName("search-bar")[0].value
      if (query != ''){
        setIsLoading(true);
        loadRecipes(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=25dc3243&app_key=12b00e88e757e23bd5111b6c378f0205`)
      }
    }

    let [isLoading, setIsLoading] = useState(true)
    let [recipes, setRecipe] = useState([])
    useEffect(() => loadRecipes("https://api.edamam.com/api/recipes/v2?type=public&q=burrito&app_id=25dc3243&app_key=12b00e88e757e23bd5111b6c378f0205"), [])
    
    if (!isLoading) return <>
      <h1>Find Awesome recipes</h1>
      <SearchBar title="Search" onSubmitFunction={searchRecipes}></SearchBar>
      <div id="recipe-finder">
            {recipes.map((recipe, index) => {
              return <Recipe props={recipe.recipe} key={index}></Recipe>
            })}
      </div>
    </>
    return <>
    <h1>Find Awesome recipes</h1>
    <SearchBar title="Search" onSubmitFunction={searchRecipes}></SearchBar>
    <h2>Loading...</h2>
    </>
}

export default RecipeFinder