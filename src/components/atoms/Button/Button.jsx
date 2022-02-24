import { useContext } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext";

import "./Button.css"

const Button = () => {

    const { setOpenModal } = useContext(TodoContext)

    const handleClick = msg => {
        setOpenModal(prevState => !prevState)
    }

    return (
        <button
            className="Button"
            onClick={handleClick}
        >
            +
        </button>
    )
}

export { Button }