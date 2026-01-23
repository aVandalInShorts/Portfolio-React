import { IconPicker } from "../../../components/icon-picker/IconPicker";
import type { skillRepeater } from "../../../strapiProps.interface";
import styles from "./Skill.module.css";

export const Skill = ({ Title, icon }: skillRepeater) => {
	return (
		<div
			className={styles.skill}
			title={Title}
			data-icon={icon?.value || ""}
		>
			{icon && (
				<div className={`${styles.icon} icon-${icon.value}`}>
					<IconPicker icon={icon.value} />
				</div>
			)}
			<div className={styles.name}>{Title}</div>
		</div>
	);
};
