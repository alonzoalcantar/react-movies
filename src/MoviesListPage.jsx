import MovieCard from "./MovieCard";

export default function MoviesListPage({movies}){
    return(
        <div>
            {movies.map((movie) => {
                return <MovieCard 
                title = {movie.title} 
                movie = {movie} 
                releaseDate = {movie.releaseDate}
                posterPath = {movie.posterPath}
                cast = {movie.cast}
                /> 
            })}
        </div>
    )
}