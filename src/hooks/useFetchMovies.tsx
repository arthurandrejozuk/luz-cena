import { useEffect, useState } from "react";
import type { ICard } from "../components/Card";
import { getMovies } from "../api";

const useFetchMovies = () => {
 
    const [movies, setMovies] = useState<ICard[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)


    async function fetchMovies() {
        setIsLoading(true)
        setError(null)
        try{

            const filmes = await getMovies()
            setMovies(filmes);
        } catch (err){
            setError("Erro ao buscar filmes. Tente novamente")
            console.error(err);
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() =>{
        fetchMovies();
    },[])

  return {movies, isLoading, error}
}

export default useFetchMovies
