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
  const [strengthMod, setStrengthMod] = useState(0);
  const [constitutionMod, setConstitutionMod] = useState(0);
  const [dexterityMod, setDexterityMod] = useState(0);
  const [intelligenceMod, setIntelligenceMod] = useState(0);
  const [wisdomMod, setWisdomMod] = useState(0);
  const [charismaMod, setCharismaMod] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [languages, setLanguages] = useState([]);
  const [traits, setTraits] = useState([]);
  const [character, setCharacter] = useState();
  const [level, setLevel] = useState();
  const [skill, setSkill] = useState();

  const [proficiency, setProficiency] = useState();
  const [skillsSelect, setSkillsSelect] = useState();
  const [equipmentSelect, setEquipmentSelect] = useState();
  const [basicSkillsSelect, setBasicSkillsSelect] = useState();

  const characterId = props.match.params.id;
  const storedToken = localStorage.getItem("authToken");
  /* const characterBasicSkills = character.basicSkills; */
  /*  const skills = character.skills; */
  const [isLoading, setIsLoading] = useState(true);

  const handleSelectedSkill = (e) => {};

  const handleSelectedEquipment = (e) =>{};

  useEffect(() => {
    axios
      .get(`${API_URL}/character/${characterId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((foundCharacter) => {
        setCharacter(foundCharacter.data);
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

  return character ? (
    <Form>
      <Row className="align-items-center">
      <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect">
            <b><u> Stats</u> </b>
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
            Strength / Race bonus(+{`${strengthMod}`})
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="strength"
              value={strength}
              onChange={(e) =>
                setStrength(Number(e.target.value) + strengthMod)
              }
              id="inlineFormInputGroup"
              placeholder={`${character.stats.str}`}
              // type="number"
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
            Constitution / Race bonus(+{`${constitutionMod}`})
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="constitution"
              value={constitution}
              onChange={(e) =>
                setConstitution(Number(e.target.value) + constitutionMod)
              }
              id="inlineFormInputGroup"
              placeholder={character.stats.con}
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
            Dexterity / Race bonus(+{`${dexterityMod}`})
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="dexterity"
              value={dexterity}
              onChange={(e) =>
                setDexterity(Number(e.target.value) + dexterityMod)
              }
              id="inlineFormInputGroup"
              placeholder={character.stats.dex}
            />
          </InputGroup>
        </Col>

        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
            Intelligence / Race bonus(+{`${intelligenceMod}`})
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="intelligence"
              value={intelligence}
              onChange={(e) =>
                setIntelligence(Number(e.target.value) + intelligenceMod)
              }
              id="inlineFormInputGroup"
              placeholder={character.stats.int}
            />
          </InputGroup>
        </Col>

        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
            Wisdom / Race bonus(+{`${wisdomMod}`})
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="wisdom"
              value={wisdom}
              onChange={(e) => setWisdom(Number(e.target.value) + wisdomMod)}
              id="inlineFormInputGroup"
              placeholder={character.stats.wis}
            />
          </InputGroup>
        </Col>

        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
            Charisma / Race bonus(+{`${charismaMod}`})
          </Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              name="charisma"
              value={charisma}
              onChange={(e) =>
                setCharisma(Number(e.target.value) + charismaMod)
              }
              id="inlineFormInputGroup"
              placeholder={character.stats.cha}
            />
          </InputGroup>
        </Col>

        <Col xs="auto" className="my-1">
          <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect">
            <b> <u>Proficiency </u></b>
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
            <b> <u>Equipment </u></b>
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
