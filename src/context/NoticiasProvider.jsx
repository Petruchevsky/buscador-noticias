import { createContext, useCallback, useEffect, useState } from "react";
import useAxios from "axios-hooks";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  const [{ data, loading, error }, execute] = useAxios(
    {
      url: `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`,
      method: "GET",
    },
    { manual: true }
  );

  const fetchData = useCallback(async () => {
    try {
      const response = await execute();
      const { articles, totalResults } = response.data;
      setNoticias(articles);
      setTotalNoticias(totalResults);
      setPagina(1);
    } catch (err) {
      console.error(err);
    }
  }, [execute]);

  useEffect(() => {
    fetchData();
  }, [categoria, fetchData]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagination = (e, valor) => {
    setPagina(valor);
  };

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        handleChangePagination,
        noticias,
        totalNoticias,
        pagina,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;





// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// const NoticiasContext = createContext();

// const NoticiasProvider = ({ children }) => {

//     const [categoria, setCategoria] = useState('general')
//     const [noticias, setNoticias] = useState([])
//     const [pagina, setPagina] = useState(1);
//     const [totalNoticias, setTotalNoticias] = useState(0);

//     useEffect(() => {
//         const consultarAPI = async () => {
//             const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`
//             const { data } = await axios(url)
//             const { articles, totalResults } = data;
           
//             setNoticias(articles)
//             setTotalNoticias(totalResults)
//             setPagina(1)
//         }
//         consultarAPI();
//     }, [categoria])
    
//     useEffect(() => {
//         const consultarAPI = async () => {
//             const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&pageSize=12&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`
//             const { data } = await axios(url)
//             const { articles, totalResults } = data;
           
//             setNoticias(articles)
//             setTotalNoticias(totalResults)
            
//         }
//         consultarAPI();
//     }, [pagina])

//     const handleChangeCategoria = (e) => {
//         setCategoria(e.target.value)
//     }

//     const handleChangePagination = (e, valor) => {
//         setPagina(valor)
//     }

//     return(
//         <NoticiasContext.Provider
//             value={{
//                 categoria,
//                 handleChangeCategoria,
//                 handleChangePagination,
//                 noticias,
//                 totalNoticias,
//                 pagina,
//             }}>
//             { children }    
//         </NoticiasContext.Provider>
//     )
// }

// export {
//     NoticiasProvider
// }

// export default NoticiasContext;