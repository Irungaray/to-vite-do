import { useKeyBindings } from "../../../hooks/useKeyBindings"

import { AddButton } from "../../atoms/AddButton"

import "./Breadcrumbs.css"

const Breadcrumbs = ({
    crumbs,
    selectedCrumb,
    setSelectedCrumb,
    deleteCrumb,
    setShowForm
}) => {

    const handleShowForm = () => {
        setShowForm(prevState => !prevState)
    }

    let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    keys.forEach(key => {
        if ( key > crumbs.length) return

        useKeyBindings(key, () => setSelectedCrumb(crumbs[key - 1]))
    })

    useKeyBindings("C", () => handleShowForm())
    useKeyBindings("ArrowRight", () => setSelectedCrumb(crumbs[crumbs.indexOf(selectedCrumb) + 1]))
    useKeyBindings("ArrowLeft", () => setSelectedCrumb(crumbs[crumbs.indexOf(selectedCrumb) - 1]))

    return (
            <div className="container">
                {crumbs.map((crumb, index) => (
                    <section className="crumbs">
                        {selectedCrumb === crumb && selectedCrumb != "Main" && (
                            <h2 onClick={() => deleteCrumb(selectedCrumb)} className="del">
                                X
                            </h2>
                        )}

                        <h2
                            key={index}
                            className={
                                selectedCrumb === crumb
                                    ? "breadcrumb active"
                                    : "breadcrumb"
                            }
                            onClick={() => setSelectedCrumb(crumb)}
                        >


                            {crumb}

                            {selectedCrumb === crumb && (
                                <div className="border"></div>
                            )}
                        </h2>
                    </section>
                ))}

                <AddButton onClick={handleShowForm} />
            </div>
    )
}

export { Breadcrumbs }
