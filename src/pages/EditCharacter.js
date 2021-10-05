import { useState, useEffect } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const DNDAPI = "https://www.dnd5eapi.co/api/";
const API_URL = process.env.REACT_APP_API_URL;

export default function EditCharacter(props) {
  const [strength, setStrength] = useState();
  const [constitution, setConstitution] = useState();
  const [dexterity, setDexterity] = useState();
  const [intelligence, setIntelligence] = useState();
  const [wisdom, setWisdom] = useState();
  const [charisma, setCharisma] = useState();
  
  const [speed, setSpeed] = useState(0);
  const [languages, setLanguages] = useState([]);
  const [traits, setTraits] = useState([]);
  const [character, setCharacter] = useState();
  const [level, setLevel] = useState();
  const [skills, setSkills] = useState();
  const [equipment, setEquipment] = useState();

  const [proficiency, setProficiency] = useState();
  const [skillsSelect, setSkillsSelect] = useState();
  const [equipmentSelect, setEquipmentSelect] = useState();
  const [basicSkillsSelect, setBasicSkillsSelect] = useState();
  const [basicSkills, setBasicSkills] = useState();

  const characterId = props.match.params.id;
  const storedToken = localStorage.getItem("authToken");

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios
      .get(`${API_URL}/character/${characterId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((foundCharacter) => {
        setCharacter(foundCharacter.data);
        setSkills(character.skills);
        setBasicSkills(character.basicSkills);
        setEquipment(character.equipment);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios.get(`${DNDAPI}skills`).then((skills) => {
      axios.get(`${DNDAPI}proficiencies`).then((proficiencies) => {
        axios.get(`${DNDAPI}equipment`).then((equipment) => {
          setEquipmentSelect(equipment.data.results);
          setSkillsSelect(proficiencies.data.results);
          setBasicSkillsSelect(skills.data.results);
          setIsLoading(false);
        });
      });
    });
  }, []);

  

  const handleSelectedSkill = (e) => {
    let isSkillInclude = e.target.value.includes("Skill");

    if (isSkillInclude) {
      let selectedSkill = e.target.value.split(" ").pop();

      basicSkills.push(selectedSkill);
    } else {
      skills.push(e.target.value);
    }
  };

  const handleSelectedEquipment = (e) => {
    equipment.push(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {skills,equipment,basicSkills,level,strength,wisdom,charisma,intelligence,dexterity,constitution};

    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/editCharacter`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        
        setSkills("");
        setEquipment("");
        setBasicSkills("");
        setLevel("");
        setStrength("");
        setWisdom("");
        setCharisma("");
        setIntelligence("");
        setDexterity("");
        setConstitution("");
        setBasicSkillsSelect("");
        setProficiency("")
        


        props.history.push(`/createnewcharacter2/${response.data._id}`)
        
      })
      .catch((error) => console.log(error));

      
  };


  return character ? (
    <Form>
      <Row className="align-items-center">
        <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect">
          <b>
            <u> Stats</u>{" "}
          </b>
        </Form.Label>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">Level</Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="Level"
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              id="inlineFormInputGroup"
              // placeholder={character.level}
            />
          </InputGroup>
        </Col>

        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
            Strength
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="strength"
              value={strength}
              onChange={(e) =>
                setStrength(Number(e.target.value))
              }
              id="inlineFormInputGroup"
              placeholder={`${character.stats.str}`}
              // type="number"
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
            Constitution 
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="constitution"
              value={constitution}
              onChange={(e) =>
                setConstitution(Number(e.target.value))
              }
              id="inlineFormInputGroup"
              placeholder={character.stats.con}
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
            Dexterity
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="dexterity"
              value={dexterity}
              onChange={(e) =>
                setDexterity(Number(e.target.value))
              }
              id="inlineFormInputGroup"
              placeholder={character.stats.dex}
            />
          </InputGroup>
        </Col>

        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
            Intelligence
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="intelligence"
              value={intelligence}
              onChange={(e) =>
                setIntelligence(Number(e.target.value) )
              }
              id="inlineFormInputGroup"
              placeholder={character.stats.int}
            />
          </InputGroup>
        </Col>

        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
            Wisdom
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="wisdom"
              value={wisdom}
              onChange={(e) => setWisdom(Number(e.target.value))}
              id="inlineFormInputGroup"
              placeholder={character.stats.wis}
            />
          </InputGroup>
        </Col>

        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
            Charisma
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="charisma"
              value={charisma}
              onChange={(e) =>
                setCharisma(Number(e.target.value))
              }
              id="inlineFormInputGroup"
              placeholder={character.stats.cha}
            />
          </InputGroup>
        </Col>

        <Col xs="auto" className="my-1">
          <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect">
            <b>
              {" "}
              <u>Proficiency </u>
            </b>
          </Form.Label>
          <Form.Select
            className="me-sm-2"
            id="inlineFormCustomSelect"
            onChange={handleSelectedSkill}
          >
            <option value="0">Choose...</option>
            {isLoading
              ? null
              : skillsSelect.map((skill) => {
                  return (
                    <option key={skill.name} value={skill.name}>
                      {skill.name}
                    </option>
                  );
                })}
          </Form.Select>
        </Col>

        <Col xs="auto" className="my-1">
          <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect">
            <b>
              {" "}
              <u>Equipment </u>
            </b>
          </Form.Label>
          <Form.Select
            className="me-sm-2"
            id="inlineFormCustomSelect"
            onChange={handleSelectedEquipment}
          >
            <option value="0">Choose...</option>
            {isLoading
              ? null
              : equipmentSelect.map((equipment) => {
                  return (
                    <option key={equipment.name} value={equipment.name}>
                      {equipment.name}
                    </option>
                  );
                })}
          </Form.Select>
        </Col>

        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  ) : null;
}
