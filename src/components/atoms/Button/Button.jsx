import "./Button.css"

const Button = (props) => {
    return (
        <button
            className="Button"
            onClick={props.onClick}
        >
            +
        </button>
    )
}

export { Button }