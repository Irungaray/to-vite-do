import {useEffect} from "preact/hooks"

const useKeyBindings = (key, cb) => {
    const { addEventListener, removeEventListener } = window

    const handler = (e) => {
        if (e.key == key) cb()
    }

    addEventListener('keyup', handler);

    useEffect(() => {
        return () => removeEventListener("keyup", handler)
    })
}

export { useKeyBindings }
