import axios from 'axios';
import { useEffect, useState } from 'react';
import {Modal, Button} from 'react-bootstrap'


export default function SkillModal(props) {

    const [skillInfo, setSkillInfo] = useState()

    const DNDAPI = "https://www.dnd5eapi.co/api/";
    let skillId = props.skill.toLowerCase()

    useEffect(()=>{
        axios.get(`${DNDAPI}/proficiencies/skill-${skillId}`)
        .then((response)=>{
            setSkillInfo(response.data)
        })
    })


    return(
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>{props.skill}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )

}