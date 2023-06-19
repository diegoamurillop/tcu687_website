import "./IconBox.css"

const IconBox = ({icon, title, text}) => {
    return (
        <div className="icon-box mt-4 mt-xl-0">
            <i className= {`bx ${icon}`}></i>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
}
export default IconBox;