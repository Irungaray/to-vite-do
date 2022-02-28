import { useState } from "preact/hooks"

const withStorageListener = (WrappedComponent) => {
    return (props) => {
        const [storageChange, setStorageChange] = useState(false)
        const [changesOn, setChangesOn] = useState("")

        window.addEventListener('storage', (change) => {
            if (change.key == props.pointer || change.key == "crumbs") {
                setChangesOn(change.key)
                setStorageChange(true)
            }
        })

        const handleSyncTodos = () => {
            setStorageChange(false)
            props.syncTodos()
        }

        const handleSyncCrumbs = () => {
            window.location.reload()
            // props.syncCrumbs()
        }

        return (
            <WrappedComponent
                changesOn={changesOn}
                storageChange={storageChange}
                handleSyncTodos={handleSyncTodos}
                handleSyncCrumbs={handleSyncCrumbs}
            />
        )
    }
}

export { withStorageListener }
