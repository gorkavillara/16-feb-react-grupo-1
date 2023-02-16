import React, { Component } from 'react'

interface ICompHijoClaseProps {
    texto: string
}

export default class CompHijoClase extends Component<ICompHijoClaseProps> {
//   constructor(props: ICompHijoClaseProps) {
//     super(props)
//   }
  render() {
    const { texto } = this.props
    console.log(this.props)
    return (
      <div>{texto}</div>
    )
  }
}
