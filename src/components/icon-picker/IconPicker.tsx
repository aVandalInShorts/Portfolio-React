import { LinkedIn } from "./icons/LinkedIn";
import { Mail } from "./icons/Mail";
import { Moon } from "./icons/Moon";
import { Sun } from "./icons/Sun";

type IconType = "sun" | "moon" | "mail" | "linkedin";

interface IconPickerProps {
	icon: IconType;
}

export const IconPicker = ({ icon }: IconPickerProps) => {
	if (icon === "sun") {
		return <Sun />;
	} else if (icon === "moon") {
		return <Moon />;
	} else if (icon === "mail") {
		return <Mail />;
	} else if (icon === "linkedin") {
		return <LinkedIn />;
	}

	return <></>;
};
