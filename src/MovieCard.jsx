import { Link } from "react-router-dom";

export default function MovieCard(movie) {
    return(
        <div>
            <Link to = {`/movies/${movie.title}`} >
            <div class = 'item-card'>
                <div class = "movie-info">
                    <h1>{movie.title}</h1>
                    <p><strong>{movie.releaseDate}</strong></p>
                </div>
            </div>




            </Link>
        </div>
    )
}