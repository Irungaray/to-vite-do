import { useState, useEffect } from "preact/hooks"

import { useCrumbs } from "../../../hooks/useCrumbs"

import { Input } from "../../atoms/Input"
import { Button } from "../../atoms/Button"

import "./Form.css"

const Form = (props) => {
    const [val, setVal] = useState("")
    const [err, setErr] = useState(false)
    const [crumbs] = useCrumbs()

    const handleVal = (e) => {
        setVal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let exists = crumbs.find((crumb) => crumb == val)

        if (exists) return setErr(true)

        props.saveCrumb(val)
    }

    const handleDisable = val.length < 1 || val == "crumbs"

    useEffect(() => {
        document.getElementById("crumbInput").focus()
    })

    return (
        <>
            <form className="AddCrumbForm" onSubmit={handleSubmit}>
                <Input onInput={handleVal} placeholder="Add crumb..." id="crumbInput" />

                <Button type="submit" disabled={handleDisable} />
            </form>

            {err && <p className="err">Choose another name.</p>}
        </>
    )
}

export { Form }
