import PropTypes from 'prop-types'

import { Item } from "../../atoms/Item"

import "./List.css"

const List = (props) => {

    const toggleComplete = (id) => {
        let newTodos = [...props.todos]
        let selectedTodo = props.todos.findIndex(todo => todo.id === id)

        newTodos[selectedTodo].completed = !newTodos[selectedTodo].completed;

        props.setTodos(newTodos)
    }

    const handleDelete = (id) => {
        props.setTodos(
            props.todos.filter(todo => todo.id != id)
        )
    }

    return (
        <section>
            <ul>
                {props.todos.map((todo) => (
                    <Item
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        handleComplete={(() => toggleComplete(todo.id))}
                        handleDelete={(() => handleDelete(todo.id))}
                    />
                ))}
            </ul>
        </section>
    )
}


List.defaultProps = {
    todos: [
        { text: "No hay todos!", completed: false }
    ]

}

List.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired
        }
    )),
    setTodos: PropTypes.func,
}

export { List }
