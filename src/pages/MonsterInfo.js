import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const DNDAPI = "https://www.dnd5eapi.co/api/";

function MonsterInfo(props) {
  const [monster, setMonster] = useState();

  const monsterId = props.match.params.id;

  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${DNDAPI}monsters/${monster}`, {
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
      <Row></Row>
      <Row>
        <Col sm={1} md={1}>
          <h2>
            {" "}
            <u> Name: {monster.name} </u>
          </h2>
          <p>Size: {monster.size}</p>
          <p>Type: {monster.type}</p>
          <p>Subtype: {monster.subtype}</p>
          <p>Alignment: {monster.alignment}</p>
          <p>Armor_class: {monster.armor_class}</p>
          <p>Hit_points: {monster.hit_points}</p>
          <p>Hit_dice: {monster.hit_dice}</p>
          <p>Speed Walk: {monster.speed.walk}</p>
          <h2>
            <u> Stats </u>
          </h2>
          <p>Strength: {monster.strength}</p>
          <p>Dexterity: {monster.dexterity}</p>
          <p>Constitution: {monster.constitution}</p>
          <p>Intelligence: {monster.intelligence}</p>
          <p>Wisdom: {monster.wisdom}</p>
          <p>Charisma: {monster.charisma}</p>
          <h2>
            <u> Actions </u>
          </h2>
          {monster.actions.map((action) => {
            return(
            <>
              <p>Name: {action.name}</p>
              <p>Description: {action.desc}</p>
              <p>Attack Bonus: {action.attack_bonus}</p>
  
            </>)
          })}
        </Col>
      </Row>
    </Container>
  ) : null;
}

export default MonsterInfo;
