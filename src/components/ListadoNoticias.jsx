import { Divider, Typography, Container, Grid } from "@mui/material";
import React from "react";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ListadoNoticias() {
	
	const { pagina, noticias, totalNoticias, handleChangePagination } = useNoticias();
   const totalPaginas = Math.ceil(totalNoticias / 12)

	return (
		<div>
			<Typography marginY={3} fontSize={30} textAlign="center" component="h2">
				<div className="animate__animated animate__zoomIn">Últimas Noticias</div>
			</Typography>

        <div className="animate__animated animate__zoomIn">
        <Stack spacing={2} marginY={3} alignItems="center">
				<Pagination 
               count={ totalPaginas } 
               color="primary"
               onChange={ handleChangePagination }
               page={ pagina } />
			</Stack>
        </div>

			<div className="animate__animated animate__zoomInDown">
         <Grid container spacing={2} marginY={3}>
				{noticias.map((noticia) => (
					<Noticia key={noticia.url} noticia={noticia} />
				))}
			</Grid>
         </div>

         <div className="animate__animated animate__zoomIn">
        <Stack spacing={2} marginY={3} alignItems="center">
				<Pagination 
               count={ totalPaginas } 
               color="primary"
               onChange={ handleChangePagination }
               page={ pagina } />
			</Stack>
        </div>
		</div>
	);
}

export default ListadoNoticias;
