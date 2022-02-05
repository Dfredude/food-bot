import "./App.css"
import RecipeFinder from './Services/recipes-finder';
import FoodFinder from "./Services/food-finder";
import ShoppingListGenerator from "./Services/shopping-list-generator";
import { ModernButton } from "./GUI/basics"
import { useState } from "react";

function App() {

  let [current, setCurrent] = useState(<RecipeFinder />);
  
  return (
    <div className="App">
     {current}
     <nav className="buttons">
        <ul>
          <li className="navigation-button"><ModernButton onClickFunction = {() => {setCurrent(<RecipeFinder />)}} title="Find recipes" /></li>
          {/*<li className="navigation-button"><ModernButton onClickFunction = {() => {setCurrent(<FoodFinder />)}} title="Find food" /></li>
          <li className="navigation-button"><ModernButton onClickFunction = {() => {setCurrent(<ShoppingListGenerator />)}} title="Generate your shopping list" /></li>*/}
        </ul>
      </nav>
    </div>
  );
}

export default App;
