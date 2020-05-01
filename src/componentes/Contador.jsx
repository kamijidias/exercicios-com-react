import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.alterarNumero(1)

        //this.state.numero = this.state.numero + 1
    }
    menosUm = (e) => {
        console.log(e.target)
        this.alterarNumero(-1)

        //this.state.numero = this.state.numero + 1
    }
    alterarNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })

        //this.state.numero = this.state.numero + 1
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>
                    Inc10</button>
                <button onClick={() => this.alterarNumero(-10)}>
                    Dec10</button>
            </div>
        )
    }
}

//Solução numero 1 - Bindo
//constructor(props) {
//        super(props)
//       this.maisUm = this.maisUm.bind(this)
//    }

//Solução numero 2 - Função arrow(onClick)
//<button onClick={() => this.maisUm()}>Inc</button>

//Solução numero 3 - Função Arrow
//maisUm = () => {
    //this.props.numero++
    //console.log(this)
//}