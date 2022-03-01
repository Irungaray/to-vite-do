import { useEffect, useState } from "preact/hooks"

const withStorageListener = (WrappedComponent) => {
    return (props) => {
        const [storageChange, setStorageChange] = useState(false)
        const [changesOn, setChangesOn] = useState("")

        const { addEventListener, removeEventListener, location } = window

        const handler = (e) => {
            if (e.key == props.pointer || e.key == "crumbs") {
                setChangesOn(e.key)
                setStorageChange(true)
            }
        }

        addEventListener('storage', handler)

        const handleSyncTodos = () => {
            setStorageChange(false)
            props.syncTodos()
        }

        const handleSyncCrumbs = () => {
            location.reload()
            // props.syncCrumbs()
        }

        useEffect(() => {
            return () => removeEventListener('storage', handler)
        })

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
