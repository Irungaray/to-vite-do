import { createPortal } from "preact/compat"

const Portal = ({ component }) => {
    const container = document.getElementById("modals")

    return createPortal(
        <>{component}</>,
        container
    )
}

export { Portal }
