import "./App.css"
import RecipeFinder from './Services/recipes-finder';
import FoodFinder from "./Services/food-finder";
import ShoppingListGenerator from "./Services/shopping-list-generator";
import { ModernButton } from "./GUI/basics"
import { useState } from "react";

function App() {

  const Service = (props) => {
    return <>{props.component}</>
  }
  
  let [current, setCurrent] = useState(<FoodFinder />);
  
  return (
    <div className="App">
      <>{current}</>
      <section className="buttons">
        <ModernButton onClickFunction = {() => {setCurrent(<RecipeFinder />)}} title="Find recipes" />
        <ModernButton onClickFunction = {() => {setCurrent(<FoodFinder />)}} title="Find food" />
        <ModernButton onClickFunction = {() => {setCurrent(<ShoppingListGenerator />)}} title="Generate your shopping list" />
      </section>
    </div>
  );
}

export default App;
