import { useState, useEffect } from "preact/hooks"

const useLocalStorage = (key, value) => {
    const [items, setItems] = useState(value)
    const [synced, setSynced] = useState(true)

    useEffect(() => {
        const storedItem = localStorage.getItem(key)
        let strfiedVal = JSON.stringify(value)
        let parsedItem

        if (!storedItem) localStorage.setItem(key, strfiedVal), parsedItem = value
        else parsedItem = JSON.parse(storedItem)

        setItems(parsedItem)
        setSynced(true)
    }, [synced])


    const saveItems = newItem => {
        let stringified = JSON.stringify(newItem)
        localStorage.setItem(key, stringified)
        setItems(newItem)
    }

    const syncItems = _ => {
        setSynced(false)
    }

    return [ items, saveItems, syncItems ]
}

export { useLocalStorage }