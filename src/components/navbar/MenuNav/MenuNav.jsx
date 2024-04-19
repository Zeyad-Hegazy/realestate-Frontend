import { useState } from "react";
import "./menunav.scss";

const MenuNav = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="menuIcon">
				<img
					src="/menu.png"
					alt="menu icon"
					onClick={() => setOpen((prevState) => !prevState)}
				/>
			</div>
			<div className={open ? "menu active" : "menu"}>
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Contact</a>
				<a href="/">Agents</a>
				<a href="/">Sign in</a>
				<a href="/">Sign up</a>
			</div>
		</>
	);
};

export default MenuNav;
