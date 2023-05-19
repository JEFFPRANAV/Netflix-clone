import React, { useEffect, useState } from 'react'
import axios from './axios'

import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(fetchUrl)
            console.log(requests.data.results);
            setMovies(requests.data.results)
            return requests
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters' >
                {movies.map(movie => {
                    return <img
                        key={movie.id}
                        className={'row__poster &(isLargeRow && "row_posterLarge")' }
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                })}
            </div>
        </div>
    )
}

export default Row;