import './App.css';
import freecodecampLogo from "./imagenes/freecodecamp-logo.png"
import Boton from "./componentes/Boton"
import Pantalla from "./componentes/Pantalla"
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState("");

  const agregarInput = valor => {
    setInput(input + valor)
  };

  // Para hacer que cada vez que pulsemos un boton llame a la funcion
  // agregarInput, debemos pasarle la funcion a cada boton como un prop a travez
  // del prop manejarClic

// boton de igual. Para usar la funcion "evaluate" debemos importar un paquete de math.js

const calcularResultado = () => {
  if(input) {
    setInput(evaluate(input))
  } else {
    alert("Ingrese una operacion valida")
  }
};




  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        src={freecodecampLogo}
        className="freecodecamp-logo"
        alt="logo de freecodecamp"
          />
      </div>

      <div className="contenedor-calculadora">
    
    {/* primer input, prop. Segundo input nombre variable de estado. No tienen porque ser iguales*/}
        <Pantalla input={input} />



        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>

        </div>

        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>

        </div>

        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>

        </div>

        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>
            Clear
          </BotonClear>

        </div>

      </div>

    </div>
  );
}

export default App;
