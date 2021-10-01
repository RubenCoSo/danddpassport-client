import {
  
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  
} from "react-bootstrap";
import { AuthContext } from "./../context/auth.context";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function CreateNewCharacter2(props) {
  const [strength, setStrength] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);

  const [strengthMod, setStrengthMod] = useState(0);
  const [constitutionMod, setConstitutionMod] = useState(0);
  const [dexterityMod, setDexterityMod] = useState(0);
  const [intelligenceMod, setIntelligenceMod] = useState(0);
  const [wisdomMod, setWisdomMod] = useState(0);
  const [charismaMod, setCharismaMod] = useState(0);
  const [race, setRace] = useState(0);
  const [speed, setSpeed] =useState(0)

  const characterId = props.match.params.id;
  const storedToken = localStorage.getItem('authToken');
  
  useEffect(()=>{
    console.log(`hola`);
    axios.get(`${API_URL}/character/${characterId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
    .then((foundCharacter)=>{
      setRace(foundCharacter.data.race)
    })
  },[])

  useEffect(()=>{
    switch (race) {
      case "Dragonborn":
        setStrengthMod(2)
        setCharismaMod(1)
        setSpeed(30)
        break;
      case "Dwarf":
        setConstitutionMod(2)
        setSpeed(25)
        break;
      case "Elf":
        setDexterityMod(2)
        setSpeed(30)
        break;
      case "Gnome":
        setIntelligenceMod(2)
        setSpeed(25)
        break;
      case "Half-elf":
        const randomStatHElf =[setStrengthMod(1), setDexterityMod(1), setConstitutionMod(1), setIntelligenceMod(1), setWisdomMod(1)]
        randomStatHElf[Math.floor(Math.random()*4)]
        setCharismaMod(2)
        setSpeed(25)
        break;
    
      default:
        
    }
  },[race])

  const handleSubmit = (e) => {
      
    e.preventDefault();
   
      
      
      

      const requestBody = {strength, constitution, dexterity, wisdom, intelligence, charisma, characterId};
  
  
      
     

    
      axios
        .put(
          `${API_URL}/character`,
          requestBody,
          { headers: { Authorization: `Bearer ${storedToken}` } }        
        )
        .then((response) => {
     
          setStrength();
          setConstitution();
          setIntelligence();
          setDexterity();
          setWisdom();
          setCharisma();
        
      
          
        })
        .catch((error) => console.log(error));
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Strength
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="strength"
                value={strength}
                onChange={(e) => setStrength(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Strength"
                type="number"
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Constitution
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="constitution"
                value={constitution}
                onChange={(e) => setConstitution(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Constitution"
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
             Dexterity
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="dexterity"
                value={dexterity}
                onChange={(e) => setDexterity(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Dexterity"
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Intelligence
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="intelligence"
                value={intelligence}
                onChange={(e) => setIntelligence(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Intelligence"
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Wisdom
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="wisdom"
                value={wisdom}
                onChange={(e) => setWisdom(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Wisdom"
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Charisma
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="charisma"
                value={charisma}
                onChange={(e) => setCharisma(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Charisma"
              />
            </InputGroup>
          </Col>




          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    );
  };