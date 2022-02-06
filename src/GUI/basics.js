import './basics.css'

export const ModernButton = (props) => {
    return <button className="btn" onClick={props.onClickFunction}>{props.title}</button>
};

export const SearchBar = (props) => {
  console.log(props)
  return <>
  <form id='search-form' onSubmit={props.onSubmitFunction}>
    <input className='search-bar' type="text" placeholder='  "Chicken" "Tacos"' name='q'></input>
    <button className='btn' type="submit">{props.title}</button>
  </form>
  </>
};
