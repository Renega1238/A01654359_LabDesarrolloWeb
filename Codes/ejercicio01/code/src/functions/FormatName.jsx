import React from 'react'

function formatName(user)
{

    return user.firstName + " " + user.lastName;

}

const FormatName = (props) => 
(

    <h1>
        Hello, {formatName(props.user)}
    </h1>

)

export default FormatName;