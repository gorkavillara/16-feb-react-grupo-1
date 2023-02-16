import React, { Component } from 'react'

export default class ComponenteContenedor extends Component {
    // Este componente tiene dos partes
    // 1 - Se encarga de toda la lógica (estado, etc)
    // 2 - Pasar información a los componentes puros
  render() {
    return (
      <div>ComponenteContenedor</div>
    )
  }
}
