
import ActorCard from './ActorCard';

export default function ActorsListPage({movies}){
        const actorList = []
        movies.map((movie) => {
            actorList.push(...movie.cast)
        })
        const actorSet = new Set(actorList)
        const actorArray = Array.from(actorSet)
            return ( 
            <>
            <h1>Actors List Page</h1>
            {actorArray.map((actor, index) => 
            <ActorCard 
            actor={actor} 
            index={index} />
            )}
            </>  
       ) }
