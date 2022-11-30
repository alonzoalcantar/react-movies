import ActorCard from "./ActorCard"

import {movies} from './data'

function createActorList(movies) {
    let actorList = [];
    movies.forEach((m) => {
      m.cast.forEach((mc) => {
        if (!actorList.includes(mc)) {
          actorList.push(mc);
        }
      });
    });
    return actorList;
  }
  const actors = createActorList(movies);


export default function ActorsListPage({movies}){
    return(
        <div>
            {movies.map((movie)=> {
                return <ActorCard
                movie = {movie}
                cast = {movie.cast}
                actors = {actors}/>
            })}
        </div>
    )
}