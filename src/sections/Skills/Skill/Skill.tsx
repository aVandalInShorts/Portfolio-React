import { IconPicker } from "../../../components/icon-picker/IconPicker";
import type { skillRepeater } from "../../../strapiProps.interface";
import styles from "./Skill.module.css";

export const Skill = ({ Title, Icon }: skillRepeater) => {
	return (
		<div
			className={styles.skill}
			title={Title}
			data-icon={Icon?.value || ""}
		>
			{Icon && (
				<div className={`${styles.icon} icon-${Icon.value}`}>
					<IconPicker icon={Icon.value} />
				</div>
			)}
			<div className={styles.name}>{Title}</div>
		</div>
	);
};
