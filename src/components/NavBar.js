import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./Home"
import Data from "./Data"

const NavBar = () => {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/data">Data</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/data">
            <Data />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default NavBar
