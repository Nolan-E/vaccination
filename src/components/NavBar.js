import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="w-screen lg:px-16 px-6 bg-gray-700 lg:py-2 py-2">
      <ul className="flex flex-row justify-around flex-wrap">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/data">Data</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
