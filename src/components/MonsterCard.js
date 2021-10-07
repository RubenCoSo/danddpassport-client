import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function MonsterCard(props) {
  const monster = props.monster._id;
  const getMonster = props.getMonster;
  const path = props.path;

  console.log(`maps`, props.path);

  const deleteMonster = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(
        `${API_URL}/delete`,
        { monster },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((res) => {
        getMonster();
      })

      .catch((err) => console.log(err));
  };

  return (
    <Card className="characterCard">
      <Card.Body>
        <Card.Title>{props.monster.name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        (
          <>
            <Button onClick={deleteMonster} class="btnCard">
              Delete
            </Button>
          </>
        ) 
      </Card.Footer>
    </Card>
  );
}

export default MonsterCard;
