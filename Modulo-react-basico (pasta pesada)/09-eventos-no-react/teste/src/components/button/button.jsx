import './button.css'

const sayHello = ()=>{
    console.log("Hello!!!");
}

const Button = ({label = 'Clique aqui'})=>{
    return <button className='btn' onClick={sayHello}>{label}</button>
}



export default Button

