
export default function ActorCard({actor, index}) {
    return(
    <div class = 'actor-card'>
         
        <img src={`https://picsum.photos/id/${index}/200/200`} />
        
        <div class = 'actor-info'>
            <div>
             <h3>{actor}</h3>
            </div>
        </div>

    </div>
)}