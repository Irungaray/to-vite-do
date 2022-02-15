import { TodoProvider } from "../context/TodoContext"

import { Home } from "./organisms/Home"

const App = (props) => {
    return (
        <TodoProvider>
            <Home />
        </TodoProvider>
    )
}

export { App }
