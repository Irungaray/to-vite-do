import "./Button.css"

const Button = (props) => {
    return (
        <button
            className="Button"
            onClick={props.onClick}
            type={props.type}
            disabled={props.disabled}
        >
            +
        </button>
    )
}

export { Button }