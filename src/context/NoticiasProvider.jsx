import axios from "axios";
import { createContext, useEffect, useState } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&pageSize=12&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios(url)
            const { articles, totalResults } = data;
           
            setNoticias(articles)
            setTotalNoticias(totalResults)
            setPagina(1)
        }
        consultarAPI();
    }, [categoria])
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&pageSize=12&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            const { articles, totalResults } = data;
           
            setNoticias(articles)
            setTotalNoticias(totalResults)
            
        }
        consultarAPI();
    }, [pagina])

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handleChangePagination = (e, valor) => {
        setPagina(valor)
    }

    return(
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                handleChangePagination,
                noticias,
                totalNoticias,
                pagina,
            }}>
            { children }    
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext;