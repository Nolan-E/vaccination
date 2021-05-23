import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "../styles/App.css"
import NavBar from "./NavBar"
import Home from "./Home"
import Data from "./Data"

const App = () => {
  return (
    <div className="lg:px-16 px-6 bg-gray-700 flex flex-col flex-wrap items-center lg:py-0 py-2">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/data" component={Data} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
