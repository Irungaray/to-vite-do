import { TodoProvider } from "../context/TodoContext"

import { Home } from "./organisms/Home"

const App = () => {

    return (
        <TodoProvider>
            <Home />
        </TodoProvider>
    )
}

export { App }
