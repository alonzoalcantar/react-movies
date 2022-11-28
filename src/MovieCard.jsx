import { Link } from "react-router-dom";

export default function MovieCard({movie}) {
    return(
        <div>
            <Link to = {`/movies/${movie.title}`} >
            <div 
            class = 'item-card'
            style={{
                background: `url(${movie.posterPath})`,
                backgroundRepeat:'no-repeat',
                backgroundSize: 'contain'

            }}
            >
                <div class = "movie-info">
                    <h1>{movie.title}</h1>
                    <p>{movie.releaseDate}</p>
                </div>
            </div>




            </Link>
        </div>
    )
}