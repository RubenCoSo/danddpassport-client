import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
    </nav>
-
      {/* {isLoggedIn
        ? (<>
            <Link to="/projects">
              <button>Projects</button>
            </Link>
            <button onClick={logOutUser}>Logout</button>
            <span>{user.name}</span>
          </>)
        : 
        (<>
<<<<<<< Updated upstream
          <Link to="/login"> <button>logout</button> </Link>
=======
          <Link to="/login"> <button>Login</button> </Link>
>>>>>>> Stashed changes
        </>)
      }
    </nav> */}
  );
}

export default Navbar;