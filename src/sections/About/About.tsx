import type { aboutContent } from "../../strapiProps.interface";
import styles from "./About.module.css";

export const About = (props: aboutContent) => {
	return (
		<section
			className={styles.about + " section section-alt-bg"}
			id={props.Hash}
		>
			<div className={styles["about-inner"] + " section-inner"}>
				<h3 className={styles.title}>{props.title}</h3>
				<div className={styles.description}>
					{props.Text.map((block) => (
						<p key={block.type + block.children[0].text}>
							{block.children[0].text}
						</p>
					))}
				</div>
				{props.List && (
					<ul className={styles.list}>
						{props.List.map((item, index) => (
							<li key={index}>
								<div className={`${styles["list-title"]} h3`}>
									{item.Title}
								</div>
								<p>{item.Text}</p>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
};
