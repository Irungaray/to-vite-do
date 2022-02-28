const useKeyBinding = (key, cb) => {
    const { addEventListener, removeEventListener } = document

    addEventListener('keyup', (event) => {
        if (event.key == key) cb()

        return () => removeEventListener("keydown", cb)
    });
}

export { useKeyBinding }

