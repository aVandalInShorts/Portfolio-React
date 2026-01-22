import styles from "./Loading.module.css";

export const Loading = () => {
	return (
		<div className={styles.loading}>
			<div className={styles["loading-content"]}>
				<div className={styles.throbber}></div>
				<h1 className={styles.title + " gradient-bg"}>
					François Vandal
				</h1>
			</div>
		</div>
	);
};
