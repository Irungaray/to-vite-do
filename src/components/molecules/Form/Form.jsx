import { useState } from "preact/hooks"

import { Input } from "../../atoms/Input"
import { Button } from "../../atoms/Button"

import './Form.css'

const Form = (props) => {
    const [val, setVal] = useState("")

    return (
        <div className="AddCrumbForm">
            <Input onInput={ (e) => setVal(e.target.value) } />

            <Button onClick={() => props.saveCrumb(val)}/>
        </div>
    )
}

export { Form }
