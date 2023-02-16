import React, { Component } from "react"

interface IContadorProps {
    initialValue?: number
}

interface IContadorState {
    valor: number
}

export default class ContadorClase extends Component<IContadorProps, IContadorState> {
    constructor(props: IContadorProps) {
        super(props)
        this.state = {
            valor: props.initialValue || 0
        }
        this.reset = this.reset.bind(this)
    }

    restaValor(cant: number = 1) {
        this.setState({
            ...this.state,
            valor: this.state.valor - cant
        })
    }

    sumaValor(cant: number = 1) {
        this.setState({
            ...this.state,
            valor: this.state.valor + cant
        })
    }

    resetValor = () => {
        this.setState({
            ...this.state,
            valor: 0
        })
    }
    reset() {
        this.setState({
            ...this.state,
            valor: 0
        })
    }
    render() {
        const valor = this.state.valor
        return (
            <>
                <h3>{valor}</h3>
                <div>
                    <button onClick={() => this.restaValor(5)}>Menos 5</button>
                    <button onClick={() => this.restaValor()}>Menos</button>
                    <button onClick={() => this.sumaValor()}>Más</button>
                    <button onClick={() => this.sumaValor(5)}>Más 5</button>
                    <button onClick={() => this.resetValor()}>Reset</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            </>
        )
    }
}
