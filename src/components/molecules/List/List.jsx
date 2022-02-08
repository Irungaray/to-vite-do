import { Item } from "../../atoms/Item"

import "./List.css"

const List = (props) => {
    return (
        <section>
            <ul>
                {props.todos.map((todo) => (
                    <Item
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </ul>
        </section>
    )
}

export { List }
