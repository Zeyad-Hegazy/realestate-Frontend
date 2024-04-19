import MenuNav from "./MenuNav/MenuNav";
import "./navbar.scss";

const Navbar = () => {
	return (
		<nav>
			<div className="left">
				<a href="/" className="logo">
					<img src="/logo.png" alt="logo image" />
					<span>RealEstate</span>
				</a>
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Contact</a>
				<a href="/">Agents</a>
			</div>
			<div className="right">
				<a href="/">Sign in</a>
				<a href="/" className="register">
					Sign up
				</a>
			</div>
			<MenuNav />
		</nav>
	);
};

export default Navbar;
