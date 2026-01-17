import { useEffect, useRef, useState } from "react";
import { IconPicker } from "../../components/icon-picker/IconPicker";
import styles from "./Header.module.css";

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuBtnRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				menuRef.current?.contains(event.target as Node) ||
				menuBtnRef.current?.contains(event.target as Node)
			) {
				return false;
			}
			setIsMenuOpen(false);
		}

		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
	}, [isMenuOpen]);

	return (
		<header
			className={
				styles.header +
				" section" +
				(isMenuOpen ? ` ${styles["menu-open"]}` : "")
			}
		>
			<div className={styles["header-inner"] + " section-inner"}>
				<h1 className={styles.title + " gradient-bg"}>
					François Vandal
				</h1>
				<nav className={styles.nav}>
					<div className={styles.menu} ref={menuRef}>
						<a href="#about" onClick={() => setIsMenuOpen(false)}>
							About
						</a>
						<a href="#skills" onClick={() => setIsMenuOpen(false)}>
							Skills
						</a>
						<a
							href="#projects"
							onClick={() => setIsMenuOpen(false)}
						>
							Projects
						</a>
						<a href="#contact" onClick={() => setIsMenuOpen(false)}>
							Contact
						</a>
					</div>
					<button className={styles["lang-btn"]}>EN</button>
					<button className={styles["theme-btn"]}>
						<IconPicker icon="sun" />
					</button>
					<button
						className={styles["menu-btn"]}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						ref={menuBtnRef}
					>
						{isMenuOpen && <IconPicker icon="close" />}
						{!isMenuOpen && <IconPicker icon="hamburger" />}
					</button>
				</nav>
			</div>
		</header>
	);
};
