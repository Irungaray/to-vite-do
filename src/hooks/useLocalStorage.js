import { useState } from "preact/hooks"

const useLocalStorage = (key, value) => {
    const storedItem = localStorage.getItem(key)
    let val = JSON.stringify(value)
    let parsedItem;

    if (!storedItem) localStorage.setItem(key, val), parsedItem = val
    else parsedItem = JSON.parse(storedItem)

    const [items, setItems] = useState(parsedItem)

    const saveTodos = newItem => {
        let stringified = JSON.stringify(newItem)
        localStorage.setItem(key, stringified)
        setItems(newItem)
    }

    return [ items, saveTodos ]
}

export { useLocalStorage }