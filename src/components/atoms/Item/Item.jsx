import PropTypes from 'prop-types'

import "./Item.css"

const Item = (props) => {
    return (
        <li className="Item">
            <span
                className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
                onClick={props.handleComplete}
            >
                √
            </span>

            <p className={`Item-p ${props.completed && "Item-p--complete"}`} >
                {props.text}
            </p>

            <span
                className="Icon Icon-delete"
                onClick={props.handleDelete}
            >
                X
            </span>
        </li>
    )
}

Item.propTypes = {
    handleComplete: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

export { Item }
