import Card from '../card/card.jsx'

const CardsTitle = ['Titulo card 1', 'Titulo card 2', 'Titulo card 3']
const CardsTexto = ['card 1', 'card 2', 'card3']

const showCardColor = (color)=>{
    console.log(color);
    
}

const Cards = () => {
    return (
        <div>
            <h2>Meus Cards</h2>
            <div>
                {CardsTitle.map((cardTittle, index) =>{
                    return(
                        <Card key={index} showCardColor={showCardColor}>
                            <h3>{cardTittle}</h3>
                            <p>Esse é um texto do meu {CardsTexto[index]}</p>
                        </Card>
                    )
                })}
                <Card color='ciano' showCardColor={showCardColor}>
                            <h3>Card com fundo azul</h3>
                            <p>Esse é um texto do meu card azul</p>
                        </Card>
            </div>
        </div>
    )
}

export default Cards