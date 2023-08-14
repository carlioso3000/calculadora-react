import React from "react";
import "../hoja-de-estilos/Pantalla.css"

//componente como funcion flecha ({prop.aqui})

const Pantalla = ({ input, id }) => (
	<div id={id} className="input">
		{input}
	</div>
)

export default Pantalla;