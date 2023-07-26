import "./Headline.css"


function Headline({title, supportText}) {
    return (
        <div  className="headline mt-5" data-aos="fade-in">
            <div className="container">
                <h2>{title}</h2>
                <p>{supportText}</p>
            </div>
        </div>
    );
}

export default Headline;