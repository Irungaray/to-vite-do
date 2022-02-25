import { useState } from "preact/hooks"
import { useLocalStorage } from "./useLocalStorage"

const useCrumbs = () => {
    const [crumbs, setCrumbs] = useLocalStorage("crumbs", ["General"])
    const [selectedCrumb, setSelectedCrumb] = useState("General")

    const saveCrumb = (val) => {
        setCrumbs([
            ...crumbs,
            val
        ])

        setSelectedCrumb(val)
    }

    const deleteCrumb = (target) => {
        setCrumbs(
            crumbs.filter(crumb => crumb != target)
        )

        localStorage.removeItem(target)

        setSelectedCrumb(crumbs[0])
    }

    return [ crumbs, selectedCrumb, setSelectedCrumb, saveCrumb, deleteCrumb ]
}

export { useCrumbs }
