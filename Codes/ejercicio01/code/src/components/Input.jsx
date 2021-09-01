import React from 'react'

const Input = (props) => (

    <div>
        <p>{props.name}</p>
        Agregamos un slider desde JSX: 
        <br></br>
        <input type="range" min="1" max="10"></input>
    </div>

)

export default Input;