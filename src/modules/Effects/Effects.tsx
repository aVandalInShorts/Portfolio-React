import styles from "./Effects.module.css";

export const Effects = () => {
	return (
		<div className={styles.effects + " section"}>
			<div className={styles["effects-inner"] + " section-inner"}>
				<div className={styles.first}></div>
				<div className={styles.second}></div>
				<div className={styles.third}></div>
			</div>
		</div>
	);
};
