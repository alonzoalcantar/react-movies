import MovieCard from "./MovieCard";

export default function MoviesListPage({movies}){
    return(
        <div>
            {movies.map((movie) => {
                return <MovieCard title = {movie.title} movie = {movie}/>; 
            })};
        </div>
    )
}