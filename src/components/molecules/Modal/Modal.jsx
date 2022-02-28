import { useState, useContext } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext"

import "./Modal.css"

const Modal = () => {
    const [value, setValue] = useState("")

    const { handleAdd, setOpenModal } = useContext(TodoContext)

    const handleInput = e => {
        setValue(e.target.value)
    }

    const handleClose = _ => {
        setOpenModal(prevState => !prevState)
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleAdd(value)
        handleClose()
    }

    const handleDisable = value.length < 5 || value == "crumbs"

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <label>Add new To Do</label>

            <textarea
                placeholder="Add ToDo..."
                value={value}
                onInput={handleInput}
                autofocus
            />

            <div className="buttonContainer">
                <button type="button"  className="cancel" onClick={handleClose}>
                    Cancel
                </button>

                <button type="submit" className="add" disabled={handleDisable}>
                    Add
                </button>
            </div>
        </form>
    )
}

export { Modal }