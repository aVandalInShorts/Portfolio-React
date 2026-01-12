import "./Header.css";

import { useEffect } from "react";

export const Header = () => {
	useEffect(() => {
		console.log("123");
	}, []);

	return <div>Header</div>;
};
