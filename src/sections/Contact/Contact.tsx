import { IconPicker } from "../../components/icon-picker/IconPicker";
import styles from "./Contact.module.css";

export const Contact = () => {
	return (
		<section className={styles.contact + " section"} id="contact">
			<div className={styles["contact-inner"] + " section-inner"}>
				<h2>Contact</h2>
				<p>Blah blah blah</p>

				<a href="mailto:francois.vandal@gmail.com" className="cta">
					<IconPicker icon="mail" />
					Email me
				</a>

				<div className={styles.other}>
					<a href="#">
						<IconPicker icon="linkedin" />
					</a>
				</div>
			</div>
		</section>
	);
};
