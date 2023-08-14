import './App.css';
import freecodecampLogo from "./imagenes/freecodecamp-logo.png"
import Boton from "./componentes/Boton"
import Pantalla from "./componentes/Pantalla"
import BotonClear from './componentes/BotonClear';
import { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState("0")
  const [ultimaOperacion, setUltimaOperacion] = useState(null)

  const agregarInput = valor => {
    if(input.length < 15) {
      if(input === "0" && valor !== "."){
        setInput(valor)
      } else {
        setInput(input + valor)
    }
    }
  };

  // Para hacer que cada vez que pulsemos un boton llame a la funcion
  // agregarInput, debemos pasarle la funcion a cada boton como un prop a travez
  // del prop manejarClic

// boton de igual. Para usar la funcion "evaluate" debemos importar un paquete de math.js

const calcularResultado = () => {
  if(input) {
    setInput(evaluate(input.toString()))
  } else {
    alert("No fuiste a la escuela? Ingresa una operacion valida")
  }
};

/////////

useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
      agregarInput(event.key);
    } else if (event.keyCode === 107 || event.keyCode === 187) {
      agregarInput("+");
    } else if (event.keyCode === 109 || event.keyCode === 189) {
      agregarInput("-");
    } else if (event.keyCode === 106) {
      agregarInput("*");
    } else if (event.keyCode === 111 || event.keyCode === 191) {
      agregarInput("/");
    } else if (event.keyCode === 13 || event.keyCode === 187) {
      calcularResultado();
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [input]);

/////////



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
        <Pantalla id="display" input={input} />



        <div className="fila">
          <Boton id="seven" manejarClic={agregarInput}>7</Boton>
          <Boton id="eigth" manejarClic={agregarInput}>8</Boton>
          <Boton id="nine" manejarClic={agregarInput}>9</Boton>
          <Boton id="divide"  manejarClic={agregarInput}>/</Boton>
        </div>

        <div className="fila">
          <Boton id="four" manejarClic={agregarInput}>4</Boton>
          <Boton id="five" manejarClic={agregarInput}>5</Boton>
          <Boton id="six" manejarClic={agregarInput}>6</Boton>
          <Boton id="multiply" manejarClic={agregarInput}>*</Boton>

        </div>

        <div className="fila">
          <Boton id="one" manejarClic={agregarInput}>1</Boton>
          <Boton id="two" manejarClic={agregarInput}>2</Boton>
          <Boton id="three" manejarClic={agregarInput}>3</Boton>
          <Boton id="subtract" manejarClic={agregarInput}>-</Boton>

        </div>

        <div className="fila">
          
        <BotonClear id="clear" manejarClear={() => setInput("0")}>
            C
          </BotonClear>
          <Boton id="zero" manejarClic={agregarInput}>0</Boton>
          <Boton id="decimal" manejarClic={agregarInput}>.</Boton>
          <Boton id="add" manejarClic={agregarInput}>+</Boton>

        </div>

        <div className="fila">
          
        <Boton id="equals" manejarClic={calcularResultado}>=</Boton>

        </div>

      </div>

    </div>
  );
}

export default App;
