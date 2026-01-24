import { useEffect, useRef, useState } from "react";
import { IconPicker } from "../../components/icon-picker/IconPicker";
import styles from "./Header.module.css";
import type { locales } from "../../strapiProps.interface";

export interface headerProps {
	title?: string;
	nav: navProps[];
	currLocale: locales;
	toggleLocale: () => void;
}

export interface navProps {
	label: string;
	hash: string;
}

export const Header = (props: headerProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [themeState, setThemeState] = useState<"light" | "dark" | null>(null);
	const menuBtnRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	function getSystemPrefersDark() {
		return (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		);
	}

	function getActiveColorScheme() {
		const stored = document
			.querySelector("html")
			?.getAttribute("data-theme");
		if (stored === "light" || stored === "dark") return stored;
		return getSystemPrefersDark() ? "dark" : "light";
	}

	function toggleColorTheme() {
		setThemeState(getActiveColorScheme() === "dark" ? "light" : "dark");
	}

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

	useEffect(() => {
		if (themeState) {
			document
				.querySelector("html")
				?.setAttribute("data-theme", themeState);
		}
	}, [themeState]);

	console.log("props.nav", props.nav);

	return (
		<header className={styles.header} role="banner">
			<div
				className={
					styles["header-inner"] +
					" section" +
					(isMenuOpen ? ` ${styles["menu-open"]}` : "")
				}
			>
				<div className={styles["header-content"] + " section-inner"}>
					<h1 className={styles.title + " gradient-bg"}>
						{props.title}
					</h1>
					<nav className={styles.nav} role="navigation">
						<div className={styles.menu} ref={menuRef}>
							{props.nav
								?.filter(
									(item) =>
										item.hash !== "" &&
										item.hash !== null &&
										item.label !== "" &&
										item.label !== null,
								)
								.map((item, index) => {
									return (
										<a
											href={`#${item.hash}`}
											onClick={(e) => {
												e.preventDefault();
												setIsMenuOpen(false);
												document
													.getElementById(item.hash)
													?.scrollIntoView({
														behavior: "smooth",
													});
											}}
											key={index}
											aria-label={item.label}
										>
											{item.label}
										</a>
									);
								})}
						</div>
						<button
							className={styles["theme-btn"]}
							onClick={toggleColorTheme}
							aria-label={
								props.currLocale === "en"
									? "Toggle theme"
									: "Changer le thème"
							}
						>
							<IconPicker
								icon={themeState === "dark" ? "sun" : "moon"}
							/>
						</button>
						<button
							className={styles["lang-btn"]}
							onClick={props.toggleLocale}
							aria-label={
								props.currLocale === "en"
									? "Switch language to French"
									: "Changer la langue en anglais"
							}
						>
							{props.currLocale === "en" ? "FR" : "EN"}
						</button>
						<button
							className={styles["menu-btn"]}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							ref={menuBtnRef}
							aria-label={
								isMenuOpen
									? props.currLocale === "en"
										? "Close menu"
										: "Fermer le menu"
									: props.currLocale === "en"
										? "Open menu"
										: "Ouvrir le menu"
							}
						>
							{isMenuOpen && <IconPicker icon="close" />}
							{!isMenuOpen && <IconPicker icon="hamburger" />}
						</button>
					</nav>
				</div>
			</div>
		</header>
	);
};
