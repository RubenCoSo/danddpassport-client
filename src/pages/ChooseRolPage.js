import axios from "axios";
import { useContext, useState } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { AuthContext } from "../context/auth.context";
import logo from "./images/LOGO3.png"

const API_URL = process.env.REACT_APP_API_URL;

export default function ChooseRolPage(props) {
  const[rol, setRol] = useState()
  console.log("props", props);
  const { user } = useContext(AuthContext);

  const storedToken = localStorage.getItem("authToken");

  const playerButton = (e) => {
    const _id = user._id;

    const rol = "player";

    console.log(e.target);
    axios
      .put(
        `${API_URL}/user/${rol}`,
        { _id },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((returnInfo) => {
        console.log(returnInfo);

          props.history.push("/playerpage")

        
      })
      .catch((err) => console.log("error", err));
  }


  const masterButton = (e) => {
    const _id = user._id;

    const rol = "master";

    console.log(e.target);
    axios
      .put(
        `${API_URL}/user/${rol}`,
        { _id },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((returnInfo) => {
        console.log(returnInfo);

          props.history.push("/masterPage")
        
      })
      .catch((err) => console.log("error", err));
  }
  

  

  return (
      
    <Container>
    <Image src={logo} alt="logo" id="image"></Image>
      <Row>
        <Col>
          <Button onClick={playerButton} value={"player"} id="chooseplayerbtn">
            <b>Player</b>
          </Button>
          <Button onClick={masterButton} value={"master"} id="chooseplayerbtn">
           <b> Master</b>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

