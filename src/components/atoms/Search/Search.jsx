import { useContext } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext";

import "./Search.css"

const Search = () => {

    const { searchValue, setSearchValue } = useContext(TodoContext)

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <input
            onInput={handleSearch}
            value={searchValue}
            className="Search"
            placeholder="Search..."
        />
    )
}

export { Search }
