import axios from 'axios';
import { useContext } from 'react';
import {Button, Container, Row, Col,} from 'react-bootstrap';
import { AuthContext } from '../context/auth.context';
const API_URL = process.env.REACT_APP_API_URL


export default function ChooseRolPage() {
    const {user} = useContext(AuthContext)

    const playerButton=()=>{
        const reqBody = user

        console.log(reqBody)
        // axios.put(`${API_URL}/chooserol/player`,reqBody)
    }
    
    return(
    <Container>
        <Row>
            <Col>
                <Button onClick = {playerButton} >Player</Button>
                <Button>Master</Button>
            </Col>
        </Row>
    </Container>
    );
}
