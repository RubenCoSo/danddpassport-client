import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function AdventureCard (props) {
    const adventure = props.adventure._id;
  const getAdventures = props.getAdventures;

  console.log(props.adventure);

  const deleteAdventure = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(
        `${API_URL}/deleteAdventure`,
        { adventure },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((res) => {
        getAdventures();
      })

      .catch((err) => console.log(err));
  };

  return (

    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.adventure.title}</Card.Title>
            <Card.Text>
                {props.adventure.description}
            </Card.Text>
            <Link to={`/adventureInfo/characters/${adventure}`} id="link">
                <Button class="btnCard">Choose Adventure</Button>
            </Link>
            <Button onClick={deleteAdventure} class="btnCard">
            Delete
            </Button>
        </Card.Body>
    </Card>
  );
}
