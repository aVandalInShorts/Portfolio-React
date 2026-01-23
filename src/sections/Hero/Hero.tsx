import { IconPicker } from "../../components/icon-picker/IconPicker";
import styles from "./Hero.module.css";



export const Hero = () => {
	return (
		<section className={styles.hero + " section"}>
			<div className={styles["hero-inner"] + " section-inner"}>
				<p className={styles.pretitle}>Hi, my name is</p>
				<h1 className={styles.name + " gradient-bg"}>
					François Vandal
				</h1>
				<h2 className={styles.title}>I am a Full-Stack Tryhard</h2>
				<p className={styles.description}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente velit illum laborum iste doloribus, rerum delectus
					voluptas consequuntur est. Iusto, blanditiis officiis neque
					eligendi quam odit laboriosam cumque doloribus. Maxime.
				</p>

				<div className={styles["btns"]}>
					<a
						href="mailto:contact@example.com"
						className="cta bigger "
					>
						View my work
					</a>
					<a href="#" className="cta bigger outline">
						<IconPicker icon="download" />
						Download CV
					</a>
				</div>

				<div className={styles.links}>
					<a href="#">
						<IconPicker icon="linkedin" />
					</a>
					<a href="#">
						<IconPicker icon="github" />
					</a>
					<a href="#">
						<IconPicker icon="mail" />
					</a>
				</div>
			</div>
			<div className={styles["animated-stuff"]}>
				<div
					className={`${styles["animated-text"]} ${styles["animated-text__first"]}`}
				>
					{"{}"}
				</div>
				<div
					className={`${styles["animated-text"]} ${styles["animated-text__second"]}`}
				>
					{"[ ]"}
				</div>
				<div
					className={`${styles["animated-text"]} ${styles["animated-text__third"]}`}
				>
					{"< />"}
				</div>
				<div
					className={`${styles["line"]} ${styles["line__first"]}`}
				></div>
				<div
					className={`${styles["line"]} ${styles["line__second"]}`}
				></div>
			</div>
		</section>
	);
};
