/*eslint-disable*/
import  { useEffect, useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/Images/XXIV.webp";
import { Link } from "react-router-dom";

const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);



	const [isNavbarHidden, setIsNavbarHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsNavbarHidden(true);
			} else {
				setIsNavbarHidden(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);


	// const { user, isAuthenticated } = useUser();

	return (
		<div className={`header navbar ${isNavbarHidden ? "hidden" : ""}`}>
			<Link to="/">
				<img className="logo" alt="logo" src={logo} />
			</Link>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li>
					<Link
						to="/"
						onClick={() => setClick(false)}
						className={location.pathname === "/" ? "activel" : ""}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/event"
						onClick={() => setClick(false)}
						className={location.pathname === "/event" ? "activel" : ""}
					>
						Events
					</Link>
				</li>
				{/* <li>
					<Link
						to="/spotlight"
						onClick={() => setClick(false)}
						className={location.pathname === "/spotlight" ? "activel" : ""}
					>
						Spotlight
					</Link>
				</li>
				<li>
					<Link
						to="/sponsor"
						onClick={() => setClick(false)}
						className={location.pathname === "/sponsor" ? "activel" : ""}
					>
						Sponsor
					</Link>
				</li>
				<li>
					<Link
						to="/logistics"
						onClick={() => setClick(false)}
						className={location.pathname === "/logistics" ? "activel" : ""}
					>
						Schedule
					</Link>
				</li>
				<li>
					<Link
						to="/team"
						onClick={() => setClick(false)}
						className={location.pathname === "/team" ? "activel" : ""}
					>
						The Team
					</Link>
				</li>
				<li>
					<Link
						to="/faq"
						onClick={() => setClick(false)}
						className={location.pathname === "/faq" ? "activel" : ""}
					>
						FAQ
					</Link>
				</li>
				<li>
					<Link
						to="/timeline"
						onClick={() => setClick(false)}
						className={location.pathname === "/timeline" ? "activel" : ""}
					>
						Timeline
					</Link>
				</li>
				<li>
					{isAuthenticated ? (
						<div className=" cursor-pointer" onClick={handleLogout}>
							Logout
						</div>
					) : (
						<div className=" cursor-pointer" onClick={handleGoogleLogin}>
							Login
						</div>
					)}
				</li> */}
				{/* <li className="glow-on-hover">
					<Link
						to={isTicketValid ? "/dashboard" : "/tickets"}
						onClick={() => setClick(false)}
					>
						{isTicketValid ? "Dashboard" : "Tickets"}
					</Link>
				</li> */}
			</ul>
			<div className="hamburger" onClick={handleClick}>
				{click ? (
					<FaTimes size={20} style={{ color: "#fff" }} />
				) : (
					<FaBars size={20} style={{ color: "#fff" }} />
				)}
			</div>
		</div>
	);
};

export default Header;
