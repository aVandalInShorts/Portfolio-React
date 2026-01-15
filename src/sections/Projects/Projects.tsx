import styles from "./Projects.module.css";
import {
	ProjectsItem,
	type ProjectsItemProps,
} from "./ProjectsItem/ProjectsItem";

export const Projects = () => {
	const projects: ProjectsItemProps[] = [
		{
			title: "Project One",
			description: "Description for project one.",
			imageUrl: "https://picsum.photos/400/300",
			liveUrl: "https://example.com/project-one",
			repoUrl: "https://github.com/example/project-one",
			skills: [
				{ name: "React", icon: "react" },
				{ name: "Strapi", icon: "strapi" },
			],
		},
		{
			title: "Project Two",
			description: "Description for project two.",
			imageUrl: "https://picsum.photos/400/300",
			liveUrl: "https://example.com/project-two",
			repoUrl: "https://github.com/example/project-two",
			skills: [
				{ name: "React", icon: "react" },
				{ name: "Strapi", icon: "strapi" },
			],
		},
		{
			title: "Project Three",
			description: "Description for project three.",
			liveUrl: "https://example.com/project-three",
			repoUrl: "https://github.com/example/project-three",
			skills: [
				{ name: "React", icon: "react" },
				{ name: "Strapi", icon: "strapi" },
			],
		},
	];

	return (
		<section
			className={styles.projects + " section section-alt-bg"}
			id="projects"
		>
			<div className={styles.container + " section-inner"}>
				<h2>Featured Projects</h2>
				<p>Projects will be updated soon. Stay tuned!</p>

				<div className={styles.list}>
					{projects.map((project, index) => (
						<ProjectsItem key={index} {...project} />
					))}
				</div>
			</div>
		</section>
	);
};
