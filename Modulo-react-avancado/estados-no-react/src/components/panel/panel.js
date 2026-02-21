import { Component } from 'react'
import './panel.css'

class Panel extends Component{
    constructor(){
        super()
        this.state = {
            tittle: 'Titulo do painel'
        }
    }
    render(){
        return(
            <section className='panel' onClick={()=>{this.setState({tittle: "Titulo novo alterado por SetState"})}}>
                <h2>{this.state.tittle}</h2>
            </section>
        )
    }
}
export default Panel