import "./Item.css"

const Item = (props) => {
    return (
        <li className="Item">
            <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
                √
            </span>

            <p className={`Item-p ${props.completed && "Item-p--complete"}`}>
                {props.text}
            </p>

            <span className="Icon Icon-delete">
                X
            </span>
        </li>
    )
}

export { Item }
