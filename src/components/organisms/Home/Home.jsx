import { useContext } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext"

import { Counter } from "../../atoms/Counter"
import { Search } from "../../atoms/Search"
import { List } from "../../molecules/List"
import { AddButton } from "../../atoms/AddButton"

import { Portal } from "../Portal/Portal"
import { Modal } from "../../molecules/Modal"

import { AlertWithStorageListener } from "../../../hocs/Alert"

import "./Home.css"

const Home = () => {

    const { openModal, setOpenModal, syncTodos  } = useContext(TodoContext)

    return (
        <>
            <Counter />

            <Search />

            <List />

            <AddButton onClick={() => setOpenModal(prevState => !prevState)} />

            { !!openModal && <Portal component={<Modal />} /> /* WTF? */ }

            <AlertWithStorageListener syncTodos={syncTodos} />
        </>
    )

}

export { Home }
