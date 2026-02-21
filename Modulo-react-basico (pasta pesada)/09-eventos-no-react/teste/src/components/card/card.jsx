//import { Component } from "react";
import "./card.css"

const Card = ({ children, color = "orange", showCardColor}) => {
  return (
    <div className="card" 
    style={{ backgroundColor: color }}
    onClick={()=>{
      showCardColor(color)
    }}>
      {children}
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


