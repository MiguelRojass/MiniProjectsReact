import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previusSearch.current) return
    // search es ''

    try {
      setLoading(true)
      setError(null)
      previusSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      // esto de aca se va a ejecutar tanto en el try como en el catch
      setLoading(false)
    }
  }, [])

  // useMemo -> 'quiero que este calculo lo evites y solo lo hagas cuando cambia cierta información'. (evitar renders innecesarios)
  // evitar que se vuelve a tener que ordenar esta lista si no a cambiado.
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) // localeCompare -> comparar de forma local CON ACENTOS
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
