import type { featureProjectsContent } from "../../strapiProps.interface";
import styles from "./Projects.module.css";
import { ProjectsItem } from "./ProjectsItem/ProjectsItem";

export const Projects = (props: featureProjectsContent) => {
	return (
		<section
			className={styles.projects + " section section-alt-bg"}
			id="projects"
		>
			<div className={styles.container + " section-inner"}>
				<h3 className={styles.title + " h2 gradient-bg"}>
					Featured Projects
				</h3>
				<p>Projects will be updated soon. Stay tuned!</p>

				<div className={styles.list}>
					{props.Projects?.map((project, index) => (
						<ProjectsItem key={index} {...project} />
					))}
				</div>
			</div>
		</section>
	);
};
