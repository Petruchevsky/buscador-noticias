import { Card, CardMedia, Grid, Typography, CardContent, CardActions, Link } from "@mui/material";
import React from "react";

function Noticia({ noticia }) {
	const { urlToImage, url, title, description, source } = noticia;

	console.log(noticia);
	return (
		<Grid item md={4} sm={6} xs={12} sx={{ animation:"animate__animated animate__zommImDown" }}>
			<Card>
				<CardMedia
					height={ "230" } 
					component="img"
					alt={`Imagen de la Noticia ${title}`}
					image={ urlToImage }
				/>
				<CardContent>
					<Typography variant="body1" color="error">
                  { source.name }
               </Typography>
					<Typography variant="h5" component="div">
                  { title }
               </Typography>
					<Typography variant="body2" component="div">
                  { description }
               </Typography>
               <CardActions>
                  <Link href={ url } target="_blank" variant={"button"} textAlign="center" width="100%" sx={{ textDecoration: 'none' }}>
                     Leer Noticia
                  </Link>
               </CardActions>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default Noticia;
