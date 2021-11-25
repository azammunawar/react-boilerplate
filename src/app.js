import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import "./app.css";
  import {routes} from "./routes/navigation";
  import {AuthenticRoute} from "./routes/authenticateRoute";
  import {UnAuthenticRoute} from "./routes/unAuthenticateRoute";
  import {About} from "./pages/about/about";

export class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/users">Users</Link>
                    </li>
                  </ul>
                </nav>
              <Switch>
              {  routes["public"].map((route, index)=> {
                        return <Route key={route+index} path={route.path} component={route.component} />
                      })
                      }
                        {  routes["auth"].map((route, index)=> {
                        return    <Route key={route+index} path={route.path} component={route.component} />
                      })
                      }
                      
                {/* {Object.keys(routes).map((routType)=> {
                
                    if (routType === "public") {
                   
                    }
                    if (routType === "auth") {
                      alert(routType);
                      return <Route key={"about"} path="/about"  > <About/> </Route> 
                  }
                  if (routType === "unAuth") {
                    return routes[routType].map((route, index)=> 
                      <UnAuthenticRoute key={route+index} path={route.path} component={route.component} exact={route.exact} />
                    )  
                  }
                })} */}
              
              </Switch>
          </div>
        </Router>

        );
    }
}