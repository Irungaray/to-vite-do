import { useContext } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext";

import "./Counter.css"

const Counter = (props) => {

    const { completed, total } = useContext(TodoContext)

    return (
        <h1 className="Title">
            {
                total > 1
                    ? `Completados ${completed} de ${total}`
                    : "Aún no hay ToDos."
            }
        </h1>
    )
}

export { Counter }
