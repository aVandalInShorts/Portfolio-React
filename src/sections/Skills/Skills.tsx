import type { technicalSkillsContent } from "../../strapiProps.interface";
import styles from "./Skills.module.css";
import { SkillsCategory } from "./SkillsCategory/SkillsCategory";

export const Skills = (props: technicalSkillsContent) => {
	return (
		<section className={styles.skills + " section"} id="skills">
			<div className={styles["skills-inner"] + " section-inner"}>
				<h3 className={styles.title + " h2 gradient-bg"}>
					Technical Skills
				</h3>

				<p className={styles.description}>
					A comprehensive collection of technologies and tools I use
					to build exceptional web experiences
				</p>

				<div className={styles.list}>
					{props.Categories.map((category, index) => (
						<SkillsCategory
							key={index}
							title={category.title}
							skills={category.skills}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
