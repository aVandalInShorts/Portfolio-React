import { IconPicker } from "../../../components/icon-picker/IconPicker";
import type {
	projectRepeater,
	skillRepeater,
} from "../../../strapiProps.interface";
import styles from "./ProjectsItem.module.css";

export const ProjectsItem = ({
	Title,
	Description,
	Image,
	ProjectURL,
	GitURL,
	skills,
}: projectRepeater) => {
	return (
		<div className={styles.item + " fade-in"}>
			<div className={styles["item-inner"]}>
				<div className={styles["items-img-ctn"]}>
					{!Image && <IconPicker icon="code" />}
					{Image && (
						<img
							src={`${import.meta.env.VITE_STRAPI_API_URL}${Image.url}`}
							alt={Title}
							className={styles.image}
							loading="lazy"
						/>
					)}
				</div>
				<div className={styles.content}>
					<h3 className={styles.title}>{Title}</h3>
					<p className={styles.description}>{Description}</p>
					{skills && skills.length > 0 && (
						<div className={styles.skills}>
							{skills
								.filter(
									(skill) => skill.Icon && skill.Icon.value,
								)
								.map((skill: skillRepeater, index: number) => (
									<div
										key={index}
										className={styles["skills-item"]}
										title={skill.Title}
									>
										<IconPicker icon={skill.Icon!.value} />
									</div>
								))}
						</div>
					)}
					<div className={styles.links}>
						{GitURL && (
							<a
								href={GitURL}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.link}
								aria-label="GitHub"
							>
								<IconPicker icon="github" />
								Code
							</a>
						)}
						{ProjectURL && (
							<a
								href={ProjectURL}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.link}
								aria-label="Demo"
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
