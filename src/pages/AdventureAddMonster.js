import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Form, Row, Col, Button} from 'react-bootstrap'

const API_URL = process.env.REACT_APP_API_URL;
const DNDAPI = "https://www.dnd5eapi.co/api/";



export default function AdventureAddMonster (props){

    const [monsters, setMonsters]=useState()
    const [addedMonsters, setAddedMonsters] = useState([])
    

    const adventureId = props.match.params.id

    useEffect(()=>{
        axios.get(`${DNDAPI}monsters`)
        .then((allMonsters)=>{
            console.log(`monsters`,allMonsters.data.results);
            setMonsters(allMonsters.data.results)
            console.log(`monsters aaa`,monsters);
            
        })

    },[])


    const addMonster =(e)=>{
    
        setAddedMonsters([...addedMonsters,e.target.value])
        console.log(`State`,addedMonsters);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
    
        const requestBody = { adventureId, addedMonsters};
    
        const storedToken = localStorage.getItem("authToken");
    
  
          axios.post(`${API_URL}/adventureMonsters`, requestBody, {headers: { Authorization: `Bearer ${storedToken}` },})
          .then((response) => {
            console.log(`response`,response);
            setAddedMonsters();
            props.history.push(`/adventureInfo/monsters/${response.data._id}`)
          })
          .catch((error) => {
            console.log(error);
          });
    };

// return null
return (
    <Container>
    
        <Form onSubmit={handleSubmit} className="formMonster">
            <Row className="align-items-center" class="stats">
                <Col>
                    <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect">
                    <h2 className="monsterinfo"> Choose the Monsters </h2>
                    </Form.Label>
                    <Form.Select
                    className="me-sm-2"
                    id="inlineFormCustomSelect"
                    onChange={addMonster}
                    >
                    <option value="0">Choose...</option>
                    {monsters ? monsters.map((monster) => {
                            return <option value={`${monster.name}`}  key={monster.monsterName}>{monster.name}</option>;
                        }): null}
                    </Form.Select>

                    
                </Col>
                <Col>
                    <h4><u>Choosed Monsters</u></h4>
                    <ul>
                    {addedMonsters ? addedMonsters.map((addedMonster)=>{
                        return(<li key = {addedMonster}>{addedMonster}</li>)
                    }):null}
                    </ul>
                </Col>
                <Col>
                <Button type="submit" className="mb-2" id="sub">
                    Add Monsters
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