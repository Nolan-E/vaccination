import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "../styles/App.css"
import NavBar from "./NavBar"
import About from "./About"
import Contact from "./Contact"
import Data from "./Data"
import Home from "./Home"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <NavBar />
        <div className="h-screen w-2/3 max-w-screen-lg flex justify-center bg-gray-200 rounded-xl">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/data" component={Data} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
