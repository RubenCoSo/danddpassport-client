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

function App() {
  return (
    <>
      <Navbar />

      <Switch>      
        <Route exact path="/" component={HomePage} />
        <Route exact path="/playerpage" component={PlayerPage} />
        <Route exact path="/createnewcharacter" component={CreateNewCharacter}/>
        <Route exact path="/chooserol" component={ChooseRolPage}/>
        <Route exact path="/characterinfo" component={CharacterInfo}/>
        <Route exact path="/createnewcharacter2" component={CreateNewCharacter2}/>

        
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
