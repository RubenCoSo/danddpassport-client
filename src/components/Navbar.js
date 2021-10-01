import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  

  return (
    <nav>
       {isLoggedIn
        ? (<>
            <Link to="/chooserol">
              <button>Choose Rol</button>
            </Link>
            <Link to="/">
            <button onClick={logOutUser}>Logout</button>
            </Link>
            <span>{user.name}</span>
          </>)
        : 
        (<>
          <Link to="/login"> <button>login</button> </Link>
        </>)
      }
    </nav> 
  );
}

export default Navbar;