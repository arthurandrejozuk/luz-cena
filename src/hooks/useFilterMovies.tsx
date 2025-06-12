import { useEffect, useState } from 'react'
import type { ICard } from '../components/Card'

const useFilterMovies = (movies: ICard[]) => {

    const [searchTerm, setSearchTerm] = useState<string>("")
    const [filtered, setFiltered] = useState<ICard[]>([])

    useEffect(() =>{
        setFiltered(movies)
    },[movies])

    const handleSearch = () => {
        const filtered = movies.filter((movie) => 
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFiltered(filtered);
    }

  return { handleSearch, setSearchTerm, searchTerm, filtered }
}

export default useFilterMovies
