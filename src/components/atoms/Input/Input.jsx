import "./Input.css"

const Input = (props) => {
    return (
        <div className="Trap">
            <input type="text" onInput={props.onInput} />
        </div>
    )
}

export { Input }
