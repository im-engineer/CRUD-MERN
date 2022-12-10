import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const {loginWithRedirect,logout,isAuthenticated, user} = useAuth0();
  console.log(user)
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                ToDo List
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav  mb-2 mb-lg-0">
               
               
                  {/* <li class="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Sign up
                    </NavLink>
                  </li> */}
                  {isAuthenticated && <NavLink to="/profile"> <p><img src={user.picture} alt="" style={{width:"7vh",height:"7vh",borderRadius:"50%"}}></img></p></NavLink>} &nbsp;
                  {isAuthenticated ? ( <>  <li class="nav-item">
                    <button className="btn" 
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                    >
                      LogOut
                    </button>
                  </li>
                   <li class="nav-item">
                   <NavLink className="nav-link" to="/dashboard">
                     Dashboard
                   </NavLink>
                 </li>
                 </>
                 ):(<li class="nav-item">
                    <button onClick={() => loginWithRedirect()} className="btn">LogIn</button>
                  </li>)
                  }
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
