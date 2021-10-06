import {Container,Button, CardGroup, Col} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import AdventureCard from "../components/AdventureCard";
import { AuthContext } from "./../context/auth.context";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL




function MasterPage() {

  const [adventures, setAdventures] = useState([])

  const { user } = useContext(AuthContext);

  const storedToken = localStorage.getItem('authToken')

  
  const userId = user._id;


function getAdventures(){
  axios.get(`${API_URL}/user/${userId}`,{ headers: { Authorization: `Bearer ${storedToken}`}})
  .then((userInfo)=>{
    console.log(userInfo)
    setAdventures(userInfo.data.adventures)
    
  })
  .catch((err) => console.log(err));

}

  useEffect(()=>{
    getAdventures()
    
  },[])
  
  

return (
  <Container>
  <div className="mb-2">
    <Link to={"/CreateNewAdventure"}><Button variant="primary" size="lg">
          New Adventure
        </Button></Link>
        </div>
    <CardGroup>
    {adventures.map((adventure)=>{
      return (
        <Col key= {adventure._id}>
          <AdventureCard adventure = {adventure} getAdventures = {getAdventures}/> 
        </Col>)
    })}
    </CardGroup>

    
  </Container>


        )
  }
export default MasterPage;