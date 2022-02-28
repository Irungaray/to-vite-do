import { withStorageListener } from "./withStorageListener"

const Alert = ({ changesOn, storageChange, handleSyncTodos, handleSyncCrumbs }) => {
    return (
        storageChange && (
            <acronym>
                <h4>Changes were made on {changesOn}.</h4>

                {
                    changesOn == "crumbs"
                        ? <button onClick={handleSyncCrumbs}>Reload</button>
                        : <button onClick={handleSyncTodos}>Sync</button>
                }
            </acronym>
        )
    )
}

const AlertWithStorageListener = withStorageListener(Alert)

export { AlertWithStorageListener }
