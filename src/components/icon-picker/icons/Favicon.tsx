export const Favicon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
			<rect width="100" height="100" rx="20" fill="#0f172a" />

			<defs>
				<linearGradient
					id="codeGradient"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="100%"
				>
					<stop
						offset="0%"
						style={{ stopColor: "#60a5fa", stopOpacity: 1 }}
					/>
					<stop
						offset="100%"
						style={{ stopColor: "#22d3ee", stopOpacity: 1 }}
					/>
				</linearGradient>
			</defs>

			<text
				x="50"
				y="65"
				font-family="Arial, sans-serif"
				font-size="50"
				font-weight="bold"
				text-anchor="middle"
				fill="url(#codeGradient)"
			>
				&lt;/&gt;
			</text>
		</svg>
	);
};
