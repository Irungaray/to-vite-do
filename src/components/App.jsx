
import { TodoProvider } from "../context/TodoContext"
import { useCrumbs } from "../hooks/useCrumbs"


import { Breadcrumbs } from "./molecules/Breadcrumbs"
import { Home } from "./organisms/Home"
import { Form } from "./molecules/Form/Form"

const App = () => {

    const [ crumbs, selectedCrumb, setSelectedCrumb, saveCrumb, deleteCrumb, showForm, setShowForm ] = useCrumbs()

    return (
        <TodoProvider pointer={selectedCrumb}>
            <Breadcrumbs
                crumbs={crumbs}
                selectedCrumb={selectedCrumb}
                setSelectedCrumb={setSelectedCrumb}
                deleteCrumb={deleteCrumb}
                setShowForm={setShowForm}
            />

            {showForm && <Form saveCrumb={saveCrumb} /> }

            <Home />
        </TodoProvider>
    )
}

export { App }
