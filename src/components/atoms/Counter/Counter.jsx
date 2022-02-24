import { useContext } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext"

import "./Counter.css"

const Counter = (props) => {

    const { completed, total } = useContext(TodoContext)

    return (
        <h1 className="Title">
            {
                total >= 1
                    ? `Completed ${completed} out of ${total}`
                    : "No ToDos on sight :D"
            }
        </h1>
    )
}

export { Counter }
