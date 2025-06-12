import axios from "axios";
import type { ICard } from "../components/Card";

const BASE_URL = "http://localhost:3001";

export const getMovies = async (): Promise<ICard[]> => {
    const response = await axios.get<ICard[]>(`${BASE_URL}/movies`)
    return response.data;
}   