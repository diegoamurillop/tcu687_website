import "./IconBox.css"

const IconBox = ({icon, title, text}) => {
    return (
        <div className="icon-box">
            <i className= {`bx ${icon}`}/>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
}
export default IconBox;