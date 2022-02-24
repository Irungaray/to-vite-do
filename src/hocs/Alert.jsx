import { withStorageListener } from "./withStorageListener"

const Alert = ({ show, toggleShow }) => {
    return (
        show && (
            <acronym>
                <h4>Changes were made.</h4>
                <button onClick={() => toggleShow(false)}>Sync</button>
            </acronym>
        )
    )
}

const AlertWithStorageListener = withStorageListener(Alert)

export { AlertWithStorageListener }
