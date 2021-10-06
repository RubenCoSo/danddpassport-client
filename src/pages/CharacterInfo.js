import axios from "axios";
import { useEffect, useState } from "react";
import {Container,Row,Col, Image} from "react-bootstrap"
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function CharacterInfo(props) {

  const [character, setCharacter] = useState()

  const characterId = props.match.params.id;
  console.log(characterId);
  const storedToken = localStorage.getItem('authToken');

  useEffect(()=>{
    axios.get(`${API_URL}/character/${characterId}`,{ headers: { Authorization: `Bearer ${storedToken}` } })
    .then((response)=>{
      console.log(`character`,response.data);
      setCharacter(response.data)
    })
    .catch((err)=>console.log(err))
  },[])


  // return null
  
    return character ? (
      <Container class="info">
        <Row>
          <Col>
            <h1>Character info</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={1} md={1}>
            <Image src={ character.image} id="profileImage"></Image>
          </Col>
          <Col sm={1} md={1}>
            <h2> Name: { character.characterName}</h2>
            <h4> Race: { character.race}</h4>
            <h4> Class: { character.class}</h4>
            <h4> Level: { character.level}</h4>
          </Col>
          </Row>
        <Row >
        
          <Col sm={1} md={1}>
            <h5> <u>Stats </u> </h5>
            <div class="stats">
            <p>Strength : { character.stats.str}</p>
             <p>Bonus:{ Math.floor(((Number(character.stats.str)-10)/2))}</p>
            <br/>
            <p>Dexterity : { character.stats.dex}</p>
              <p>Bonus:{ Math.floor(((Number(character.stats.dex)-10)/2))}</p>
            <br/>
            <p>Constitution : { character.stats.con}</p>
              <p>Bonus:{ Math.floor(((Number(character.stats.con)-10)/2))}</p>
            <br/>
            <p>Intelligence : { character.stats.int}</p>
              <p>Bonus:{ Math.floor(((Number(character.stats.int)-10)/2))}</p>
            <br/>
            <p>Wisdom : { character.stats.wis}</p>
              <p>Bonus:{ Math.floor(((Number(character.stats.wis)-10)/2))}</p>
            <br/>
            <p>Charisma : { character.stats.cha}</p>
              <p>Bonus:{ Math.floor(((Number(character.stats.cha)-10)/2))}</p>
            </div>
          </Col>
        </Row>
        <Row >
          <Col sm={1} md={1}>
            <h5> <u>Basic Skills</u></h5>
            <div class="stats">
            { character.basicSkills.map((skill)=>{
              return <Link key={skill} to ={`/skillInfo/${skill}`} ><p className="linkProfi">{skill}</p></Link>
              })}
            </div>
            
            <h5> <u>Proficiencies</u></h5>
            <div class="proficiencies">
            {character.skills.map((skill)=>{
              return <p className="linkProfi">{skill}</p>
              })}
            </div>

            <h5> <u>Traits</u></h5>
            <div class="stats">
            {character.traits.map((trait)=>{
              return <Link key={trait} to ={`/traitInfo/${trait}`}><p className="linkProfi">{trait}</p></Link>
              })}
            </div>

            <h5> <u>Equipment</u></h5>
            <div class="stats">
            {character.equipment.map((equip)=>{
              return <Link key={equip} to ={`/equipmentInfo/${equip}`}><p className="linkProfi">{equip}</p></Link>
              })}
            </div>
          </Col>
        </Row>
      </Container>
        )
        :null
    }

export default CharacterInfo;