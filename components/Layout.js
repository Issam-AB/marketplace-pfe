import React from "react";
import Navbar from "./Navbar";

const Layout = ({ Cheldren }) => {
	return (
		<div>
			<Navbar />
			{Cheldren}
		</div>
	);
};

export default Layout;
