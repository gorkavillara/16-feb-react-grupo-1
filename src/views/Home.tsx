import Hijo from 'components/Hijo'
import React from 'react'

const Home = ({ miEstado }: any) => {
  return (
    <div>
      <h1>Home</h1>
      <Hijo miEstado={miEstado} />
    </div>
  )
}

export default Home