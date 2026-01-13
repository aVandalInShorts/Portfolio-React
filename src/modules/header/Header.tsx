import { IconPicker } from "../../components/icon-picker/IconPicker";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header className={styles.header + " section"}>
			<div className={styles["header-inner"] + " section-inner"}>
				<h1 className={styles.title}>François Vandal</h1>
				<nav className={styles.nav}>
					<a href="#about">About</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
					<button className={styles["lang-btn"]}>EN</button>
					<button className={styles["theme-btn"]}>
						<IconPicker icon="sun" />
					</button>
				</nav>
			</div>
		</header>
	);
};
