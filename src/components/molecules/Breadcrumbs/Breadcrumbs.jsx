import "./Breadcrumbs.css"

const Breadcrumbs = (props) => {
    return (
        <div className="container">
            {props.crumbs.map((crumb, index) => (
                <h2
                    key={index}
                    className={
                        props.selectedCrumb === crumb
                            ? "breadcrumb active"
                            : "breadcrumb"
                    }
                    onClick={() => props.setSelectedCrumb(crumb)}
                >
                    {crumb}
                </h2>
            ))}
        </div>
    )
}

export { Breadcrumbs }
