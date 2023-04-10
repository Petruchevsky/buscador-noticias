import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import { NoticiasProvider } from "./context/NoticiasProvider";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
	return (
		<NoticiasProvider>
			<footer
					className="animate__animated animate__bounceInDown"
					style={{
						fontFamily: "Arial",
						textAlign: "center",
						background: "#4285F4",
						color: "white",
						padding: "1px 0px"
					}}
				>
					<h3 style={{ marginBottom: "0" }}>
						Aplicación desarrollada por Moisés Berdichevsky (M.E.B.A)
					</h3>
					<h4 style={{ marginTop: "5px" }}>Powered by React & Material UI</h4>
				</footer>
			<Container>
				

				<header className="animate__animated animate__bounceInDown">
					<Typography variant="h3" component="h1" align="center" marginY={5}>
						Buscador de Noticias de EE.UU
					</Typography>
				</header>

				<Grid container justifyContent="center">
					<Grid item xs={9} md={6}>
						<div className="animate__animated animate__fadeInLeft">
							<Formulario />
						</div>
					</Grid>
				</Grid>

				<ListadoNoticias />
			</Container>
		</NoticiasProvider>
	);
}

export default App;
