import axios from "axios";
import { useContext } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { AuthContext } from "../context/auth.context";
import { Redirect } from "react-router-dom";
import logo from "./images/LOGO3.png"

const API_URL = process.env.REACT_APP_API_URL;

export default function ChooseRolPage(props) {
  console.log("props", props);
  const { user } = useContext(AuthContext);

  const storedToken = localStorage.getItem("authToken");

  const playerButton = (e) => {
    const _id = user._id;

    const rol = e.target.value;

    console.log(e.target);
    axios
      .put(
        `${API_URL}/user/${rol}`,
        { _id },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((returnInfo) => {
        return props.history.push("/playerpage");
      })
      .catch((err) => console.log("error", err));
  };

  

  return (
      
    <Container>
    <Image src={logo} alt="logo" id="image"></Image>
      <Row>
        <Col>
          <Button onClick={playerButton} value={"player"} id="chooseplayerbtn">
            <b>Player</b>
          </Button>
          <Button onClick={playerButton} value={"master"} id="chooseplayerbtn">
           <b> Master</b>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

