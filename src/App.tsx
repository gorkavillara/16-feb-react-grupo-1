/* eslint-disable */
import React from 'react';
import ComponenteClase from "./components/ComponenteClase"
import ComponenteFuncional from './components/ComponenteFuncional';

const miElemento = <button>Mi botón</button>

function App() {
  // Hacer cálculos, llamar a apis, utilizar hooks
  return (
    <div>
      <ComponenteClase />
      <ComponenteFuncional />
    </div>
  );

}

export default App;
