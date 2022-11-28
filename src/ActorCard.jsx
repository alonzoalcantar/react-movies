export default function ActorCard({movie, cast}) {
    
    const castSet = new Set(cast)

    const uniqueCastArray = Array.from(castSet)
    console.log(uniqueCastArray)

    return(
    <div class = 'actor-card'>
         
        
        
        <div class = 'actor-info'>
            <h1>{uniqueCastArray}</h1>
        </div>



    </div>
)}