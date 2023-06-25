import "./Counter.css"


function Counter({title, start, end}){

    return (
        <div className="counter text-center">
            <span data-purecounter-start={start} data-purecounter-end={end} data-purecounter-duration="1" className="purecounter"></span>
            <p>{title}</p>
        </div>
    )
}

export default Counter