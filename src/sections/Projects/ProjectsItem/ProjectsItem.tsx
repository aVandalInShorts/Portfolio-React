import { IconPicker } from "../../../components/icon-picker/IconPicker";
import { Skill, type SkillProps } from "../../../components/Skill/Skill";
import styles from "./ProjectsItem.module.css";

export interface ProjectsItemProps {
	title: string;
	description: string;
	imageUrl?: string;
	liveUrl?: string;
	repoUrl?: string;
	skills?: SkillProps[];
}

export const ProjectsItem = ({
	title,
	description,
	imageUrl,
	liveUrl,
	repoUrl,
	skills,
}: ProjectsItemProps) => {
	return (
		<div className={styles.item}>
			<div className={styles["item-inner"]}>
				<div className={styles["items-img-ctn"]}>
					{!imageUrl && <IconPicker icon="code" />}
					{imageUrl && (
						<img
							src={imageUrl}
							alt={title}
							className={styles.image}
						/>
					)}
				</div>
				<div className={styles.content}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.description}>{description}</p>
					{skills && skills.length > 0 && (
						<div className={styles.skills}>
							{skills.map((skill, index) => (
								<Skill key={index} {...skill} />
							))}
						</div>
					)}
					<div className={styles.links}>
						{repoUrl && (
							<a
								href={repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.link}
							>
								<IconPicker icon="github" />
								Code
							</a>
						)}
						{liveUrl && (
							<a
								href={liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.link}
							>
								<IconPicker icon="external-link" />
								Live demo
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
