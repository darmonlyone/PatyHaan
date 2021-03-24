import React from "react";
import { mdiPlusThick } from "@mdi/js";

const PartyPlusButton = ({ onClick }) => {
	return (
		<button
			data-testid="plusbutton"
			onClick={onClick}
			className="fixed right-4 bottom-4 lg:right-6 lg:bottom-6 rounded-full bg-yellow-200 p-4 lg:p-6"
		>
			<svg className="text-white w-6 h-6" viewBox="0 0 24 24">
				<path d={mdiPlusThick} />
			</svg>
		</button>
	);
};

export default PartyPlusButton;
