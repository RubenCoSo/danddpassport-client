import CharacterInfo from "../pages/CharacterInfo";



function CharacterCard(props){
 

return(
    <div>
<CharacterInfo characterInfo = {props.character.characterInfo}/> 

    </div>
    )}



    export default CharacterCard;