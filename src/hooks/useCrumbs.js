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
    }

    return [ crumbs, selectedCrumb, setSelectedCrumb, saveCrumb ]
}

export { useCrumbs }
