import React from 'react'

let isLegal = true

export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <p>{1 + 1}</p>
        <p>Legal? {isLegal ? 'Sim' : 'Não'}</p>
        <p>{Math.random()}</p>
    </div>

//export default (props) =>
//    <div>
//        <h1>Primeiro Componente! (Arrow)</h1>
//   </div>


//export default function () {
//    return <h1>Primeiro Componente!</h1>
//}


//function primeiro() {
//    return <h1>Primeiro Componente!</h1>
//}

//export default primeiro