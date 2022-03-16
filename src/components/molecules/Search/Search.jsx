import { useContext, useEffect, useState } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext"
import { useKeyBindings } from "../../../hooks/useKeyBindings"

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

    const handleShowModal = () => {setOpenModal(prevState => !prevState)}
    const handleShowSearch = () => {setShowSearch(prevState => !prevState)}

    useKeyBindings("A", () => handleShowModal())
    useKeyBindings("S", () => handleShowSearch())

    useEffect(() => {
        if (showSearch) document.getElementById("search").focus()
    })

    return (
        <div className="container">
            <AddButton
                onClick={() => handleShowModal()}
            />
            <SearchButton
                onClick={() => handleShowSearch()}
            />

            {showSearch && (
                <Input
                    onInput={handleSearch}
                    value={searchValue}
                    // className="Search"
                    placeholder="Search..."
                    id="search"
                />
            )}
        </div>
    )
}

export { Search }
