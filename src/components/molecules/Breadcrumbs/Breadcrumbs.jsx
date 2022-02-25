import { AddButton } from "../../atoms/AddButton"

import "./Breadcrumbs.css"

const Breadcrumbs = ({
    crumbs,
    selectedCrumb,
    setSelectedCrumb,
    deleteCrumb,
    setShowForm
}) => {
    return (
            <div className="container">
                {crumbs.map((crumb, index) => (
                    <section className="crumbs">
                        <h2
                            key={index}
                            className={
                                selectedCrumb === crumb
                                    ? "breadcrumb active"
                                    : "breadcrumb"
                            }
                            onClick={() => setSelectedCrumb(crumb)}
                        >
                        {selectedCrumb === crumb && crumbs.length > 1 && (
                            <span onClick={() => deleteCrumb(selectedCrumb)} className="del">
                                X
                            </span>
                        )}

                            {crumb}

                            {selectedCrumb === crumb && (
                                <div className="border"></div>
                            )}
                        </h2>
                    </section>
                ))}

                <AddButton onClick={() => setShowForm(prevState => !prevState)} />
            </div>
    )
}

export { Breadcrumbs }
