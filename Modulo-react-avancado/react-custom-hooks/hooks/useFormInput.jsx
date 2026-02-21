import { useState } from "react"
export function useFormInput(initialValue){
     const [value, setvalue] = useState(initialValue)

    function handleChange(event) {
        setvalue(event.target.value)
    }
    const inputProps = {
        value: value,
        onChange: handleChange
    }

    return inputProps
}