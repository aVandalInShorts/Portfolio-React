import {
	IconPicker,
	type IconType,
} from "../../../components/icon-picker/IconPicker";
import { Skill, type SkillProps } from "../../../components/Skill/Skill";
import styles from "./SkillsCategory.module.css";

export interface SkillsCategoryProps {
	title: string;
	icon: IconType;
	items: SkillProps[];
}

export const SkillsCategory = ({ title, icon, items }: SkillsCategoryProps) => {
	return (
		<div className={styles["skills-category-ctn"]}>
			<div className={styles["skills-category"]}>
				<div className={styles["title-ctn"]}>
					<div className={styles.icon}>
						<IconPicker icon={icon} />
					</div>
					<h3 className={styles.title}>{title}</h3>
				</div>
				<div className={styles.items}>
					{items.map((item, index) => (
						<Skill key={index} name={item.name} icon={item.icon} />
					))}
				</div>
			</div>
		</div>
	);
};
