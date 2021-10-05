import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

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

function App() {
  return (
    <>
      <Navbar />

      <Switch>      
        <Route exact path="/" component={HomePage} />
        <Route exact path="/playerpage" component={PlayerPage} />
        <Route exact path="/createnewcharacter" component={CreateNewCharacter}/>
        <Route exact path="/chooserol" component={ChooseRolPage}/>
        <Route exact path="/characterInfo/:id" component={CharacterInfo}/>
        <Route exact path="/createnewcharacter2/:id" component={CreateNewCharacter2}/>
        <Route exact path="/createNewCharacter3/:id/:characterClass" component={CreateNewCharacter3}/>
        <Route exact path="/createNewCharacter4/:id/:characterClass" component={CreateNewCharacter4}/>
        <Route exact path="/editCharacter/:id" component={EditCharacter}/>


        
        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
        
        <PrivateRoute exact path="/projects" component={ProjectListPage} />
        <PrivateRoute exact path="/projects/:id" component={ProjectDetailsPage} />
        <PrivateRoute exact path="/projects/edit/:id" component={EditProjectPage} />
        
        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
      </Switch>
    </>
      
    
  );
}

export default App;
