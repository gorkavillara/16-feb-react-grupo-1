/* eslint-disable */
import React from 'react';
import ComponenteClase from "./components/ComponenteClase"
import ComponenteFuncional from './components/ComponenteFuncional';
import Contador from './components/contador/Contador';
import ContadorClase from './components/contador/ContadorClase';
import CompPadre from './components/jerarquia/CompPadre';

const miElemento = <button>Mi botón</button>

function App() {
  // Hacer cálculos, llamar a apis, utilizar hooks
  return (
    <div>
      {/* <ComponenteClase /> */}
      {/* <ComponenteFuncional /> */}
      {/* <CompPadre /> */}
      <Contador initialValue={5} />
      <ContadorClase initialValue={5} />
    </div>
  );

}

export default App;
