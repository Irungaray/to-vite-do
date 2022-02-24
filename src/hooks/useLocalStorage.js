import { useState, useEffect } from "preact/hooks"

const useLocalStorage = (key, value) => {
    const [items, setItems] = useState(value)

    useEffect(() => {
        const storedItem = localStorage.getItem(key)
        let strfiedVal = JSON.stringify(value)
        let parsedItem;

        if (!storedItem) localStorage.setItem(key, strfiedVal), parsedItem = value
        else parsedItem = JSON.parse(storedItem)

        setItems(parsedItem)
    }, [])


    const saveItems = newItem => {
        let stringified = JSON.stringify(newItem)
        localStorage.setItem(key, stringified)
        setItems(newItem)
    }

    return [ items, saveItems ]
}

export { useLocalStorage }