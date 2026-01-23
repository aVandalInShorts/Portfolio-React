import styles from "./Footer.module.css";

interface footerProps {
	copyright: string;
}

export const Footer = ({ copyright }: footerProps) => {
	return (
		<footer className={styles.footer + " section"}>
			<p className="section-inner">{copyright}</p>
		</footer>
	);
};
