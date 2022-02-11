import PropTypes from 'prop-types'

import "./Search.css"

const Search = ({searchValue, setSearchValue}) => {

    const handleSearch = (e) => {
        console.log(e.target.value)
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

Search.propTypes = {
    searchValue: PropTypes.string,
    setSearchValue: PropTypes.func
}

export { Search }
