import { useContext } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext";

import { Item } from "../../atoms/Item"

import "./List.css"

const List = () => {

    const { searchedTodos, toggleComplete, handleDelete } = useContext(TodoContext)

    return (
        <section>
            <ul>
                {searchedTodos.map((todo) => (
                    <Item
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        handleComplete={ _ => toggleComplete(todo.id) }
                        handleDelete={ _ => handleDelete(todo.id) }
                    />
                ))}
            </ul>
        </section>
    )
}

export { List }
