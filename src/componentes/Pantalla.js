import React from "react";
import "../hoja-de-estilos/Pantalla.css"

//componente como funcion flecha ({prop.aqui})

const Pantalla = ({ input }) => (
	<div className="input">
		{input}
	</div>
)

export default Pantalla;