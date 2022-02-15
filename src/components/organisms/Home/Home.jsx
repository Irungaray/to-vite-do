import { useState } from "preact/hooks"
import { useLocalStorage } from "../../../hooks/useLocalStorage"

import { Counter } from "../../atoms/Counter"
import { Search } from "../../atoms/Search"
import { Button } from "../../atoms/Button"
import { List } from "../../molecules/List"

import "./Home.css"

const Home = () => {
    const [todos, setTodos] = useLocalStorage("TODOS_V1", "[]")
    const [searchValue, setSearchValue] = useState("")

    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

    let searchedTodos = todos

    if (searchValue.length >= 1) searchedTodos = filteredTodos

    return (
        <>
            <Counter todos={todos} />

            <Search searchValue={searchValue} setSearchValue={setSearchValue} />

            <List todos={searchedTodos} setTodos={setTodos} />

            <Button />
        </>
    )
}

export { Home }
