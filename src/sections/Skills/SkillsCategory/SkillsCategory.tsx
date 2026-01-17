import type { IconType } from "../../../components/icon-picker/IconPicker";
import { Skill, type SkillProps } from "../Skill/Skill";
import styles from "./SkillsCategory.module.css";

export interface SkillsCategoryProps {
	title: string;
	icon: IconType;
	items: SkillProps[];
}

export const SkillsCategory = ({ title, items }: SkillsCategoryProps) => {
	return (
		<div className={styles["skills-category"] + " fade-in"}>
			<div className={styles["title-ctn"]}>
				<span className={styles.line}></span>
				<h3 className={styles.title}>{title}</h3>
				<span className={styles.line}></span>
			</div>
			<div className={styles.items}>
				{items.map((item, index) => (
					<Skill key={index} name={item.name} icon={item.icon} />
				))}
			</div>
		</div>
	);
};
