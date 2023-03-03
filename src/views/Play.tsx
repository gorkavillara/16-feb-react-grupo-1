import React, { useState, useEffect } from "react";

const texto = "Tiene nombres mil el miembro viril";

const Play = () => {
  const [initialTime, setInitialTime] = useState<Date>(new Date());
  const [textoValidado, setTextoValidado] = useState("");
  const [textoSinValidar, setTextoSinValidar] = useState(texto);

  useEffect(() => {
    if (textoSinValidar === "") {
      const now = new Date();

      const seconds = now.getTime() - initialTime?.getTime();
      console.log("Has ganado!");
      console.log(`Has tardado ${seconds / 1000} segundos`);
    }
  }, [textoSinValidar, initialTime]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== textoSinValidar.at(0)) return;
    if (textoValidado === "") {
      setInitialTime(new Date());
    }

    setTextoValidado((texto) => `${texto}${event.key}`);
    setTextoSinValidar((texto) => texto.slice(1, texto.length));
  };

  const resetText = () => {
    setTextoValidado("");
    setTextoSinValidar(texto);
  };
  return (
    <div>
      <h4>
        <span style={{ color: "green" }}>{textoValidado}</span>
        <span>{textoSinValidar}</span>
      </h4>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        value={textoValidado}
        onChange={() => {}}
      />
      <button onClick={resetText}>Reset</button>
    </div>
  );
};

export default Play;
