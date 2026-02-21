import { useState } from "react"

 export const MyInput = () => {
    const [text, setText] = useState("")

    return (
        <>
            <input type="text" placeholder="Digite algo aqui" value={text} onChange={(event)=>{setText(event.target.value)}} />
            <p>Voce digitou: {text}</p>
            <button onClick={()=>{setText('')}}>Resetar texto</button>
        </>
    )
}

