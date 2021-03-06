import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CharacterAdventureCard(props) {
  console.log(props);
  return (
    <Card className="characterCard">
      <Card.Img
        variant="top"
        src={props.character.image}
        alt={props.character.race}
        className="characterImage"
      />
      <Card.Body>
        <Card.Title>{props.character.characterName}</Card.Title>
        <Card.Text>
          {props.character.race}
          <br />
          {props.character.class}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
          <Link to={`/characterInfo/${props.character._id}`} id="link">
            <Button class="btnCard">Choose Character</Button>
          </Link>
          <Link to={`/masterEditCharacter/${props.character._id}`}>
            <Button class="btnCard">Edit</Button>
          </Link>
      </Card.Footer>
    </Card>
  );
}

export default CharacterAdventureCard;
