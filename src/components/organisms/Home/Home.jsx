import { Counter } from "../../atoms/Counter"
import { Search } from "../../atoms/Search"
import { Button } from "../../atoms/Button"
import { List } from "../../molecules/List"

import "./Home.css"

const Home = () => {
    const todos = [
        { text: "Cortar cebolla", completed: true },
        { text: "Tomar el cursso de intro a React", completed: false },
        { text: "Llorar con la llorona", completed: false },
        { text: "LALALALAA", completed: false },
    ]

    return (
        <>
            <Counter />

            <Search />

            <List todos={todos} />

            <Button />
        </>
    )
}

export { Home }
