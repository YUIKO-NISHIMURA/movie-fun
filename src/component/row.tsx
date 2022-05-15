import axios from "../api/axios";
import { useEffect, useState } from "react";
import { kStringMaxLength } from "buffer";

interface Props {
    title: string;
    fetchUrl: string;
}

type Movie = {
    id: string;
    name: string;
    title: string;
    original_name: string;
    poster_path: string;
    backdrop_path: string;
}

export default function Row({title, fetchUrl}: Props) {
    const[movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request)
        }
        fetchData();
    }, [fetchUrl])

    const base_url = "https://image.tmdb.org/t/p/w200";

    return (
        <div className='text-lg bg-black'>
            <p className='text-white'>{title}</p>
            <div className="flex overflow-y-hidden p-5">
            {movies.map((movie, i) => (
                <img 
                key={movie.id}
                alt={movie.name}
                src={`${base_url}${movie.poster_path}`}
                className='px-1 max-h-24 mt-2 ease-out duration-300 transition'/>
            ))}
            </div>
        </div>
    )
}