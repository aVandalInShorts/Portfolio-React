import { IconPicker } from "../../components/icon-picker/IconPicker";
import type { contactContent } from "../../strapiProps.interface";
import styles from "./Contact.module.css";

export const Contact = (props: contactContent) => {
	return (
		<section className={styles.contact + " section"} id={props.Hash}>
			<div className={styles["contact-inner"] + " section-inner"}>
				<h3 className={styles.title}>{props.Title}</h3>
				<div className={styles.description}>
					{props.Description.map((block) => (
						<p key={block.type + block.children[0].text}>
							{block.children[0].text}
						</p>
					))}
				</div>

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
