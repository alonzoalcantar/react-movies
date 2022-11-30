import { act } from "@testing-library/react"



export default function ActorCard({movie, cast, actors}) {
    


    const castSet = [new Set(actors)]

    const uniqueCastArray = Array.from(castSet)
    console.log(uniqueCastArray)

    

    




    return(
    <div class = 'actor-card'>
         
        
        
        <div class = 'actor-info'>
 

                    <div>{uniqueCastArray.map((actor) => (
                        <h1>{actor}</h1>
                    ))}
                    </div>
     
         
      
        </div>



    </div>
)}





