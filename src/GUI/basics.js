import './basics.css'
export const ModernButton = (props) => {
    return <button className="btn" onClick={props.onClickFunction}>{props.title}</button>
}