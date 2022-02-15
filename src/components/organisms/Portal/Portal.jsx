import { createPortal } from "preact/compat";

const Portal = ({ component }) => {
    const container = document.getElementById("modals")

    console.log(component);

    return createPortal(
        <>{component}</>,
        container
    )
}

export { Portal }
