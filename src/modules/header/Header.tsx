import styles from "./Header.module.css";

import { useEffect } from "react";

export const Header = () => {
	useEffect(() => {
		console.log("123");
	}, []);

	return (
		<header className={styles.header + " section"}>
			<div className={styles["header-inner"] + " section-inner"}>
				<h1 className={styles.title}>François Vandal</h1>
				<nav className={styles.nav}>
					<a href="#about">About</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
					<button>EN</button>
					<button>LIGHT</button>
				</nav>
			</div>
		</header>
	);
};
