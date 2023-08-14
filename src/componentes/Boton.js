import React from 'react';
import "../hoja-de-estilos/Boton.css"

function Boton(props) {

	const obtenerClaseBoton  = valor => {
		if (isNaN(valor) && valor !== "." && valor !== "=") {
			return "operador"
		} else if ( valor === "=") {
			return "boton-resultado"
		} else {
			return "";
		}
	}


		return (
			<div 
				id={props.id}
				className={`boton-contenedor ${obtenerClaseBoton(props.children)}`.trimEnd()}
				onClick={() => props.manejarClic(props.children)}
				>
				{/* El metodo .trim() Elimina espacios vacios al principio o final de una cadena de caracteres */}
				{props.children}
			</div>
		)
}


export default Boton