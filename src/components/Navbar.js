import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import {Button} from 'react-bootstrap'
import logo from "../pages/images/LOGO3.png"
import {Image} from "react-bootstrap";


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  

  return (
    <nav>
       {isLoggedIn
        ? (<>
            <Link to="/chooserol">
              <Button>Rol</Button>
            </Link>
            <Image src={logo} alt="logoNav" id="imageNav"></Image>
            <Link to="/">
            <Button onClick={logOutUser}>Logout</Button>
            </Link>
            
          </>)
        : 
        (<>
          <Link to="/login"> <button>Login</button> </Link>
        </>)
      }
    </nav> 
  );
}

export default Navbar;