import { Moon } from "./icons/Moon";
import { Sun } from "./icons/sun";

type IconType = "sun" | "moon";

interface IconPickerProps {
	icon: IconType;
}

export const IconPicker = ({ icon }: IconPickerProps) => {
	if (icon === "sun") {
		return <Sun />;
	} else if (icon === "moon") {
		return <Moon />;
	}

	return <></>;
};
