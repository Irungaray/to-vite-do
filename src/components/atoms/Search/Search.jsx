import { useContext, useState } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext"

import { AddButton } from "../AddButton"
import { SearchButton } from "../SearchButton"
import { Input } from "../Input"

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
