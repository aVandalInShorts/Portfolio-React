import type {
	skillRepeater,
	technicalSkillsCategoryContent,
} from "../../../strapiProps.interface";
import { Skill } from "../Skill/Skill";
import styles from "./SkillsCategory.module.css";

export const SkillsCategory = ({
	Title,
	skills,
	FlexWidth,
}: technicalSkillsCategoryContent) => {
	return (
		<div className={styles["skills-category"] + " fade-in"}>
			<div className={styles["title-ctn"]}>
				<span className={styles.line}></span>
				<h3 className={styles.title}>{Title}</h3>
				<span className={styles.line}></span>
			</div>
			{skills && (
				<div
					className={`${styles["items"]} ${FlexWidth ? styles["flex-width"] : ""}`}
				>
					{skills.map((skill: skillRepeater) => (
						<Skill key={skill.id} {...skill} />
					))}
				</div>
			)}
		</div>
	);
};
