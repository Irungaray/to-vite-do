import "./Button.css"

const Button = () => {

    const handleClick = (msg) => {
        console.log(msg);
    }

    return (
        <button
            className="Button"
            onClick={() => handleClick("On click button")}
        >
            +
        </button>
    )
}

export { Button }