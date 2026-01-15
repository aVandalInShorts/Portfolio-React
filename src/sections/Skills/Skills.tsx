import styles from "./Skills.module.css";
import {
	SkillsCategory,
	type SkillsCategoryProps,
} from "./SkillsCategory/SkillsCategory";

export const Skills = () => {
	const categories: SkillsCategoryProps[] = [
		{
			title: "Frontend",
			icon: "code",
			items: [
				{ name: "React", icon: "react" },
				{ name: "Vue", icon: "vue" },
				{ name: "Angular", icon: "angular" },
			],
		},
		{
			title: "CMS",
			icon: "document",
			items: [
				{ name: "Strapi", icon: "strapi" },
				{ name: "WordPress", icon: "wordpress" },
			],
		},
		{
			title: "Backend",
			icon: "database",
			items: [
				{ name: "PHP", icon: "php" },
				{ name: "C#", icon: "csharp" },
			],
		},
	];

	return (
		<section className={styles.skills + " section"} id="skills">
			<div className={styles["skills-inner"] + " section-inner"}>
				<h2 className={styles.title}>Technical Skills</h2>

				<div className={styles.list}>
					{categories.map((category, index) => (
						<SkillsCategory
							key={index}
							title={category.title}
							icon={category.icon}
							items={category.items}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
