import React from 'react'

// Propiedades dinámicas
const Button = (props) => (

    // Validamos
    props.active ? <a href = {props.url} class={props.class} > {props.name} </a> : <div> </div>
    
    // <div>
    //    <a href = {props.url} class={props.class} >
    //        {props.name}
    //    </a>
    //</div>

);

export default Button;