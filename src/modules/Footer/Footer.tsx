import styles from "./Footer.module.css";

interface footerProps {
	copyright: string;
}

export const Footer = ({ copyright }: footerProps) => {
	return (
		<footer className={styles.footer + " section"} role="contentinfo">
			<p className="section-inner">{copyright}</p>
		</footer>
	);
};
