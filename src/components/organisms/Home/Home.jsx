import { Counter } from "../../atoms/Counter"
import { Search } from "../../atoms/Search"
import { Button } from "../../atoms/Button"
import { List } from "../../molecules/List"

import "./Home.css"

const Home = () => {
    return (
        <>
            <Counter />

            <Search />

            <List />

            <Button />
        </>
    )
}

export { Home }
