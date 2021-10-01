import {
  
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function CreateNewCharacter2(props) {
  const [strength, setStrength] = useState();
  const [constitution, setConstitution] = useState();
  const [dexterity, setDexterity] = useState();
  const [intelligence, setIntelligence] = useState();
  const [wisdom, setWisdom] = useState();
  const [charisma, setCharisma] = useState();

  const [strengthMod, setStrengthMod] = useState(0);
  const [constitutionMod, setConstitutionMod] = useState(0);
  const [dexterityMod, setDexterityMod] = useState(0);
  const [intelligenceMod, setIntelligenceMod] = useState(0);
  const [wisdomMod, setWisdomMod] = useState(0);
  const [charismaMod, setCharismaMod] = useState(0);
  const [race, setRace] = useState("");
  const [speed, setSpeed] =useState(0)
  const [languages, setLanguages] =useState([])
  const [traits, setTraits] =useState([])
  const [image, setImage] =useState("")


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
        setImage("./images/DragonBorn.jpg")
        setSpeed(30)
        setLanguages([...languages, "Common", "Draconic"])
        setTraits([...traits,"Breath Weapon", "Draconic Ancestry","Damage Resistance"])
        break;
      case "Dwarf":
        setConstitutionMod(2)
        setSpeed(25)
        setLanguages([...languages, "Common", "Dwarvish"])
        setTraits([...traits,"Darkvision", "Dwarven Resilience","Stonecunning", "Dwarven Combat Training", "Tool Proficiency"])
        setImage("./images/gnome.jpg")
        break;
      case "Elf":
        setDexterityMod(2)
        setSpeed(30)
        setLanguages([...languages, "Common", "Elvish"])
        setTraits([...traits,"Darkvision", "Fey Ancestry","Trance"])
        setImage("./images/Elves.jpg")
        break;
      case "Gnome":
        setIntelligenceMod(2)
        setSpeed(25)
        setLanguages([...languages, "Common", "Gnomish"])
        setTraits([...traits,"Darkvision", "Gnome Cunning"])
        setImage("./images/DragonBorn.jpg")
        break;
      case "Half-Elf":
        const randomStat = Math.floor(Math.random()*5)
        switch (randomStat) {
          case 0:
            setStrengthMod(1)
            break;
          case 1:
            setDexterityMod(1)
            break;
          case 2:
            setIntelligenceMod(1)
            break;
          case 3:
            setConstitutionMod(1)
            break;
          case 4:
            setWisdomMod(1)
            break;   
          default:
            setWisdomMod(1)
        }
        setCharismaMod(2)
        setSpeed(30)
        setLanguages([...languages, "Common", "Elvish", "Sylvan"])
        setTraits([...traits,"Darkvision", "Fey Ancestry","Skill versatility"])
        setImage("./images/Half-elf2-5e.jpg")
        break;
      case "Half-Orc":
        console.log(`holaaa`)
        setConstitutionMod(1)
        setStrengthMod(2)
        setSpeed(30)
        setLanguages([...languages, "Common", "Orc"])
        setTraits([...traits,"Darkvision", "Savage attacks","Relenteless endurance"])
        setImage("./images/orca.jpg")
      break;
      case "Halfling":
        setDexterityMod(2)
        setSpeed(25)
        setLanguages([...languages, "Common", "Halfling"])
        setTraits([...traits,"Brave", "Halfling Nimbleness","Lucky"])
        setImage("./images/Halfling.jpg")
      break;
      case "Human":
        setDexterityMod(1)
        setConstitutionMod(1)
        setStrengthMod(1)
        setCharismaMod(1)
        setIntelligenceMod(1)
        setWisdom(1)
        setSpeed(30)
        setLanguages([...languages, "Common", "Elvish"])
        setImage("./images/humano.jpg")
        
      break;
      case "Tiefling":
        setIntelligenceMod(2)
        setCharismaMod(2)
        setSpeed(30)
        setLanguages([...languages, "Common", "Infernal"])
        setTraits([...traits,"Darkvision", "Hellish Resistance","Infernal Legacy"])
        setImage("./images/Tiefling.jpg")
      break;
    
      default:
        
    }
  },[race])

  const handleSubmit = (e) => {
      
    e.preventDefault();

      const requestBody = {strength, constitution, dexterity, wisdom, intelligence, charisma, characterId, speed, traits, image, languages};

      axios
        .put(
          `${API_URL}/character`,
          requestBody,
          { headers: { Authorization: `Bearer ${storedToken}` } }        
        )
        .then((response) => {
     
          setStrength(0);
          setConstitution(0);
          setIntelligence(0);
          setDexterity(0);
          setWisdom(0);
          setCharisma(0);
          setImage("")
          setSpeed(0)
          setLanguages([])
          setTraits([])

        })
        .catch((error) => console.log(error));
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" >
              Strength / Race bonus(+{`${strengthMod}`})
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="strength"
                value={strength}
                onChange={(e) => setStrength(Number(e.target.value) + strengthMod)}
                id="inlineFormInputGroup"
                placeholder="Strength"
                // type="number"
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" >
              Constitution / Race bonus(+{`${constitutionMod}`})
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="constitution"
                value={constitution}
                onChange={(e) => setConstitution(e.target.value + constitutionMod)}
                id="inlineFormInputGroup"
                placeholder="Constitution"
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" >
             Dexterity / Race bonus(+{`${dexterityMod}`})
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="dexterity"
                value={dexterity}
                onChange={(e) => setDexterity(e.target.value + dexterityMod)}
                id="inlineFormInputGroup"
                placeholder="Dexterity"
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" >
              Intelligence / Race bonus(+{`${intelligenceMod}`})
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="intelligence"
                value={intelligence}
                onChange={(e) => setIntelligence(e.target.value +intelligenceMod)}
                id="inlineFormInputGroup"
                placeholder="Intelligence"
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" >
              Wisdom  / Race bonus(+{`${wisdomMod}`})
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="wisdom"
                value={wisdom}
                onChange={(e) => setWisdom(e.target.value + wisdomMod)}
                id="inlineFormInputGroup"
                placeholder="Wisdom"
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" >
              Charisma / Race bonus(+{`${charismaMod}`})
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="charisma"
                value={charisma}
                onChange={(e) => setCharisma(e.target.value + charismaMod)}
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