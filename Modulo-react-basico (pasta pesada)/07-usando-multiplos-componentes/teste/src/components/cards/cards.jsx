import Card from '../card/card.jsx'

const CardsTitle = ['Titulo card 1', 'Titulo card 2', 'Titulo card 3']
const CardsTexto = ['card 1', 'card 2', 'card3']

const Cards = () => {
    return (
        <div>
            <h2>Meus Cards</h2>
            <div>
                {CardsTitle.map((cardTittle, index) =>{
                    return(
                        <Card key={index}>
                            <h3>{cardTittle}</h3>
                            <p>Esse é um texto do meu {CardsTexto[index]}</p>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards