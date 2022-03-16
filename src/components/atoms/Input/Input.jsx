import "./Input.css"

const Input = (props) => {
    return (
        <div className="Trap">
            <input
                type="text"
                onInput={props.onInput}
                value={props.value}
                placeholder={props.placeholder}
                className={props.className}
                autoFocus="true"
                {...props}
            />
        </div>
    )
}

export { Input }
