import PropTypes from 'prop-types'
import "./Counter.css"

const Counter = (props) => {
    const completed = props.todos.filter(todo => !!todo.completed).length
    const total = props.todos.length

    return (
        <h1 className="Title">
            {
                total > 1
                    ? `Completados ${completed} de ${total}`
                    : "Aún no hay ToDos."
            }
        </h1>
    )
}

Counter.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired
        }
    ))
}

export { Counter }
