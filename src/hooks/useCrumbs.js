import { useState } from "preact/hooks"
import { useLocalStorage } from "./useLocalStorage"

const useCrumbs = () => {
    const [crumbs, setCrumbs] = useLocalStorage("crumbs", ["Main"])
    const [selectedCrumb, setSelectedCrumb] = useState(crumbs[0])
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
        setCrumbs(
            crumbs.filter(crumb => crumb != target)
        )

        localStorage.removeItem(target)

        setSelectedCrumb(crumbs[0])
    }

    return [ crumbs, selectedCrumb, setSelectedCrumb, saveCrumb, deleteCrumb, showForm, setShowForm ]
}

export { useCrumbs }
