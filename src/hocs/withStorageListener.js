import { useState } from "preact/hooks"

const withStorageListener = (WrappedComponent) => {
    return (props) => {
        const [storageChange, setStorageChange] = useState(false)

        window.addEventListener('storage', (change) => {
            if (change.key == 'TODOS_V1') {
                console.log("cambios en todos v1")
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            setStorageChange(false)
            props.syncTodos()
        }

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export { withStorageListener }
