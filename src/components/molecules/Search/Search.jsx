import { useContext, useState } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext"

import { AddButton } from "../../atoms/AddButton"
import { SearchButton } from "../../atoms/SearchButton"
import { Input } from "../../atoms/Input"

import "./Search.css"

const Search = () => {
    const { searchValue, setSearchValue, setOpenModal } = useContext(TodoContext)
    const [showSearch, setShowSearch] = useState(false)

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className="container">
            <AddButton
                onClick={() => setOpenModal(prevState => !prevState)}
            />
            <SearchButton
                onClick={() => setShowSearch((prevState) => !prevState)}
            />

            {showSearch && (
                <Input
                    onInput={handleSearch}
                    value={searchValue}
                    // className="Search"
                    placeholder="Search..."
                />
            )}
        </div>
    )
}

export { Search }
