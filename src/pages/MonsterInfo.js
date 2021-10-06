import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function MonsterInfo(props) {
  const [monster, setMonster] = useState();

  const monsterId = props.match.params.id;

  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${API_URL}/monster/${monsterId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(`monster`, response.data);
        setMonster(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return monster ? (
    <Container class="info">
      <Row>
        <Col>
          <h1>Monster info</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1}>
          <Image src={monster.image} id="profileImage"></Image>
        </Col>
        <Col sm={1} md={1}>
          <h2> Name: {monster.monsterName}</h2>
          <h4></h4>
        </Col>
      </Row>
    </Container>
  ) : null;
}

export default MonsterInfo;
