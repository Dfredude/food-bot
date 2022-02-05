import './basics.css'

export const ModernButton = (props) => {
    return <button className="btn" onClick={props.onClickFunction}>{props.title}</button>
};

export const SearchBar = (props) => {
  return <section className='search-section'>
  <label>Search food recipes</label>
  <input className='search-bar' type="search" placeholder='  "Chicken" "Tacos"' name='q'></input>
  <ModernButton onClickFunction= {props.onClickFunction} title={props.title}></ModernButton>
  </section>;
};
