import type { technicalSkillsContent } from "../../strapiProps.interface";
import styles from "./Skills.module.css";
import { SkillsCategory } from "./SkillsCategory/SkillsCategory";

export const Skills = (props: technicalSkillsContent) => {
	return (
		<section className={styles.skills + " section"} id={props.Hash}>
			<div className={styles["skills-inner"] + " section-inner"}>
				<h3 className={styles.title + " h2 gradient-bg"}>
					{props.Title}
				</h3>

				<p className={styles.description}>{props.Description}</p>

				<div className={styles.list}>
					{props.Categories.map((category, index) => (
						<SkillsCategory
							key={index}
							Title={category.Title}
							skills={category.skills}
							FlexWidth={category.FlexWidth}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
