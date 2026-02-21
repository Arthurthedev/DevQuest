import { Component } from "react";
import "./card.css"

const Card = (props)=>{
    return(
        <div className='card'>
            <h3>{props.tittle}</h3>
            <p>texto do card</p>
        </div>
    )
}



// class Card extends Component {
//     render(){
//         return(
//             <div className='card'>
//                 <h3>{this.props.tittle}</h3>
//                 <p>texto do card</p>
//             </div>
//         )
//     }
// };

export default Card


