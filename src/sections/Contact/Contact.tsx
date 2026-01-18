import { IconPicker } from "../../components/icon-picker/IconPicker";
import styles from "./Contact.module.css";

export const Contact = () => {
	return (
		<section className={styles.contact + " section"} id="contact">
			<div className={styles["contact-inner"] + " section-inner"}>
				<h3 className={styles.title}>Let's work together</h3>
				<p className={styles.description}>Blah blah blah</p>

				<a
					href="mailto:francois.vandal@gmail.com"
					className={styles.cta + " cta"}
				>
					<IconPicker icon="mail" />
					Email me
				</a>

				<div className={styles.other}>
					<a href="#">
						<IconPicker icon="linkedin" />
					</a>
					<a href="#">
						<IconPicker icon="mail" />
					</a>
				</div>
			</div>
		</section>
	);
};
