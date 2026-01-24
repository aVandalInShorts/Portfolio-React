import type { featureProjectsContent } from "../../strapiProps.interface";
import styles from "./Projects.module.css";
import { ProjectsItem } from "./ProjectsItem/ProjectsItem";

export const Projects = (props: featureProjectsContent) => {
	return (
		<section
			className={styles.projects + " section section-alt-bg"}
			id={props.Hash}
		>
			<div className={styles.container + " section-inner"}>
				<h3 className={styles.title + " h2 gradient-bg"}>
					{props.Title}
				</h3>
				<p>{props.Description}</p>

				<div className={styles.list}>
					{props.projects?.map((project, index) => (
						<ProjectsItem key={index} {...project} />
					))}
				</div>
			</div>
		</section>
	);
};
