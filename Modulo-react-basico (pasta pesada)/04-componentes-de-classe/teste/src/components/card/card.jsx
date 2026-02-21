import { Component } from "react";
import "./card.css"
class Card extends Component {
    render(){
        return(
            <div className='card'>
                <h3>Titulo</h3>
                <p>texto do card</p>
            </div>
        )
    }
};

export default Card


