import { Button } from "../../components/button/button";
import { IconPicker } from "../../components/icon-picker/IconPicker";
import type {
	buttonRepeater,
	contactContent,
} from "../../strapiProps.interface";
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

				{props.Buttons && (
					<div className={styles["btns"]}>
						{props.Buttons.map((button: buttonRepeater, index) => (
							<Button key={index} {...button} />
						))}
					</div>
				)}

				{props.socials && (
					<div className={styles.other}>
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
		</section>
	);
};
