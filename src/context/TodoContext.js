import { createContext } from 'preact'
import { useState } from "preact/hooks"

import { useLocalStorage } from "../hooks/useLocalStorage"

const TodoContext = createContext()

const TodoProvider = (props) => {

    const [todos, setTodos] = useLocalStorage("TODOS_V1", "[]")
    const [searchValue, setSearchValue] = useState("")

    // Counter scope
    const completed = todos.filter(todo => !!todo.completed).length
    const total = todos.length

    // List scope
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    let searchedTodos = todos
    if (searchValue.length >= 1) searchedTodos = filteredTodos

    const toggleComplete = (id) => {
        let newTodos = [...todos]
        let selectedTodo = todos.findIndex(todo => todo.id === id)

        newTodos[selectedTodo].completed = !newTodos[selectedTodo].completed;

        setTodos(newTodos)
    }

    const handleDelete = (id) => {
        setTodos(
            todos.filter(todo => todo.id != id)
        )
    }

    const values = {
        // Counter
        completed,
        total,
        // Search
        searchValue,
        setSearchValue,
        // List
        searchedTodos,
        toggleComplete,
        handleDelete,
    }

    return (
        <TodoContext.Provider value={values}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
