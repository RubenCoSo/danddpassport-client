import { useContext } from 'react'
import {Button} from 'react-bootstrap'
import { AuthContext } from '../context/auth.context'


export default ChooseRolPage (){
    const {user} = useContext(AuthContext)

    console.log(user)

    // const playerButton=()=>{
        

    // }
    return(
        <Container>
            <Row>
                <Col>
                    <Button>Player</Button>
                    <Button>Master</Button>
                </Col>
            </Row>
        </Container>
    )
}