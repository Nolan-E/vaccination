import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


const NavBar = () => {
  return (
		<nav>
			<ul className="flex">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/data">Data</Link>
				</li>
			</ul>
		</nav>
  )
}

export default NavBar
