import {
	IconPicker,
	type IconType,
} from "../../../components/icon-picker/IconPicker";
import styles from "./Skill.module.css";

export interface SkillProps {
	name: string;
	icon: IconType;
}

export const Skill = ({ name, icon }: SkillProps) => {
	return (
		<div className={styles.skill} title={name} data-icon={icon}>
			<div className={`${styles.icon} icon-${icon}`}>
				<IconPicker icon={icon} />
			</div>
			<div className={styles.name}>{name}</div>
		</div>
	);
};
