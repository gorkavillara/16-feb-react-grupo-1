import React, { Component } from "react"

export default class ComponenteCicloVida extends Component<
    {},
    { toggle: boolean }
> {
    state = {
        toggle: false,
    }
    UNSAFE_componentWillMount() {
        console.log("El componente se va a montar")
    }
    render() {
        console.log(this.state.toggle)
        return (
            <div>
                <button
                    onClick={() =>
                        this.setState(
                            (state) => ({ toggle: !state.toggle })
                        )
                    }
                >
                    Toggle
                </button>
            </div>
        )
    }
    componentDidMount(): void {
        console.log("El componente ha sido montado")
    }
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ toggle: boolean }>, nextContext: any): boolean {
        // Hacer varios chequeos, y ver si realmente hace falta
        // Renderizar de nuevo
        return true
    }
    componentDidUpdate() {
        console.log("Componente se ha actualizado")
    }

    componentWillUnmount(): void {
        console.log("El componente se va a desmontar")
    }
}
