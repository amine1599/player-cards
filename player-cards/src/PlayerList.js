import react from 'react';
import Player from './Player';

const PlayerList = (props)=>{
   return     <div style={{display: "grid",gridTemplateColumns: "repeat(2, 1fr)",gridAutoRows: "1fr",gap: "10px"}}>
                        {props.data.map(ele=> <div><Player {...ele}/></div>)}
                    </div>

}

export default PlayerList;