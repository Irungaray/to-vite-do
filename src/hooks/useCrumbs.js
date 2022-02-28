import { useState } from "preact/hooks"
import { useLocalStorage } from "./useLocalStorage"

const useCrumbs = () => {
    const [crumbs, setCrumbs, syncCrumbs, synced] = useLocalStorage("crumbs", ["Main"])
    const [selectedCrumb, setSelectedCrumb] = useLocalStorage("selectedCrumb", "Main")
    const [showForm, setShowForm] = useState(false)

    const saveCrumb = (val) => {
        setCrumbs([
            ...crumbs,
            val
        ])

        setSelectedCrumb(val)
        setShowForm(false)
    }

    const deleteCrumb = (target) => {
        localStorage.removeItem(target)

        setCrumbs(
            crumbs.filter(crumb => crumb != target)
        )

        let prev = crumbs[crumbs.indexOf(target) - 1]

        setSelectedCrumb(prev)
    }

    return [
        crumbs, selectedCrumb, setSelectedCrumb, saveCrumb, deleteCrumb, showForm, setShowForm, syncCrumbs
    ]
}

export { useCrumbs }
