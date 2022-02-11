import PropTypes from 'prop-types'

import "./Item.css"

const Item = (props) => {




    return (
        <li className="Item" onClick={props.onClick}>
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
    
}

export { Item }
