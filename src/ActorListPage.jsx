import ActorCard from "./ActorCard"

export default function ActorsListPage({movies}){
    return(
        <div>
            {movies.map((movie)=> {
                return <ActorCard
                movie = {movie}
                cast = {movie.cast}/>
            })}
        </div>
    )
}