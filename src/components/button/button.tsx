import type { buttonRepeater } from "../../strapiProps.interface";
import { IconPicker } from "../icon-picker/IconPicker";

export const Button = (props: buttonRepeater) => {
	const isLinkExternal = (url: string) => {
		return url.startsWith("http://") || url.startsWith("https://");
	};

	return (
		<a
			href={props.URL}
			target={isLinkExternal(props.URL) ? "_blank" : "_self"}
			className={`cta bigger${props.Type === "outline" ? " outline" : ""}`}
			download={props.IsDownload}
			aria-label={props.Value}
		>
			{props.Icon && props.Icon.value && (
				<IconPicker icon={props.Icon.value} />
			)}
			{props.Value}
		</a>
	);
};
