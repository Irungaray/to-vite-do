import { useState } from "preact/hooks"

import { TodoProvider } from "../context/TodoContext"
import { useLocalStorage } from "../hooks/useLocalStorage"

import { Breadcrumbs } from "./molecules/Breadcrumbs/Breadcrumbs"
import { Home } from "./organisms/Home"


const App = () => {

    const [selectedCrumb, setSelectedCrumb] = useState("General")
    const [crumbs, setCrumbs] = useLocalStorage("crumbs",  ["General"])

    const [val, setVal] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        setCrumbs([
            ...crumbs,
            val
        ])
    }

    return (
        <TodoProvider pointer={selectedCrumb}>

            <form onSubmit={handleSubmit}>
                <input type="text" onInput={ (e) => setVal(e.target.value) } />

                <button type="submit">sub</button>
            </form>

            <Breadcrumbs
                crumbs={crumbs}
                selectedCrumb={selectedCrumb}
                setSelectedCrumb={setSelectedCrumb}
            />

            <Home />
        </TodoProvider>
    )
}

export { App }
