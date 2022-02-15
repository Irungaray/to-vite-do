import { useState } from "preact/hooks"
import { useLocalStorage } from "../../../hooks/useLocalStorage"

import { Counter } from "../../atoms/Counter"
import { Search } from "../../atoms/Search"
import { Button } from "../../atoms/Button"
import { List } from "../../molecules/List"

import "./Home.css"

// let todosArr = [
//     { text: "Cortar cebolla", id: 1,completed: true },
//     { text: "Tomar el cursso de intro a React", id: 2,completed: false },
//     { text: "Llorar con la llorona", id: 3,completed: false },
//     { text: "LALALALAA", id: 4,completed: false },
// ]

const Home = () => {
    const [todos, setTodos] = useLocalStorage("TODOS_V1", "[]")

    const [searchValue, setSearchValue] = useState("")

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length
    const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    )

    let searchedTodos = []

    if (!searchValue.length >= 1) searchedTodos = todos
    else searchedTodos = filteredTodos

    return (
        <>
            <Counter completed={completedTodos} total={totalTodos} />

            <Search searchValue={searchValue} setSearchValue={setSearchValue} />

            <List todos={searchedTodos} setTodos={setTodos} />

            <Button />
        </>
    )
}

export { Home }
