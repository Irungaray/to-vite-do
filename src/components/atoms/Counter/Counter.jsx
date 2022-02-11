import PropTypes from 'prop-types'
import "./Counter.css"

const Counter = ({ completed, total}) => {
    return <h1 className="Title">Completados {completed} de {total}</h1>
}

Counter.propTypes = {
    completed: PropTypes.number,
    total: PropTypes.number
}

export { Counter }
