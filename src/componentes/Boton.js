import React from 'react';
import "../hoja-de-estilos/Boton.css"

function Boton(props) {

	const esOperador = valor => {
		return isNaN(valor) && (valor !== ".") && (valor !== "=");
	}


		return (
			<div 
				className={`boton-contenedor ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
				onClick={() => props.manejarClic(props.children)}
				>
				{/* El metodo .trim() Elimina espacios vacios al principio o final de una cadena de caracteres */}
				{props.children}
			</div>
		)
}


export default Boton