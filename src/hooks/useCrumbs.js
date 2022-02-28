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
        localStorage.removeItem(target)

        setCrumbs(
            crumbs.filter(crumb => crumb != target)
        )

        let prev = crumbs[crumbs.indexOf(target) - 1]

        setSelectedCrumb(prev)
    }

    return [ crumbs, selectedCrumb, setSelectedCrumb, saveCrumb, deleteCrumb, showForm, setShowForm ]
}

export { useCrumbs }
