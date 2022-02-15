import { useContext } from "preact/hooks"

import { TodoContext } from "../../../context/TodoContext";

import { Counter } from "../../atoms/Counter"
import { Search } from "../../atoms/Search"
import { Button } from "../../atoms/Button"
import { List } from "../../molecules/List"

import { Portal } from "../Portal/Portal"
import { Modal } from "../../molecules/Modal";

import "./Home.css"

const Home = () => {

    const { openModal, setOpenModal } = useContext(TodoContext)

    return (
        <>
            <Counter />

            <Search />

            <List />

            <Button  />

            { !!openModal /* WTF? */ && <Portal component={<Modal />} /> }
        </>
    )
}

export { Home }
