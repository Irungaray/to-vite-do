import { useState, useEffect } from "preact/hooks"

const useKeyBindings = (key, cb) => {
    const { addEventListener, removeEventListener } = window

    const [shiftPressed, setShiftPressed] = useState(false)

    const handler = (e) => {

        // Need to find better solution

        // if (e.key == "Shift") setShiftPressed(true)
        // if ( shiftPressed && e.key == key) console.log("shift presionado y key");
        if (e.key == key) cb()
    }

    addEventListener('keyup', handler);

    useEffect(() => {
        return () => removeEventListener("keyup", handler)
    })
}

export { useKeyBindings }
