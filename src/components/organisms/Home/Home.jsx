import { useContext } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext"
import { useCrumbs } from "../../../hooks/useCrumbs"

import { Counter } from "../../atoms/Counter"
import { Search } from "../../molecules/Search"
import { List } from "../../molecules/List"

import { Portal } from "../Portal/Portal"
import { Modal } from "../../molecules/Modal"

import { AlertWithStorageListener } from "../../../hocs/Alert"

import "./Home.css"

const Home = () => {

    const { openModal, syncTodos } = useContext(TodoContext)

    const [ , selectedCrumb, , , , , , syncCrumbs ] = useCrumbs()

    return (
        <>
            <Counter />

            <Search />

            <List />

            { !!openModal && <Portal component={<Modal />} /> /* WTF? */ }

            <AlertWithStorageListener pointer={selectedCrumb} syncTodos={syncTodos} syncCrumbs={syncCrumbs} />
        </>
    )

}

export { Home }
