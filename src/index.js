import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import CompA, { CompB as B } from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultElementos'
//import FamiliaKamiji from './componentes/FamiliaKamiji'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
//import ComponenteComFuncao from './componentes/ComponenteComFuncao'
//import Pai from './componentes/Pai'
/* import ComponenteClasse from './componentes/ComponenteClasse' */
//import Contador from './componentes/Contador'
import Hook from './componentes/Hook'


const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook />
        {/* <Contador numeroInicial={100} /> */}
        {/* <ComponenteClasse valor="Sou um componente de classe" /> */}
        {/* <Pai /> */}
        {/*  <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Dias">
            <Membro nome="Andrew" />
            {<Membro nome="Marcelo" />}
        </Familia> */}
        {/* {<FamiliaKamiji />} */}
        {/* <MultElementos /> */}
        {/* <CompA valor="Olá eu sou o A!" />
        <B valor="B na área" /> */}
        {/*<PrimeiroComponente valor="Bom dia!" />*/}
    </div>
    , elemento)



//const jsx = <h1>Olá React</h1>
//ReactDOM.render(jsx, elemento)