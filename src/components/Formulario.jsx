import React, { useState } from "react";
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Box,
} from "@mui/material";
import useNoticias from "../hooks/useNoticias";

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

function Formulario() {

    const { categoria, handleChangeCategoria } = useNoticias();

	return (
		<div className="animate__animated animate__zoomIn">
			<FormControl fullWidth>
                <InputLabel> Categoría </InputLabel>
                <Select
                    onChange={ handleChangeCategoria }
                    value={ categoria }
                    label="Categoría">
                    { CATEGORIAS.map( cat => (
                        <MenuItem 
                            value={ cat.value } key={ cat.value }>
                                { cat.label }
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
		</div>
	);
}

export default Formulario;
