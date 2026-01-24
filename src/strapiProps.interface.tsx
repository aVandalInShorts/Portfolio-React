import type { IconType } from "./components/icon-picker/IconPicker";

export type locales = "en" | "fr-CA";

export interface defaultStrapiFields {
	createdAt: string;
	documentId: string;
	id: number;
	locale?: string;
	publishedAt: string;
	updatedAt: string;
}

export type contentBlock =
	| heroContent
	| aboutContent
	| technicalSkillsContent
	| featureProjectsContent
	| contactContent;

export interface appProps extends defaultStrapiFields {
	Content: contentBlock[];
	HeaderTitle: string;
	FooterCopyrights: string;
}

export interface componentBaseProps {
	__component: string;
	id: number;
	Hash?: string;
	MenuValue?: string;
}

export interface heroContent extends componentBaseProps {
	__component: "blocks.hero";
	Pretitle: string;
	Name: string;
	Title: string;
	Description: string;
	Buttons?: buttonRepeater[];
	socials?: socialsRepeater[];
}

export interface aboutContent extends componentBaseProps {
	__component: "blocks.about";
	title: string;
	Text: descriptionRepeater[];
	List: Array<{ id: number; Title: string; Text: string }>;
}

export interface skillRepeater extends defaultStrapiFields {
	Title: string;
	Icon?: iconRepeater;
}

export interface descriptionRepeater {
	type: string;
	children: Array<{ type: string; text: string }>;
}

export interface iconRepeater extends defaultStrapiFields {
	value: IconType;
}

export interface socialsRepeater extends defaultStrapiFields {
	Name: string;
	URL: string;
	Icon: iconRepeater;
}

export interface mediaField extends defaultStrapiFields {
	url: string;
}

export interface buttonRepeater {
	IsDownload?: boolean;
	Type: "normal" | "outline";
	URL: string;
	Value: string;
	id: number;
	Icon?: iconRepeater;
}

export interface projectRepeater extends defaultStrapiFields {
	Title: string;
	Description: string;
	skills?: skillRepeater[];
	GitURL?: string;
	ProjectURL?: string;
	Image?: mediaField;
}

export interface technicalSkillsContent extends componentBaseProps {
	__component: "blocks.technical-skills";
	Title: string;
	Description: string;
	Categories: technicalSkillsCategoryContent[];
}

export interface technicalSkillsCategoryContent {
	id?: number;
	Title: string;
	skills: skillRepeater[];
	FlexWidth: boolean;
}

export interface featureProjectsContent extends componentBaseProps {
	__component: "blocks.features-projects";
	Title: string;
	Description: string;
	projects?: projectRepeater[];
}

export interface contactContent extends componentBaseProps {
	__component: "blocks.contact";
	Title: string;
	Description: descriptionRepeater[];
	Buttons: buttonRepeater[];
	socials?: socialsRepeater[];
}
