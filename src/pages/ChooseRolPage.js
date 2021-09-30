import axios from 'axios';
import { useContext } from 'react';
import {Button, Container, Row, Col,} from 'react-bootstrap';
import { AuthContext } from '../context/auth.context';
import { Redirect } from 'react-router-dom';
const API_URL = process.env.REACT_APP_API_URL


export default function ChooseRolPage(props) {

    console.log('props',props)
    const {user} = useContext(AuthContext)

    const storedToken = localStorage.getItem('authToken')

    const playerButton=(e)=>{
        const _id = user._id

        const rol = e.target.value

        console.log(e.target)
        axios.put(`${API_URL}/chooserol/${rol}`,{_id},{ headers: { Authorization: `Bearer ${storedToken}` } })
        .then((returnInfo)=>{
            return props.history.push("/playerpage")
        })
        .catch((err)=> console.log('error',err))
    }
    
    return(
    <Container>
        <Row>
            <Col>
                <Button onClick = {playerButton} value = {'player'}>Player</Button>
                <Button onClick = {playerButton} value = {'master'}>Master</Button>
            </Col>
        </Row>
    </Container>
    );
}
