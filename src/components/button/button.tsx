import type { buttonRepeater } from "../../strapiProps.interface";
import { IconPicker } from "../icon-picker/IconPicker";

export const Button = (props: buttonRepeater) => {
	return (
		<a
			href={props.URL}
			className={`cta bigger${props.Type === "outline" ? " outline" : ""}`}
			download={props.IsDownload}
		>
			{props.Icon && props.Icon.value && (
				<IconPicker icon={props.Icon.value} />
			)}
			{props.Value}
		</a>
	);
};
