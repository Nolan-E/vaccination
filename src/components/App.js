import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "../styles/App.css"
import NavBar from "./NavBar"
import Home from "./Home"
import Data from "./Data"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <NavBar />
        <div className="h-screen w-2/3 max-w-screen-lg flex justify-center bg-gray-200 rounded-xl">
          <Switch>
            <Route path="/data" component={Data} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
