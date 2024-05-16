import './App.css'
import React, { useState } from 'react';

const App = () => {
  const [rifa, setRifa] = useState(Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => false)));
  const comprarNumero = (fila, columna) => {
    const nuevaRifa = [...rifa];
    nuevaRifa[fila][columna] = !nuevaRifa[fila][columna];
    setRifa(nuevaRifa);
  };
  return (
    <div className="rifa">
      {rifa.map((fila, indexFila) => (
        <div key={indexFila} className="fila">
          {fila.map((comprado, indexColumna) => (
            <div
              key={indexColumna}
              className={`cuadro a${indexFila * 10 + indexColumna + 1} ${comprado ? 'comprado' : ''}`}
              onClick={() => comprarNumero(indexFila, indexColumna)}
            >
              {`${indexFila * 10 + indexColumna + 1}`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;