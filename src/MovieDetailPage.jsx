import { useParams } from "react-router-dom"

export default function MoviesDetailsPage({movies}){
    
    
    let {movieName} = useParams();
    let movie = movies.find((movie) => movie.title === movieName);
    
   return(

    <div>
        <div>
        <img src = {`${movie.posterPath}`} alt = ''/>
        </div>
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.releaseDate}</p>
            <h3>Cast:</h3>
            <p>{movie.cast.join()}</p>
        
        </div>
    </div>

   )
}