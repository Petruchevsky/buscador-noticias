

import React, { useContext } from 'react'
import NoticiasContext from '../context/NoticiasProvider'

function useNoticias() {
  return useContext(NoticiasContext);
}

export default useNoticias
