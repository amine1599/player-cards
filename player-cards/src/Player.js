import {Card} from 'react-bootstrap'

const Player = (props)=>{
    return (
        <div style={{height:"fit-content"}}>         
           <Card >
                <Card.Title>{props.name}</Card.Title>
                <Card.Body>
                    <Card.Img src = {props.image} style={{height:"330px", width:"300px"}}/>
                    <Card.Text> Team :{props.team}</Card.Text>
                    <Card.Text> Nationality :{props.nationality}</Card.Text>
                    <Card.Text> Number :{props.number}</Card.Text>
                    <Card.Text> age :{props.age}</Card.Text>
                </Card.Body>
            </Card>       
        </div>
        

    )
}

export default Player;