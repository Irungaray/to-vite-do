import { useState } from "preact/hooks"

import { TodoProvider } from "../context/TodoContext"
import { useCrumbs } from "../hooks/useCrumbs"

import { Breadcrumbs } from "./molecules/Breadcrumbs"
import { Home } from "./organisms/Home"

const App = () => {

    const [ crumbs, selectedCrumb, setSelectedCrumb, saveCrumb, deleteCrumb ] = useCrumbs()

    const [val, setVal] = useState("")

    return (
        <TodoProvider pointer={selectedCrumb}>
            <input
                type="text"
                onInput={ (e) => setVal(e.target.value) }
            />

            <button onClick={() => saveCrumb(val)}>sub</button>


            <Breadcrumbs
                crumbs={crumbs}
                selectedCrumb={selectedCrumb}
                setSelectedCrumb={setSelectedCrumb}
                deleteCrumb={deleteCrumb}
            />

            <Home />
        </TodoProvider>
    )
}

export { App }
