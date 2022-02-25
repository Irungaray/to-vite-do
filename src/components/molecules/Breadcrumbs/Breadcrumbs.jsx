import "./Breadcrumbs.css"

const Breadcrumbs = ({ crumbs, selectedCrumb, setSelectedCrumb, deleteCrumb }) => {
    return (
        <div className="container">
            {crumbs.map((crumb, index) => (
                <>
                    {selectedCrumb === crumb && crumbs.length > 1 &&
                        <span onClick={() => deleteCrumb(selectedCrumb)}>
                            X
                        </span>
                    }

                    <h2
                        key={index}
                        className={
                            selectedCrumb === crumb
                                ? "breadcrumb active"
                                : "breadcrumb"
                        }
                        onClick={() => setSelectedCrumb(crumb)}
                    >
                        [ {crumb} ]
                    </h2>
                </>
            ))}
        </div>
    )
}

export { Breadcrumbs }
