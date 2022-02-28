import { useCrumbs } from "./useCrumbs";

const useKeyBindings = (key, cb) => {
    const [ crumbs, selectedCrumb, setSelectedCrumb, saveCrumb, deleteCrumb, showForm, setShowForm ] = useCrumbs()

    const { addEventListener, removeEventListener } = document

    addEventListener('keyup', (event) => {
        if (event.key == key) cb()

        return () => removeEventListener("keydown", cb)
    });
}

export { useKeyBindings }

