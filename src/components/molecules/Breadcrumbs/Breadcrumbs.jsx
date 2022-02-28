import { useState } from "preact/hooks"
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

                <AddButton onClick={() => setShowForm(prevState => !prevState)} />
            </div>
    )
}

export { Breadcrumbs }
