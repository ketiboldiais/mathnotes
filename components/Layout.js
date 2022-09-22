import React from "react";
import { NavBody } from "./Nav";

const Layout = ({ children }) => {
	return (
		<div className={`layout-container`}>
			<nav className={`nav-container`}>
				<NavBody />
			</nav>
			<main className={`content-page`}>{children}</main>
		</div>
	);
};

export default Layout;
