import { Angular } from "./icons/Angular";
import { Close } from "./icons/Close";
import { Code } from "./icons/Code";
import { Csharp } from "./icons/Csharp";
import { Database } from "./icons/Database";
import { Document } from "./icons/Document";
import { Download } from "./icons/Download";
import { ExternalLink } from "./icons/ExternalLink";
import { Favicon } from "./icons/Favicon";
import { Github } from "./icons/Github";
import { Hamburger } from "./icons/Hamburger";
import { LinkedIn } from "./icons/LinkedIn";
import { Mail } from "./icons/Mail";
import { MapPin } from "./icons/MapPin";
import { Moon } from "./icons/Moon";
import { PHP } from "./icons/PHP";
import { React } from "./icons/React";
import { Strapi } from "./icons/Strapi";
import { Sun } from "./icons/Sun";
import { Vue } from "./icons/Vue";
import { Wordpress } from "./icons/Wordpress";

export type IconType =
	| "angular"
	| "close"
	| "code"
	| "csharp"
	| "database"
	| "document"
	| "download"
	| "external-link"
	| "favicon"
	| "github"
	| "hamburger"
	| "linkedin"
	| "mail"
	| "map-pin"
	| "moon"
	| "php"
	| "react"
	| "strapi"
	| "sun"
	| "vue"
	| "wordpress";

interface IconPickerProps {
	icon: IconType;
}

export const IconPicker = ({ icon }: IconPickerProps) => {
	if (icon === "angular") {
		return <Angular />;
	} else if (icon === "close") {
		return <Close />;
	} else if (icon === "code") {
		return <Code />;
	} else if (icon === "csharp") {
		return <Csharp />;
	} else if (icon === "database") {
		return <Database />;
	} else if (icon === "document") {
		return <Document />;
	} else if (icon === "download") {
		return <Download />;
	} else if (icon === "external-link") {
		return <ExternalLink />;
	} else if (icon === "favicon") {
		return <Favicon />;
	} else if (icon === "github") {
		return <Github />;
	} else if (icon === "hamburger") {
		return <Hamburger />;
	} else if (icon === "linkedin") {
		return <LinkedIn />;
	} else if (icon === "mail") {
		return <Mail />;
	} else if (icon === "map-pin") {
		return <MapPin />;
	} else if (icon === "moon") {
		return <Moon />;
	} else if (icon === "php") {
		return <PHP />;
	} else if (icon === "react") {
		return <React />;
	} else if (icon === "strapi") {
		return <Strapi />;
	} else if (icon === "sun") {
		return <Sun />;
	} else if (icon === "vue") {
		return <Vue />;
	} else if (icon === "wordpress") {
		return <Wordpress />;
	}
	return <></>;
};
