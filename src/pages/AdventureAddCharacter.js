import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Form, Row, Col, Button} from 'react-bootstrap'

const API_URL = process.env.REACT_APP_API_URL;



export default function AdventureAddCharacter (props){

    const [characters, setCharacters]=useState()
    const [addedCharacters, setAddedCharacters] = useState([])
    const [addedCharactersId, setAddedCharactersId] =useState([])
    
    const storedToken = localStorage.getItem("authToken")
    const adventureId = props.match.params.id

    useEffect(()=>{
        axios.get(`${API_URL}/adventure/allCharacters`,{headers: { Authorization: `Bearer ${storedToken}` }})
        .then((allCharacters)=>{
            console.log(allCharacters);
            setCharacters(allCharacters.data)
            
        })

    },[])


    const addCharacter =(e)=>{
        console.log(`e`,e.target.value);

        const value = e.target.value.split(",")
        setAddedCharacters([...addedCharacters,value[0]])
        setAddedCharactersId([...addedCharactersId,value[1]])
        console.log(`State`,addedCharacters);
        console.log(`id`, addedCharactersId);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
    
        const requestBody = { adventureId, addedCharactersId};
    
        const storedToken = localStorage.getItem("authToken");
    
  
          axios.put(`${API_URL}/adventureCharacters`, requestBody, {
            headers: { Authorization: `Bearer ${storedToken}` },
          })
          .then((response) => {
            setAddedCharacters()
            setAddedCharactersId();
            props.history.push(`/adventureInfo/characters/${response.data._id}`)
          })
          .catch((error) => {
            console.log(error);
          });
      };
//hola

return (
    <Container>
    
        <Form onSubmit={handleSubmit} className="formChar">
            <Row className="align-items-center" id="loginForm">
                <Col>
                    <Form.Label className="me-sm-2" id="label2" htmlFor="inlineFormCustomSelect">
                    <h2 className="characterinfo"> Choose the characters </h2>
                    </Form.Label>
                    <Form.Select
                    className="me-sm-2"
                    id="inlineFormCustomSelect"
                    onChange={addCharacter}
                    >
                    <option value="0">Choose...</option>
                    {characters ? characters.map((character) => {
                            return <option value={`${character.characterName},${character._id}`}  key={character.characterName}>{character.characterName}</option>;
                        }): null}
                    </Form.Select>

                    
                </Col>
                <Col>
                    <h4><u>Choosed Characters</u></h4>
                    <ul>
                    
                    {addedCharacters ? addedCharacters.map((addedCharacter)=>{
                        return(<li className="addchar" key = {addedCharacter}>{addedCharacter}</li>)
                    }):null}
                    </ul>
                </Col>
                <Col>
                <Button type="submit" className="mb-2" id="sub">
                    Add characters
                </Button>
                </Col>
                <Col>
              <Button onClick = {props.history.goBack}>
                  Back
              </Button>
            </Col>
            </Row>
        </Form>
    </Container>

      )
      
}