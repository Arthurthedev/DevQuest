import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"


export const Card = ()=>{

    const {theme} = useContext(ThemeContext)

    return(
        <div style={{color: theme.color, backgroundColor: theme.background}}>
            <h1>Titulo do card</h1>
            <p>paragrafo do card, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium=?</p>
        </div>
    )
}