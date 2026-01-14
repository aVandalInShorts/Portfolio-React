import styles from "./About.module.css";

export const About = () => {
	return (
		<section className={styles.about + " section section-alt-bg"}>
			<div className={styles["about-inner"] + " section-inner"}>
				<h2 className={styles.title}>About</h2>
				<div className={styles.description}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div>
				<ul className={styles.list}>
					<li>
						<div className={`${styles["list-title"]} h3`}>
							1000 d'expérience!
						</div>
						<p>Dans le domaine du développement web.</p>
					</li>
					<li>
						<div className={`${styles["list-title"]} h3`}>
							Plein de projets!
						</div>
						<p>Dans le domaine du développement web.</p>
					</li>
					<li>
						<div className={`${styles["list-title"]} h3`}>
							1000 d'expérience!
						</div>
						<p>Dans le domaine du développement web.</p>
					</li>
				</ul>
			</div>
		</section>
	);
};
