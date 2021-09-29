import axios from 'axios';
import { useContext } from 'react';
import {Button, Container, Row, Col,} from 'react-bootstrap';
import { AuthContext } from '../context/auth.context';
import { Redirect } from 'react-router-dom';
const API_URL = process.env.REACT_APP_API_URL


export default function ChooseRolPage() {
    const {user} = useContext(AuthContext)

    const storedToken = localStorage.getItem('authToken')

    const playerButton=()=>{
        const _id = `ObjectId("${user._id}")`

        console.log({_id})
        axios.put(`${API_URL}/chooserol/player`,{_id},{ headers: { Authorization: `Bearer ${storedToken}` } })
        .then((returnInfo)=>{
            return <Redirect to='/playerpage'/>
        })
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
