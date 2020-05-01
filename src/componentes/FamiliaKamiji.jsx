import React from 'react'
import Membro from './Membro'

export default props =>
    <div>
        <Membro nome="Andrew" sobrenome={props.sobrenome} />
        <Membro nome="Adrian" sobrenome={props.sobrenome} />
        <Membro nome="Andrey" sobrenome={props.sobrenome} />
        <Membro nome="Luciana" sobrenome={props.sobrenome} />
    </div>