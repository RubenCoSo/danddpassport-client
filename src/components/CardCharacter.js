import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios';



const API_URL = process.env.REACT_APP_API_URL;


function CharacterCard(props){
     const character = props.character._id; 
     const getCharacters = props.getCharacters;


    console.log(props.character);
 

    const deleteCharacter = () => {
        
        const storedToken = localStorage.getItem('authToken');      
         
        axios
          .post(
            `${API_URL}/delete`,{character},
            { headers: { Authorization: `Bearer ${storedToken}` } }           
          )
          .then((res) => {
              
             getCharacters()
        
        
        })
          
          .catch((err) => console.log(err));
      };  


return(
    <Card className="characterCard">
        <Card.Img variant="top" src={props.character.image} alt={props.character.race} className="characterImage"/>
        <Card.Body>
        <Card.Title>{props.character.characterName}</Card.Title>
        <Card.Text>
           {props.character.race}
           <br/>
           {props.character.class}
        </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Link to={`/characterInfo/${props.character._id}`} id="link"><Button class="btnCard">Choose Character</Button></Link>
            <Link to={`/characterInfo/${props.character._id}`}><Button class="btnCard">Edit</Button></Link>
            <Button onClick={deleteCharacter} class="btnCard">Delete</Button>
        </Card.Footer>
    </Card>
    )}



    export default CharacterCard;