import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";    // <== IMPORT
import AnonRoute from "./components/AnonRoute";        // <== IMPORT
import PlayerPage from "./pages/PlayerPage";
import CreateNewCharacter from "./pages/CreateNewCharacter"
import ChooseRolPage from "./pages/ChooseRolPage";
import CharacterInfo from "./pages/CharacterInfo";
import CreateNewCharacter2 from "./pages/CreateNewCharacter2"
import CreateNewCharacter3 from "./pages/CreateNewCharacter3";
import CreateNewCharacter4 from "./pages/CreateNewCharacter4"
import EditCharacter from "./pages/EditCharacter";
import SkillInfo from "./pages/SkillInfo";
import EquipmentInfo from "./pages/EquipmentInfo";
import TraitInfo from "./pages/TraitInfo";
import MasterPage from "./pages/MasterPage";
import CreateNewAdventure from "./pages/CreateNewAdventure";
import AdventureInfoCharacters from "./pages/AdventureInfoCharacters";
import MonsterInfo from "./pages/MonsterInfo";
import AdventureAddCharacter from "./pages/AdventureAddCharacter";
import AdventureInfoMonsters from "./pages/AdventureInfoMonsters";


function App() {
  return (
    <>
      <Navbar />

      <Switch>      
        <Route exact path="/" component={HomePage} />
        <Route exact path="/playerpage" component={PlayerPage} />
        <Route exact path="/masterPage" component={MasterPage} />
        <Route exact path="/createnewcharacter" component={CreateNewCharacter}/>
        <Route exact path="/chooserol" component={ChooseRolPage}/>
        <Route exact path="/characterInfo/:id" component={CharacterInfo}/>
        <Route exact path="/createnewcharacter" component={CreateNewCharacter}/>
        <Route exact path="/createnewcharacter2/:id" component={CreateNewCharacter2}/>
        <Route exact path="/createNewCharacter3/:id/:characterClass" component={CreateNewCharacter3}/>
        <Route exact path="/createNewCharacter4/:id/:characterClass" component={CreateNewCharacter4}/>
        <Route exact path="/createNewAdventure" component={CreateNewAdventure}/>
        <Route exact path="/editCharacter/:id" component={EditCharacter}/>
        <Route exact path="/skillInfo/:skill" component={SkillInfo}/>
        <Route exact path="/equipmentInfo/:equip" component={EquipmentInfo}/>
        <Route exact path="/traitInfo/:trait" component={TraitInfo}/>
        <Route exact path="/adventureInfo/characters/:id" component={AdventureInfoCharacters}/>
        <Route exact path="/monsterInfo/:monster" component={MonsterInfo}/>
        <Route exact path="/adventureInfo/monsters/:id" component={AdventureInfoMonsters}/>
        <Route exact path="/adventureInfo/addCharacter/:id" component={AdventureAddCharacter}/>

        



        
        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}

        
        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
      </Switch>
    </>
      
    
  );
}

export default App;
