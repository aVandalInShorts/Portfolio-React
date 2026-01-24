import { Button } from "../../components/button/button";
import { IconPicker } from "../../components/icon-picker/IconPicker";
import type { buttonRepeater, heroContent } from "../../strapiProps.interface";
import styles from "./Hero.module.css";

export const Hero = (props: heroContent) => {
	return (
		<section className={styles.hero + " section"}>
			<div className={styles["hero-inner"] + " section-inner"}>
				<p className={styles.pretitle}>{props.Pretitle}</p>
				<h1 className={styles.name + " gradient-bg"}>{props.Name}</h1>
				<h2 className={styles.title}>{props.Title}</h2>
				<p className={styles.description}>{props.Description}</p>

				{props.Buttons && (
					<div className={styles["btns"]}>
						{props.Buttons.map((button: buttonRepeater, index) => (
							<Button key={index} {...button} />
						))}
					</div>
				)}

				{props.socials && (
					<div className={styles.links}>
						{props.socials
							.filter((social) => social.Icon)
							.map((social) => (
								<a
									href={social.URL}
									key={social.id}
									aria-label={social.Name}
								>
									<IconPicker icon={social.Icon.value} />
								</a>
							))}
					</div>
				)}
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
