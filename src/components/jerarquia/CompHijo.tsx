import React from 'react'

interface ICompHijoProps {
    texto: string
}

const CompHijo = ({ texto } : ICompHijoProps) => {
//   console.log(props.texto)
//   const { texto } = props
//   const texto = props.texto
  console.log(texto)
  return (
    <div>{texto}</div>
  )
}

export default CompHijo